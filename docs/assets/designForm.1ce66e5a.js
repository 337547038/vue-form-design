var u=Object.defineProperty;var l=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var e=(n,t,s)=>t in n?u(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,p=(n,t)=>{for(var s in t||(t={}))h.call(t,s)&&e(n,s,t[s]);if(l)for(var s of l(t))d.call(t,s)&&e(n,s,t[s]);return n};import{_ as i}from"./index.4247898b.js";import{a0 as q,p as m,q as j,o as g,y as f,a1 as b}from"./vendor.df12524c.js";const r=q({components:{},setup(n){const t=[],s=m({});return p({toggleCode:a=>{const o="vdpv_"+a;s[o+"Height"]===0?s[o+"Height"]=(t[a].value?t[a].value.offsetHeight:0)||0:s[o+"Height"]=0}},j(s))}});r.$vd={matter:{},toc:[{content:"designForm \u8868\u5355",anchor:"designform-\u8868\u5355",level:1},{content:"API",anchor:"api",level:2},{content:"Props",anchor:"props",level:3},{content:"Methods",anchor:"methods",level:3},{content:"Provide",anchor:"provide",level:3},{content:"Slot",anchor:"slot",level:3},{content:"formData",anchor:"formdata",level:3}]};const v=r,y={class:"vuedoc"},k=b(`<h1 id="designform-\u8868\u5355" data-source-line="1"><a class="markdownIt-Anchor" href="#designform-\u8868\u5355">#</a> designForm \u8868\u5355</h1><h2 id="api" data-source-line="3"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="props" data-source-line="5"><a class="markdownIt-Anchor" href="#props">#</a> Props</h3><table data-source-line="7"><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>formData</td><td>object</td><td>\u8BBE\u8BA1\u7684\u8868\u5355\u6570\u636E</td></tr><tr><td>type</td><td>number/1</td><td>\u8868\u5355\u5C55\u793A\u6A21\u5F0F\uFF0C1\u65B0\u589E\uFF1B2\u67E5\u770B\uFF08\u8868\u5355\u6A21\u5F0F\uFF09 \uFF1B3\u67E5\u770B\uFF1B 4\u8BBE\u8BA1</td></tr><tr><td>isEdit</td><td>boolean/false</td><td>\u7F16\u8F91\u72B6\u6001\uFF0Ctype=1\u65B0\u589E\u6A21\u5F0F\u4E0B\u6709\u7F16\u8F91\u72B6\u6001\uFF0C\u4E3B\u8981\u7528\u4E8E\u63A7\u5236\u7F16\u8F91\u6A21\u5F0F\u4E0B\u67D0\u4E9B\u5B57\u6BB5\u7684\u7981\u7528\u72B6\u6001\uFF0C\u5373\u53EF\u65B0\u589E\u4F46\u4E0D\u80FD\u4FEE\u6539</td></tr><tr><td>disabled</td><td>boolean/false</td><td>\u8868\u5355\u7981\u7528\u6A21\u5F0F\uFF0C\u7C7B\u4F3C\u4E8E\u8868\u5355\u6A21\u5F0F\u67E5\u770B</td></tr></tbody></table><h3 id="methods" data-source-line="14"><a class="markdownIt-Anchor" href="#methods">#</a> Methods</h3><table data-source-line="16"><thead><tr><th>\u65B9\u6CD5</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>validate</td><td>\u8868\u5355\u6821\u9A8C\u65B9\u6CD5</td></tr><tr><td>getValue</td><td>\u7528\u4E8E\u83B7\u53D6\u8868\u5355\u7684\u503C</td></tr><tr><td>setValue</td><td>\u5BF9\u8868\u5355\u8BBE\u7F6E\u521D\u59CB\u503C</td></tr><tr><td>setOptions</td><td>\u5BF9\u8868\u5355\u9009\u62E9\u9879\u5FEB\u901F\u8BBE\u7F6E</td></tr></tbody></table><h3 id="provide" data-source-line="23"><a class="markdownIt-Anchor" href="#provide">#</a> Provide</h3><table data-source-line="24"><thead><tr><th>\u65B9\u6CD5</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>DFControlChange</td><td>\u8868\u5355\u63A7\u4EF6\u503C\u6539\u53D8\u4E8B\u4EF6\uFF0C\u8FD4\u56DE{key, value}</td></tr></tbody></table><h3 id="slot" data-source-line="28"><a class="markdownIt-Anchor" href="#slot">#</a> Slot</h3><table data-source-line="30"><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>-</td></tr></tbody></table><h3 id="formdata" data-source-line="34"><a class="markdownIt-Anchor" href="#formdata">#</a> formData</h3><p data-source-line="35">\u4EE3\u7801\u7F16\u8F91\u8F93\u5165\u6846\u53EF\u652F\u6301<code>json</code>\u6216<code>javascript</code>\uFF0C\u521D\u59CB\u4F7F\u7528\u65F6\u53EF\u901A\u8FC7\u4FEE\u6539<code>/src/utils/index.js</code>\u91CC\u7684<code>EDITTYPE</code>\u7684\u503C</p><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-javascript hljs--one-dark"><code>formData = {
  <span class="hljs-string">&quot;list&quot;</span>: [ <span class="hljs-comment">// \u8868\u5355\u6570\u636E</span>
    {
      <span class="hljs-string">&quot;name&quot;</span>: <span class="hljs-string">&quot;input1636607044096&quot;</span>, <span class="hljs-comment">// \u8868\u5355\u552F\u4E00\u6807\u8BC6</span>
      <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;input&quot;</span>, <span class="hljs-comment">// \u8868\u5355\u63A7\u4EF6\u7C7B\u578B</span>
      <span class="hljs-string">&quot;control&quot;</span>: {}, <span class="hljs-comment">// \u5F53\u524D\u63A7\u4EF6\u7C7B\u578B\u7684\u6240\u6709\`props\`\u53C2\u6570\uFF0C\u8BE6\u89C1\`element-plus\`\u5BF9\u5E94\u7684\`props\`\u53C2\u6570</span>
      <span class="hljs-string">&quot;slot&quot;</span>: {}, <span class="hljs-comment">// \u4EC5\u5728\`type=input\`\u65F6\uFF0C\u524D\u540E\u7F00\u5185\u5BB9</span>
      <span class="hljs-string">&quot;config&quot;</span>: { <span class="hljs-comment">// \u5176\u4ED6\u4E00\u4E9B\u6269\u5C55\u914D\u7F6E\u4FE1\u606F</span>
        <span class="hljs-string">&quot;linkKey&quot;</span>: <span class="hljs-string">&quot;radio&quot;</span>, <span class="hljs-comment">// \u8054\u52A8\u6807\u8BC6</span>
        <span class="hljs-string">&quot;linkValue&quot;</span>: <span class="hljs-string">&quot;2&quot;</span>, <span class="hljs-comment">// \u8054\u52A8\u503C\uFF0C\u5373\u5F53\u8868\u5355\u4E2D\`name=linkKey\`\u7684\u63A7\u4EF6\u503C\u4E3A\`linkValue\`\u65F6\uFF0C\u5F53\u524D\u63A7\u4EF6\u624D\u663E\u793A</span>
        <span class="hljs-string">&quot;editDisabled&quot;</span>: <span class="hljs-literal">true</span> <span class="hljs-comment">// \u7F16\u8F91\u72B6\u6001\u4E0B\u7981\u7528\uFF0C\u5373\u8868\u5355\u90E8\u5206\u5B57\u6BB5\u53EA\u80FD\u6DFB\u52A0\uFF0C\u4E0D\u5141\u8BB8\u7F16\u8F91\u65F6\u53EF\u4F7F\u7528\u6B64\u8BBE\u7F6E</span>
      },
      <span class="hljs-string">&quot;item&quot;</span>: { <span class="hljs-comment">// \u7EC4\u4EF6el-form-item\u7684\u53C2\u6570\u914D\u7F6E</span>
        <span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;\u5355\u884C\u6587\u672C&quot;</span>,
        <span class="hljs-string">&quot;showLabel&quot;</span>: <span class="hljs-literal">false</span>
      },
      <span class="hljs-string">&quot;rules&quot;</span>: [], <span class="hljs-comment">// \u5F53\u524D\u63A7\u4EF6\u7684\u6821\u9A8C\u89C4\u5219</span>
      <span class="hljs-string">&quot;customRules&quot;</span>: [], <span class="hljs-comment">// \u4F7F\u7528\u5FEB\u901F\u65B9\u6CD5\u6DFB\u52A0\u7684\u6821\u9A8C\u89C4\u5219\uFF0C\u4F1A\u81EA\u52A8\u5408\u5E76\u5230\`rules\`</span>
      <span class="hljs-string">&quot;rulesComm&quot;</span>: [] <span class="hljs-comment">// \u4F7F\u7528\u5FEB\u901F\u9009\u62E9\u6DFB\u52A0\u7684\u516C\u5171\u6821\u9A8C\u89C4\u5219\uFF0C\u4F1A\u81EA\u52A8\u5408\u5E76\u5230\`rules\`</span>
    },
    {
      <span class="hljs-string">&quot;name&quot;</span>: <span class="hljs-string">&quot;checkbox1636687284762&quot;</span>,
      <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;checkbox&quot;</span>,
      <span class="hljs-string">&quot;control&quot;</span>: {
        <span class="hljs-string">&quot;modelValue&quot;</span>: []
      },
      <span class="hljs-string">&quot;options&quot;</span>: [], <span class="hljs-comment">// \u5355\u9009\u591A\u9009\u4E0B\u62C9\u7684\`option\`\u9009\u9879\u6570\u636E</span>
      <span class="hljs-string">&quot;config&quot;</span>: {
        <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;async&quot;</span>, <span class="hljs-comment">// \`options\`\u6570\u636E\u6765\u6E90\u65B9\u5F0F\`async\`\u52A8\u6001\u9009\u9879\uFF0C\`fixed\`\u56FA\u5B9A\u9009\u9879</span>
        <span class="hljs-string">&quot;source&quot;</span>: <span class="hljs-number">0</span>, <span class="hljs-comment">// \u52A8\u6001\u9009\u9879\u65F6 0\u6570\u636E\u6E90\uFF0C1\u65B9\u6CD5\u51FD\u6570</span>
        <span class="hljs-string">&quot;request&quot;</span>: <span class="hljs-string">&quot;get&quot;</span>, <span class="hljs-comment">// source=0\u65F6\u7684\u6570\u636E\u8BF7\u6C42\u65B9\u5F0F</span>
        <span class="hljs-string">&quot;sourceFun&quot;</span>: <span class="hljs-string">&quot;1&quot;</span> <span class="hljs-comment">// \u65B9\u6CD5\u51FD\u6570\u540D\u6216\u8BF7\u6C42url</span>
      },
      <span class="hljs-string">&quot;item&quot;</span>: {
        <span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;\u591A\u9009\u6846\u7EC4&quot;</span>,
        <span class="hljs-string">&quot;showLabel&quot;</span>: <span class="hljs-literal">false</span>
      },
      <span class="hljs-string">&quot;rules&quot;</span>: []
    }
  ],
  <span class="hljs-string">&quot;config&quot;</span>: { <span class="hljs-comment">// \u8868\u5355\u914D\u7F6E\u4FE1\u606F</span>
    <span class="hljs-string">&quot;labelWidth&quot;</span>: <span class="hljs-string">&quot;&quot;</span>,
    <span class="hljs-string">&quot;class&quot;</span>: <span class="hljs-string">&quot;&quot;</span>,
    <span class="hljs-string">&quot;size&quot;</span>: <span class="hljs-string">&quot;&quot;</span>,
    <span class="hljs-string">&quot;name&quot;</span>: <span class="hljs-string">&quot;form1636607042495&quot;</span>,
    <span class="hljs-string">&quot;rulesComm&quot;</span>: [ <span class="hljs-comment">// \u8868\u5355\u516C\u5171\u6821\u9A8C\u65B9\u6CD5</span>
      {
        <span class="hljs-string">&quot;key&quot;</span>: <span class="hljs-string">&quot;required&quot;</span>, <span class="hljs-comment">// \u5FC5\u987B\u6709\u552F\u4E00\u6807\u8BC6key\uFF0C\u5176\u4ED6\u9009\u9879\u540C\u6821\u9A8C\u89C4\u5219</span>
        <span class="hljs-string">&quot;message&quot;</span>: <span class="hljs-string">&quot;\u5FC5\u586B\u9879&quot;</span>,
        <span class="hljs-string">&quot;trigger&quot;</span>: <span class="hljs-string">&quot;blur&quot;</span>
      }
    ],
    <span class="hljs-string">&quot;vIf&quot;</span>:[] <span class="hljs-comment">// \u7528\u4E8E\u9690\u85CFlist\u4E2D\u6307\u5B9A\u7684\u5B57\u6BB5\uFF0C\u5F53\u5B57\u6BB5\u7684name\u503C\u5B58\u5728\u4E8EvIf\u4E2D\u65F6\u4F7F\u7528vif\u65B9\u5F0F\u9690\u85CF</span>
  }
}
</code></pre>`,14),_=[k];function I(n,t,s,c,a,o){return g(),f("div",y,_)}var D=i(v,[["render",I]]);export{D as default};
