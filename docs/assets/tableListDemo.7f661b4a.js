var E=Object.defineProperty,U=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var C=(s,a,n)=>a in s?E(s,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[a]=n,g=(s,a)=>{for(var n in a||(a={}))S.call(a,n)&&C(s,n,a[n]);if(w)for(var n of w(a))V.call(a,n)&&C(s,n,a[n]);return s},d=(s,a)=>U(s,H(a));import{S as x,$,i as m,p as _,q as b,r as u,o as v,y as k,a as e,w as h,v as i,a0 as N,h as t,N as L,x as D,a1 as f}from"./vendor.df12524c.js";import{_ as y}from"./index.4247898b.js";const z={name:"list",props:{},components:{},setup(){x(),$();const s=m(),a=_({tableData:{config:{},columns:[{label:"\u52FE\u9009",prop:"__selection",type:"selection"},{label:"\u5E8F\u53F7",prop:"__index",type:"index"},{prop:"name",label:"\u7528\u6237\u540D"},{prop:"tel",label:"\u624B\u673A\u53F7"},{prop:"sex",label:"\u6027\u522B"},{label:"\u64CD\u4F5C",prop:"__control"}]},searchData:{},requestUrl:"",tableList:[{name:"\u5F20\u4E8C",tel:"13800138000",sex:"\u7537"},{name:"\u674E\u4E94",tel:"13800138000",sex:"\u5973"}]}),n=()=>{s.value.searchClick()},l=(o,j)=>{};return d(g({},b(a)),{onSubmit:n,tableListEl:s,btnClick:l})}},A={class:"form-list-page"},B=i("\u67E5\u770B"),I=i("\u7F16\u8F91"),W=i("\u5220\u9664");function T(s,a,n,l,o,j){const p=u("el-button"),c=u("ak-table-list");return v(),k("div",A,[e(c,{ref:"tableListEl",searchData:s.searchData,tableData:s.tableData,tableList:s.tableList,requestUrl:s.requestUrl},{__control:h(r=>[e(p,{type:"text",onClick:q=>l.btnClick(r.row.id,"show")},{default:h(()=>[B]),_:2},1032,["onClick"]),e(p,{type:"text",onClick:q=>l.btnClick(r.row.id,"edit")},{default:h(()=>[I]),_:2},1032,["onClick"]),e(p,{type:"text",onClick:q=>l.btnClick(r.row.id,"del")},{default:h(()=>[W]),_:2},1032,["onClick"])]),_:1},8,["searchData","tableData","tableList","requestUrl"])])}var F=y(z,[["render",T]]);const G={name:"list",props:{},components:{},setup(){x(),$();const s=m(),a=_({tableData:{config:{},columns:[{label:"\u52FE\u9009",prop:"__selection",type:"selection"},{label:"\u5E8F\u53F7",prop:"__index",type:"index"},{prop:"name",label:"\u7528\u6237\u540D"},{prop:"tel",label:"\u624B\u673A\u53F7"},{prop:"sex",label:"\u6027\u522B"},{label:"\u64CD\u4F5C",prop:"__control"}]},searchData:{list:[{name:"name",type:"input",control:{modelValue:""},slot:{},config:{},item:{label:"\u7528\u6237\u540D",showLabel:!1},rules:[],customRules:[]},{name:"tel",type:"input",control:{modelValue:""},slot:{},config:{},item:{label:"\u624B\u673A\u53F7",showLabel:!1},rules:[],customRules:[]}],config:{labelWidth:"",class:"",size:"",name:"form1636711196545",rulesComm:[]}},requestUrl:"",tableList:[{name:"\u5F20\u4E8C",tel:"13800138000",sex:"\u7537"},{name:"\u674E\u4E94",tel:"13800138000",sex:"\u5973"}]}),n=()=>{s.value.searchClick()},l=(o,j)=>{};return d(g({},b(a)),{onSubmit:n,tableListEl:s,btnClick:l})}},J={class:"form-list-page"},K=i("\u67E5\u770B"),M=i("\u7F16\u8F91"),O=i("\u5220\u9664");function P(s,a,n,l,o,j){const p=u("el-button"),c=u("ak-table-list");return v(),k("div",J,[e(c,{ref:"tableListEl",searchData:s.searchData,tableData:s.tableData,tableList:s.tableList,requestUrl:s.requestUrl},{__control:h(r=>[e(p,{type:"text",onClick:q=>l.btnClick(r.row.id,"show")},{default:h(()=>[K]),_:2},1032,["onClick"]),e(p,{type:"text",onClick:q=>l.btnClick(r.row.id,"edit")},{default:h(()=>[M]),_:2},1032,["onClick"]),e(p,{type:"text",onClick:q=>l.btnClick(r.row.id,"del")},{default:h(()=>[O]),_:2},1032,["onClick"])]),_:1},8,["searchData","tableData","tableList","requestUrl"])])}var Q=y(G,[["render",P]]);const R=N({components:{vdpv_0:F,vdpv_1:Q},setup(s){const a=m(),n=m(),l=[a,n],o=_({vdpv_0Height:0,vdpv_1Height:0});return d(g({toggleCode:p=>{const c="vdpv_"+p;o[c+"Height"]===0?o[c+"Height"]=(l[p].value?l[p].value.offsetHeight:0)||0:o[c+"Height"]=0}},b(o)),{vdpv_0Ref:a,vdpv_1Ref:n})}});R.$vd={matter:{},toc:[{content:"tableList demo",anchor:"tablelist-demo",level:1},{content:"\u57FA\u7840\u7528\u6CD5",anchor:"\u57FA\u7840\u7528\u6CD5",level:1},{content:"\u7B5B\u9009\u8868\u5355",anchor:"\u7B5B\u9009\u8868\u5355",level:2}]};const X=R,Y={class:"vuedoc"},Z=f('<h1 id="tablelist-demo" data-source-line="1"><a class="markdownIt-Anchor" href="#tablelist-demo">#</a> tableList demo</h1><h1 id="\u57FA\u7840\u7528\u6CD5" data-source-line="3"><a class="markdownIt-Anchor" href="#\u57FA\u7840\u7528\u6CD5">#</a> \u57FA\u7840\u7528\u6CD5</h1><pre style="display:none;"></pre>',3),ss={class:"vuedoc-demo"},as={class:"vuedoc-demo__inner"},ns={class:"vuedoc-demo__preview"},ts={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},ls=f(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;form-list-page&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-table-list</span>
      <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;tableListEl&quot;</span>
      <span class="hljs-attr">:searchData</span>=<span class="hljs-string">&quot;searchData&quot;</span>
      <span class="hljs-attr">:tableData</span>=<span class="hljs-string">&quot;tableData&quot;</span>
      <span class="hljs-attr">:tableList</span>=<span class="hljs-string">&quot;tableList&quot;</span>
      <span class="hljs-attr">:requestUrl</span>=<span class="hljs-string">&quot;requestUrl&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">__control</span>=<span class="hljs-string">&quot;scope&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;btnClick(scope.row.id,&#39;show&#39;)&quot;</span>&gt;</span>\u67E5\u770B<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;btnClick(scope.row.id,&#39;edit&#39;)&quot;</span>&gt;</span>\u7F16\u8F91<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;btnClick(scope.row.id,&#39;del&#39;)&quot;</span>&gt;</span>\u5220\u9664<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-table-list</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">import</span> {useRoute, useRouter} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue-router&#39;</span>
<span class="hljs-keyword">import</span> {reactive, toRefs, ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;list&quot;</span>,
  <span class="hljs-attr">props</span>: {},
  <span class="hljs-attr">components</span>: {},
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> route = useRoute()
    <span class="hljs-keyword">const</span> router = useRouter()
    <span class="hljs-keyword">const</span> tableListEl = ref()
    <span class="hljs-keyword">const</span> state = reactive({
      <span class="hljs-attr">tableData</span>: {
        <span class="hljs-string">&quot;config&quot;</span>: {},
        <span class="hljs-string">&quot;columns&quot;</span>: [{<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;\u52FE\u9009&quot;</span>, <span class="hljs-string">&quot;prop&quot;</span>: <span class="hljs-string">&quot;__selection&quot;</span>, <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;selection&quot;</span>}, {
          <span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;\u5E8F\u53F7&quot;</span>,
          <span class="hljs-string">&quot;prop&quot;</span>: <span class="hljs-string">&quot;__index&quot;</span>,
          <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;index&quot;</span>
        }, {<span class="hljs-string">&quot;prop&quot;</span>: <span class="hljs-string">&quot;name&quot;</span>, <span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;\u7528\u6237\u540D&quot;</span>}, {<span class="hljs-string">&quot;prop&quot;</span>: <span class="hljs-string">&quot;tel&quot;</span>, <span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;\u624B\u673A\u53F7&quot;</span>}, {
          <span class="hljs-string">&quot;prop&quot;</span>: <span class="hljs-string">&quot;sex&quot;</span>,
          <span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;\u6027\u522B&quot;</span>
        }, {<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;\u64CD\u4F5C&quot;</span>, <span class="hljs-string">&quot;prop&quot;</span>: <span class="hljs-string">&quot;__control&quot;</span>}]
      },
      <span class="hljs-attr">searchData</span>: {}, <span class="hljs-comment">// \u7B5B\u9009\u8868\u5355</span>
      <span class="hljs-attr">requestUrl</span>: <span class="hljs-string">&#39;&#39;</span>, <span class="hljs-comment">// \u6570\u636E\u5217\u8868\u63A5\u53E3</span>
      <span class="hljs-attr">tableList</span>: [
        {
          <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5F20\u4E8C&#39;</span>,
          <span class="hljs-attr">tel</span>: <span class="hljs-string">&#39;13800138000&#39;</span>,
          <span class="hljs-attr">sex</span>: <span class="hljs-string">&#39;\u7537&#39;</span>
        },
        {
          <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u674E\u4E94&#39;</span>,
          <span class="hljs-attr">tel</span>: <span class="hljs-string">&#39;13800138000&#39;</span>,
          <span class="hljs-attr">sex</span>: <span class="hljs-string">&#39;\u5973&#39;</span>
        }
      ]
    })
    <span class="hljs-keyword">const</span> onSubmit = <span class="hljs-function">() =&gt;</span> {
      tableListEl.value.searchClick()
    }
    <span class="hljs-keyword">const</span> btnClick = <span class="hljs-function">(<span class="hljs-params">id, type</span>) =&gt;</span> {
      <span class="hljs-keyword">switch</span> (type) {
        <span class="hljs-keyword">case</span> <span class="hljs-string">&#39;show&#39;</span>:
          <span class="hljs-keyword">break</span>
        <span class="hljs-keyword">case</span> <span class="hljs-string">&#39;edit&#39;</span>:
          <span class="hljs-keyword">break</span>
        <span class="hljs-keyword">case</span> <span class="hljs-string">&#39;del&#39;</span>:
          <span class="hljs-comment">// tableListEl.value.getListData() // \u8C03\u7528\u7EC4\u4EF6\u5185\u90E8\u65B9\u6CD5\u91CD\u65B0\u62C9\u6570\u636E</span>
          <span class="hljs-keyword">break</span>
      }
    }
    <span class="hljs-keyword">return</span> {
      ...toRefs(state),
      onSubmit,
      tableListEl,
      btnClick
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),ps=[ls],es=t("h2",{id:"\u7B5B\u9009\u8868\u5355","data-source-line":"88"},[t("a",{class:"markdownIt-Anchor",href:"#\u7B5B\u9009\u8868\u5355"},"#"),i(" \u7B5B\u9009\u8868\u5355")],-1),os=t("p",{"data-source-line":"89"},[i("\u4F7F\u7528"),t("code",null,"searchData"),i("\u6DFB\u52A0\u5217\u8868\u7B5B\u9009\u6761\u4EF6")],-1),cs=t("pre",{style:{display:"none"}},null,-1),rs={class:"vuedoc-demo"},is={class:"vuedoc-demo__inner"},hs={class:"vuedoc-demo__preview"},us={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},js=f(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;form-list-page&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-table-list</span>
      <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;tableListEl&quot;</span>
      <span class="hljs-attr">:searchData</span>=<span class="hljs-string">&quot;searchData&quot;</span>
      <span class="hljs-attr">:tableData</span>=<span class="hljs-string">&quot;tableData&quot;</span>
      <span class="hljs-attr">:tableList</span>=<span class="hljs-string">&quot;tableList&quot;</span>
      <span class="hljs-attr">:requestUrl</span>=<span class="hljs-string">&quot;requestUrl&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">__control</span>=<span class="hljs-string">&quot;scope&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;btnClick(scope.row.id,&#39;show&#39;)&quot;</span>&gt;</span>\u67E5\u770B<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;btnClick(scope.row.id,&#39;edit&#39;)&quot;</span>&gt;</span>\u7F16\u8F91<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;btnClick(scope.row.id,&#39;del&#39;)&quot;</span>&gt;</span>\u5220\u9664<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-table-list</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">
<span class="hljs-keyword">import</span> {useRoute, useRouter} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue-router&#39;</span>
<span class="hljs-keyword">import</span> {reactive, toRefs, ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;list&quot;</span>,
  <span class="hljs-attr">props</span>: {},
  <span class="hljs-attr">components</span>: {},
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> route = useRoute()
    <span class="hljs-keyword">const</span> router = useRouter()
    <span class="hljs-keyword">const</span> tableListEl = ref()
    <span class="hljs-keyword">const</span> state = reactive({
      <span class="hljs-attr">tableData</span>: {
        <span class="hljs-string">&quot;config&quot;</span>: {},
        <span class="hljs-string">&quot;columns&quot;</span>: [{<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;\u52FE\u9009&quot;</span>, <span class="hljs-string">&quot;prop&quot;</span>: <span class="hljs-string">&quot;__selection&quot;</span>, <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;selection&quot;</span>}, {
          <span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;\u5E8F\u53F7&quot;</span>,
          <span class="hljs-string">&quot;prop&quot;</span>: <span class="hljs-string">&quot;__index&quot;</span>,
          <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;index&quot;</span>
        }, {<span class="hljs-string">&quot;prop&quot;</span>: <span class="hljs-string">&quot;name&quot;</span>, <span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;\u7528\u6237\u540D&quot;</span>}, {<span class="hljs-string">&quot;prop&quot;</span>: <span class="hljs-string">&quot;tel&quot;</span>, <span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;\u624B\u673A\u53F7&quot;</span>}, {
          <span class="hljs-string">&quot;prop&quot;</span>: <span class="hljs-string">&quot;sex&quot;</span>,
          <span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;\u6027\u522B&quot;</span>
        }, {<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;\u64CD\u4F5C&quot;</span>, <span class="hljs-string">&quot;prop&quot;</span>: <span class="hljs-string">&quot;__control&quot;</span>}]
      },
      <span class="hljs-attr">searchData</span>: {
        <span class="hljs-string">&quot;list&quot;</span>: [
          {
            <span class="hljs-string">&quot;name&quot;</span>: <span class="hljs-string">&quot;name&quot;</span>,
            <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;input&quot;</span>,
            <span class="hljs-string">&quot;control&quot;</span>: {
              <span class="hljs-string">&quot;modelValue&quot;</span>: <span class="hljs-string">&quot;&quot;</span>
            },
            <span class="hljs-string">&quot;slot&quot;</span>: {},
            <span class="hljs-string">&quot;config&quot;</span>: {},
            <span class="hljs-string">&quot;item&quot;</span>: {
              <span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;\u7528\u6237\u540D&quot;</span>,
              <span class="hljs-string">&quot;showLabel&quot;</span>: <span class="hljs-literal">false</span>
            },
            <span class="hljs-string">&quot;rules&quot;</span>: [],
            <span class="hljs-string">&quot;customRules&quot;</span>: []
          },
          {
            <span class="hljs-string">&quot;name&quot;</span>: <span class="hljs-string">&quot;tel&quot;</span>,
            <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;input&quot;</span>,
            <span class="hljs-string">&quot;control&quot;</span>: {
              <span class="hljs-string">&quot;modelValue&quot;</span>: <span class="hljs-string">&quot;&quot;</span>
            },
            <span class="hljs-string">&quot;slot&quot;</span>: {},
            <span class="hljs-string">&quot;config&quot;</span>: {},
            <span class="hljs-string">&quot;item&quot;</span>: {
              <span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;\u624B\u673A\u53F7&quot;</span>,
              <span class="hljs-string">&quot;showLabel&quot;</span>: <span class="hljs-literal">false</span>
            },
            <span class="hljs-string">&quot;rules&quot;</span>: [],
            <span class="hljs-string">&quot;customRules&quot;</span>: []
          }
        ],
        <span class="hljs-string">&quot;config&quot;</span>: {
          <span class="hljs-string">&quot;labelWidth&quot;</span>: <span class="hljs-string">&quot;&quot;</span>,
          <span class="hljs-string">&quot;class&quot;</span>: <span class="hljs-string">&quot;&quot;</span>,
          <span class="hljs-string">&quot;size&quot;</span>: <span class="hljs-string">&quot;&quot;</span>,
          <span class="hljs-string">&quot;name&quot;</span>: <span class="hljs-string">&quot;form1636711196545&quot;</span>,
          <span class="hljs-string">&quot;rulesComm&quot;</span>: []
        }
      }, <span class="hljs-comment">// \u7B5B\u9009\u8868\u5355</span>
      <span class="hljs-attr">requestUrl</span>: <span class="hljs-string">&#39;&#39;</span>, <span class="hljs-comment">// \u6570\u636E\u5217\u8868\u63A5\u53E3</span>
      <span class="hljs-attr">tableList</span>: [
        {
          <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5F20\u4E8C&#39;</span>,
          <span class="hljs-attr">tel</span>: <span class="hljs-string">&#39;13800138000&#39;</span>,
          <span class="hljs-attr">sex</span>: <span class="hljs-string">&#39;\u7537&#39;</span>
        },
        {
          <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u674E\u4E94&#39;</span>,
          <span class="hljs-attr">tel</span>: <span class="hljs-string">&#39;13800138000&#39;</span>,
          <span class="hljs-attr">sex</span>: <span class="hljs-string">&#39;\u5973&#39;</span>
        }
      ]
    })
    <span class="hljs-keyword">const</span> onSubmit = <span class="hljs-function">() =&gt;</span> {
      tableListEl.value.searchClick()
    }
    <span class="hljs-keyword">const</span> btnClick = <span class="hljs-function">(<span class="hljs-params">id, type</span>) =&gt;</span> {
      <span class="hljs-keyword">switch</span> (type) {
        <span class="hljs-keyword">case</span> <span class="hljs-string">&#39;show&#39;</span>:
          <span class="hljs-keyword">break</span>
        <span class="hljs-keyword">case</span> <span class="hljs-string">&#39;edit&#39;</span>:
          <span class="hljs-keyword">break</span>
        <span class="hljs-keyword">case</span> <span class="hljs-string">&#39;del&#39;</span>:
          <span class="hljs-comment">// tableListEl.value.getListData() // \u8C03\u7528\u7EC4\u4EF6\u5185\u90E8\u65B9\u6CD5\u91CD\u65B0\u62C9\u6570\u636E</span>
          <span class="hljs-keyword">break</span>
      }
    }
    <span class="hljs-keyword">return</span> {
      ...toRefs(state),
      onSubmit,
      tableListEl,
      btnClick
    }
  }
}
</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),qs=[js];function gs(s,a,n,l,o,j){const p=u("vdpv_0"),c=u("vdpv_1");return v(),k("div",Y,[Z,t("div",ss,[t("div",as,[t("div",ns,[e(p)]),t("div",{style:L({height:s.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[t("div",ts,ps,512)],4),t("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=r=>s.toggleCode(0))},D(s.vdpv_0Height>0?"hidden":"show"),1)])]),es,os,cs,t("div",rs,[t("div",is,[t("div",hs,[e(c)]),t("div",{style:L({height:s.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[t("div",us,qs,512)],4),t("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=r=>s.toggleCode(1))},D(s.vdpv_1Height>0?"hidden":"show"),1)])])])}var bs=y(X,[["render",gs]]);export{bs as default};
