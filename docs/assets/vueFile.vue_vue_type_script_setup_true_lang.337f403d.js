import{e as J,s as at,A as ct,l as st,a as P,o as O,c as H,F as lt,f as ft,g as Y,w,i as M,C as dt,d as U,t as pt,m as yt,V as vt,W as mt,r as q,b as z,P as B,X as ht,q as F,R as $,E as I}from"./index.f2a8992f.js";const bt={class:"main-tools"},At=J({__name:"headTools",props:{type:{default:"1"}},emits:["click"],setup(x,{emit:A}){const E=x,b=at().query.type==="search",v=ct({list:[{icon:"del",label:"\u6E05\u7A7A"},{icon:"eye",label:"\u9884\u89C8",disabled:E.type==="2"},{icon:"json",label:"\u751F\u6210\u811A\u672C\u9884\u89C8"},{icon:"vue",label:"\u5BFC\u51FAvue\u6587\u4EF6",disabled:b},{icon:"save",label:"\u4FDD\u5B58"}]}),l=st(()=>v.list.filter(a=>!a.disabled)),t=a=>{A("click",a)};return(a,f)=>{const o=P("el-button");return O(),H("div",bt,[(O(!0),H(lt,null,ft(yt(l),r=>(O(),Y(o,{link:"",type:"primary",onClick:d=>t(r.icon),key:r.icon},{default:w(()=>[M("i",{class:dt(["icon-"+r.icon])},null,2),U(pt(r.label),1)]),_:2},1032,["onClick"]))),128))])}}});var X={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(x,A){(function(g,b){x.exports=b()})(vt,function(){return function(){var E={686:function(v,l,t){t.d(l,{default:function(){return it}});var a=t(279),f=t.n(a),o=t(370),r=t.n(o),d=t(817),p=t.n(d);function s(c){try{return document.execCommand(c)}catch{return!1}}var h=function(n){var e=p()(n);return s("cut"),e},m=h;function C(c){var n=document.documentElement.getAttribute("dir")==="rtl",e=document.createElement("textarea");e.style.fontSize="12pt",e.style.border="0",e.style.padding="0",e.style.margin="0",e.style.position="absolute",e.style[n?"right":"left"]="-9999px";var u=window.pageYOffset||document.documentElement.scrollTop;return e.style.top="".concat(u,"px"),e.setAttribute("readonly",""),e.value=c,e}var j=function(n,e){var u=C(n);e.container.appendChild(u);var i=p()(u);return s("copy"),u.remove(),i},G=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},u="";return typeof n=="string"?u=j(n,e):n instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(n==null?void 0:n.type)?u=j(n.value,e):(u=p()(n),s("copy")),u},L=G;function T(c){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?T=function(e){return typeof e}:T=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(c)}var W=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.action,u=e===void 0?"copy":e,i=n.container,y=n.target,_=n.text;if(u!=="copy"&&u!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(y!==void 0)if(y&&T(y)==="object"&&y.nodeType===1){if(u==="copy"&&y.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(u==="cut"&&(y.hasAttribute("readonly")||y.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(_)return L(_,{container:i});if(y)return u==="cut"?m(y):L(y,{container:i})},K=W;function k(c){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?k=function(e){return typeof e}:k=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(c)}function Q(c,n){if(!(c instanceof n))throw new TypeError("Cannot call a class as a function")}function V(c,n){for(var e=0;e<n.length;e++){var u=n[e];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(c,u.key,u)}}function Z(c,n,e){return n&&V(c.prototype,n),e&&V(c,e),c}function tt(c,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");c.prototype=Object.create(n&&n.prototype,{constructor:{value:c,writable:!0,configurable:!0}}),n&&R(c,n)}function R(c,n){return R=Object.setPrototypeOf||function(u,i){return u.__proto__=i,u},R(c,n)}function et(c){var n=rt();return function(){var u=S(c),i;if(n){var y=S(this).constructor;i=Reflect.construct(u,arguments,y)}else i=u.apply(this,arguments);return nt(this,i)}}function nt(c,n){return n&&(k(n)==="object"||typeof n=="function")?n:ot(c)}function ot(c){if(c===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return c}function rt(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function S(c){return S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},S(c)}function N(c,n){var e="data-clipboard-".concat(c);if(!!n.hasAttribute(e))return n.getAttribute(e)}var ut=function(c){tt(e,c);var n=et(e);function e(u,i){var y;return Q(this,e),y=n.call(this),y.resolveOptions(i),y.listenClick(u),y}return Z(e,[{key:"resolveOptions",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof i.action=="function"?i.action:this.defaultAction,this.target=typeof i.target=="function"?i.target:this.defaultTarget,this.text=typeof i.text=="function"?i.text:this.defaultText,this.container=k(i.container)==="object"?i.container:document.body}},{key:"listenClick",value:function(i){var y=this;this.listener=r()(i,"click",function(_){return y.onClick(_)})}},{key:"onClick",value:function(i){var y=i.delegateTarget||i.currentTarget,_=this.action(y)||"copy",D=K({action:_,container:this.container,target:this.target(y),text:this.text(y)});this.emit(D?"success":"error",{action:_,text:D,trigger:y,clearSelection:function(){y&&y.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(i){return N("action",i)}},{key:"defaultTarget",value:function(i){var y=N("target",i);if(y)return document.querySelector(y)}},{key:"defaultText",value:function(i){return N("text",i)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(i){var y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return L(i,y)}},{key:"cut",value:function(i){return m(i)}},{key:"isSupported",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],y=typeof i=="string"?[i]:i,_=!!document.queryCommandSupported;return y.forEach(function(D){_=_&&!!document.queryCommandSupported(D)}),_}}]),e}(f()),it=ut},828:function(v){var l=9;if(typeof Element<"u"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function a(f,o){for(;f&&f.nodeType!==l;){if(typeof f.matches=="function"&&f.matches(o))return f;f=f.parentNode}}v.exports=a},438:function(v,l,t){var a=t(828);function f(d,p,s,h,m){var C=r.apply(this,arguments);return d.addEventListener(s,C,m),{destroy:function(){d.removeEventListener(s,C,m)}}}function o(d,p,s,h,m){return typeof d.addEventListener=="function"?f.apply(null,arguments):typeof s=="function"?f.bind(null,document).apply(null,arguments):(typeof d=="string"&&(d=document.querySelectorAll(d)),Array.prototype.map.call(d,function(C){return f(C,p,s,h,m)}))}function r(d,p,s,h){return function(m){m.delegateTarget=a(m.target,p),m.delegateTarget&&h.call(d,m)}}v.exports=o},879:function(v,l){l.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},l.nodeList=function(t){var a=Object.prototype.toString.call(t);return t!==void 0&&(a==="[object NodeList]"||a==="[object HTMLCollection]")&&"length"in t&&(t.length===0||l.node(t[0]))},l.string=function(t){return typeof t=="string"||t instanceof String},l.fn=function(t){var a=Object.prototype.toString.call(t);return a==="[object Function]"}},370:function(v,l,t){var a=t(879),f=t(438);function o(s,h,m){if(!s&&!h&&!m)throw new Error("Missing required arguments");if(!a.string(h))throw new TypeError("Second argument must be a String");if(!a.fn(m))throw new TypeError("Third argument must be a Function");if(a.node(s))return r(s,h,m);if(a.nodeList(s))return d(s,h,m);if(a.string(s))return p(s,h,m);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function r(s,h,m){return s.addEventListener(h,m),{destroy:function(){s.removeEventListener(h,m)}}}function d(s,h,m){return Array.prototype.forEach.call(s,function(C){C.addEventListener(h,m)}),{destroy:function(){Array.prototype.forEach.call(s,function(C){C.removeEventListener(h,m)})}}}function p(s,h,m){return f(document.body,s,h,m)}v.exports=o},817:function(v){function l(t){var a;if(t.nodeName==="SELECT")t.focus(),a=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var f=t.hasAttribute("readonly");f||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),f||t.removeAttribute("readonly"),a=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),r=document.createRange();r.selectNodeContents(t),o.removeAllRanges(),o.addRange(r),a=o.toString()}return a}v.exports=l},279:function(v){function l(){}l.prototype={on:function(t,a,f){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:a,ctx:f}),this},once:function(t,a,f){var o=this;function r(){o.off(t,r),a.apply(f,arguments)}return r._=a,this.on(t,r,f)},emit:function(t){var a=[].slice.call(arguments,1),f=((this.e||(this.e={}))[t]||[]).slice(),o=0,r=f.length;for(o;o<r;o++)f[o].fn.apply(f[o].ctx,a);return this},off:function(t,a){var f=this.e||(this.e={}),o=f[t],r=[];if(o&&a)for(var d=0,p=o.length;d<p;d++)o[d].fn!==a&&o[d].fn._!==a&&r.push(o[d]);return r.length?f[t]=r:delete f[t],this}},v.exports=l,v.exports.TinyEmitter=l}},g={};function b(v){if(g[v])return g[v].exports;var l=g[v]={exports:{}};return E[v](l,l.exports,b),l.exports}return function(){b.n=function(v){var l=v&&v.__esModule?function(){return v.default}:function(){return v};return b.d(l,{a:l}),l}}(),function(){b.d=function(v,l){for(var t in l)b.o(l,t)&&!b.o(v,t)&&Object.defineProperty(v,t,{enumerable:!0,get:l[t]})}}(),function(){b.o=function(v,l){return Object.prototype.hasOwnProperty.call(v,l)}}(),b(686)}().default})})(X);const gt=mt(X.exports),_t=M("div",{id:"editJsonCopy"},null,-1),Et={class:"dialog-footer"},Ct=U(" \u590D\u5236\u6570\u636E "),kt=U(" \u5BFC\u51FA\u4EE3\u7801 "),Tt=J({__name:"vueFile",setup(x,{expose:A}){const E=q(!1),g=q(),b=o=>{let r="",d="";return o&&o.list.forEach(p=>{var s;(s=p.customRules)!=null&&s.length&&p.customRules.forEach(h=>{h.type==="methods"&&h.methods&&(r+=`// todo ${p.item.label}\u6821\u9A8C\u65B9\u6CD5
  provide("${h.methods}", (rule, value, callback) => {
    if (value === '') {
      callback(new Error('Please input the password again'))
    } else if (value !== 'abc') {
      callback(new Error("Two inputs don't match!"))
    } else {
      callback()
    }
  })`)}),p.config&&p.config.type==="async"&&p.config.source===1&&p.config.sourceFun&&(d+=`    // todo ${p.item.label}\u83B7\u53D6\u9009\u9879\u503C
`,d+=`    const ${p.name}Option = ref([{label: "\u9009\u98791", value: '1'}])
`,d+=`    provide("${p.config.sourceFun}", ${p.name}Option)
`)}),{rulesMethods:r,sourceFun:d}},v=o=>{var m;E.value=!0;const r=b(o),d=(m=o.config)==null?void 0:m.confirm;let p="",s="";d||(p='    <el-button type="primary" @click="submit">\u63D0\u4EA4</el-button>',s=`    const submit = () => {
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
    }`);const h=`<template>
  <div>
    <ak-form :formData="formData" ref="formName" :requestUrl="requestUrl" :submitUrl="submitUrl">
    </ak-form>
    ${p}
  </div>
</template>
<script setup>
    import { ref } from 'vue'
    const formData = ref(${B(o)})
    ${r.rulesMethods}
    ${r.sourceFun}
    // \u8868\u5355\u63A7\u4EF6\u503C\u6539\u53D8\u4E8B\u4EF6
    /*provide('${ht}', ({key, value}) => {
      console.log(key)
      console.log(value)
    })*/
    const submitUrl = ref(false) // \u8868\u5355\u63D0\u4EA4url
    const requestUrl = ref(false) // \u83B7\u53D6\u8868\u5355\u521D\u59CB\u6570\u636E
    const formName = ref()
    ${s}
    <\/script>`;F(()=>{g.value=$(h,"editJsonCopy","html")})},l=o=>{E.value=!0;const r=`<template>
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
    const tableData = ref(${B(o)})
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
<\/script>`;F(()=>{g.value=$(r,"editJsonCopy","html")})},t=o=>{F(()=>{const r=new gt(o.target,{text:()=>g.value.getValue()});r.on("success",function(){I({message:"\u590D\u5236\u6210\u529F\uFF01",type:"success"}),r.destroy()}),r.on("error",function(){I.error("\u590D\u5236\u5931\u8D25"),r.destroy()}),r.onClick(o)})},a=o=>{E.value=!0;const r=`<template>
  <div>
    <ak-echarts :data="data"></ak-echarts>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const data = ref(${B(o)})
<\/script>
`;F(()=>{g.value=$(r,"editJsonCopy","html")})},f=()=>{var s;const o="data:text/csv;charset=utf-8,"+((s=g.value)==null?void 0:s.getValue()),r=new Date().getTime()+".vue",d=encodeURI(o),p=document.createElement("a");p.setAttribute("href",d),p.setAttribute("download",r),p.click()};return A({open:v,openTable:l,openEcharts:a}),(o,r)=>{const d=P("el-button"),p=P("el-dialog");return O(),Y(p,{modelValue:E.value,"onUpdate:modelValue":r[0]||(r[0]=s=>E.value=s),title:"\u5BFC\u51FAvue\u6587\u4EF6","custom-class":"export-dialog",width:"80%"},{footer:w(()=>[M("div",Et,[z(d,{size:"small",type:"primary",onClick:t},{default:w(()=>[Ct]),_:1}),z(d,{type:"primary",size:"small",onClick:f},{default:w(()=>[kt]),_:1})])]),default:w(()=>[_t]),_:1},8,["modelValue"])}}});export{At as _,Tt as a};
