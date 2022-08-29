import{Z as e,d as r,A as d,H as u,o as c,c as h,$ as q}from"./index.ca33bca9.js";const l=r({components:{},setup(o){const n=[],s=d({});return{toggleCode:t=>{const a="vdpv_"+t;s[a+"Height"]===0?s[a+"Height"]=(n[t].value?n[t].value.offsetHeight:0)||0:s[a+"Height"]=0},...u(s)}}});l.$vd={matter:{},toc:[{content:"API \u63A5\u53E3",anchor:"api-\u63A5\u53E3",level:1},{content:"\u8868\u5355\u7BA1\u7406",anchor:"\u8868\u5355\u7BA1\u7406",level:2},{content:"\u65B0\u589E/\u4FEE\u6539\u4FDD\u5B58",anchor:"\u65B0\u589E\u4FEE\u6539\u4FDD\u5B58",level:3},{content:"\u6570\u636E\u5217\u8868",anchor:"\u6570\u636E\u5217\u8868",level:3},{content:"\u4FEE\u6539\u6570\u636E\u72B6\u6001",anchor:"\u4FEE\u6539\u6570\u636E\u72B6\u6001",level:3},{content:"\u6839\u636E id \u83B7\u53D6\u6570\u636E",anchor:"\u6839\u636E-id-\u83B7\u53D6\u6570\u636E",level:3},{content:"\u6839\u636E id \u5220\u9664",anchor:"\u6839\u636E-id-\u5220\u9664",level:3},{content:"\u8868\u5355\u5185\u5BB9\u6570\u636E\u8868\uFF08\u6570\u636E\u6F14\u793A\u8868\uFF09",anchor:"\u8868\u5355\u5185\u5BB9\u6570\u636E\u8868\u6570\u636E\u6F14\u793A\u8868",level:2},{content:"\u65B0\u589E/\u4FEE\u6539\u4FDD\u5B58",anchor:"\u65B0\u589E\u4FEE\u6539\u4FDD\u5B58-2",level:3},{content:"\u5185\u5BB9\u5217\u8868",anchor:"\u5185\u5BB9\u5217\u8868",level:3},{content:"\u6839\u636Eid\u83B7\u53D6\u6570\u636E",anchor:"\u6839\u636Eid\u83B7\u53D6\u6570\u636E",level:3},{content:"\u6839\u636E id \u5220\u9664",anchor:"\u6839\u636E-id-\u5220\u9664-2",level:3},{content:"\u53EF\u521B\u5EFA\u8868\u5355\u6570\u636E\u6E90",anchor:"\u53EF\u521B\u5EFA\u8868\u5355\u6570\u636E\u6E90",level:2},{content:"\u83B7\u53D6\u5F53\u524D\u6570\u636E\u6E90\u53EF\u7528\u5B57\u6BB5",anchor:"\u83B7\u53D6\u5F53\u524D\u6570\u636E\u6E90\u53EF\u7528\u5B57\u6BB5",level:2},{content:"12.\u56FE\u7247/\u6587\u4EF6\u4E0A\u4F20",anchor:"12\u56FE\u7247\u6587\u4EF6\u4E0A\u4F20",level:2}]};const j=l,i={class:"vuedoc"},g=q(`<h1 id="api-\u63A5\u53E3" data-source-line="1"><a class="markdownIt-Anchor" href="#api-\u63A5\u53E3">#</a> API \u63A5\u53E3</h1><h2 id="\u8868\u5355\u7BA1\u7406" data-source-line="3"><a class="markdownIt-Anchor" href="#\u8868\u5355\u7BA1\u7406">#</a> \u8868\u5355\u7BA1\u7406</h2><p data-source-line="5">\u7528\u4E8E\u4FDD\u5B58\u521B\u5EFA\u8BBE\u8BA1\u7684\u8868\u5355\uFF0C\u63D0\u4F9B\u6570\u636E\u589E\u52A0\u3001\u4FEE\u6539\u3001\u67E5\u770B\u3001\u5220\u9664\u7B49\u64CD\u4F5C\u3002\u8868\u5404\u5B57\u6BB5\u8BF4\u660E\uFF1A</p><table data-source-line="7"><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th><th>\u652F\u6301\u641C\u7D22</th></tr></thead><tbody><tr><td>id</td><td>int</td><td>-</td><td>\u81EA\u589E id</td><td>-</td></tr><tr><td>formId</td><td>int</td><td>-</td><td>\u8BBE\u8BA1\u8868\u5355\u9009\u62E9\u7684\u6570\u636E\u6E90 id</td><td>-</td></tr><tr><td>name</td><td>varchar</td><td>\u2713</td><td>\u8BBE\u8BA1\u7684\u8868\u5355\u540D\u79F0</td><td>\u2713</td></tr><tr><td>type</td><td>int</td><td>-</td><td>\u8868\u5355\u548C\u5217\u8868\u4E24\u79CD\u7C7B\u578B 1 \u8868\u5355 2 \u5217\u8868</td><td>\u2713</td></tr><tr><td>formData</td><td>text</td><td>-</td><td>\u8BBE\u8BA1\u751F\u6210\u7684\u8868\u5355\u6570\u636E</td><td>-</td></tr><tr><td>searchData</td><td>text</td><td>-</td><td>\u8BBE\u8BA1\u751F\u6210\u7684\u8868\u5355\u5217\u8868\u641C\u7D22\u6570\u636E</td><td>-</td></tr><tr><td>tableData</td><td>text</td><td>-</td><td>\u8BBE\u8BA1\u751F\u6210\u7684\u8868\u5355\u6570\u636E\u5217\u8868\u6570\u636E</td><td>-</td></tr><tr><td>status</td><td>int</td><td>-</td><td>\u662F\u5426\u542F\u7528 1\u542F\u7528\uFF08\u9ED8\u8BA4\uFF09 0\u7981\u7528</td><td>\u2713</td></tr><tr><td>updateDate</td><td>datetime</td><td>-</td><td>\u66F4\u65B0\u65F6\u95F4</td><td>-</td></tr><tr><td>creatDate</td><td>datetime</td><td>-</td><td>\u521B\u5EFA\u65F6\u95F4</td><td>-</td></tr></tbody></table><h3 id="\u65B0\u589E\u4FEE\u6539\u4FDD\u5B58" data-source-line="20"><a class="markdownIt-Anchor" href="#\u65B0\u589E\u4FEE\u6539\u4FDD\u5B58">#</a> \u65B0\u589E/\u4FEE\u6539\u4FDD\u5B58</h3><p data-source-line="22">\u63A5\u53E3\u540D\u79F0\uFF1Axxxx</p><p data-source-line="24">\u8BF7\u6C42\u7C7B\u578B\uFF1APOST</p><p data-source-line="26">\u8BF7\u6C42\u53C2\u6570\uFF1A</p><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-json hljs--one-dark"><code>{
  <span class="hljs-attr">&quot;id&quot;</span>: <span class="hljs-number">1</span>,
  <span class="hljs-attr">&quot;formId&quot;</span>: <span class="hljs-string">&quot;1&quot;</span>,
  <span class="hljs-attr">&quot;name&quot;</span>: <span class="hljs-string">&quot;\u8BBE\u8BA1\u8868\u5355\u7684\u540D\u79F0&quot;</span>,
  <span class="hljs-attr">&quot;formData&quot;</span>: <span class="hljs-string">&quot;{list:[],form:{labelWidth:\\&quot;\\&quot;,class:\\&quot;\\&quot;,size:\\&quot;default\\&quot;,name:\\&quot;form1661506141137\\&quot;}}&quot;</span>,
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
    <span class="hljs-attr">&quot;dict&quot;</span>: {
      <span class="hljs-attr">&quot;status&quot;</span>: {
        <span class="hljs-attr">&quot;0&quot;</span>: <span class="hljs-string">&quot;\u7981\u7528&quot;</span>,
        <span class="hljs-attr">&quot;1&quot;</span>: <span class="hljs-string">&quot;\u542F\u7528&quot;</span>
      }
    },
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
</code></pre><p data-source-line="107">\u53C2\u6570\u8BF4\u660E</p><table data-source-line="109"><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>dict</td><td>\u5217\u8868\u5339\u914D\u5B57\u5178</td></tr><tr><td>pageInfo.total</td><td>\u5206\u9875\u4FE1\u606F</td></tr></tbody></table><h3 id="\u4FEE\u6539\u6570\u636E\u72B6\u6001" data-source-line="114"><a class="markdownIt-Anchor" href="#\u4FEE\u6539\u6570\u636E\u72B6\u6001">#</a> \u4FEE\u6539\u6570\u636E\u72B6\u6001</h3><p data-source-line="116">\u63A5\u53E3\u540D\u79F0\uFF1Axxxx</p><p data-source-line="118">\u8BF7\u6C42\u7C7B\u578B:POST</p><p data-source-line="120">\u8BF7\u6C42\u53C2\u6570\uFF1A</p><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-json hljs--one-dark"><code>{
  <span class="hljs-attr">&quot;id&quot;</span>: <span class="hljs-number">1</span>,
  <span class="hljs-attr">&quot;status&quot;</span>: <span class="hljs-number">1</span>
}
</code></pre><p data-source-line="129">\u8FD4\u56DE\u7ED3\u679C\uFF1A</p><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-json hljs--one-dark"><code>{
  <span class="hljs-attr">&quot;code&quot;</span>: <span class="hljs-number">200</span>,
  <span class="hljs-attr">&quot;data&quot;</span>: <span class="hljs-string">&quot;\u4FEE\u6539\u6210\u529F&quot;</span>
}
</code></pre><h3 id="\u6839\u636E-id-\u83B7\u53D6\u6570\u636E" data-source-line="138"><a class="markdownIt-Anchor" href="#\u6839\u636E-id-\u83B7\u53D6\u6570\u636E">#</a> \u6839\u636E id \u83B7\u53D6\u6570\u636E</h3><p data-source-line="140">\u63A5\u53E3\u540D\u79F0\uFF1Axxxx</p><p data-source-line="142">\u8BF7\u6C42\u7C7B\u578B:POST</p><p data-source-line="144">\u8BF7\u6C42\u53C2\u6570\uFF1A</p><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-json hljs--one-dark"><code>{
  <span class="hljs-attr">&quot;id&quot;</span>: <span class="hljs-number">1</span>
}
</code></pre><p data-source-line="152">\u8BF7\u6C42\u7ED3\u679C\uFF1A</p><p data-source-line="154">\u6309\u63D0\u4EA4\u65F6\u7684\u683C\u5F0F\u548C\u6570\u636E\u7C7B\u578B\uFF0C\u8FD4\u56DE\u6240\u6709\u6570\u636E</p><h3 id="\u6839\u636E-id-\u5220\u9664" data-source-line="156"><a class="markdownIt-Anchor" href="#\u6839\u636E-id-\u5220\u9664">#</a> \u6839\u636E id \u5220\u9664</h3><p data-source-line="158">\u63A5\u53E3\u540D\u79F0\uFF1Axxxx</p><p data-source-line="160">\u8BF7\u6C42\u7C7B\u578B:POST</p><p data-source-line="162">\u8BF7\u6C42\u53C2\u6570\uFF1A</p><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-json hljs--one-dark"><code>{
  <span class="hljs-attr">&quot;id&quot;</span>: <span class="hljs-number">1</span>
}
</code></pre><p data-source-line="170">\u8FD4\u56DE\u7ED3\u679C\uFF1A</p><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-json hljs--one-dark"><code>{
  <span class="hljs-attr">&quot;code&quot;</span>: <span class="hljs-number">200</span>,
  <span class="hljs-attr">&quot;data&quot;</span>: <span class="hljs-string">&quot;\u5220\u9664\u6210\u529F/\u5931\u8D25&quot;</span>
}
</code></pre><h2 id="\u8868\u5355\u5185\u5BB9\u6570\u636E\u8868\u6570\u636E\u6F14\u793A\u8868" data-source-line="179"><a class="markdownIt-Anchor" href="#\u8868\u5355\u5185\u5BB9\u6570\u636E\u8868\u6570\u636E\u6F14\u793A\u8868">#</a> \u8868\u5355\u5185\u5BB9\u6570\u636E\u8868\uFF08\u6570\u636E\u6F14\u793A\u8868\uFF09</h2><p data-source-line="181">\u7528\u4E8E\u4FDD\u5B58\u8868\u5355\u6570\u636E\u5185\u5BB9\uFF0C\u6570\u636E\u6F14\u793A\u8868\u5305\u62EC\u5404\u6F14\u793A\u5B57\u6BB5\uFF1A</p><table data-source-line="183"><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>text</td><td>varchar</td><td>\u5355\u884C\u6587\u672C\u6846\u5B57\u6BB5\u6F14\u793A</td></tr><tr><td>textarea</td><td>varchar</td><td>\u591A\u884C\u6587\u672C\u6846\u5B57\u6BB5\u6F14\u793A</td></tr><tr><td>radio</td><td>varchar</td><td>\u5355\u9009\u7EC4\u5B57\u6BB5\u6F14\u793A</td></tr><tr><td>checkbox</td><td>varchar</td><td>\u591A\u9009\u7EC4\u5B57\u6BB5\u6F14\u793A</td></tr><tr><td>select</td><td>int</td><td>\u4E0B\u62C9\u9009\u62E9\u6846\u5B57\u6BB5\u6F14\u793A</td></tr><tr><td>datePicker</td><td>varchar</td><td>\u65E5\u671F\u9009\u62E9\u5668\u5B57\u6BB5\u6F14\u793A</td></tr><tr><td>timePicker</td><td>varchar</td><td>\u65F6\u95F4\u9009\u62E9\u5668\u5B57\u6BB5\u6F14\u793A</td></tr><tr><td>colorPicker</td><td>varchar</td><td>\u989C\u8272\u9009\u62E9\u5B57\u6BB5\u6F14\u793A</td></tr><tr><td>switch</td><td>varchar</td><td>\u5F00\u5173\u5B57\u6BB5\u6F14\u793A</td></tr><tr><td>inputNumber</td><td>varchar</td><td>\u8BA1\u6570\u5668\u5B57\u6BB5\u6F14\u793A</td></tr><tr><td>cascader</td><td>varchar</td><td>\u7EA7\u8054\u5B57\u6BB5\u6F14\u793A</td></tr><tr><td>rate</td><td>varchar</td><td>\u8BC4\u5206\u5B57\u6BB5\u6F14\u793A</td></tr><tr><td>slider</td><td>varchar</td><td>\u6ED1\u5757\u5B57\u6BB5\u6F14\u793A</td></tr><tr><td>upload</td><td>varchar</td><td>\u56FE\u7247\u6587\u4EF6\u4E0A\u4F20\u5B57\u6BB5\u6F14\u793A</td></tr><tr><td>richText</td><td>text</td><td>\u5BCC\u6587\u672C\u7F16\u8F91\u5668\u5B57\u6BB5\u6F14\u793A</td></tr><tr><td>component</td><td>varchar</td><td>\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5B57\u6BB5\u6F14\u793A</td></tr><tr><td>table</td><td>text</td><td>\u5B50\u8868\u5B57\u6BB5\u6F14\u793A</td></tr><tr><td>table1</td><td>varchar</td><td>\u5B50\u8868\u5B57\u6BB51</td></tr><tr><td>table2</td><td>int</td><td>\u5B50\u8868\u5B57\u6BB52</td></tr></tbody></table><h3 id="\u65B0\u589E\u4FEE\u6539\u4FDD\u5B58-2" data-source-line="205"><a class="markdownIt-Anchor" href="#\u65B0\u589E\u4FEE\u6539\u4FDD\u5B58-2">#</a> \u65B0\u589E/\u4FEE\u6539\u4FDD\u5B58</h3><p data-source-line="207">\u63A5\u53E3\u540D\u79F0\uFF1Axxxx</p><p data-source-line="209">\u8BF7\u6C42\u7C7B\u578B:POST</p><p data-source-line="211">\u8BF7\u6C42\u53C2\u6570\uFF1A</p><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-json hljs--one-dark"><code>{
  <span class="hljs-attr">&quot;id&quot;</span>: <span class="hljs-number">1</span>,
  <span class="hljs-attr">&quot;tid&quot;</span>: <span class="hljs-number">1</span>,
  <span class="hljs-attr">&quot;cascader&quot;</span>: [],
  <span class="hljs-attr">&quot;checkbox&quot;</span>: [
    <span class="hljs-number">1</span>
  ],
  <span class="hljs-attr">&quot;colorPicker&quot;</span>: <span class="hljs-string">&quot;&quot;</span>,
  <span class="hljs-attr">&quot;component&quot;</span>: <span class="hljs-string">&quot;\u6D4B\u8BD5\u56DE\u586B\u503C&quot;</span>,
  <span class="hljs-attr">&quot;datePicker&quot;</span>: <span class="hljs-string">&quot;2022-08-04T16:00:00.000Z&quot;</span>,
  <span class="hljs-attr">&quot;inputNumber&quot;</span>: <span class="hljs-number">0</span>,
  <span class="hljs-attr">&quot;radio&quot;</span>: <span class="hljs-number">1</span>,
  <span class="hljs-attr">&quot;rate&quot;</span>: <span class="hljs-number">2</span>,
  <span class="hljs-attr">&quot;richText&quot;</span>: <span class="hljs-string">&quot;&lt;p&gt;\u5BCC\u6587\u672C\u5185\u5BB9&lt;/p&gt;&quot;</span>,
  <span class="hljs-attr">&quot;select&quot;</span>: <span class="hljs-number">1</span>,
  <span class="hljs-attr">&quot;slider&quot;</span>: <span class="hljs-number">3</span>,
  <span class="hljs-attr">&quot;switch&quot;</span>: <span class="hljs-literal">true</span>,
  <span class="hljs-attr">&quot;table&quot;</span>: [
    {
      <span class="hljs-attr">&quot;table1&quot;</span>: <span class="hljs-string">&quot;1&quot;</span>,
      <span class="hljs-attr">&quot;table2&quot;</span>: <span class="hljs-string">&quot;value1&quot;</span>
    }
  ],
  <span class="hljs-attr">&quot;text&quot;</span>: <span class="hljs-string">&quot;\u793A\u4F8B\u8868\u5355&quot;</span>,
  <span class="hljs-attr">&quot;textarea&quot;</span>: <span class="hljs-string">&quot;&quot;</span>,
  <span class="hljs-attr">&quot;timePicker&quot;</span>: <span class="hljs-string">&quot;2022-08-29T05:50:50.000Z&quot;</span>,
  <span class="hljs-attr">&quot;upload&quot;</span>: []
}
</code></pre><p data-source-line="244">\u8BF7\u6C42\u53C2\u6570\u8BF4\u660E\uFF1A</p><table data-source-line="246"><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u5FC5\u586B</th></tr></thead><tbody><tr><td>id</td><td>\u5F53\u524D\u8BB0\u5F55id\uFF0C\u81EA\u589E</td><td>-</td></tr><tr><td>tid</td><td>\u8BBE\u8BA1\u751F\u6210\u7684\u8868\u5355id</td><td>\u2713</td></tr><tr><td>\u2026</td><td>\u5176\u4ED6\u8BBE\u8BA1\u7684\u8868\u5355\u5143\u7D20</td><td>\u6839\u636E\u8BBE\u8BA1\u65F6\u7684\u6821\u9A8C\u89C4\u5219</td></tr></tbody></table><p data-source-line="252">\u8FD4\u56DE\u7ED3\u679C\uFF1A</p><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-json hljs--one-dark"><code>{
  <span class="hljs-attr">&quot;code&quot;</span>: <span class="hljs-number">200</span>,
  <span class="hljs-attr">&quot;data&quot;</span>: <span class="hljs-string">&quot;\u65B0\u589E/\u4FEE\u6539\u6210\u529F/\u5931\u8D25&quot;</span>
}
</code></pre><h3 id="\u5185\u5BB9\u5217\u8868" data-source-line="261"><a class="markdownIt-Anchor" href="#\u5185\u5BB9\u5217\u8868">#</a> \u5185\u5BB9\u5217\u8868</h3><p data-source-line="264">\u63A5\u53E3\u540D\u79F0\uFF1Axxxx</p><p data-source-line="266">\u8BF7\u6C42\u7C7B\u578B:POST</p><p data-source-line="268">\u8BF7\u6C42\u53C2\u6570\uFF1A</p><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-json hljs--one-dark"><code>{
  <span class="hljs-attr">&quot;tid&quot;</span>: <span class="hljs-number">1</span>,
  <span class="hljs-attr">&quot;text&quot;</span>: <span class="hljs-number">1</span>,
  <span class="hljs-attr">&quot;select&quot;</span>: <span class="hljs-number">1</span>,
  <span class="hljs-attr">&quot;pageInfo&quot;</span>: {
    <span class="hljs-attr">&quot;pageSize&quot;</span>: <span class="hljs-number">20</span>,
    <span class="hljs-attr">&quot;pageIndex&quot;</span>: <span class="hljs-number">1</span>
  }
}
</code></pre><p data-source-line="282">\u8BF7\u6C42\u53C2\u6570\u8BF4\u660E\uFF1A</p><table data-source-line="284"><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>tid</td><td>\u5217\u8868id</td></tr><tr><td>text</td><td>\u8BBE\u7F6E\u7684\u641C\u7D22\u6761\u4EF6</td></tr><tr><td>select</td><td>\u8BBE\u7F6E\u7684\u641C\u7D22\u6761\u4EF6</td></tr><tr><td>pageSize</td><td>\u6BCF\u9875\u5206\u591A\u5C11\u6761\u8BB0\u5F55</td></tr><tr><td>pageIndex</td><td>\u5F53\u524D\u7B2C\u51E0\u9875</td></tr></tbody></table><p data-source-line="292">\u8BF7\u6C42\u7ED3\u679C\uFF1A</p><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-json hljs--one-dark"><code>{
  <span class="hljs-attr">&quot;code&quot;</span>: <span class="hljs-number">200</span>,
  <span class="hljs-attr">&quot;data&quot;</span>: {
    <span class="hljs-attr">&quot;dict&quot;</span>: {
      <span class="hljs-attr">&quot;select&quot;</span>: {
        <span class="hljs-attr">&quot;0&quot;</span>: <span class="hljs-string">&quot;\u7537&quot;</span>,
        <span class="hljs-attr">&quot;1&quot;</span>: <span class="hljs-string">&quot;\u5973&quot;</span>
      }
    },
    <span class="hljs-attr">&quot;list&quot;</span>: [
      {
        <span class="hljs-attr">&quot;dateTime&quot;</span>: <span class="hljs-string">&quot;2022-08-80 08:08:08&quot;</span>,
        <span class="hljs-attr">&quot;id&quot;</span>: <span class="hljs-number">1</span>,
        <span class="hljs-attr">&quot;select&quot;</span>: <span class="hljs-number">1</span>,
        <span class="hljs-attr">&quot;text&quot;</span>: <span class="hljs-string">&quot;\u793A\u4F8B\u8868\u5355&quot;</span>
      }
    ],
    <span class="hljs-attr">&quot;pageInfo&quot;</span>: {
      <span class="hljs-attr">&quot;total&quot;</span>: <span class="hljs-number">1</span>
    }
  }
}
</code></pre><p data-source-line="319">\u53C2\u6570\u8BF4\u660E</p><table data-source-line="321"><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>dict</td><td>\u5217\u8868\u5339\u914D\u5B57\u5178</td></tr><tr><td>pageInfo.total</td><td>\u5206\u9875\u4FE1\u606F</td></tr></tbody></table><h3 id="\u6839\u636Eid\u83B7\u53D6\u6570\u636E" data-source-line="326"><a class="markdownIt-Anchor" href="#\u6839\u636Eid\u83B7\u53D6\u6570\u636E">#</a> \u6839\u636Eid\u83B7\u53D6\u6570\u636E</h3><p data-source-line="328">\u63A5\u53E3\u540D\u79F0\uFF1Axxxx</p><p data-source-line="330">\u8BF7\u6C42\u7C7B\u578B:POST</p><p data-source-line="332">\u8BF7\u6C42\u53C2\u6570\uFF1A</p><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-json hljs--one-dark"><code>{
  <span class="hljs-attr">&quot;id&quot;</span>: <span class="hljs-number">1</span>,
  <span class="hljs-attr">&quot;tid&quot;</span>: <span class="hljs-number">1</span>
}
</code></pre><p data-source-line="341">\u8BF7\u6C42\u7ED3\u679C\uFF1A</p><p data-source-line="343">\u6309\u63D0\u4EA4\u65F6\u7684\u683C\u5F0F\u548C\u6570\u636E\u7C7B\u578B\uFF0C\u8FD4\u56DE\u6240\u6709\u6570\u636E</p><h3 id="\u6839\u636E-id-\u5220\u9664-2" data-source-line="345"><a class="markdownIt-Anchor" href="#\u6839\u636E-id-\u5220\u9664-2">#</a> \u6839\u636E id \u5220\u9664</h3><p data-source-line="347">\u63A5\u53E3\u540D\u79F0\uFF1Axxxx</p><p data-source-line="349">\u8BF7\u6C42\u7C7B\u578B:POST</p><p data-source-line="351">\u8BF7\u6C42\u53C2\u6570\uFF1A</p><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-json hljs--one-dark"><code>{
  <span class="hljs-attr">&quot;id&quot;</span>: <span class="hljs-number">1</span>
}
</code></pre><p data-source-line="359">\u8FD4\u56DE\u7ED3\u679C\uFF1A</p><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-json hljs--one-dark"><code>{
  <span class="hljs-attr">&quot;code&quot;</span>: <span class="hljs-number">200</span>,
  <span class="hljs-attr">&quot;data&quot;</span>: <span class="hljs-string">&quot;\u5220\u9664\u6210\u529F/\u5931\u8D25&quot;</span>
}
</code></pre><h2 id="\u53EF\u521B\u5EFA\u8868\u5355\u6570\u636E\u6E90" data-source-line="368"><a class="markdownIt-Anchor" href="#\u53EF\u521B\u5EFA\u8868\u5355\u6570\u636E\u6E90">#</a> \u53EF\u521B\u5EFA\u8868\u5355\u6570\u636E\u6E90</h2><p data-source-line="370">\u63A5\u53E3\u540D\u79F0\uFF1Axxxx</p><p data-source-line="372">\u8BF7\u6C42\u7C7B\u578B:POST</p><p data-source-line="374">\u8BF7\u6C42\u53C2\u6570\uFF1A\u65E0</p><p data-source-line="376">\u8FD4\u56DE\u7ED3\u679C\uFF1A</p><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-json hljs--one-dark"><code>{
  <span class="hljs-attr">&quot;code&quot;</span>: <span class="hljs-number">200</span>,
  <span class="hljs-attr">&quot;data&quot;</span>: [
    {
      <span class="hljs-attr">&quot;name&quot;</span>: <span class="hljs-string">&quot;\u793A\u4F8B\u8868\u5355&quot;</span>,
      <span class="hljs-attr">&quot;id&quot;</span>: <span class="hljs-number">1</span>
    }
  ]
}
</code></pre><h2 id="\u83B7\u53D6\u5F53\u524D\u6570\u636E\u6E90\u53EF\u7528\u5B57\u6BB5" data-source-line="390"><a class="markdownIt-Anchor" href="#\u83B7\u53D6\u5F53\u524D\u6570\u636E\u6E90\u53EF\u7528\u5B57\u6BB5">#</a> \u83B7\u53D6\u5F53\u524D\u6570\u636E\u6E90\u53EF\u7528\u5B57\u6BB5</h2><p data-source-line="392">\u63A5\u53E3\u540D\u79F0\uFF1Axxxx</p><p data-source-line="394">\u8BF7\u6C42\u7C7B\u578B:POST</p><p data-source-line="396">\u8BF7\u6C42\u53C2\u6570\uFF1A\u65E0</p><p data-source-line="398">\u8FD4\u56DE\u7ED3\u679C\uFF1A</p><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-json hljs--one-dark"><code>{
  <span class="hljs-attr">&quot;code&quot;</span>: <span class="hljs-number">200</span>,
  <span class="hljs-attr">&quot;data&quot;</span>: [
    [
      {
        <span class="hljs-attr">&quot;name&quot;</span>: <span class="hljs-string">&quot;text&quot;</span>,
        <span class="hljs-attr">&quot;label&quot;</span>: <span class="hljs-string">&quot;\u6587\u672C\u6846&quot;</span>
      },
      {
        <span class="hljs-attr">&quot;name&quot;</span>: <span class="hljs-string">&quot;textarea&quot;</span>,
        <span class="hljs-attr">&quot;label&quot;</span>: <span class="hljs-string">&quot;\u591A\u884C\u6587\u672C&quot;</span>
      },
      {
        <span class="hljs-attr">&quot;name&quot;</span>: <span class="hljs-string">&quot;radio&quot;</span>,
        <span class="hljs-attr">&quot;label&quot;</span>: <span class="hljs-string">&quot;\u5355\u9009\u6846\u7EC4&quot;</span>
      },
      {
        <span class="hljs-attr">&quot;name&quot;</span>: <span class="hljs-string">&quot;checkbox&quot;</span>,
        <span class="hljs-attr">&quot;label&quot;</span>: <span class="hljs-string">&quot;\u591A\u9009\u6846\u7EC4\u6D4B\u8BD5&quot;</span>
      },
      {
        <span class="hljs-attr">&quot;name&quot;</span>: <span class="hljs-string">&quot;select&quot;</span>,
        <span class="hljs-attr">&quot;label&quot;</span>: <span class="hljs-string">&quot;\u4E0B\u62C9\u9009\u62E9\u6846&quot;</span>
      },
      {
        <span class="hljs-attr">&quot;name&quot;</span>: <span class="hljs-string">&quot;datePicker&quot;</span>,
        <span class="hljs-attr">&quot;label&quot;</span>: <span class="hljs-string">&quot;\u65E5\u671F\u9009\u62E9\u5668&quot;</span>
      },
      {
        <span class="hljs-attr">&quot;name&quot;</span>: <span class="hljs-string">&quot;timePicker&quot;</span>,
        <span class="hljs-attr">&quot;label&quot;</span>: <span class="hljs-string">&quot;\u65F6\u95F4\u9009\u62E9\u5668&quot;</span>
      },
      {
        <span class="hljs-attr">&quot;name&quot;</span>: <span class="hljs-string">&quot;colorPicker&quot;</span>,
        <span class="hljs-attr">&quot;label&quot;</span>: <span class="hljs-string">&quot;\u53D6\u8272\u5668&quot;</span>
      },
      {
        <span class="hljs-attr">&quot;name&quot;</span>: <span class="hljs-string">&quot;switch&quot;</span>,
        <span class="hljs-attr">&quot;label&quot;</span>: <span class="hljs-string">&quot;\u5F00\u5173&quot;</span>
      },
      {
        <span class="hljs-attr">&quot;name&quot;</span>: <span class="hljs-string">&quot;inputNumber&quot;</span>,
        <span class="hljs-attr">&quot;label&quot;</span>: <span class="hljs-string">&quot;\u8BA1\u6570\u5668&quot;</span>
      },
      {
        <span class="hljs-attr">&quot;name&quot;</span>: <span class="hljs-string">&quot;cascader&quot;</span>,
        <span class="hljs-attr">&quot;label&quot;</span>: <span class="hljs-string">&quot;\u7EA7\u8054\u9009\u62E9\u5668&quot;</span>
      },
      {
        <span class="hljs-attr">&quot;name&quot;</span>: <span class="hljs-string">&quot;rate&quot;</span>,
        <span class="hljs-attr">&quot;label&quot;</span>: <span class="hljs-string">&quot;\u8BC4\u5206&quot;</span>
      },
      {
        <span class="hljs-attr">&quot;name&quot;</span>: <span class="hljs-string">&quot;slider&quot;</span>,
        <span class="hljs-attr">&quot;label&quot;</span>: <span class="hljs-string">&quot;\u6ED1\u5757&quot;</span>
      },
      {
        <span class="hljs-attr">&quot;name&quot;</span>: <span class="hljs-string">&quot;table&quot;</span>,
        <span class="hljs-attr">&quot;label&quot;</span>: <span class="hljs-string">&quot;\u5B50\u8868&quot;</span>
      },
      {
        <span class="hljs-attr">&quot;name&quot;</span>: <span class="hljs-string">&quot;table1&quot;</span>,
        <span class="hljs-attr">&quot;label&quot;</span>: <span class="hljs-string">&quot;\u5B50\u8868text&quot;</span>
      },
      {
        <span class="hljs-attr">&quot;name&quot;</span>: <span class="hljs-string">&quot;table2&quot;</span>,
        <span class="hljs-attr">&quot;label&quot;</span>: <span class="hljs-string">&quot;\u5B50\u8868\u9009\u62E9&quot;</span>
      },
      {
        <span class="hljs-attr">&quot;name&quot;</span>: <span class="hljs-string">&quot;component&quot;</span>,
        <span class="hljs-attr">&quot;label&quot;</span>: <span class="hljs-string">&quot;\u81EA\u5B9A\u4E49\u7EC4\u4EF6&quot;</span>
      },
      {
        <span class="hljs-attr">&quot;name&quot;</span>: <span class="hljs-string">&quot;upload&quot;</span>,
        <span class="hljs-attr">&quot;label&quot;</span>: <span class="hljs-string">&quot;\u56FE\u7247\u6587\u4EF6\u4E0A\u4E13&quot;</span>
      },
      {
        <span class="hljs-attr">&quot;name&quot;</span>: <span class="hljs-string">&quot;richText&quot;</span>,
        <span class="hljs-attr">&quot;label&quot;</span>: <span class="hljs-string">&quot;\u5BCC\u6587\u672C&quot;</span>
      }
    ]
  ]
}
</code></pre><h2 id="12\u56FE\u7247\u6587\u4EF6\u4E0A\u4F20" data-source-line="485"><a class="markdownIt-Anchor" href="#12\u56FE\u7247\u6587\u4EF6\u4E0A\u4F20">#</a> 12.\u56FE\u7247/\u6587\u4EF6\u4E0A\u4F20</h2><p data-source-line="487">\u63A5\u53E3\u5730\u5740\u5982\uFF1A</p><p data-source-line="489">\u8BF7\u6C42\u7C7B\u578B\uFF1Apost</p><p data-source-line="491">\u8BF7\u6C42\u53C2\u6570\uFF1AformData\u6570\u636E</p><p data-source-line="493">\u8FD4\u56DE\u7ED3\u679C\uFF1A</p><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-json hljs--one-dark"><code>{
  <span class="hljs-attr">&quot;code&quot;</span>: <span class="hljs-number">200</span>,
  <span class="hljs-attr">&quot;data&quot;</span>: <span class="hljs-string">&quot;\u4E0A\u4F20\u540E\u7684\u56FE\u7247\u6216\u6587\u4EF6\u8DEF\u5F84&quot;</span>
}

</code></pre>`,117),m=[g];function b(o,n,s,p,t,a){return c(),h("div",i,m)}const v=e(j,[["render",b]]);export{v as default};
