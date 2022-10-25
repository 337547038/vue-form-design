import{a2 as p,e as l,A as r,H as d,o as i,c as h,a3 as j}from"./index.61393f5e.js";const u=""+new URL("img1.426e48d6.png",import.meta.url).href,o=l({components:{},setup(c){const a=[],s=r({});return{toggleCode:e=>{const n="vdpv_"+e;s[n+"Height"]===0?s[n+"Height"]=(a[e].value?a[e].value.offsetHeight:0)||0:s[n+"Height"]=0},...d(s)}}});o.$vd={matter:{},toc:[{content:"\u76EE\u5F55\u7ED3\u6784",anchor:"\u76EE\u5F55\u7ED3\u6784",level:1},{content:"\u5FEB\u901F\u4E0A\u624B",anchor:"\u5FEB\u901F\u4E0A\u624B",level:1},{content:"nodejs\u6A21\u62DF\u63A5\u53E3",anchor:"nodejs\u6A21\u62DF\u63A5\u53E3",level:1},{content:"\u4EE3\u7801\u7F16\u8F91\u652F\u6301json\u548Cjavascript\u4E24\u79CD\u6A21\u5F0F",anchor:"\u4EE3\u7801\u7F16\u8F91\u652F\u6301json\u548Cjavascript\u4E24\u79CD\u6A21\u5F0F",level:1},{content:"\u5982\u4F55\u6574\u5408\u5230\u5DF2\u6709\u9879\u76EE",anchor:"\u5982\u4F55\u6574\u5408\u5230\u5DF2\u6709\u9879\u76EE",level:1}]};const m=o,g={class:"vuedoc"},v=j(`<h1 id="\u76EE\u5F55\u7ED3\u6784" data-source-line="1"><a class="markdownIt-Anchor" href="#\u76EE\u5F55\u7ED3\u6784">#</a> \u76EE\u5F55\u7ED3\u6784</h1><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-text hljs--one-dark"><code>nodejs // \u6A21\u62DF\u540E\u7AEF\u63A5\u53E3
public
 \u251C\u2500mock // \u6A21\u62DF\u6570\u636E
 \u251C\u2500static  // \u9759\u6001\u8D44\u6E90
   \u251C\u2500 iconfont icon\u56FE\u6807
   \u2514\u2500 plugins \u8868\u5355\u8BBE\u8BA1\u7F16\u8F91\u5668\u53CA\u5BCC\u6587\u672C\u7F16\u8F91\u5668\u76F8\u5173js
src
 \u251C\u2500api // \u6570\u636E\u8BF7\u6C42\u63A5\u53E3
 \u251C\u2500docs // \u4F7F\u7528\u8BF4\u660E\u6587\u6863
 \u2514\u2500views // \u9875\u9762
   \u251C\u2500designForm // \u8868\u5355\u8BBE\u8BA1\u4E3B\u7A0B\u5E8F\u7EC4\u4EF6
     \u251C\u2500components // \u6838\u5FC3\u7EC4\u4EF6
     \u251C\u2500form.vue // \u901A\u7528\u8868\u5355\u65B0\u589E/\u7F16\u8F91\u9875
     \u251C\u2500formList.vue // \u5DF2\u8BBE\u8BA1\u8868\u5355\u5217\u8868\u9875
     \u251C\u2500index.vue // \u8868\u5355\u8BBE\u8BA1\u4E3B\u9875\u9762
     \u251C\u2500list.vue // \u901A\u7528\u8868\u5355\u5185\u5BB9\u5217\u8868\u9875
     \u2514\u2500table.vue // \u5217\u8868\u9875\u8BBE\u8BA1\u4E3B\u9875\u9762
   \u2514\u2500export
     \u251C\u2500form.vue // \u6DFB\u52A0\u7F16\u8F91\u8868\u5355\u6587\u4EF6\uFF0C\u5728\u8868\u5355\u8BBE\u8BA1\u5904\u5BFC\u51FA\u7684vue\u6587\u4EF6\uFF0C\u7528\u4F5C\u6D4B\u8BD5
     \u2514\u2500list.vue // \u8868\u5355\u5217\u8868\u6587\u4EF6\uFF0C\u5728\u8868\u5355\u8BBE\u8BA1\u5904\u5BFC\u51FA\u7684vue\u6587\u4EF6\uFF0C\u7528\u4F5C\u6D4B\u8BD5
</code></pre><h1 id="\u5FEB\u901F\u4E0A\u624B" data-source-line="26"><a class="markdownIt-Anchor" href="#\u5FEB\u901F\u4E0A\u624B">#</a> \u5FEB\u901F\u4E0A\u624B</h1><p data-source-line="28">\u8FDB\u5165\u9879\u76EE\u5B89\u88C5\u4F9D\u8D56\u5305</p><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-text hljs--one-dark"><code>git clone https://github.com/337547038/vue-form-design.git
yarn install
yarn run dev
</code></pre><h1 id="nodejs\u6A21\u62DF\u63A5\u53E3" data-source-line="36"><a class="markdownIt-Anchor" href="#nodejs\u6A21\u62DF\u63A5\u53E3">#</a> nodejs\u6A21\u62DF\u63A5\u53E3</h1><p data-source-line="38">\u4F53\u9A8C\u5B8C\u6574\u7684\u6D41\u7A0B\u53EF\u542F\u52A8nodejs\u6A21\u62DF\u63A5\u53E3\u6570\u636E\uFF0C\u4F7F\u7528mock/json\u6570\u636E\u53EA\u80FD\u67E5\u770B\uFF1B</p><p data-source-line="40">\u5148\u5C06<code>/nodejs/akform.sql</code>\u5BFC\u5165\u5230mysql\u6570\u636E\u5E93\u91CC\uFF0C\u5728db.js\u91CC\u4FEE\u6539\u6570\u636E\u5E93\u8FDE\u63A5\u914D\u7F6E</p><p data-source-line="42">\u8FDB\u5165nodejs\u76EE\u5F55\u5B89\u88C5\u4F9D\u8D56</p><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-text hljs--one-dark"><code>yarn install
yarn dev
</code></pre><p data-source-line="49">\u6D4F\u89C8\u5668\u8FDB\u5165 <a href="http://localhost:3000">http://localhost:3000</a> \u5F00\u59CB\u521B\u5EFA\u8868\u5355</p><p data-source-line="51"><img src="`+u+`" alt=""></p><h1 id="\u4EE3\u7801\u7F16\u8F91\u652F\u6301json\u548Cjavascript\u4E24\u79CD\u6A21\u5F0F" data-source-line="53"><a class="markdownIt-Anchor" href="#\u4EE3\u7801\u7F16\u8F91\u652F\u6301json\u548Cjavascript\u4E24\u79CD\u6A21\u5F0F">#</a> \u4EE3\u7801\u7F16\u8F91\u652F\u6301json\u548Cjavascript\u4E24\u79CD\u6A21\u5F0F</h1><p data-source-line="55">\u4EE3\u7801\u7F16\u8F91\u8F93\u5165\u6846\u53EF\u652F\u6301<code>json</code>\u6216<code>javascript</code>\uFF0C\u521D\u59CB\u4F7F\u7528\u65F6\u53EF\u901A\u8FC7\u4FEE\u6539<code>/src/utils/form.ts</code>\u91CC\u7684<code>EDITTYPE</code>\u7684\u503C</p><h1 id="\u5982\u4F55\u6574\u5408\u5230\u5DF2\u6709\u9879\u76EE" data-source-line="57"><a class="markdownIt-Anchor" href="#\u5982\u4F55\u6574\u5408\u5230\u5DF2\u6709\u9879\u76EE">#</a> \u5982\u4F55\u6574\u5408\u5230\u5DF2\u6709\u9879\u76EE</h1><p data-source-line="59">\u6700\u8FD1\u6709\u4E0D\u5C11\u540C\u5B66\u90FD\u5728\u95EE\u5982\u4F55\u4F7F\u7528\uFF0C\u600E\u4E48\u6574\u5408\u5230\u81EA\u5DF1\u7684\u9879\u76EE\u5F53\u4E2D\u3002</p><p data-source-line="61">\u9996\u5148\u4E0D\u5EFA\u8BBE\u6253\u5305\u53D1npm\u4E4B\u7C7B\u7684\uFF0C\u56E0\u8BE5\u7CFB\u7EDF\u5305\u542B\u4E86\u5B8C\u6574\u7684\u8868\u5355\u8BBE\u8BA1\u3001\u5217\u8868\u8BBE\u8BA1\u3001\u5217\u8868\u6761\u4EF6\u67E5\u8BE2\u8BBE\u8BA1\u3001\u8868\u5355\u8BBE\u8BA1\u589E\u52A0\u4FEE\u6539\u3001\u8BBE\u8BA1\u5217\u8868\u5185\u5BB9\u589E\u5220\u67E5\u6539\u7B49\u529F\u80FD\u53CA\u5404\u9875\u9762\u4E4B\u95F4\u8DEF\u7531\u8DF3\u8F6C\u3002</p><p data-source-line="63">\u590D\u5236\u4EE5\u4E0B\u6587\u4EF6\u5230\u4F60\u9879\u76EE\u4E0B\uFF1A</p><p data-source-line="65">\u590D\u5236<code>/public/staic</code>\uFF0C \u5728index.html\u5F15\u5165\uFF0C\u53EF\u53C2\u8003<code>/index.html</code>\u5F15\u5165\u65B9\u5F0F\uFF1B</p><p data-source-line="67">\u590D\u5236<code>/src/api</code>\u3001<code>/src/store/designForm</code>\u3001<code>/src/utils</code>\u3001<code>/src/viesw/designForm</code>\uFF0C\u5F15\u5165\u65B9\u5F0F\u53EF\u53C2\u8003<code>/src/main.ts</code>\uFF0C\u5982\uFF1A</p><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-javascript hljs--one-dark"><code><span class="hljs-keyword">import</span> AKDesignForm <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./views/designForm/index&#39;</span>

<span class="hljs-keyword">const</span> pinia = createPinia()
<span class="hljs-keyword">const</span> app = createApp(App)
app.use(pinia).use(AKDesignForm).mount(<span class="hljs-string">&#39;#app&#39;</span>)
</code></pre><p data-source-line="77">\u6700\u540E\u505A\u597D\u8DEF\u7531\u6307\u5411\uFF0C\u5982:</p><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-javascript hljs--one-dark"><code>[
  {
    <span class="hljs-attr">path</span>: <span class="hljs-string">&#39;/designform&#39;</span>, <span class="hljs-comment">// \u4E3B\u8BBE\u8BA1\u9875</span>
    <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;designform&#39;</span>,
    <span class="hljs-attr">component</span>: <span class="hljs-function">() =&gt;</span> <span class="hljs-keyword">import</span>(<span class="hljs-string">&#39;../views/designForm/index.vue&#39;</span>)
  },
  {
    <span class="hljs-attr">path</span>:<span class="hljs-string">&#39;/designform/table&#39;</span>, <span class="hljs-comment">// \u5217\u8868\u8BBE\u8BA1\u9875</span>
    <span class="hljs-attr">name</span>:<span class="hljs-string">&#39;designformTable&#39;</span>,
    <span class="hljs-attr">component</span>: <span class="hljs-function">() =&gt;</span> <span class="hljs-keyword">import</span>(<span class="hljs-string">&#39;../views/designForm/table.vue&#39;</span>)
  },
  {
    <span class="hljs-comment">// ... \u5176\u4ED6</span>
  }
]
</code></pre><blockquote data-source-line="97"><p>\u5982\u679C\u662F\u65B0\u9879\u76EE\uFF0C\u5EFA\u8BAE\u5728\u6B64\u6846\u67B6\u57FA\u7840\u4E0A\u5F00\u53D1\u5373\u53EF</p></blockquote>`,29),f=[v];function _(c,a,s,t,e,n){return i(),h("div",g,f)}const y=p(m,[["render",_]]);export{y as default};
