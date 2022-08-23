import{e as J,s as it,z as at,l as st,a as B,o as F,c as j,F as ct,f as lt,g as q,w as A,i as M,C as ft,d as $,t as dt,m as pt,M as yt,N as mt,r as V,b as z,O as vt,q as R,E as H}from"./index.3ab26249.js";import{E as bt,o as ht}from"./form.d7b94745.js";const gt={class:"main-tools"},St=J({__name:"headTools",props:{type:{default:"1"}},emits:["click"],setup(w,{emit:k}){const _=w,g=it().query.type==="search",y=at({list:[{icon:"del",label:"\u6E05\u7A7A"},{icon:"eye",label:"\u9884\u89C8",disabled:_.type==="2"},{icon:"json",label:"\u751F\u6210\u811A\u672C\u9884\u89C8"},{icon:"vue",label:"\u5BFC\u51FAvue\u6587\u4EF6",disabled:g},{icon:"import",label:"\u5BFC\u5165Json"},{icon:"save",label:"\u4FDD\u5B58"}]}),f=st(()=>y.list.filter(s=>!s.disabled)),t=s=>{k("click",s)};return(s,r)=>{const o=B("el-button");return F(),j("div",gt,[(F(!0),j(ct,null,lt(pt(f),l=>(F(),q(o,{link:"",type:"primary",onClick:u=>t(l.icon),key:l.icon},{default:A(()=>[M("i",{class:ft(["icon-"+l.icon])},null,2),$(dt(l.label),1)]),_:2},1032,["onClick"]))),128))])}}});var Y={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(w,k){(function(h,g){w.exports=g()})(yt,function(){return function(){var _={686:function(y,f,t){t.d(f,{default:function(){return ut}});var s=t(279),r=t.n(s),o=t(370),l=t.n(o),u=t(817),v=t.n(u);function d(c){try{return document.execCommand(c)}catch{return!1}}var b=function(n){var e=v()(n);return d("cut"),e},m=b;function C(c){var n=document.documentElement.getAttribute("dir")==="rtl",e=document.createElement("textarea");e.style.fontSize="12pt",e.style.border="0",e.style.padding="0",e.style.margin="0",e.style.position="absolute",e.style[n?"right":"left"]="-9999px";var i=window.pageYOffset||document.documentElement.scrollTop;return e.style.top="".concat(i,"px"),e.setAttribute("readonly",""),e.value=c,e}var P=function(n,e){var i=C(n);e.container.appendChild(i);var a=v()(i);return d("copy"),i.remove(),a},G=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},i="";return typeof n=="string"?i=P(n,e):n instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(n==null?void 0:n.type)?i=P(n.value,e):(i=v()(n),d("copy")),i},O=G;function T(c){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?T=function(e){return typeof e}:T=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(c)}var X=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.action,i=e===void 0?"copy":e,a=n.container,p=n.target,E=n.text;if(i!=="copy"&&i!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(p!==void 0)if(p&&T(p)==="object"&&p.nodeType===1){if(i==="copy"&&p.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(i==="cut"&&(p.hasAttribute("readonly")||p.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(E)return O(E,{container:a});if(p)return i==="cut"?m(p):O(p,{container:a})},K=X;function x(c){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?x=function(e){return typeof e}:x=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(c)}function Q(c,n){if(!(c instanceof n))throw new TypeError("Cannot call a class as a function")}function U(c,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(c,i.key,i)}}function W(c,n,e){return n&&U(c.prototype,n),e&&U(c,e),c}function Z(c,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");c.prototype=Object.create(n&&n.prototype,{constructor:{value:c,writable:!0,configurable:!0}}),n&&L(c,n)}function L(c,n){return L=Object.setPrototypeOf||function(i,a){return i.__proto__=a,i},L(c,n)}function tt(c){var n=ot();return function(){var i=S(c),a;if(n){var p=S(this).constructor;a=Reflect.construct(i,arguments,p)}else a=i.apply(this,arguments);return et(this,a)}}function et(c,n){return n&&(x(n)==="object"||typeof n=="function")?n:nt(c)}function nt(c){if(c===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return c}function ot(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function S(c){return S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},S(c)}function N(c,n){var e="data-clipboard-".concat(c);if(!!n.hasAttribute(e))return n.getAttribute(e)}var rt=function(c){Z(e,c);var n=tt(e);function e(i,a){var p;return Q(this,e),p=n.call(this),p.resolveOptions(a),p.listenClick(i),p}return W(e,[{key:"resolveOptions",value:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof a.action=="function"?a.action:this.defaultAction,this.target=typeof a.target=="function"?a.target:this.defaultTarget,this.text=typeof a.text=="function"?a.text:this.defaultText,this.container=x(a.container)==="object"?a.container:document.body}},{key:"listenClick",value:function(a){var p=this;this.listener=l()(a,"click",function(E){return p.onClick(E)})}},{key:"onClick",value:function(a){var p=a.delegateTarget||a.currentTarget,E=this.action(p)||"copy",D=K({action:E,container:this.container,target:this.target(p),text:this.text(p)});this.emit(D?"success":"error",{action:E,text:D,trigger:p,clearSelection:function(){p&&p.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(a){return N("action",a)}},{key:"defaultTarget",value:function(a){var p=N("target",a);if(p)return document.querySelector(p)}},{key:"defaultText",value:function(a){return N("text",a)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(a){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return O(a,p)}},{key:"cut",value:function(a){return m(a)}},{key:"isSupported",value:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],p=typeof a=="string"?[a]:a,E=!!document.queryCommandSupported;return p.forEach(function(D){E=E&&!!document.queryCommandSupported(D)}),E}}]),e}(r()),ut=rt},828:function(y){var f=9;if(typeof Element<"u"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function s(r,o){for(;r&&r.nodeType!==f;){if(typeof r.matches=="function"&&r.matches(o))return r;r=r.parentNode}}y.exports=s},438:function(y,f,t){var s=t(828);function r(u,v,d,b,m){var C=l.apply(this,arguments);return u.addEventListener(d,C,m),{destroy:function(){u.removeEventListener(d,C,m)}}}function o(u,v,d,b,m){return typeof u.addEventListener=="function"?r.apply(null,arguments):typeof d=="function"?r.bind(null,document).apply(null,arguments):(typeof u=="string"&&(u=document.querySelectorAll(u)),Array.prototype.map.call(u,function(C){return r(C,v,d,b,m)}))}function l(u,v,d,b){return function(m){m.delegateTarget=s(m.target,v),m.delegateTarget&&b.call(u,m)}}y.exports=o},879:function(y,f){f.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},f.nodeList=function(t){var s=Object.prototype.toString.call(t);return t!==void 0&&(s==="[object NodeList]"||s==="[object HTMLCollection]")&&"length"in t&&(t.length===0||f.node(t[0]))},f.string=function(t){return typeof t=="string"||t instanceof String},f.fn=function(t){var s=Object.prototype.toString.call(t);return s==="[object Function]"}},370:function(y,f,t){var s=t(879),r=t(438);function o(d,b,m){if(!d&&!b&&!m)throw new Error("Missing required arguments");if(!s.string(b))throw new TypeError("Second argument must be a String");if(!s.fn(m))throw new TypeError("Third argument must be a Function");if(s.node(d))return l(d,b,m);if(s.nodeList(d))return u(d,b,m);if(s.string(d))return v(d,b,m);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function l(d,b,m){return d.addEventListener(b,m),{destroy:function(){d.removeEventListener(b,m)}}}function u(d,b,m){return Array.prototype.forEach.call(d,function(C){C.addEventListener(b,m)}),{destroy:function(){Array.prototype.forEach.call(d,function(C){C.removeEventListener(b,m)})}}}function v(d,b,m){return r(document.body,d,b,m)}y.exports=o},817:function(y){function f(t){var s;if(t.nodeName==="SELECT")t.focus(),s=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var r=t.hasAttribute("readonly");r||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),r||t.removeAttribute("readonly"),s=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),l=document.createRange();l.selectNodeContents(t),o.removeAllRanges(),o.addRange(l),s=o.toString()}return s}y.exports=f},279:function(y){function f(){}f.prototype={on:function(t,s,r){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:s,ctx:r}),this},once:function(t,s,r){var o=this;function l(){o.off(t,l),s.apply(r,arguments)}return l._=s,this.on(t,l,r)},emit:function(t){var s=[].slice.call(arguments,1),r=((this.e||(this.e={}))[t]||[]).slice(),o=0,l=r.length;for(o;o<l;o++)r[o].fn.apply(r[o].ctx,s);return this},off:function(t,s){var r=this.e||(this.e={}),o=r[t],l=[];if(o&&s)for(var u=0,v=o.length;u<v;u++)o[u].fn!==s&&o[u].fn._!==s&&l.push(o[u]);return l.length?r[t]=l:delete r[t],this}},y.exports=f,y.exports.TinyEmitter=f}},h={};function g(y){if(h[y])return h[y].exports;var f=h[y]={exports:{}};return _[y](f,f.exports,g),f.exports}return function(){g.n=function(y){var f=y&&y.__esModule?function(){return y.default}:function(){return y};return g.d(f,{a:f}),f}}(),function(){g.d=function(y,f){for(var t in f)g.o(f,t)&&!g.o(y,t)&&Object.defineProperty(y,t,{enumerable:!0,get:f[t]})}}(),function(){g.o=function(y,f){return Object.prototype.hasOwnProperty.call(y,f)}}(),g(686)}().default})})(Y);const _t=mt(Y.exports),I=(w,k,_)=>{k=k||"editJson",_=_||bt;const h=ace.edit(k);return h.setOptions({enableBasicAutocompletion:!0,enableSnippets:!0,enableLiveAutocompletion:!0}),h.setFontSize(14),h.setShowPrintMargin(!1),h.session.setMode("ace/mode/"+_),h.setTheme("ace/theme/tomorrow_night"),h.setValue(w),h},Et=M("div",{id:"editJsonCopy"},null,-1),Ct={class:"dialog-footer"},kt=$(" \u590D\u5236\u6570\u636E "),wt=$(" \u5BFC\u51FA\u4EE3\u7801 "),Dt=J({__name:"vueFile",setup(w,{expose:k}){const _=V(!1),h=V(),g=r=>{let o="",l="";return r&&r.list.forEach(u=>{var v;(v=u.customRules)!=null&&v.length&&u.customRules.forEach(d=>{d.type==="methods"&&d.methods&&(o+=`// todo ${u.item.label}\u6821\u9A8C\u65B9\u6CD5
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
`)}),{rulesMethods:o,sourceFun:l}},y=r=>{var m;_.value=!0;const o=g(r),l=(m=r.submitBtn)==null?void 0:m.confirm;let u="",v="",d="";l||(u='    <el-button type="primary" @click="submit">\u63D0\u4EA4</el-button>',v=`    const submit = () => {
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
    const formData = ref(${ht(r)})
    ${o.rulesMethods}
    ${o.sourceFun}
    // \u8868\u5355\u63A7\u4EF6\u503C\u6539\u53D8\u4E8B\u4EF6
    /*provide('${vt}', ({key, value}) => {
      console.log(key)
      console.log(value)
    })*/
    ${l?"":"const submitUrl = ref(false) // \u8868\u5355\u63D0\u4EA4url"}
    const formName = ref()
    ${v}
    <\/script>`;R(()=>{h.value=I(b,"editJsonCopy","html")})},f=r=>{_.value=!0;const o=`<template>
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
<\/script>`;R(()=>{h.value=I(o,"editJsonCopy","html")})},t=r=>{R(()=>{const o=new _t(r.target,{text:()=>h.value.getValue()});o.on("success",function(){H({message:"\u590D\u5236\u6210\u529F\uFF01",type:"success"}),o.destroy()}),o.on("error",function(){H.error("\u590D\u5236\u5931\u8D25"),o.destroy()}),o.onClick(r)})},s=()=>{var v;const r="data:text/csv;charset=utf-8,"+((v=h.value)==null?void 0:v.getValue()),o=new Date().getTime()+".vue",l=encodeURI(r),u=document.createElement("a");u.setAttribute("href",l),u.setAttribute("download",o),u.click()};return k({open:y,openTable:f}),(r,o)=>{const l=B("el-button"),u=B("el-dialog");return F(),q(u,{modelValue:_.value,"onUpdate:modelValue":o[0]||(o[0]=v=>_.value=v),title:"\u5BFC\u51FAvue\u6587\u4EF6","custom-class":"export-dialog",width:"80%"},{footer:A(()=>[M("div",Ct,[z(l,{size:"small",type:"primary",onClick:t},{default:A(()=>[kt]),_:1}),z(l,{type:"primary",size:"small",onClick:s},{default:A(()=>[wt]),_:1})])]),default:A(()=>[Et]),_:1},8,["modelValue"])}}});export{St as _,Dt as a,I as b};
