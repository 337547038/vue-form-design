import{D as o,d as c,H as r,L as h,o as i,c as d,G as u}from"./index.dccdc87d.js";const l=c({components:{},setup(e){const t=[],s=r({});return{toggleCode:a=>{const n="vdpv_"+a;s[n+"Height"]===0?s[n+"Height"]=(t[a].value?t[a].value.offsetHeight:0)||0:s[n+"Height"]=0},...h(s)}}});l.$vd={matter:{},toc:[{content:"\u5217\u8868\u9875\u8BBE\u8BA1",anchor:"\u5217\u8868\u9875\u8BBE\u8BA1",level:1},{content:"\u6DFB\u52A0\u8868\u683C\u5217\u5B57\u6BB5",anchor:"\u6DFB\u52A0\u8868\u683C\u5217\u5B57\u6BB5",level:2},{content:"\u64CD\u4F5C\u6309\u94AE",anchor:"\u64CD\u4F5C\u6309\u94AE",level:2},{content:"\u5217\u8868\u4E0A\u65B9\u6309\u94AE",anchor:"\u5217\u8868\u4E0A\u65B9\u6309\u94AE",level:3},{content:"\u5217\u8868\u64CD\u4F5C\u6309\u94AE",anchor:"\u5217\u8868\u64CD\u4F5C\u6309\u94AE",level:3},{content:"\u5B57\u6BB5\u5C5E\u6027",anchor:"\u5B57\u6BB5\u5C5E\u6027",level:2},{content:"\u6570\u636E\u5217\u8868\u914D\u7F6E",anchor:"\u6570\u636E\u5217\u8868\u914D\u7F6E",level:2},{content:"\u63A5\u53E3\u6570\u636E\u4E8B\u4EF6",anchor:"\u63A5\u53E3\u6570\u636E\u4E8B\u4EF6",level:3}]};const j=l,g={class:"vuedoc"},q=u(`<h1 id="\u5217\u8868\u9875\u8BBE\u8BA1" data-source-line="1"><a class="markdownIt-Anchor" href="#\u5217\u8868\u9875\u8BBE\u8BA1">#</a> \u5217\u8868\u9875\u8BBE\u8BA1</h1><p data-source-line="3">\u4F7F\u7528\u65B9\u6CD5\u89C1\u7CFB\u7EDF\u7BA1\u7406\u5404\u680F\u76EE\u5217\u8868</p><h2 id="\u6DFB\u52A0\u8868\u683C\u5217\u5B57\u6BB5" data-source-line="5"><a class="markdownIt-Anchor" href="#\u6DFB\u52A0\u8868\u683C\u5217\u5B57\u6BB5">#</a> \u6DFB\u52A0\u8868\u683C\u5217\u5B57\u6BB5</h2><p data-source-line="7">\u5982\u9009\u62E9\u4E86\u8868\u5355\u6570\u636E\u6E90\uFF0C\u53EF\u4ECE\u8FD9\u91CC\u5FEB\u901F\u9009\u62E9\u5F53\u524D\u8868\u5355\u53EF\u7528\u5B57\u6BB5\uFF0C\u5176\u4ED6\u66F4\u591A\u5B57\u6BB5\u53EF\u76F4\u63A5\u70B9\u51FB<code>\u751F\u6210\u811A\u672C\u9884\u89C8</code>\u7F16\u8F91\u3002</p><p data-source-line="9">\u6CE8\u610F\uFF1A\u5982\u9700\u4F7F\u7528\u64CD\u4F5C\u680F\u5185\u7F6E\u64CD\u4F5C\u6309\u94AE\uFF0C\u64CD\u4F5C\u680F\u7684prop\u5FC5\u987B\u4E3A<code>__control</code>\uFF0C\u5982\uFF1A</p><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-json hljs--one-dark"><code>{
  <span class="hljs-attr">&quot;label&quot;</span>: <span class="hljs-string">&quot;\u64CD\u4F5C&quot;</span>,
  <span class="hljs-attr">&quot;prop&quot;</span>: <span class="hljs-string">&quot;__control&quot;</span>
}
</code></pre><p data-source-line="18">\u5185\u7F6E\u6309\u94AE\u53CA\u4E8B\u4EF6\u53EF\u70B9\u51FB\u64CD\u4F5C\u4E0B\u9762\u7684\u8BBE\u7F6E\uFF0C\u5728\u5B57\u6BB5\u5C5E\u6027\u91CC\u7F16\u8F91\u4E8B\u4EF6\u6309\u94AE\u3002\u5176\u4E2Dkey=edit/del\u4F1A\u6267\u884C\u5185\u7F6E\u4E8B\u4EF6</p><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-javascript hljs--one-dark"><code>opt = [
  {
    <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u8BE6\u60C5&quot;</span>,
    <span class="hljs-attr">click</span>: <span class="hljs-function">(<span class="hljs-params">row</span>) =&gt;</span> {
      <span class="hljs-comment">// \u8FD9\u91CC\u662F\u903B\u8F91\u4EE3\u7801\uFF0Crow\u5F53\u524D\u884C\u6570\u636E</span>
    }
  },
  {
    <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u7F16\u8F91&quot;</span>,
    <span class="hljs-attr">key</span>: <span class="hljs-string">&quot;edit&quot;</span>
  },
  {
    <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u5220\u9664&quot;</span>,
    <span class="hljs-attr">key</span>: <span class="hljs-string">&quot;del&quot;</span>
  }]
</code></pre><h2 id="\u64CD\u4F5C\u6309\u94AE" data-source-line="38"><a class="markdownIt-Anchor" href="#\u64CD\u4F5C\u6309\u94AE">#</a> \u64CD\u4F5C\u6309\u94AE</h2><p data-source-line="40">\u70B9\u51FB\u5217\u8868\u9875\u6309\u94AE\u4F1A\u89E6\u53D1<code>btnClick</code>\u4E8B\u4EF6</p><h3 id="\u5217\u8868\u4E0A\u65B9\u6309\u94AE" data-source-line="42"><a class="markdownIt-Anchor" href="#\u5217\u8868\u4E0A\u65B9\u6309\u94AE">#</a> \u5217\u8868\u4E0A\u65B9\u6309\u94AE</h3><p data-source-line="44">\u663E\u793A\u4E8E\u5217\u8868\u5DE6\u4E0A\u65B9\u7684\u6309\u94AE\uFF0C\u53EF\u4EE5\u7F16\u8F91\u6846\u7F16\u8F91\u4EE3\u7801\uFF0C\u5176\u4E2Dkey=add/del\u4F1A\u6267\u884C\u5185\u7F6E\u4E8B\u4EF6\u3002\u5982\uFF1A</p><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-javascript hljs--one-dark"><code>opt = [
  {
    <span class="hljs-attr">label</span>: <span class="hljs-string">&#39;\u5BFC\u51FA&#39;</span>,
    <span class="hljs-attr">click</span>: <span class="hljs-function">() =&gt;</span> {
      <span class="hljs-comment">// \u5BFC\u51FA\u903B\u8F91</span>
    }
  },
  {
    <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u65B0\u589E&quot;</span>,
    <span class="hljs-attr">key</span>: <span class="hljs-string">&quot;add&quot;</span>, <span class="hljs-comment">// add\u5230\u65B0\u589E\u9875</span>
    <span class="hljs-attr">type</span>: <span class="hljs-string">&quot;primary&quot;</span>,
    <span class="hljs-attr">size</span>: <span class="hljs-string">&quot;small&quot;</span>,
    <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;plus&quot;</span>
  },
  {
    <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u6279\u91CF\u5220\u9664&quot;</span>,
    <span class="hljs-attr">key</span>: <span class="hljs-string">&quot;del&quot;</span>, <span class="hljs-comment">// \u6267\u884C\u5185\u7F6E\u5220\u9664\u4E8B\u4EF6</span>
    <span class="hljs-attr">type</span>: <span class="hljs-string">&quot;danger&quot;</span>,
    <span class="hljs-attr">size</span>: <span class="hljs-string">&quot;small&quot;</span>,
    <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;delete&quot;</span>,
    <span class="hljs-attr">click</span>: <span class="hljs-function">() =&gt;</span> {
      <span class="hljs-comment">// \u6DFB\u52A0\u4E86add/del\u65F6\uFF0C\u540C\u65F6\u53EF\u4EE5\u4F5C\u76F8\u5173\u903B\u8F91\u5224\u65AD\u3002return false\u53EF\u963B\u6B62\u4E8B\u4EF6</span>
    }
  }]
</code></pre><h3 id="\u5217\u8868\u64CD\u4F5C\u6309\u94AE" data-source-line="73"><a class="markdownIt-Anchor" href="#\u5217\u8868\u64CD\u4F5C\u6309\u94AE">#</a> \u5217\u8868\u64CD\u4F5C\u6309\u94AE</h3><p data-source-line="75">\u5217\u8868\u64CD\u4F5C\u5217\u6309\u94AE\uFF0C\u5982\u7F16\u8F91\u3001\u67E5\u770B\u3001\u5220\u9664\u7B49\u3002\u5176\u4E2Dkey=edit/del\u4F1A\u6267\u884C\u5185\u7F6E\u4E8B\u4EF6\uFF0C\u65B9\u6CD5\u540C\u5217\u8868\u4E0A\u65B9\u6309\u94AE\u3002</p><p data-source-line="77"><strong>visible</strong></p><p data-source-line="79">\u8BE5\u5C5E\u6027\u53EF\u7528\u4E8E\u6839\u636E\u5F53\u524D\u884C\u6570\u636E\u51B3\u5B9A\u662F\u5426\u663E\u793A\uFF0C\u4F8B\u5982\u5F53\u6570\u636Estatus=1\u65F6\u663E\u793A\u6309\u94AE\u4E3A\u7981\u7528\uFF0C=0\u65F6\u663E\u793A\u542F\u7528\u3002\u652F\u6301\u8FD0\u7B26\u4E32\uFF0C\u5176\u4E2D$\u4E3A\u5F53\u524D\u884C\u6570\u636E</p><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-javascript hljs--one-dark"><code>opt = [
  {
    <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u67E5\u770B&quot;</span>,
    <span class="hljs-attr">click</span>:<span class="hljs-function">(<span class="hljs-params">row</span>)=&gt;</span>{
      <span class="hljs-comment">// \u67E5\u770B\u903B\u8F91\uFF0Crow\u4E3A\u5F53\u524D\u884C\u6570\u636E</span>
    },
    <span class="hljs-attr">visible</span>:<span class="hljs-string">&#39;$.status===1&#39;</span> <span class="hljs-comment">// \u6839\u636E\u6761\u4EF6\u662F\u5426\u663E\u793A\u5F53\u524D\u884C\u6309\u94AE\uFF0C\u5373\u884C\u6570\u636Estatus=1\u65F6\u53EF\u663E\u793A\u67E5\u770B</span>
  },
  {
    <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u7F16\u8F91&quot;</span>,
    <span class="hljs-attr">key</span>: <span class="hljs-string">&quot;edit&quot;</span> <span class="hljs-comment">// \u6253\u5F00\u7F16\u8F91\u9875</span>
  },
  {
    <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u5220\u9664&quot;</span>,
    <span class="hljs-attr">key</span>: <span class="hljs-string">&quot;del&quot;</span>, <span class="hljs-comment">// \u6267\u884C\u5220\u9664\u64CD\u4F5C</span>
    <span class="hljs-attr">tip</span>:<span class="hljs-string">&#39;\u786E\u5B9A\u5220\u9664\u63D0\u793A&#39;</span>
  }]
</code></pre><h2 id="\u5B57\u6BB5\u5C5E\u6027" data-source-line="101"><a class="markdownIt-Anchor" href="#\u5B57\u6BB5\u5C5E\u6027">#</a> \u5B57\u6BB5\u5C5E\u6027</h2><h2 id="\u6570\u636E\u5217\u8868\u914D\u7F6E" data-source-line="103"><a class="markdownIt-Anchor" href="#\u6570\u636E\u5217\u8868\u914D\u7F6E">#</a> \u6570\u636E\u5217\u8868\u914D\u7F6E</h2><p data-source-line="105"><strong>\u2022\u6240\u5C5E\u8868\u5355</strong></p><p data-source-line="107">\u5373\u5F53\u524D\u6570\u636E\u5217\u8868\u7684\u6570\u636E\u6765\u6E90\u4E8E\u54EA\u4E2A\u8868\u5355</p><p data-source-line="109"><strong>\u2022\u6A2A\u5411\u6EDA\u52A8\u56FA\u5B9A\u5728\u5E95\u90E8</strong></p><p data-source-line="111">\u8868\u683C\u4E3A\u5C55\u5F00\u884C\u548C\u6811\u5F62\u6570\u636E\u4E0E\u61D2\u52A0\u8F7D\u65F6\uFF0C\u5E94\u8BBE\u7F6E\u4E3Afalse</p><p data-source-line="113">\u6548\u679C\u53EF\u53C2\u8003\u7CFB\u7EDF\u7BA1\u7406\u5404\u680F\u76EE</p><p data-source-line="115"><strong>\u2022\u53EF\u6298\u53E0\u67E5\u8BE2\u8868\u5355</strong></p><p data-source-line="117">\u5217\u8868\u4F1A\u5C55\u793A\u6761\u4EF6\u67E5\u8BE2\u6309\u94AE\uFF0C\u53EF\u6536\u8D77\u6216\u5C55\u4E0B\u67E5\u8BE2\u6761\u4EF6</p><p data-source-line="119"><strong>\u2022\u64CD\u4F5C\u5217\u6309\u94AE\u4E0B\u62C9</strong></p><p data-source-line="121">\u64CD\u4F5C\u680F\u5C55\u793A\u66F4\u591A\u4E0B\u62C9\u6309\u94AE\uFF0C\u8BE6\u89C1<a href="/#/design/dataList/list">\u5217\u8868\u9875\u8BBE\u8BA1\u7BA1\u7406</a></p><p data-source-line="123"><strong>\u2022\u5F00\u542F\u4FA7\u680F\u6811</strong></p><h3 id="\u63A5\u53E3\u6570\u636E\u4E8B\u4EF6" data-source-line="125"><a class="markdownIt-Anchor" href="#\u63A5\u53E3\u6570\u636E\u4E8B\u4EF6">#</a> \u63A5\u53E3\u6570\u636E\u4E8B\u4EF6</h3><p data-source-line="127">\u540C\u8868\u5355\u8BBE\u8BA1\u4E8B\u4EF6\uFF0C\u53EF\u53C2\u8003\u8868\u5355\u8BBE\u8BA1</p>`,36),m=[q];function k(e,t,s,p,a,n){return i(),d("div",g,m)}const _=o(j,[["render",k]]);export{_ as default};
