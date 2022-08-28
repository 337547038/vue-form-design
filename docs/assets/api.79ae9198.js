import{V as o,d as l,z as p,G as c,o as u,c as h,W as i}from"./index.d7c31da2.js";const d=l({components:{},setup(e){const n=[],t=p({});return{toggleCode:s=>{const a="vdpv_"+s;t[a+"Height"]===0?t[a+"Height"]=(n[s].value?n[s].value.offsetHeight:0)||0:t[a+"Height"]=0},...c(t)}}});d.$vd={matter:{},toc:[{content:"API \u63A5\u53E3",anchor:"api-\u63A5\u53E3",level:1},{content:"\u8868\u5355\u7BA1\u7406",anchor:"\u8868\u5355\u7BA1\u7406",level:2},{content:"\u65B0\u589E/\u4FEE\u6539",anchor:"\u65B0\u589E\u4FEE\u6539",level:3},{content:"\u6570\u636E\u5217\u8868",anchor:"\u6570\u636E\u5217\u8868",level:3},{content:"\u4FEE\u6539\u6570\u636E\u72B6\u6001",anchor:"\u4FEE\u6539\u6570\u636E\u72B6\u6001",level:3},{content:"\u6839\u636E id \u83B7\u53D6\u6570\u636E",anchor:"\u6839\u636E-id-\u83B7\u53D6\u6570\u636E",level:3},{content:"\u6839\u636E id \u5220\u9664",anchor:"\u6839\u636E-id-\u5220\u9664",level:3},{content:"\u8868\u5355\u5185\u5BB9\u6570\u636E\u8868\uFF08\u6570\u636E\u6F14\u793A\u8868\uFF09",anchor:"\u8868\u5355\u5185\u5BB9\u6570\u636E\u8868\u6570\u636E\u6F14\u793A\u8868",level:2},{content:"\u65B0\u589E/\u4FEE\u6539",anchor:"\u65B0\u589E\u4FEE\u6539-2",level:3},{content:"\u53EF\u521B\u5EFA\u8868\u5355\u6570\u636E\u6E90",anchor:"\u53EF\u521B\u5EFA\u8868\u5355\u6570\u636E\u6E90",level:2}]};const j=d,q={class:"vuedoc"},m=i(`<h1 id="api-\u63A5\u53E3" data-source-line="1"><a class="markdownIt-Anchor" href="#api-\u63A5\u53E3">#</a> API \u63A5\u53E3</h1><h2 id="\u8868\u5355\u7BA1\u7406" data-source-line="3"><a class="markdownIt-Anchor" href="#\u8868\u5355\u7BA1\u7406">#</a> \u8868\u5355\u7BA1\u7406</h2><p data-source-line="5">\u7528\u4E8E\u4FDD\u5B58\u521B\u5EFA\u8BBE\u8BA1\u7684\u8868\u5355\uFF0C\u63D0\u4F9B\u6570\u636E\u589E\u52A0\u3001\u4FEE\u6539\u3001\u67E5\u770B\u3001\u5220\u9664\u7B49\u64CD\u4F5C\u3002\u8868\u5404\u5B57\u6BB5\u8BF4\u660E\uFF1A</p><table data-source-line="7"><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th><th>\u652F\u6301\u641C\u7D22</th></tr></thead><tbody><tr><td>id</td><td>int</td><td>-</td><td>\u81EA\u589E id</td><td>-</td></tr><tr><td>formId</td><td>int</td><td>-</td><td>\u8BBE\u8BA1\u8868\u5355\u9009\u62E9\u7684\u6570\u636E\u6E90 id</td><td>-</td></tr><tr><td>name</td><td>varchar</td><td>\u2713</td><td>\u8BBE\u8BA1\u7684\u8868\u5355\u540D\u79F0</td><td>\u2713</td></tr><tr><td>type</td><td>int</td><td>-</td><td>\u8868\u5355\u548C\u5217\u8868\u4E24\u79CD\u7C7B\u578B 1 \u8868\u5355 2 \u5217\u8868</td><td>\u2713</td></tr><tr><td>formData</td><td>text</td><td>-</td><td>\u8BBE\u8BA1\u751F\u6210\u7684\u8868\u5355\u6570\u636E</td><td>-</td></tr><tr><td>searchData</td><td>text</td><td>-</td><td>\u8BBE\u8BA1\u751F\u6210\u7684\u8868\u5355\u5217\u8868\u641C\u7D22\u6570\u636E</td><td>-</td></tr><tr><td>tableData</td><td>text</td><td>-</td><td>\u8BBE\u8BA1\u751F\u6210\u7684\u8868\u5355\u6570\u636E\u5217\u8868\u6570\u636E</td><td>-</td></tr><tr><td>status</td><td>int</td><td>-</td><td>\u662F\u5426\u542F\u7528 1 \u542F\u7528 0 \u7981\u7528</td><td>\u2713</td></tr><tr><td>updateDate</td><td>datetime</td><td>-</td><td>\u66F4\u65B0\u65F6\u95F4</td><td>-</td></tr><tr><td>creatDate</td><td>datetime</td><td>-</td><td>\u521B\u5EFA\u65F6\u95F4</td><td>-</td></tr></tbody></table><h3 id="\u65B0\u589E\u4FEE\u6539" data-source-line="20"><a class="markdownIt-Anchor" href="#\u65B0\u589E\u4FEE\u6539">#</a> \u65B0\u589E/\u4FEE\u6539</h3><p data-source-line="22">\u63A5\u53E3\u540D\u79F0\uFF1Axxxx</p><p data-source-line="24">\u8BF7\u6C42\u7C7B\u578B\uFF1APOST</p><p data-source-line="26">\u8BF7\u6C42\u53C2\u6570\uFF1A</p><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-json hljs--one-dark"><code>{
  <span class="hljs-attr">&quot;id&quot;</span>: <span class="hljs-number">1</span>,
  <span class="hljs-attr">&quot;formId&quot;</span>: <span class="hljs-string">&quot;1&quot;</span>,
  <span class="hljs-attr">&quot;name&quot;</span>: <span class="hljs-string">&quot;\u8BBE\u8BA1\u8868\u5355\u7684\u540D\u79F0&quot;</span>,
  <span class="hljs-attr">&quot;formData&quot;</span>: <span class="hljs-string">&quot;{list:[],form:{labelWidth:\\&quot;\\&quot;,class:\\&quot;\\&quot;,size:\\&quot;default\\&quot;,name:\\&quot;form1661506141137\\&quot;,formId:\\&quot;\\&quot;,title:\\&quot;\u8868\u5355\u540D\u79F0\\&quot;}}&quot;</span>,
  <span class="hljs-attr">&quot;searchData&quot;</span>: <span class="hljs-string">&quot;&quot;</span>,
  <span class="hljs-attr">&quot;tableData&quot;</span>: <span class="hljs-string">&quot;&quot;</span>,
  <span class="hljs-attr">&quot;type&quot;</span>: <span class="hljs-number">1</span>,
  <span class="hljs-attr">&quot;status&quot;</span>: <span class="hljs-number">1</span>
}
</code></pre><p data-source-line="41">\u8BF7\u6C42\u7ED3\u679C\uFF1A</p><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-json hljs--one-dark"><code>{
  <span class="hljs-attr">&quot;code&quot;</span>: <span class="hljs-number">200</span>,
  <span class="hljs-attr">&quot;data&quot;</span>: <span class="hljs-string">&quot;\u65B0\u589E/\u4FEE\u6539\u6210\u529F&quot;</span>
}
</code></pre><h3 id="\u6570\u636E\u5217\u8868" data-source-line="50"><a class="markdownIt-Anchor" href="#\u6570\u636E\u5217\u8868">#</a> \u6570\u636E\u5217\u8868</h3><p data-source-line="52">\u63A5\u53E3\u540D\u79F0\uFF1Axxxx</p><p data-source-line="54">\u8BF7\u6C42\u7C7B\u578B:POST</p><p data-source-line="56">\u8BF7\u6C42\u53C2\u6570\uFF1A\uFF08\u7528\u4E8E\u6761\u4EF6\u641C\u7D22\uFF0C\u975E\u5FC5\u586B\uFF09</p><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-json hljs--one-dark"><code>{
  <span class="hljs-attr">&quot;name&quot;</span>: <span class="hljs-string">&quot;\u8BBE\u8BA1\u8868\u5355\u7684\u540D\u79F0&quot;</span>,
  <span class="hljs-attr">&quot;type&quot;</span>: <span class="hljs-number">1</span>,
  <span class="hljs-attr">&quot;status&quot;</span>: <span class="hljs-number">1</span>,
  <span class="hljs-attr">&quot;pageInfo&quot;</span>: {
    <span class="hljs-attr">&quot;pageSize&quot;</span>: <span class="hljs-number">20</span>,
    <span class="hljs-attr">&quot;pageIndex&quot;</span>: <span class="hljs-number">1</span>
  }
}
</code></pre><p data-source-line="70">\u8BF7\u6C42\u53C2\u6570\u8BF4\u660E\uFF1A</p><table data-source-line="72"><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>pageSize</td><td>\u6BCF\u9875\u5206\u591A\u5C11\u6761\u8BB0\u5F55</td></tr><tr><td>pageIndex</td><td>\u5F53\u524D\u7B2C\u51E0\u9875</td></tr></tbody></table><p data-source-line="77">\u8BF7\u6C42\u7ED3\u679C\uFF1A</p><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-json hljs--one-dark"><code>{
  <span class="hljs-attr">&quot;code&quot;</span>: <span class="hljs-number">200</span>,
  <span class="hljs-attr">&quot;data&quot;</span>: {
    <span class="hljs-attr">&quot;list&quot;</span>: [
      {
        <span class="hljs-attr">&quot;id&quot;</span>: <span class="hljs-number">1</span>,
        <span class="hljs-attr">&quot;formId&quot;</span>: <span class="hljs-number">1</span>,
        <span class="hljs-attr">&quot;name&quot;</span>: <span class="hljs-string">&quot;\u8BBE\u8BA1\u7684\u8868\u5355\u540D\u79F0&quot;</span>,
        <span class="hljs-attr">&quot;updateDate&quot;</span>: <span class="hljs-string">&quot;2022-08-80 08:08:008&quot;</span>,
        <span class="hljs-attr">&quot;creatDate&quot;</span>: <span class="hljs-string">&quot;2022-08-80 08:08:008&quot;</span>,
        <span class="hljs-attr">&quot;status&quot;</span>: <span class="hljs-number">1</span>,
        <span class="hljs-attr">&quot;type&quot;</span>: <span class="hljs-number">1</span>
      }
    ],
    <span class="hljs-attr">&quot;pageInfo&quot;</span>: {
      <span class="hljs-attr">&quot;total&quot;</span>: <span class="hljs-number">10</span>
    }
  }
}
</code></pre><p data-source-line="101">pageInfo \u53C2\u6570</p><table data-source-line="103"><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>total</td><td>\u5206\u9875\u4FE1\u606F</td></tr></tbody></table><h3 id="\u4FEE\u6539\u6570\u636E\u72B6\u6001" data-source-line="107"><a class="markdownIt-Anchor" href="#\u4FEE\u6539\u6570\u636E\u72B6\u6001">#</a> \u4FEE\u6539\u6570\u636E\u72B6\u6001</h3><p data-source-line="109">\u63A5\u53E3\u540D\u79F0\uFF1Axxxx</p><p data-source-line="111">\u8BF7\u6C42\u7C7B\u578B:POST</p><p data-source-line="113">\u8BF7\u6C42\u53C2\u6570\uFF1A</p><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-json hljs--one-dark"><code>{
  <span class="hljs-attr">&quot;id&quot;</span>: <span class="hljs-number">1</span>,
  <span class="hljs-attr">&quot;status&quot;</span>: <span class="hljs-number">1</span>
}
</code></pre><p data-source-line="122">\u8FD4\u56DE\u7ED3\u679C\uFF1A</p><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-json hljs--one-dark"><code>{
  <span class="hljs-attr">&quot;code&quot;</span>: <span class="hljs-number">200</span>,
  <span class="hljs-attr">&quot;data&quot;</span>: <span class="hljs-string">&quot;\u4FEE\u6539\u6210\u529F&quot;</span>
}
</code></pre><h3 id="\u6839\u636E-id-\u83B7\u53D6\u6570\u636E" data-source-line="131"><a class="markdownIt-Anchor" href="#\u6839\u636E-id-\u83B7\u53D6\u6570\u636E">#</a> \u6839\u636E id \u83B7\u53D6\u6570\u636E</h3><p data-source-line="133">\u63A5\u53E3\u540D\u79F0\uFF1Axxxx</p><p data-source-line="135">\u8BF7\u6C42\u7C7B\u578B:POST</p><p data-source-line="137">\u8BF7\u6C42\u53C2\u6570\uFF1A</p><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-json hljs--one-dark"><code>{
  <span class="hljs-attr">&quot;id&quot;</span>: <span class="hljs-number">1</span>
}
</code></pre><p data-source-line="145">\u8BF7\u6C42\u7ED3\u679C\uFF1A</p><p data-source-line="147">\u6309\u63D0\u4EA4\u65F6\u7684\u683C\u5F0F\u548C\u6570\u636E\u7C7B\u578B\uFF0C\u8FD4\u56DE\u6240\u6709\u6570\u636E</p><h3 id="\u6839\u636E-id-\u5220\u9664" data-source-line="149"><a class="markdownIt-Anchor" href="#\u6839\u636E-id-\u5220\u9664">#</a> \u6839\u636E id \u5220\u9664</h3><p data-source-line="151">\u63A5\u53E3\u540D\u79F0\uFF1Axxxx</p><p data-source-line="153">\u8BF7\u6C42\u7C7B\u578B:POST</p><p data-source-line="155">\u8BF7\u6C42\u53C2\u6570\uFF1A</p><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-json hljs--one-dark"><code>{
  <span class="hljs-attr">&quot;id&quot;</span>: <span class="hljs-number">1</span>
}
</code></pre><p data-source-line="163">\u8FD4\u56DE\u7ED3\u679C\uFF1A</p><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-json hljs--one-dark"><code>{
  <span class="hljs-attr">&quot;code&quot;</span>: <span class="hljs-number">200</span>,
  <span class="hljs-attr">&quot;data&quot;</span>: <span class="hljs-string">&quot;\u5220\u9664\u6210\u529F/\u5931\u8D25&quot;</span>
}
</code></pre><h2 id="\u8868\u5355\u5185\u5BB9\u6570\u636E\u8868\u6570\u636E\u6F14\u793A\u8868" data-source-line="172"><a class="markdownIt-Anchor" href="#\u8868\u5355\u5185\u5BB9\u6570\u636E\u8868\u6570\u636E\u6F14\u793A\u8868">#</a> \u8868\u5355\u5185\u5BB9\u6570\u636E\u8868\uFF08\u6570\u636E\u6F14\u793A\u8868\uFF09</h2><p data-source-line="174">\u7528\u4E8E\u4FDD\u5B58\u8868\u5355\u6570\u636E\u5185\u5BB9\uFF0C\u6570\u636E\u6F14\u793A\u8868\u5305\u62EC\u5404\u6F14\u793A\u5B57\u6BB5\uFF1A</p><table data-source-line="176"><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>text</td><td>varchar</td><td>\u5355\u884C\u6587\u672C\u6846\u5B57\u6BB5\u6F14\u793A</td></tr><tr><td>textarea</td><td>varchar</td><td>\u591A\u884C\u6587\u672C\u6846\u5B57\u6BB5\u6F14\u793A</td></tr><tr><td>radio</td><td>varchar</td><td>\u5355\u9009\u7EC4\u5B57\u6BB5\u6F14\u793A</td></tr><tr><td>checkbox</td><td>varchar</td><td>\u591A\u9009\u7EC4\u5B57\u6BB5\u6F14\u793A</td></tr><tr><td>select</td><td>int</td><td>\u4E0B\u62C9\u9009\u62E9\u6846\u5B57\u6BB5\u6F14\u793A</td></tr><tr><td>datePicker</td><td>varchar</td><td>\u65E5\u671F\u9009\u62E9\u5668\u5B57\u6BB5\u6F14\u793A</td></tr><tr><td>timePicker</td><td>varchar</td><td>\u65F6\u95F4\u9009\u62E9\u5668\u5B57\u6BB5\u6F14\u793A</td></tr><tr><td>colorPicker</td><td>varchar</td><td>\u989C\u8272\u9009\u62E9\u5B57\u6BB5\u6F14\u793A</td></tr><tr><td>switch</td><td>varchar</td><td>\u5F00\u5173\u5B57\u6BB5\u6F14\u793A</td></tr><tr><td>inputNumber</td><td>varchar</td><td>\u8BA1\u6570\u5668\u5B57\u6BB5\u6F14\u793A</td></tr><tr><td>cascader</td><td>varchar</td><td>\u7EA7\u8054\u5B57\u6BB5\u6F14\u793A</td></tr><tr><td>rate</td><td>varchar</td><td>\u8BC4\u5206\u5B57\u6BB5\u6F14\u793A</td></tr><tr><td>slider</td><td>varchar</td><td>\u6ED1\u5757\u5B57\u6BB5\u6F14\u793A</td></tr><tr><td>upload</td><td>varchar</td><td>\u56FE\u7247\u6587\u4EF6\u4E0A\u4F20\u5B57\u6BB5\u6F14\u793A</td></tr><tr><td>richText</td><td>text</td><td>\u5BCC\u6587\u672C\u7F16\u8F91\u5668\u5B57\u6BB5\u6F14\u793A</td></tr><tr><td>component</td><td>varchar</td><td>\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5B57\u6BB5\u6F14\u793A</td></tr><tr><td>table</td><td>text</td><td>\u5B50\u8868\u5B57\u6BB5\u6F14\u793A</td></tr><tr><td>table1</td><td>varchar</td><td>\u5B50\u8868\u5B57\u6BB51</td></tr><tr><td>table2</td><td>int</td><td>\u5B50\u8868\u5B57\u6BB52</td></tr></tbody></table><h3 id="\u65B0\u589E\u4FEE\u6539-2" data-source-line="198"><a class="markdownIt-Anchor" href="#\u65B0\u589E\u4FEE\u6539-2">#</a> \u65B0\u589E/\u4FEE\u6539</h3><p data-source-line="200">\u63A5\u53E3\u540D\u79F0\uFF1Axxxx</p><p data-source-line="202">\u8BF7\u6C42\u7C7B\u578B:POST</p><p data-source-line="204">\u8BF7\u6C42\u53C2\u6570\uFF1A</p><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-json hljs--one-dark"><code>{
  <span class="hljs-attr">&quot;id&quot;</span>: <span class="hljs-number">1</span>
}
</code></pre><p data-source-line="212">\u8FD4\u56DE\u7ED3\u679C\uFF1A</p><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-json hljs--one-dark"><code>{
  <span class="hljs-attr">&quot;code&quot;</span>: <span class="hljs-number">200</span>,
  <span class="hljs-attr">&quot;data&quot;</span>: <span class="hljs-string">&quot;\u65B0\u589E/\u4FEE\u6539\u6210\u529F/\u5931\u8D25&quot;</span>
}
</code></pre><h2 id="\u53EF\u521B\u5EFA\u8868\u5355\u6570\u636E\u6E90" data-source-line="221"><a class="markdownIt-Anchor" href="#\u53EF\u521B\u5EFA\u8868\u5355\u6570\u636E\u6E90">#</a> \u53EF\u521B\u5EFA\u8868\u5355\u6570\u636E\u6E90</h2><p data-source-line="223">\u63A5\u53E3\u540D\u79F0\uFF1Axxxx</p><p data-source-line="225">\u8BF7\u6C42\u7C7B\u578B:POST</p><p data-source-line="227">\u8BF7\u6C42\u53C2\u6570\uFF1A\u65E0</p><p data-source-line="229">\u8FD4\u56DE\u7ED3\u679C\uFF1A</p><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-json hljs--one-dark"><code>{
  <span class="hljs-attr">&quot;code&quot;</span>: <span class="hljs-number">200</span>,
  <span class="hljs-attr">&quot;data&quot;</span>: [
    {
      <span class="hljs-attr">&quot;name&quot;</span>: <span class="hljs-string">&quot;\u793A\u4F8B\u8868\u5355&quot;</span>,
      <span class="hljs-attr">&quot;id&quot;</span>: <span class="hljs-string">&quot;1&quot;</span>
    }
  ]
}
</code></pre>`,71),g=[m];function b(e,n,t,r,s,a){return u(),h("div",q,g)}const x=o(j,[["render",b]]);export{x as default};
