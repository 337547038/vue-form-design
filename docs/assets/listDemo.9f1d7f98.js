import{r as n,a as d,o as k,c as b,b as c,w as j,d as t,t as m,V as q,e as D,z as x,W as C,i as s,Z as y,X as f}from"./index.7da35abc.js";const L={class:"form-list-page"},$={__name:"listDemo.md.vdpv_0",setup(l){const a=n({config:{},columns:[{label:"\u52FE\u9009",prop:"__selection",type:"selection",width:"100px"},{label:"\u5E8F\u53F7",prop:"__index",type:"index",width:"100px"},{prop:"text",label:"\u6587\u672C\u6846",help:""},{label:"\u64CD\u4F5C",prop:"__control"}],controlBtn:[{label:"\u65B0\u589E",key:"add",type:"primary"},{label:"\u5220\u9664",key:"del"}]}),h=n({}),i=n("getContentList");return(g,o)=>{const e=d("ak-list");return k(),b("div",L,[c(e,{ref:"tableListEl",requestUrl:i.value,searchData:h.value,tableData:a.value},null,8,["requestUrl","searchData","tableData"])])}}},R={class:"form-list-page"},U={__name:"listDemo.md.vdpv_1",setup(l){const a=n({config:{},columns:[{label:"\u52FE\u9009",prop:"__selection",type:"selection",width:"100px"},{label:"\u5E8F\u53F7",prop:"__index",type:"index",width:"100px"},{prop:"text",label:"\u6587\u672C\u6846",help:""},{label:"\u64CD\u4F5C",prop:"__control"}],controlBtn:[{label:"\u65B0\u589E",key:"add",type:"primary"},{label:"\u5220\u9664",key:"del"}]}),h=n({list:[{name:"name",type:"input",control:{modelValue:""},config:{},item:{label:"\u7528\u6237\u540D",showLabel:!1}}],form:{labelWidth:"",class:"",size:"",name:"form1636711196545"}}),i=n("getContentList");return(g,o)=>{const e=d("ak-list");return k(),b("div",R,[c(e,{ref:"tableListEl",requestUrl:i.value,searchData:h.value,tableData:a.value},null,8,["requestUrl","searchData","tableData"])])}}},E={class:"form-list-page"},H=t("\u67E5\u770B"),B=t("\u7F16\u8F91"),V=t("\u5220\u9664"),A={__name:"listDemo.md.vdpv_2",setup(l){const a=n(),h=n({config:{},columns:[{label:"\u52FE\u9009",prop:"__selection",type:"selection",width:"100px"},{label:"\u5E8F\u53F7",prop:"__index",type:"index",width:"100px"},{prop:"text",label:"\u6587\u672C\u6846",help:""},{label:"\u64CD\u4F5C",prop:"__control"}],controlBtn:[{label:"\u65B0\u589E",key:"add",type:"primary"},{label:"\u5220\u9664",key:"del"}]}),i=n({}),g=n("getContentList"),o=(e,_)=>{switch(_){case"show":break;case"edit":break;case"del":a.value.getListData();break}};return(e,_)=>{const r=d("el-button"),u=d("ak-list");return k(),b("div",E,[c(u,{ref_key:"tableListEl",ref:a,requestUrl:g.value,searchData:i.value,tableData:h.value},{__control:j(p=>[c(r,{link:"",onClick:v=>o(p.row.id,"show")},{default:j(()=>[H]),_:2},1032,["onClick"]),c(r,{link:"",onClick:v=>o(p.row.id,"edit")},{default:j(()=>[B]),_:2},1032,["onClick"]),c(r,{link:"",onClick:v=>o(p.row.id,"del")},{default:j(()=>[V]),_:2},1032,["onClick"])]),text:j(p=>[t(" \u4F7F\u7528prop\u7684\u503C\u4E3Aslot\uFF1A"+m(p.row.text),1)]),_:1},8,["requestUrl","searchData","tableData"])])}}},I={class:"form-list-page"},z=t("\u67E5\u770B"),N=t("\u7F16\u8F91"),K=t("\u5220\u9664"),S={__name:"listDemo.md.vdpv_3",setup(l){const a=n(),h=n({config:{},columns:[{label:"\u52FE\u9009",prop:"__selection",type:"selection",width:"100px"},{label:"\u5E8F\u53F7",prop:"__index",type:"index",width:"100px"},{prop:"text",label:"\u6587\u672C\u6846",help:""},{prop:"select",label:"\u6027\u522B",config:{tagList:{0:"info",1:"success"},dictKey:"select"}},{label:"\u64CD\u4F5C",prop:"__control"}],controlBtn:[{label:"\u65B0\u589E",key:"add",type:"primary"},{label:"\u5220\u9664",key:"del"}]}),i=n({}),g=n("getContentList"),o=(e,_)=>{switch(_){case"show":break;case"edit":break;case"del":a.value.getListData();break}};return(e,_)=>{const r=d("el-button"),u=d("ak-list");return k(),b("div",I,[c(u,{ref_key:"tableListEl",ref:a,requestUrl:g.value,searchData:i.value,tableData:h.value},{__control:j(p=>[c(r,{link:"",onClick:v=>o(p.row.id,"show")},{default:j(()=>[z]),_:2},1032,["onClick"]),c(r,{link:"",onClick:v=>o(p.row.id,"edit")},{default:j(()=>[N]),_:2},1032,["onClick"]),c(r,{link:"",onClick:v=>o(p.row.id,"del")},{default:j(()=>[K]),_:2},1032,["onClick"])]),text:j(p=>[t(" \u4F7F\u7528prop\u7684\u503C\u4E3Aslot\uFF1A"+m(p.row.text),1)]),_:1},8,["requestUrl","searchData","tableData"])])}}},w=D({components:{vdpv_0:$,vdpv_1:U,vdpv_2:A,vdpv_3:S},setup(l){const a=n(),h=n(),i=n(),g=n(),o=[a,h,i,g],e=x({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0});return{toggleCode:r=>{const u="vdpv_"+r;e[u+"Height"]===0?e[u+"Height"]=(o[r].value?o[r].value.offsetHeight:0)||0:e[u+"Height"]=0},...C(e),vdpv_0Ref:a,vdpv_1Ref:h,vdpv_2Ref:i,vdpv_3Ref:g}}});w.$vd={matter:{},toc:[{content:"List Demo",anchor:"list-demo",level:1},{content:"\u57FA\u7840\u7528\u6CD5",anchor:"\u57FA\u7840\u7528\u6CD5",level:1},{content:"\u7B5B\u9009\u8868\u5355",anchor:"\u7B5B\u9009\u8868\u5355",level:2},{content:"\u8868\u683Cslot",anchor:"\u8868\u683Cslot",level:2},{content:"\u4E2A\u6027\u5316\u8BBE\u7F6E",anchor:"\u4E2A\u6027\u5316\u8BBE\u7F6E",level:2}]};const W=w,T={class:"vuedoc"},X=f('<h1 id="list-demo" data-source-line="1"><a class="markdownIt-Anchor" href="#list-demo">#</a> List Demo</h1><h1 id="\u57FA\u7840\u7528\u6CD5" data-source-line="3"><a class="markdownIt-Anchor" href="#\u57FA\u7840\u7528\u6CD5">#</a> \u57FA\u7840\u7528\u6CD5</h1><pre style="display:none;"></pre>',3),Z={class:"vuedoc-demo"},F={class:"vuedoc-demo__inner"},G={class:"vuedoc-demo__preview"},J={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},M=f(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;form-list-page&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-list</span>
      <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;tableListEl&quot;</span>
      <span class="hljs-attr">:requestUrl</span>=<span class="hljs-string">&quot;requestUrl&quot;</span>
      <span class="hljs-attr">:searchData</span>=<span class="hljs-string">&quot;searchData&quot;</span>
      <span class="hljs-attr">:tableData</span>=<span class="hljs-string">&quot;tableData&quot;</span>
    &gt;</span>
      </span><span class="hljs-comment">&lt;!--&lt;template #__control=&quot;scope&quot;&gt;
        &lt;el-button link @click=&quot;btnClick(scope.row.id,&#39;show&#39;)&quot;&gt;\u67E5\u770B&lt;/el-button&gt;
        &lt;el-button link @click=&quot;btnClick(scope.row.id,&#39;edit&#39;)&quot;&gt;\u7F16\u8F91&lt;/el-button&gt;
        &lt;el-button link @click=&quot;btnClick(scope.row.id,&#39;del&#39;)&quot;&gt;\u5220\u9664&lt;/el-button&gt;
      &lt;/template&gt;--&gt;</span><span class="xml">
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-list</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-comment">// import {useRoute, useRouter} from &#39;vue-router&#39;</span>
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-comment">// const route = useRoute()</span>
  <span class="hljs-comment">// const router = useRouter()</span>
  <span class="hljs-comment">// const tableListEl = ref()</span>
  <span class="hljs-keyword">const</span> tableData = ref({
    <span class="hljs-attr">config</span>: {},
    <span class="hljs-attr">columns</span>: [
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u52FE\u9009&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;__selection&#39;</span>, <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;selection&#39;</span>, <span class="hljs-attr">width</span>: <span class="hljs-string">&#39;100px&#39;</span> },
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5E8F\u53F7&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;__index&#39;</span>, <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;index&#39;</span>, <span class="hljs-attr">width</span>: <span class="hljs-string">&#39;100px&#39;</span> },
      { <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;text&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6587\u672C\u6846&#39;</span>, <span class="hljs-attr">help</span>: <span class="hljs-string">&#39;&#39;</span> },
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u64CD\u4F5C&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;__control&#39;</span> }
    ],
    <span class="hljs-attr">controlBtn</span>: [
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u65B0\u589E&#39;</span>, <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;add&#39;</span>, <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;primary&#39;</span> },
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5220\u9664&#39;</span>, <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;del&#39;</span> }
    ]
  })
  <span class="hljs-keyword">const</span> searchData = ref({}) <span class="hljs-comment">// \u7B5B\u9009\u8868\u5355</span>
  <span class="hljs-keyword">const</span> requestUrl = ref(<span class="hljs-string">&#39;getContentList&#39;</span>)
  <span class="hljs-comment">/*const btnClick = (id, type) =&gt; {
    switch (type) {
      case &#39;show&#39;:
        break
      case &#39;edit&#39;:
        break
      case &#39;del&#39;:
        // tableListEl.value.getListData() // \u8C03\u7528\u7EC4\u4EF6\u5185\u90E8\u65B9\u6CD5\u91CD\u65B0\u62C9\u6570\u636E
        break
    }
  }*/</span>
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</span></code></pre></div>`,1),O=[M],P=s("h2",{id:"\u7B5B\u9009\u8868\u5355","data-source-line":"58"},[s("a",{class:"markdownIt-Anchor",href:"#\u7B5B\u9009\u8868\u5355"},"#"),t(" \u7B5B\u9009\u8868\u5355")],-1),Q=s("p",{"data-source-line":"59"},[t("\u4F7F\u7528"),s("code",null,"searchData"),t("\u6DFB\u52A0\u5217\u8868\u7B5B\u9009\u6761\u4EF6")],-1),Y=s("pre",{style:{display:"none"}},null,-1),ss={class:"vuedoc-demo"},as={class:"vuedoc-demo__inner"},ns={class:"vuedoc-demo__preview"},ls={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},ts=f(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;form-list-page&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-list</span>
      <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;tableListEl&quot;</span>
      <span class="hljs-attr">:requestUrl</span>=<span class="hljs-string">&quot;requestUrl&quot;</span>
      <span class="hljs-attr">:searchData</span>=<span class="hljs-string">&quot;searchData&quot;</span>
      <span class="hljs-attr">:tableData</span>=<span class="hljs-string">&quot;tableData&quot;</span>
    &gt;</span>
      </span><span class="hljs-comment">&lt;!--&lt;template #__control=&quot;scope&quot;&gt;
        &lt;el-button link @click=&quot;btnClick(scope.row.id,&#39;show&#39;)&quot;&gt;\u67E5\u770B&lt;/el-button&gt;
        &lt;el-button link @click=&quot;btnClick(scope.row.id,&#39;edit&#39;)&quot;&gt;\u7F16\u8F91&lt;/el-button&gt;
        &lt;el-button link @click=&quot;btnClick(scope.row.id,&#39;del&#39;)&quot;&gt;\u5220\u9664&lt;/el-button&gt;
      &lt;/template&gt;--&gt;</span><span class="xml">
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-list</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-comment">// import {useRoute, useRouter} from &#39;vue-router&#39;</span>
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-comment">// const route = useRoute()</span>
  <span class="hljs-comment">// const router = useRouter()</span>
  <span class="hljs-comment">// const tableListEl = ref()</span>
  <span class="hljs-keyword">const</span> tableData = ref({
    <span class="hljs-attr">config</span>: {},
    <span class="hljs-attr">columns</span>: [
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u52FE\u9009&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;__selection&#39;</span>, <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;selection&#39;</span>, <span class="hljs-attr">width</span>: <span class="hljs-string">&#39;100px&#39;</span> },
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5E8F\u53F7&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;__index&#39;</span>, <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;index&#39;</span>, <span class="hljs-attr">width</span>: <span class="hljs-string">&#39;100px&#39;</span> },
      { <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;text&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6587\u672C\u6846&#39;</span>, <span class="hljs-attr">help</span>: <span class="hljs-string">&#39;&#39;</span> },
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u64CD\u4F5C&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;__control&#39;</span> }
    ],
    <span class="hljs-attr">controlBtn</span>: [
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u65B0\u589E&#39;</span>, <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;add&#39;</span>, <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;primary&#39;</span> },
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5220\u9664&#39;</span>, <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;del&#39;</span> }
    ]
  })
  <span class="hljs-keyword">const</span> searchData = ref({
    <span class="hljs-attr">list</span>: [
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;name&#39;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;input&#39;</span>,
        <span class="hljs-attr">control</span>: {
          <span class="hljs-attr">modelValue</span>: <span class="hljs-string">&#39;&#39;</span>
        },
        <span class="hljs-attr">config</span>: {},
        <span class="hljs-attr">item</span>: {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u7528\u6237\u540D&#39;</span>,
          <span class="hljs-attr">showLabel</span>: <span class="hljs-literal">false</span>
        }
      }
    ],
    <span class="hljs-attr">form</span>: {
      <span class="hljs-attr">labelWidth</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">class</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">size</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;form1636711196545&#39;</span>
    }
  }) <span class="hljs-comment">// \u7B5B\u9009\u8868\u5355</span>
  <span class="hljs-keyword">const</span> requestUrl = ref(<span class="hljs-string">&#39;getContentList&#39;</span>)
  <span class="hljs-comment">/*const btnClick = (id, type) =&gt; {
    switch (type) {
      case &#39;show&#39;:
        break
      case &#39;edit&#39;:
        break
      case &#39;del&#39;:
        // tableListEl.value.getListData() // \u8C03\u7528\u7EC4\u4EF6\u5185\u90E8\u65B9\u6CD5\u91CD\u65B0\u62C9\u6570\u636E
        break
    }
  }*/</span>
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),ps=[ts],es=s("h2",{id:"\u8868\u683Cslot","data-source-line":"135"},[s("a",{class:"markdownIt-Anchor",href:"#\u8868\u683Cslot"},"#"),t(" \u8868\u683Cslot")],-1),cs=s("p",{"data-source-line":"137"},"\u4F7F\u7528prop\u4F5C\u4E3Aslot\u7684key",-1),os=s("pre",{style:{display:"none"}},null,-1),rs={class:"vuedoc-demo"},hs={class:"vuedoc-demo__inner"},is={class:"vuedoc-demo__preview"},js={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},ds=f(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;form-list-page&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-list</span>
      <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;tableListEl&quot;</span>
      <span class="hljs-attr">:requestUrl</span>=<span class="hljs-string">&quot;requestUrl&quot;</span>
      <span class="hljs-attr">:searchData</span>=<span class="hljs-string">&quot;searchData&quot;</span>
      <span class="hljs-attr">:tableData</span>=<span class="hljs-string">&quot;tableData&quot;</span>
    &gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">__control</span>=<span class="hljs-string">&quot;scope&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">link</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;btnClick(scope.row.id, &#39;show&#39;)&quot;</span>&gt;</span>\u67E5\u770B<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">link</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;btnClick(scope.row.id, &#39;edit&#39;)&quot;</span>&gt;</span>\u7F16\u8F91<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">link</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;btnClick(scope.row.id, &#39;del&#39;)&quot;</span>&gt;</span>\u5220\u9664<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">text</span>=<span class="hljs-string">&quot;scope&quot;</span>&gt;</span>
        \u4F7F\u7528prop\u7684\u503C\u4E3Aslot\uFF1A{{ scope.row.text }}
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-list</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-comment">// import {useRoute, useRouter} from &#39;vue-router&#39;</span>
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-comment">// const route = useRoute()</span>
  <span class="hljs-comment">// const router = useRouter()</span>
  <span class="hljs-keyword">const</span> tableListEl = ref()
  <span class="hljs-keyword">const</span> tableData = ref({
    <span class="hljs-attr">config</span>: {},
    <span class="hljs-attr">columns</span>: [
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u52FE\u9009&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;__selection&#39;</span>, <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;selection&#39;</span>, <span class="hljs-attr">width</span>: <span class="hljs-string">&#39;100px&#39;</span> },
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5E8F\u53F7&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;__index&#39;</span>, <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;index&#39;</span>, <span class="hljs-attr">width</span>: <span class="hljs-string">&#39;100px&#39;</span> },
      { <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;text&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6587\u672C\u6846&#39;</span>, <span class="hljs-attr">help</span>: <span class="hljs-string">&#39;&#39;</span> },
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u64CD\u4F5C&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;__control&#39;</span> }
    ],
    <span class="hljs-attr">controlBtn</span>: [
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u65B0\u589E&#39;</span>, <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;add&#39;</span>, <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;primary&#39;</span> },
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5220\u9664&#39;</span>, <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;del&#39;</span> }
    ]
  })
  <span class="hljs-keyword">const</span> searchData = ref({}) <span class="hljs-comment">// \u7B5B\u9009\u8868\u5355</span>
  <span class="hljs-keyword">const</span> requestUrl = ref(<span class="hljs-string">&#39;getContentList&#39;</span>)
  <span class="hljs-keyword">const</span> btnClick = <span class="hljs-function">(<span class="hljs-params">id, type</span>) =&gt;</span> {
    <span class="hljs-keyword">switch</span> (type) {
      <span class="hljs-keyword">case</span> <span class="hljs-string">&#39;show&#39;</span>:
        <span class="hljs-keyword">break</span>
      <span class="hljs-keyword">case</span> <span class="hljs-string">&#39;edit&#39;</span>:
        <span class="hljs-keyword">break</span>
      <span class="hljs-keyword">case</span> <span class="hljs-string">&#39;del&#39;</span>:
        tableListEl.value.getListData() <span class="hljs-comment">// \u8C03\u7528\u7EC4\u4EF6\u5185\u90E8\u65B9\u6CD5\u91CD\u65B0\u62C9\u6570\u636E</span>
        <span class="hljs-keyword">break</span>
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),gs=[ds],us=s("h2",{id:"\u4E2A\u6027\u5316\u8BBE\u7F6E","data-source-line":"195"},[s("a",{class:"markdownIt-Anchor",href:"#\u4E2A\u6027\u5316\u8BBE\u7F6E"},"#"),t(" \u4E2A\u6027\u5316\u8BBE\u7F6E")],-1),_s=s("p",{"data-source-line":"197"},[t("\u4F7F\u7528\u8868\u5217\u8BBE\u7F6E"),s("code",null,"dictKey"),t("\u53EF\u4EE5\u5339\u914D\u63A5\u53E3\u8FD4\u56DE\u7684"),s("code",null,"dict"),t("\u5B57\u5178\uFF0C\u8FD8\u53EF\u4EE5\u8BBE\u7F6E\u4F7F\u7528"),s("code",null,"tag"),t("\u6807\u7B7E\u6765\u663E\u793A")],-1),ms=s("pre",{style:{display:"none"}},null,-1),vs={class:"vuedoc-demo"},ks={class:"vuedoc-demo__inner"},bs={class:"vuedoc-demo__preview"},fs={ref:"vdpv_3Ref",class:"vuedoc-demo__sourceref"},ys=f(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;form-list-page&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-list</span>
      <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;tableListEl&quot;</span>
      <span class="hljs-attr">:requestUrl</span>=<span class="hljs-string">&quot;requestUrl&quot;</span>
      <span class="hljs-attr">:searchData</span>=<span class="hljs-string">&quot;searchData&quot;</span>
      <span class="hljs-attr">:tableData</span>=<span class="hljs-string">&quot;tableData&quot;</span>
    &gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">__control</span>=<span class="hljs-string">&quot;scope&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">link</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;btnClick(scope.row.id, &#39;show&#39;)&quot;</span>&gt;</span>\u67E5\u770B<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">link</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;btnClick(scope.row.id, &#39;edit&#39;)&quot;</span>&gt;</span>\u7F16\u8F91<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">link</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;btnClick(scope.row.id, &#39;del&#39;)&quot;</span>&gt;</span>\u5220\u9664<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">text</span>=<span class="hljs-string">&quot;scope&quot;</span>&gt;</span>
        \u4F7F\u7528prop\u7684\u503C\u4E3Aslot\uFF1A{{ scope.row.text }}
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-list</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-comment">// import {useRoute, useRouter} from &#39;vue-router&#39;</span>
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-comment">// const route = useRoute()</span>
  <span class="hljs-comment">// const router = useRouter()</span>
  <span class="hljs-keyword">const</span> tableListEl = ref()
  <span class="hljs-keyword">const</span> tableData = ref({
    <span class="hljs-attr">config</span>: {},
    <span class="hljs-attr">columns</span>: [
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u52FE\u9009&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;__selection&#39;</span>, <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;selection&#39;</span>, <span class="hljs-attr">width</span>: <span class="hljs-string">&#39;100px&#39;</span> },
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5E8F\u53F7&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;__index&#39;</span>, <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;index&#39;</span>, <span class="hljs-attr">width</span>: <span class="hljs-string">&#39;100px&#39;</span> },
      { <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;text&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6587\u672C\u6846&#39;</span>, <span class="hljs-attr">help</span>: <span class="hljs-string">&#39;&#39;</span> },
      {
        <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;select&#39;</span>,
        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6027\u522B&#39;</span>,
        <span class="hljs-attr">config</span>: {
          <span class="hljs-attr">tagList</span>: {
            <span class="hljs-number">0</span>: <span class="hljs-string">&#39;info&#39;</span>,
            <span class="hljs-number">1</span>: <span class="hljs-string">&#39;success&#39;</span>
          },
          <span class="hljs-attr">dictKey</span>: <span class="hljs-string">&#39;select&#39;</span>
        }
      },
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u64CD\u4F5C&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;__control&#39;</span> }
    ],
    <span class="hljs-attr">controlBtn</span>: [
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u65B0\u589E&#39;</span>, <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;add&#39;</span>, <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;primary&#39;</span> },
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5220\u9664&#39;</span>, <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;del&#39;</span> }
    ]
  })
  <span class="hljs-keyword">const</span> searchData = ref({}) <span class="hljs-comment">// \u7B5B\u9009\u8868\u5355</span>
  <span class="hljs-keyword">const</span> requestUrl = ref(<span class="hljs-string">&#39;getContentList&#39;</span>)
  <span class="hljs-keyword">const</span> btnClick = <span class="hljs-function">(<span class="hljs-params">id, type</span>) =&gt;</span> {
    <span class="hljs-keyword">switch</span> (type) {
      <span class="hljs-keyword">case</span> <span class="hljs-string">&#39;show&#39;</span>:
        <span class="hljs-keyword">break</span>
      <span class="hljs-keyword">case</span> <span class="hljs-string">&#39;edit&#39;</span>:
        <span class="hljs-keyword">break</span>
      <span class="hljs-keyword">case</span> <span class="hljs-string">&#39;del&#39;</span>:
        tableListEl.value.getListData() <span class="hljs-comment">// \u8C03\u7528\u7EC4\u4EF6\u5185\u90E8\u65B9\u6CD5\u91CD\u65B0\u62C9\u6570\u636E</span>
        <span class="hljs-keyword">break</span>
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),ws=[ys];function qs(l,a,h,i,g,o){const e=d("vdpv_0"),_=d("vdpv_1"),r=d("vdpv_2"),u=d("vdpv_3");return k(),b("div",T,[X,s("div",Z,[s("div",F,[s("div",G,[c(e)]),s("div",{style:y({height:l.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[s("div",J,O,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=p=>l.toggleCode(0))},m(l.vdpv_0Height>0?"hidden":"show"),1)])]),P,Q,Y,s("div",ss,[s("div",as,[s("div",ns,[c(_)]),s("div",{style:y({height:l.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[s("div",ls,ps,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=p=>l.toggleCode(1))},m(l.vdpv_1Height>0?"hidden":"show"),1)])]),es,cs,os,s("div",rs,[s("div",hs,[s("div",is,[c(r)]),s("div",{style:y({height:l.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[s("div",js,gs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=p=>l.toggleCode(2))},m(l.vdpv_2Height>0?"hidden":"show"),1)])]),us,_s,ms,s("div",vs,[s("div",ks,[s("div",bs,[c(u)]),s("div",{style:y({height:l.vdpv_3Height+"px"}),class:"vuedoc-demo__source"},[s("div",fs,ws,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[3]||(a[3]=p=>l.toggleCode(3))},m(l.vdpv_3Height>0?"hidden":"show"),1)])])])}const xs=q(W,[["render",qs]]);export{xs as default};
