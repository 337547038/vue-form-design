import{d as j,a as at,o as R,c as z,F as ct,e as st,h as W,w as A,m as V,l as lt,y as q,t as ft,u as dt,q as I,a1 as pt,a2 as yt,r as K,p as J,X as M,B as O,a3 as P,E as Y}from"./index.ae153a4c.js";const mt={class:"main-tools"},Ct=j({__name:"headTools",props:{showKey:{default:()=>[]},hideKey:{default:()=>[]}},emits:["click"],setup(w,{emit:x}){const b=w,F=at(()=>{var l,t;const f=[{icon:"del",label:"\u6E05\u7A7A",key:1},{icon:"eye",label:"\u9884\u89C8",key:2},{icon:"json",label:"\u751F\u6210\u811A\u672C\u9884\u89C8",key:3},{icon:"vue",label:"\u5BFC\u51FAvue\u6587\u4EF6",key:4},{icon:"save",label:"\u4FDD\u5B58",key:5}];return(l=b.showKey)!=null&&l.length?f.filter(r=>b.showKey.includes(r.key)):(t=b.hideKey)!=null&&t.length?f.filter(r=>!b.hideKey.includes(r.key)):f}),h=f=>{x("click",f)};return(f,l)=>{const t=I("el-button");return R(),z("div",mt,[(R(!0),z(ct,null,st(dt(F),r=>(R(),W(t,{link:"",type:"primary",onClick:p=>h(r.icon),key:r.icon},{default:A(()=>[V("i",{class:lt(["icon-"+r.icon])},null,2),q(ft(r.label),1)]),_:2},1032,["onClick"]))),128))])}}});var X={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(w,x){(function(F,h){w.exports=h()})(pt,function(){return function(){var b={686:function(f,l,t){t.d(l,{default:function(){return it}});var r=t(279),p=t.n(r),e=t(370),i=t.n(e),d=t(817),m=t.n(d);function a(s){try{return document.execCommand(s)}catch{return!1}}var v=function(o){var n=m()(o);return a("cut"),n},g=v;function E(s){var o=document.documentElement.getAttribute("dir")==="rtl",n=document.createElement("textarea");n.style.fontSize="12pt",n.style.border="0",n.style.padding="0",n.style.margin="0",n.style.position="absolute",n.style[o?"right":"left"]="-9999px";var u=window.pageYOffset||document.documentElement.scrollTop;return n.style.top="".concat(u,"px"),n.setAttribute("readonly",""),n.value=s,n}var S=function(o,n){var u=E(o);n.container.appendChild(u);var c=m()(u);return a("copy"),u.remove(),c},T=function(o){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},u="";return typeof o=="string"?u=S(o,n):o instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(o==null?void 0:o.type)?u=S(o.value,n):(u=m()(o),a("copy")),u},k=T;function C(s){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?C=function(n){return typeof n}:C=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},C(s)}var B=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=o.action,u=n===void 0?"copy":n,c=o.container,y=o.target,_=o.text;if(u!=="copy"&&u!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(y!==void 0)if(y&&C(y)==="object"&&y.nodeType===1){if(u==="copy"&&y.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(u==="cut"&&(y.hasAttribute("readonly")||y.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(_)return k(_,{container:c});if(y)return u==="cut"?g(y):k(y,{container:c})},G=B;function D(s){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?D=function(n){return typeof n}:D=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},D(s)}function Q(s,o){if(!(s instanceof o))throw new TypeError("Cannot call a class as a function")}function H(s,o){for(var n=0;n<o.length;n++){var u=o[n];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(s,u.key,u)}}function Z(s,o,n){return o&&H(s.prototype,o),n&&H(s,n),s}function tt(s,o){if(typeof o!="function"&&o!==null)throw new TypeError("Super expression must either be null or a function");s.prototype=Object.create(o&&o.prototype,{constructor:{value:s,writable:!0,configurable:!0}}),o&&$(s,o)}function $(s,o){return $=Object.setPrototypeOf||function(u,c){return u.__proto__=c,u},$(s,o)}function et(s){var o=rt();return function(){var u=U(s),c;if(o){var y=U(this).constructor;c=Reflect.construct(u,arguments,y)}else c=u.apply(this,arguments);return nt(this,c)}}function nt(s,o){return o&&(D(o)==="object"||typeof o=="function")?o:ot(s)}function ot(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function rt(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function U(s){return U=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},U(s)}function N(s,o){var n="data-clipboard-".concat(s);if(!!o.hasAttribute(n))return o.getAttribute(n)}var ut=function(s){tt(n,s);var o=et(n);function n(u,c){var y;return Q(this,n),y=o.call(this),y.resolveOptions(c),y.listenClick(u),y}return Z(n,[{key:"resolveOptions",value:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof c.action=="function"?c.action:this.defaultAction,this.target=typeof c.target=="function"?c.target:this.defaultTarget,this.text=typeof c.text=="function"?c.text:this.defaultText,this.container=D(c.container)==="object"?c.container:document.body}},{key:"listenClick",value:function(c){var y=this;this.listener=i()(c,"click",function(_){return y.onClick(_)})}},{key:"onClick",value:function(c){var y=c.delegateTarget||c.currentTarget,_=this.action(y)||"copy",L=G({action:_,container:this.container,target:this.target(y),text:this.text(y)});this.emit(L?"success":"error",{action:_,text:L,trigger:y,clearSelection:function(){y&&y.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(c){return N("action",c)}},{key:"defaultTarget",value:function(c){var y=N("target",c);if(y)return document.querySelector(y)}},{key:"defaultText",value:function(c){return N("text",c)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(c){var y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return k(c,y)}},{key:"cut",value:function(c){return g(c)}},{key:"isSupported",value:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],y=typeof c=="string"?[c]:c,_=!!document.queryCommandSupported;return y.forEach(function(L){_=_&&!!document.queryCommandSupported(L)}),_}}]),n}(p()),it=ut},828:function(f){var l=9;if(typeof Element<"u"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function r(p,e){for(;p&&p.nodeType!==l;){if(typeof p.matches=="function"&&p.matches(e))return p;p=p.parentNode}}f.exports=r},438:function(f,l,t){var r=t(828);function p(d,m,a,v,g){var E=i.apply(this,arguments);return d.addEventListener(a,E,g),{destroy:function(){d.removeEventListener(a,E,g)}}}function e(d,m,a,v,g){return typeof d.addEventListener=="function"?p.apply(null,arguments):typeof a=="function"?p.bind(null,document).apply(null,arguments):(typeof d=="string"&&(d=document.querySelectorAll(d)),Array.prototype.map.call(d,function(E){return p(E,m,a,v,g)}))}function i(d,m,a,v){return function(g){g.delegateTarget=r(g.target,m),g.delegateTarget&&v.call(d,g)}}f.exports=e},879:function(f,l){l.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},l.nodeList=function(t){var r=Object.prototype.toString.call(t);return t!==void 0&&(r==="[object NodeList]"||r==="[object HTMLCollection]")&&"length"in t&&(t.length===0||l.node(t[0]))},l.string=function(t){return typeof t=="string"||t instanceof String},l.fn=function(t){var r=Object.prototype.toString.call(t);return r==="[object Function]"}},370:function(f,l,t){var r=t(879),p=t(438);function e(a,v,g){if(!a&&!v&&!g)throw new Error("Missing required arguments");if(!r.string(v))throw new TypeError("Second argument must be a String");if(!r.fn(g))throw new TypeError("Third argument must be a Function");if(r.node(a))return i(a,v,g);if(r.nodeList(a))return d(a,v,g);if(r.string(a))return m(a,v,g);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function i(a,v,g){return a.addEventListener(v,g),{destroy:function(){a.removeEventListener(v,g)}}}function d(a,v,g){return Array.prototype.forEach.call(a,function(E){E.addEventListener(v,g)}),{destroy:function(){Array.prototype.forEach.call(a,function(E){E.removeEventListener(v,g)})}}}function m(a,v,g){return p(document.body,a,v,g)}f.exports=e},817:function(f){function l(t){var r;if(t.nodeName==="SELECT")t.focus(),r=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var p=t.hasAttribute("readonly");p||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),p||t.removeAttribute("readonly"),r=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var e=window.getSelection(),i=document.createRange();i.selectNodeContents(t),e.removeAllRanges(),e.addRange(i),r=e.toString()}return r}f.exports=l},279:function(f){function l(){}l.prototype={on:function(t,r,p){var e=this.e||(this.e={});return(e[t]||(e[t]=[])).push({fn:r,ctx:p}),this},once:function(t,r,p){var e=this;function i(){e.off(t,i),r.apply(p,arguments)}return i._=r,this.on(t,i,p)},emit:function(t){var r=[].slice.call(arguments,1),p=((this.e||(this.e={}))[t]||[]).slice(),e=0,i=p.length;for(e;e<i;e++)p[e].fn.apply(p[e].ctx,r);return this},off:function(t,r){var p=this.e||(this.e={}),e=p[t],i=[];if(e&&r)for(var d=0,m=e.length;d<m;d++)e[d].fn!==r&&e[d].fn._!==r&&i.push(e[d]);return i.length?p[t]=i:delete p[t],this}},f.exports=l,f.exports.TinyEmitter=l}},F={};function h(f){if(F[f])return F[f].exports;var l=F[f]={exports:{}};return b[f](l,l.exports,h),l.exports}return function(){h.n=function(f){var l=f&&f.__esModule?function(){return f.default}:function(){return f};return h.d(l,{a:l}),l}}(),function(){h.d=function(f,l){for(var t in l)h.o(l,t)&&!h.o(f,t)&&Object.defineProperty(f,t,{enumerable:!0,get:l[t]})}}(),function(){h.o=function(f,l){return Object.prototype.hasOwnProperty.call(f,l)}}(),h(686)}().default})})(X);const vt=yt(X.exports),gt=V("div",{id:"editJsonCopy"},null,-1),ht={class:"dialog-footer"},bt=q(" \u590D\u5236\u6570\u636E "),Et=q(" \u5BFC\u51FA\u4EE3\u7801 "),kt=j({__name:"vueFile",setup(w,{expose:x}){const b=K(!1),F=K(),h=e=>{let i="",d="";return e&&e.list.forEach(m=>{var a;(a=m.customRules)!=null&&a.length&&m.customRules.forEach(v=>{v.type==="methods"&&v.methods&&(i+=`// todo \u8BF7\u5B8C\u5584${m.item.label}\u6821\u9A8C\u65B9\u6CD5
  provide("${v.methods}", (rule, value, callback) => {
    if (value === '') {
      callback(new Error('Please input the password again'))
    } else if (value !== 'abc') {
      callback(new Error("Two inputs don't match!"))
    } else {
      callback()
    }
  })`)})}),{rulesMethods:i,sourceFun:d}},f=e=>{b.value=!0;const i=h(e),{addUrl:d,editUrl:m,requestUrl:a}=e.config;a&&delete e.config.requestUrl,m&&delete e.config.editUrl,d&&delete e.config.addUrl;const v=`<template>
  <div>
    <ak-form
      ref="formNameEl"
      :type="formType"
      :formData="formData"
      requestUrl="${a}"
      addUrl="${d}"
      editUrl="${m}"
      :beforeSubmit="beforeSubmit">
    </ak-form>
  </div>
</template>
<script setup lang="ts">
  import { ref, computed, provide } from 'vue'
  const formNameEl = ref()
  const formData = ref(${M(e)})
    // todo \u5B58\u5728\u7F16\u8F91\u65F6\uFF0C\u53EF\u6839\u636E\u8DEF\u7531\u7B49\u53C2\u6570\u8BBE\u7F6E\u5F53\u524D\u8868\u5355\u6A21\u5F0F\u30001\u65B0\u589E\u30002\u7F16\u8F91
  const formType = computed(() => {
     return 1
  })
  ${i.rulesMethods}
  ${i.sourceFun}
  // \u8868\u5355\u63D0\u4EA4\u65F6\u53C2\u6570\u5904\u7406
  const beforeSubmit = (params)=>{
    //\u3000\u5982\u7F16\u8F91\u65F6\u6DFB\u52A0\u53C2\u6570
    //  params.id='xxx'
    return params
  }

<\/script>`;O(()=>{F.value=P(v,"editJsonCopy","html")})},l=e=>{var T,k,C,B;const i=((T=e.config)==null?void 0:T.openType)==="dialog",d=((k=e.config)==null?void 0:k.dialogWidth)||"600px",m=(C=e.config)==null?void 0:C.requestUrl;m&&delete e.config.requestUrl;const a=(B=e.config)==null?void 0:B.deleteUrl;a&&delete e.config.deleteUrl;let v="",g="",E="";i&&(E='@btn-click="listBtnClick"',v=`<el-dialog
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
  `),b.value=!0;const S=`<template>
  <div>
    <ak-list
      ref="tableListEl"
      requestUrl="${m}"
      deleteUrl="${a}"
      :searchData="searchData"
      :tableData="tableData"
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
  const tableData = ref(${M(e)})
  ${g}
<\/script>`;O(()=>{F.value=P(S,"editJsonCopy","html")})},t=e=>{b.value=!0;let i="";const d=e.config.style;d&&(i=`<style>
${d}
</style>`);const m=`<template>
  <div :style="screenStyle" class="design-canvas">
    <ak-screen
      v-for="(element, index) in screenData.list"
      :key="index"
      :data="element"
    ></ak-screen>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'
  const loading = ref(true)
  const screenData = ref(${M(e)})
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
<\/script>
${i}`;O(()=>{F.value=P(m,"editJsonCopy","html")})},r=e=>{O(()=>{const i=new vt(e.target,{text:()=>F.value.getValue()});i.on("success",function(){Y({message:"\u590D\u5236\u6210\u529F\uFF01",type:"success"}),i.destroy()}),i.on("error",function(){Y.error("\u590D\u5236\u5931\u8D25"),i.destroy()}),i.onClick(e)})},p=()=>{var a;const e="data:text/csv;charset=utf-8,"+((a=F.value)==null?void 0:a.getValue()),i=new Date().getTime()+".vue",d=encodeURI(e),m=document.createElement("a");m.setAttribute("href",d),m.setAttribute("download",i),m.click()};return x({open:f,openTable:l,openScreen:t}),(e,i)=>{const d=I("el-button"),m=I("el-dialog");return R(),W(m,{modelValue:b.value,"onUpdate:modelValue":i[0]||(i[0]=a=>b.value=a),title:"\u5BFC\u51FAvue\u6587\u4EF6","custom-class":"export-dialog",width:"80%"},{footer:A(()=>[V("div",ht,[J(d,{size:"small",type:"primary",onClick:r},{default:A(()=>[bt]),_:1}),J(d,{type:"primary",size:"small",onClick:p},{default:A(()=>[Et]),_:1})])]),default:A(()=>[gt]),_:1},8,["modelValue"])}}});export{Ct as _,kt as a};
