var st=Object.defineProperty,ct=Object.defineProperties;var lt=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var ut=Object.prototype.hasOwnProperty,ft=Object.prototype.propertyIsEnumerable;var H=(d,m,v)=>m in d?st(d,m,{enumerable:!0,configurable:!0,writable:!0,value:v}):d[m]=v,L=(d,m)=>{for(var v in m||(m={}))ut.call(m,v)&&H(d,v,m[v]);if(j)for(var v of j(m))ft.call(m,v)&&H(d,v,m[v]);return d},F=(d,m)=>ct(d,lt(m));import{S as dt,p as I,j as pt,q as J,r as N,o as A,y as V,F as ht,B as mt,c as Y,w,h as P,K as yt,v as $,x as vt,X as bt,Y as gt,a as U,P as D,E as z}from"./vendor.df12524c.js";import{_ as q}from"./index.2f3756f1.js";import{E as kt,o as _t}from"./index.6c162138.js";const Et={name:"headTools",props:{type:{type:String,default:"1"}},components:{},emits:["click"],setup(d,{emit:m}){const b=dt().query.type==="search",_=I({list:[{icon:"del",label:"\u6E05\u7A7A"},{icon:"eye",label:"\u9884\u89C8",disabled:d.type==="2"},{icon:"json",label:"\u751F\u6210\u811A\u672C\u9884\u89C8"},{icon:"vue",label:"\u5BFC\u51FAvue\u6587\u4EF6",disabled:b},{icon:"import",label:"\u5BFC\u5165Json"},{icon:"save",label:"\u4FDD\u5B58"}]}),l=pt(()=>_.list.filter(t=>!t.disabled)),o=t=>{m("click",t)};return F(L({},J(_)),{btnClick:o,btnList:l})}},xt={class:"main-tools"};function St(d,m,v,b,_,l){const o=N("el-button");return A(),V("div",xt,[(A(!0),V(ht,null,mt(b.btnList,t=>(A(),Y(o,{type:"text",onClick:i=>b.btnClick(t.icon),key:t.icon},{default:w(()=>[P("i",{class:yt(["icon-"+t.icon])},null,2),$(vt(t.label),1)]),_:2},1032,["onClick"]))),128))])}var $t=q(Et,[["render",St]]),X={exports:{}};/*!
 * clipboard.js v2.0.8
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(d,m){(function(b,_){d.exports=_()})(bt,function(){return function(){var v={134:function(l,o,t){t.d(o,{default:function(){return it}});var i=t(279),a=t.n(i),u=t(370),s=t.n(u),y=t(817),E=t.n(y);function p(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?p=function(e){return typeof e}:p=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(r)}function g(r,n){if(!(r instanceof n))throw new TypeError("Cannot call a class as a function")}function h(r,n){for(var e=0;e<n.length;e++){var c=n[e];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(r,c.key,c)}}function x(r,n,e){return n&&h(r.prototype,n),e&&h(r,e),r}var G=function(){function r(n){g(this,r),this.resolveOptions(n),this.initSelection()}return x(r,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"createFakeElement",value:function(){var e=document.documentElement.getAttribute("dir")==="rtl";this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var c=window.pageYOffset||document.documentElement.scrollTop;return this.fakeElem.style.top="".concat(c,"px"),this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.fakeElem}},{key:"selectFake",value:function(){var e=this,c=this.createFakeElement();this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.container.appendChild(c),this.selectedText=E()(c),this.copyText(),this.removeFake()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=E()(this.target),this.copyText()}},{key:"copyText",value:function(){var e;try{e=document.execCommand(this.action)}catch{e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"copy";if(this._action=e,this._action!=="copy"&&this._action!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(e!==void 0)if(e&&p(e)==="object"&&e.nodeType===1){if(this.action==="copy"&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(this.action==="cut"&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`);this._target=e}else throw new Error('Invalid "target" value, use a valid Element')},get:function(){return this._target}}]),r}(),K=G;function S(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?S=function(e){return typeof e}:S=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(r)}function Q(r,n){if(!(r instanceof n))throw new TypeError("Cannot call a class as a function")}function M(r,n){for(var e=0;e<n.length;e++){var c=n[e];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(r,c.key,c)}}function W(r,n,e){return n&&M(r.prototype,n),e&&M(r,e),r}function Z(r,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(n&&n.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),n&&O(r,n)}function O(r,n){return O=Object.setPrototypeOf||function(c,f){return c.__proto__=f,c},O(r,n)}function tt(r){var n=ot();return function(){var c=C(r),f;if(n){var k=C(this).constructor;f=Reflect.construct(c,arguments,k)}else f=c.apply(this,arguments);return et(this,f)}}function et(r,n){return n&&(S(n)==="object"||typeof n=="function")?n:nt(r)}function nt(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function ot(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function C(r){return C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},C(r)}function R(r,n){var e="data-clipboard-".concat(r);if(!!n.hasAttribute(e))return n.getAttribute(e)}var rt=function(r){Z(e,r);var n=tt(e);function e(c,f){var k;return Q(this,e),k=n.call(this),k.resolveOptions(f),k.listenClick(c),k}return W(e,[{key:"resolveOptions",value:function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof f.action=="function"?f.action:this.defaultAction,this.target=typeof f.target=="function"?f.target:this.defaultTarget,this.text=typeof f.text=="function"?f.text:this.defaultText,this.container=S(f.container)==="object"?f.container:document.body}},{key:"listenClick",value:function(f){var k=this;this.listener=s()(f,"click",function(T){return k.onClick(T)})}},{key:"onClick",value:function(f){var k=f.delegateTarget||f.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new K({action:this.action(k),target:this.target(k),text:this.text(k),container:this.container,trigger:k,emitter:this})}},{key:"defaultAction",value:function(f){return R("action",f)}},{key:"defaultTarget",value:function(f){var k=R("target",f);if(k)return document.querySelector(k)}},{key:"defaultText",value:function(f){return R("text",f)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],k=typeof f=="string"?[f]:f,T=!!document.queryCommandSupported;return k.forEach(function(at){T=T&&!!document.queryCommandSupported(at)}),T}}]),e}(a()),it=rt},828:function(l){var o=9;if(typeof Element!="undefined"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function i(a,u){for(;a&&a.nodeType!==o;){if(typeof a.matches=="function"&&a.matches(u))return a;a=a.parentNode}}l.exports=i},438:function(l,o,t){var i=t(828);function a(y,E,p,g,h){var x=s.apply(this,arguments);return y.addEventListener(p,x,h),{destroy:function(){y.removeEventListener(p,x,h)}}}function u(y,E,p,g,h){return typeof y.addEventListener=="function"?a.apply(null,arguments):typeof p=="function"?a.bind(null,document).apply(null,arguments):(typeof y=="string"&&(y=document.querySelectorAll(y)),Array.prototype.map.call(y,function(x){return a(x,E,p,g,h)}))}function s(y,E,p,g){return function(h){h.delegateTarget=i(h.target,E),h.delegateTarget&&g.call(y,h)}}l.exports=u},879:function(l,o){o.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},o.nodeList=function(t){var i=Object.prototype.toString.call(t);return t!==void 0&&(i==="[object NodeList]"||i==="[object HTMLCollection]")&&"length"in t&&(t.length===0||o.node(t[0]))},o.string=function(t){return typeof t=="string"||t instanceof String},o.fn=function(t){var i=Object.prototype.toString.call(t);return i==="[object Function]"}},370:function(l,o,t){var i=t(879),a=t(438);function u(p,g,h){if(!p&&!g&&!h)throw new Error("Missing required arguments");if(!i.string(g))throw new TypeError("Second argument must be a String");if(!i.fn(h))throw new TypeError("Third argument must be a Function");if(i.node(p))return s(p,g,h);if(i.nodeList(p))return y(p,g,h);if(i.string(p))return E(p,g,h);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function s(p,g,h){return p.addEventListener(g,h),{destroy:function(){p.removeEventListener(g,h)}}}function y(p,g,h){return Array.prototype.forEach.call(p,function(x){x.addEventListener(g,h)}),{destroy:function(){Array.prototype.forEach.call(p,function(x){x.removeEventListener(g,h)})}}}function E(p,g,h){return a(document.body,p,g,h)}l.exports=u},817:function(l){function o(t){var i;if(t.nodeName==="SELECT")t.focus(),i=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var a=t.hasAttribute("readonly");a||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),a||t.removeAttribute("readonly"),i=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var u=window.getSelection(),s=document.createRange();s.selectNodeContents(t),u.removeAllRanges(),u.addRange(s),i=u.toString()}return i}l.exports=o},279:function(l){function o(){}o.prototype={on:function(t,i,a){var u=this.e||(this.e={});return(u[t]||(u[t]=[])).push({fn:i,ctx:a}),this},once:function(t,i,a){var u=this;function s(){u.off(t,s),i.apply(a,arguments)}return s._=i,this.on(t,s,a)},emit:function(t){var i=[].slice.call(arguments,1),a=((this.e||(this.e={}))[t]||[]).slice(),u=0,s=a.length;for(u;u<s;u++)a[u].fn.apply(a[u].ctx,i);return this},off:function(t,i){var a=this.e||(this.e={}),u=a[t],s=[];if(u&&i)for(var y=0,E=u.length;y<E;y++)u[y].fn!==i&&u[y].fn._!==i&&s.push(u[y]);return s.length?a[t]=s:delete a[t],this}},l.exports=o,l.exports.TinyEmitter=o}},b={};function _(l){if(b[l])return b[l].exports;var o=b[l]={exports:{}};return v[l](o,o.exports,_),o.exports}return function(){_.n=function(l){var o=l&&l.__esModule?function(){return l.default}:function(){return l};return _.d(o,{a:o}),o}}(),function(){_.d=function(l,o){for(var t in o)_.o(o,t)&&!_.o(l,t)&&Object.defineProperty(l,t,{enumerable:!0,get:o[t]})}}(),function(){_.o=function(l,o){return Object.prototype.hasOwnProperty.call(l,o)}}(),_(134)}().default})})(X);var Tt=gt(X.exports);const B=(d,m,v)=>{m=m||"editJson",v=v||kt;const b=ace.edit(m);return b.setOptions({enableBasicAutocompletion:!0,enableSnippets:!0,enableLiveAutocompletion:!0}),b.setFontSize(14),b.setShowPrintMargin(!1),b.session.setMode("ace/mode/"+v),b.setTheme("ace/theme/tomorrow_night"),b.setValue(d),b},wt={name:"vueFile",props:{},components:{},setup(){const d=I({visible:!1,editor:""}),m=o=>{let t="",i="",a="",u="";return o&&o.list.forEach(s=>{s.type==="component"&&(t+=`    // todo ${s.item.label}
import ${s.config.template} from "@/xxxxxxx.vue"
`,i+=`    // todo ${s.item.label}\u81EA\u5B9A\u4E49\u7EC4\u4EF6
    provide("${s.config.template}", ${s.config.template})
`),s.customRules&&s.customRules.length>0&&s.customRules.forEach(y=>{y.type==="methods"&&y.methods&&(a+=`    // todo ${s.item.label}\u6821\u9A8C\u65B9\u6CD5
    provide("${y.methods}", (rule, value, callback) => {})
`)}),s.config&&s.config.type==="async"&&s.config.source===1&&s.config.sourceFun&&(u+=`    // todo ${s.item.label}\u83B7\u53D6\u9009\u9879\u503C
`,u+=`    const ${s.name}Option = ref([{label: "\u9009\u98791", value: '1'}])
`,u+=`    provide("${s.config.sourceFun}", ${s.name}Option)
`)}),{importComponent:t,componentProvide:i,rulesMethods:a,sourceFun:u}},v=o=>{d.visible=!0;const t=m(o),i=`<template>
  <div>
    <ak-form-design :formData="formData" ref="formName">
    </ak-form-design>
    <el-button type="primary" @click="submit">\u63D0\u4EA4</el-button>
  </div>
</template><script>
import {reactive, toRefs, provide, ref} from 'vue'
`+t.importComponent+`
export default {
  name: "addForm",
  props: {},
  components: {},
  setup(props) {
    const state = reactive({
      formData: `+_t(o)+`
    })
`+t.sourceFun+t.componentProvide+t.rulesMethods+`    // \u8868\u5355\u63A7\u4EF6\u503C\u6539\u53D8\u4E8B\u4EF6
    /*provide('DFControlChange', ({key, value}) => {
      console.log(key)
      console.log(value)
    })*/
    const formName=ref()
    const submit = () => {
      formName.value.validate((valid) => {
        console.log(valid)
        if (valid) {
          alert('submit')
        } else {
          console.log('error submit')
          return false
        }
      })
    }
    return {
      ...toRefs(state),
      submit,
      formName
    }
  }
}
<\/script>`;D(()=>{d.editor=B(i,"editJsonCopy","html")})},b=o=>{d.visible=!0;const t=`<template>
  <div class="form-list-page">
    <h3>\u5217\u8868\u6570\u636E</h3>
    <ak-table-list
      ref="tableListEl"
      :searchData="searchData"
      :tableData="tableData"
      :requestUrl="requestUrl">
      <template #__control="scope">
        <el-button type="text" @click="btnClick(scope.row.id,'show')">\u67E5\u770B</el-button>
        <el-button type="text" @click="btnClick(scope.row.id,'edit')">\u7F16\u8F91</el-button>
        <el-button type="text" @click="btnClick(scope.row.id,'del')">\u5220\u9664</el-button>
      </template>
    </ak-table-list>
  </div>
