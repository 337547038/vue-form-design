import{r as n,a as d,o as b,c as k,b as e,w as _,d as l,t as v,a3 as q,e as D,A as x,H as C,i as s,a6 as f,a4 as y}from"./index.f2a8992f.js";const L={class:"form-list-page"},U={__name:"listDemo.md.vdpv_0",setup(t){const a=n({config:{},columns:[{label:"\u52FE\u9009",prop:"__selection",type:"selection",width:"100px"},{label:"\u5E8F\u53F7",prop:"__index",type:"index",width:"100px"},{prop:"text",label:"\u6587\u672C\u6846",help:""},{label:"\u64CD\u4F5C",prop:"__control"}],controlBtn:[{label:"\u65B0\u589E",key:"add",type:"primary"},{label:"\u5220\u9664",key:"del"}]}),r=n({}),h=n("getContentList");return(i,c)=>{const o=d("ak-list");return b(),k("div",L,[e(o,{ref:"tableListEl",requestUrl:h.value,searchData:r.value,tableData:a.value},null,8,["requestUrl","searchData","tableData"])])}}},$={class:"form-list-page"},R={__name:"listDemo.md.vdpv_1",setup(t){const a=n({config:{},columns:[{label:"\u52FE\u9009",prop:"__selection",type:"selection",width:"100px"},{label:"\u5E8F\u53F7",prop:"__index",type:"index",width:"100px"},{prop:"text",label:"\u6587\u672C\u6846",help:""},{label:"\u64CD\u4F5C",prop:"__control"}],controlBtn:[{label:"\u65B0\u589E",key:"add",type:"primary"},{label:"\u5220\u9664",key:"del"}]}),r=n({list:[{name:"name",type:"input",control:{modelValue:""},config:{},item:{label:"\u7528\u6237\u540D",showLabel:!1}}],form:{labelWidth:"",class:"",size:"",name:"form1636711196545"}}),h=n("getContentList");return(i,c)=>{const o=d("ak-list");return b(),k("div",$,[e(o,{ref:"tableListEl",requestUrl:h.value,searchData:r.value,tableData:a.value},null,8,["requestUrl","searchData","tableData"])])}}},E={class:"form-list-page"},H=l("\u67E5\u770B"),B=l("\u7F16\u8F91"),A=l("\u5220\u9664"),I={__name:"listDemo.md.vdpv_2",setup(t){const a=n(),r=n({config:{},columns:[{label:"\u52FE\u9009",prop:"__selection",type:"selection",width:"100px"},{label:"\u5E8F\u53F7",prop:"__index",type:"index",width:"100px"},{prop:"text",label:"\u6587\u672C\u6846",help:""},{label:"\u64CD\u4F5C",prop:"__control"}],controlBtn:[{label:"\u65B0\u589E",key:"add",type:"primary"},{label:"\u5220\u9664",key:"del"}]}),h=n({}),i=n("getContentList"),c=(o,j)=>{switch(j){case"show":break;case"edit":break;case"del":a.value.getListData();break}};return(o,j)=>{const g=d("el-button"),m=d("ak-list");return b(),k("div",E,[e(m,{ref_key:"tableListEl",ref:a,requestUrl:i.value,searchData:h.value,tableData:r.value},{__control:_(p=>[e(g,{link:"",onClick:u=>c(p.row.id,"show")},{default:_(()=>[H]),_:2},1032,["onClick"]),e(g,{link:"",onClick:u=>c(p.row.id,"edit")},{default:_(()=>[B]),_:2},1032,["onClick"]),e(g,{link:"",onClick:u=>c(p.row.id,"del")},{default:_(()=>[A]),_:2},1032,["onClick"])]),text:_(p=>[l(" \u4F7F\u7528prop\u7684\u503C\u4E3Aslot\uFF1A"+v(p.row.text),1)]),_:1},8,["requestUrl","searchData","tableData"])])}}},V={class:"form-list-page"},K=l("\u67E5\u770B"),N=l("\u7F16\u8F91"),z=l("\u5220\u9664"),S={__name:"listDemo.md.vdpv_3",setup(t){const a=n(),r=n({config:{},columns:[{label:"\u52FE\u9009",prop:"__selection",type:"selection",width:"100px"},{label:"\u5E8F\u53F7",prop:"__index",type:"index",width:"100px"},{prop:"text",label:"\u6587\u672C\u6846",help:""},{prop:"radio",label:"\u6027\u522B",config:{tagList:{0:"info",1:"success"},dictKey:"select"}},{prop:"status",label:"\u72B6\u6001",config:{dictKey:"select"}},{label:"\u64CD\u4F5C",prop:"__control"}],controlBtn:[{label:"\u65B0\u589E",key:"add",type:"primary"},{label:"\u5220\u9664",key:"del"}]}),h=n({}),i=n("getContentList"),c=(o,j)=>{switch(j){case"show":break;case"edit":break;case"del":a.value.getListData();break}};return(o,j)=>{const g=d("el-button"),m=d("ak-list");return b(),k("div",V,[e(m,{ref_key:"tableListEl",ref:a,requestUrl:i.value,searchData:h.value,tableData:r.value},{__control:_(p=>[e(g,{link:"",onClick:u=>c(p.row.id,"show")},{default:_(()=>[K]),_:2},1032,["onClick"]),e(g,{link:"",onClick:u=>c(p.row.id,"edit")},{default:_(()=>[N]),_:2},1032,["onClick"]),e(g,{link:"",onClick:u=>c(p.row.id,"del")},{default:_(()=>[z]),_:2},1032,["onClick"])]),text:_(p=>[l(" \u4F7F\u7528prop\u7684\u503C\u4E3Aslot\uFF1A"+v(p.row.text),1)]),_:1},8,["requestUrl","searchData","tableData"])])}}},T={class:"form-list-page"},F={__name:"listDemo.md.vdpv_4",setup(t){const a=n({tableProps:{},columns:[{label:"\u52FE\u9009",prop:"__selection",type:"selection",width:"100px"},{label:"\u5E8F\u53F7",prop:"__index",type:"index",width:"100px"},{prop:"text",label:"\u6587\u672C\u6846",help:""},{label:"\u64CD\u4F5C",prop:"__control"}],controlBtn:[{label:"\u65B0\u589E",key:"add",type:"primary"},{label:"\u5220\u9664",key:"del"}],tree:{show:!0,name:"tree",request:"get",sourceFun:"/getTree",beforeRequest:(i,c)=>i}}),r=n({}),h=n("getContentList");return(i,c)=>{const o=d("ak-list");return b(),k("div",T,[e(o,{ref:"tableListEl",requestUrl:h.value,searchData:r.value,tableData:a.value},null,8,["requestUrl","searchData","tableData"])])}}},w=D({components:{vdpv_0:U,vdpv_1:R,vdpv_2:I,vdpv_3:S,vdpv_4:F},setup(t){const a=n(),r=n(),h=n(),i=n(),c=n(),o=[a,r,h,i,c],j=x({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0,vdpv_4Height:0});return{toggleCode:m=>{const p="vdpv_"+m;j[p+"Height"]===0?j[p+"Height"]=(o[m].value?o[m].value.offsetHeight:0)||0:j[p+"Height"]=0},...C(j),vdpv_0Ref:a,vdpv_1Ref:r,vdpv_2Ref:h,vdpv_3Ref:i,vdpv_4Ref:c}}});w.$vd={matter:{},toc:[{content:"List Demo",anchor:"list-demo",level:1},{content:"\u57FA\u7840\u7528\u6CD5",anchor:"\u57FA\u7840\u7528\u6CD5",level:1},{content:"\u7B5B\u9009\u8868\u5355",anchor:"\u7B5B\u9009\u8868\u5355",level:2},{content:"\u8868\u683Cslot",anchor:"\u8868\u683Cslot",level:2},{content:"\u4E2A\u6027\u5316\u8BBE\u7F6E",anchor:"\u4E2A\u6027\u5316\u8BBE\u7F6E",level:2},{content:"\u5DE6\u4FA7\u680F\u6811\u9009\u62E9",anchor:"\u5DE6\u4FA7\u680F\u6811\u9009\u62E9",level:2}]};const P=w,W={class:"vuedoc"},G=y('<h1 id="list-demo" data-source-line="1"><a class="markdownIt-Anchor" href="#list-demo">#</a> List Demo</h1><h1 id="\u57FA\u7840\u7528\u6CD5" data-source-line="3"><a class="markdownIt-Anchor" href="#\u57FA\u7840\u7528\u6CD5">#</a> \u57FA\u7840\u7528\u6CD5</h1><pre style="display:none;"></pre>',3),J={class:"vuedoc-demo"},M={class:"vuedoc-demo__inner"},O={class:"vuedoc-demo__preview"},Q={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},X=y(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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
</span></code></pre></div>`,1),Y=[X],Z=s("h2",{id:"\u7B5B\u9009\u8868\u5355","data-source-line":"58"},[s("a",{class:"markdownIt-Anchor",href:"#\u7B5B\u9009\u8868\u5355"},"#"),l(" \u7B5B\u9009\u8868\u5355")],-1),ss=s("p",{"data-source-line":"59"},[l("\u4F7F\u7528"),s("code",null,"searchData"),l("\u6DFB\u52A0\u5217\u8868\u7B5B\u9009\u6761\u4EF6")],-1),as=s("pre",{style:{display:"none"}},null,-1),ns={class:"vuedoc-demo"},ts={class:"vuedoc-demo__inner"},ls={class:"vuedoc-demo__preview"},ps={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},es=y(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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

</span></code></pre></div>`,1),cs=[es],os=s("h2",{id:"\u8868\u683Cslot","data-source-line":"135"},[s("a",{class:"markdownIt-Anchor",href:"#\u8868\u683Cslot"},"#"),l(" \u8868\u683Cslot")],-1),rs=s("p",{"data-source-line":"137"},"\u4F7F\u7528prop\u4F5C\u4E3Aslot\u7684key",-1),hs=s("pre",{style:{display:"none"}},null,-1),is={class:"vuedoc-demo"},js={class:"vuedoc-demo__inner"},ds={class:"vuedoc-demo__preview"},gs={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},us=y(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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

</span></code></pre></div>`,1),_s=[us],ms=s("h2",{id:"\u4E2A\u6027\u5316\u8BBE\u7F6E","data-source-line":"195"},[s("a",{class:"markdownIt-Anchor",href:"#\u4E2A\u6027\u5316\u8BBE\u7F6E"},"#"),l(" \u4E2A\u6027\u5316\u8BBE\u7F6E")],-1),vs=s("p",{"data-source-line":"197"},[l("\u4F7F\u7528\u8868\u5217\u8BBE\u7F6E"),s("code",null,"dictKey"),l("\u53EF\u4EE5\u5339\u914D\u63A5\u53E3\u8FD4\u56DE\u7684"),s("code",null,"dict"),l("\u5B57\u5178\uFF0C\u8FD8\u53EF\u4EE5\u8BBE\u7F6E\u4F7F\u7528"),s("code",null,"tag"),l("\u6807\u7B7E\u6765\u663E\u793A")],-1),bs=s("pre",{style:{display:"none"}},null,-1),ks={class:"vuedoc-demo"},ys={class:"vuedoc-demo__inner"},fs={class:"vuedoc-demo__preview"},ws={ref:"vdpv_3Ref",class:"vuedoc-demo__sourceref"},qs=y(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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
        <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;radio&#39;</span>,
        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6027\u522B&#39;</span>,
        <span class="hljs-attr">config</span>: {
          <span class="hljs-attr">tagList</span>: {
            <span class="hljs-number">0</span>: <span class="hljs-string">&#39;info&#39;</span>,
            <span class="hljs-number">1</span>: <span class="hljs-string">&#39;success&#39;</span>
          },
          <span class="hljs-attr">dictKey</span>: <span class="hljs-string">&#39;select&#39;</span>
        }
      },
      {
        <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;status&#39;</span>,
        <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u72B6\u6001&#39;</span>,
        <span class="hljs-attr">config</span>: {
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

</span></code></pre></div>`,1),Ds=[qs],xs=s("h2",{id:"\u5DE6\u4FA7\u680F\u6811\u9009\u62E9","data-source-line":"273"},[s("a",{class:"markdownIt-Anchor",href:"#\u5DE6\u4FA7\u680F\u6811\u9009\u62E9"},"#"),l(" \u5DE6\u4FA7\u680F\u6811\u9009\u62E9")],-1),Cs=s("pre",{style:{display:"none"}},null,-1),Ls={class:"vuedoc-demo"},Us={class:"vuedoc-demo__inner"},$s={class:"vuedoc-demo__preview"},Rs={ref:"vdpv_4Ref",class:"vuedoc-demo__sourceref"},Es=y(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
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
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">const</span> tableData = ref({
    <span class="hljs-attr">tableProps</span>: {},
    <span class="hljs-attr">columns</span>: [
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u52FE\u9009&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;__selection&#39;</span>, <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;selection&#39;</span>, <span class="hljs-attr">width</span>: <span class="hljs-string">&#39;100px&#39;</span> },
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5E8F\u53F7&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;__index&#39;</span>, <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;index&#39;</span>, <span class="hljs-attr">width</span>: <span class="hljs-string">&#39;100px&#39;</span> },
      { <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;text&#39;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u6587\u672C\u6846&#39;</span>, <span class="hljs-attr">help</span>: <span class="hljs-string">&#39;&#39;</span> },
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u64CD\u4F5C&#39;</span>, <span class="hljs-attr">prop</span>: <span class="hljs-string">&#39;__control&#39;</span> }
    ],
    <span class="hljs-attr">controlBtn</span>: [
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u65B0\u589E&#39;</span>, <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;add&#39;</span>, <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;primary&#39;</span> },
      { <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5220\u9664&#39;</span>, <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;del&#39;</span> }
    ],
    <span class="hljs-attr">tree</span>: {
      <span class="hljs-attr">show</span>: <span class="hljs-literal">true</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;tree&#39;</span>,
      <span class="hljs-attr">request</span>: <span class="hljs-string">&#39;get&#39;</span>,
      <span class="hljs-attr">sourceFun</span>: <span class="hljs-string">&#39;/getTree&#39;</span>,
      <span class="hljs-attr">beforeRequest</span>: <span class="hljs-function">(<span class="hljs-params">data, route</span>) =&gt;</span> {
        <span class="hljs-keyword">return</span> data
      }
    }
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

</span></code></pre></div>`,1),Hs=[Es];function Bs(t,a,r,h,i,c){const o=d("vdpv_0"),j=d("vdpv_1"),g=d("vdpv_2"),m=d("vdpv_3"),p=d("vdpv_4");return b(),k("div",W,[G,s("div",J,[s("div",M,[s("div",O,[e(o)]),s("div",{style:f({height:t.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[s("div",Q,Y,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=u=>t.toggleCode(0))},v(t.vdpv_0Height>0?"hidden":"show"),1)])]),Z,ss,as,s("div",ns,[s("div",ts,[s("div",ls,[e(j)]),s("div",{style:f({height:t.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[s("div",ps,cs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=u=>t.toggleCode(1))},v(t.vdpv_1Height>0?"hidden":"show"),1)])]),os,rs,hs,s("div",is,[s("div",js,[s("div",ds,[e(g)]),s("div",{style:f({height:t.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[s("div",gs,_s,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=u=>t.toggleCode(2))},v(t.vdpv_2Height>0?"hidden":"show"),1)])]),ms,vs,bs,s("div",ks,[s("div",ys,[s("div",fs,[e(m)]),s("div",{style:f({height:t.vdpv_3Height+"px"}),class:"vuedoc-demo__source"},[s("div",ws,Ds,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[3]||(a[3]=u=>t.toggleCode(3))},v(t.vdpv_3Height>0?"hidden":"show"),1)])]),xs,Cs,s("div",Ls,[s("div",Us,[s("div",$s,[e(p)]),s("div",{style:f({height:t.vdpv_4Height+"px"}),class:"vuedoc-demo__source"},[s("div",Rs,Hs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[4]||(a[4]=u=>t.toggleCode(4))},v(t.vdpv_4Height>0?"hidden":"show"),1)])])])}const Is=q(P,[["render",Bs]]);export{Is as default};