</template>

<script>
import {useRoute, useRouter} from 'vue-router'
import {reactive, toRefs, ref} from 'vue'

export default {
  name: "list",
  props: {},
  components: {},
  setup() {
    const route = useRoute()
    const router = useRouter()
    const tableListEl = ref()
    const state = reactive({
      tableData: `+JSON.stringify(o)+`,
      searchData: {}, // \u7B5B\u9009\u8868\u5355
      requestUrl: '' // \u6570\u636E\u5217\u8868\u63A5\u53E3
    })
    const onSubmit = () => {
      tableListEl.value.searchClick()
    }
    const btnClick = (id, type) => {
      switch (type) {
        case 'show':
          break
        case 'edit':
          break
        case 'del':
          // tableListEl.value.getListData() // \u8C03\u7528\u7EC4\u4EF6\u5185\u90E8\u65B9\u6CD5\u91CD\u65B0\u62C9\u6570\u636E
          break
      }
    }
    return {
      ...toRefs(state),
      onSubmit,
      tableListEl,
      btnClick
    }
  }
}
<\/script>
`;D(()=>{d.editor=B(t,"editJsonCopy","html")})},_=o=>{D(()=>{const t=new Tt(o.target,{text:()=>d.editor.getValue()});t.on("success",function(){z({message:"\u590D\u5236\u6210\u529F\uFF01",type:"success"}),t.destroy()}),t.on("error",function(){z.error("\u590D\u5236\u5931\u8D25"),t.destroy()}),t.onClick(o)})},l=()=>{const o="data:text/csv;charset=utf-8,"+d.editor.getValue(),t=new Date().getTime()+".vue",i=encodeURI(o),a=document.createElement("a");a.setAttribute("href",i),a.setAttribute("download",t),a.click()};return F(L({},J(d)),{open:v,dialogExport:l,copyData:_,openTable:b})}},Ct=P("div",{id:"editJsonCopy"},null,-1),At={class:"dialog-footer"},Ot=$(" \u590D\u5236\u6570\u636E "),Rt=$(" \u5BFC\u51FA\u4EE3\u7801 ");function Lt(d,m,v,b,_,l){const o=N("el-button"),t=N("el-dialog");return A(),Y(t,{modelValue:d.visible,"onUpdate:modelValue":m[0]||(m[0]=i=>d.visible=i),title:"\u5BFC\u51FAvue\u6587\u4EF6","custom-class":"export-dialog",width:"80%"},{footer:w(()=>[P("div",At,[U(o,{size:"small",type:"primary",onClick:b.copyData},{default:w(()=>[Ot]),_:1},8,["onClick"]),U(o,{type:"primary",size:"small",onClick:b.dialogExport},{default:w(()=>[Rt]),_:1},8,["onClick"])])]),default:w(()=>[Ct]),_:1},8,["modelValue"])}var Mt=q(wt,[["render",Lt]]);export{B as a,$t as h,Mt as v};
