import{J as d,i as r,M as l,P as i,c as p,d as h,L as u}from"./index.b4d3cd99.js";const t=r({components:{},setup(a){const s=[],e=l({});return{toggleCode:n=>{const o="vdpv_"+n;e[o+"Height"]===0?e[o+"Height"]=(s[n].value?s[n].value.offsetHeight:0)||0:e[o+"Height"]=0},...i(e)}}});t.$vd={matter:{},toc:[{content:"\u5F00\u53D1\u6307\u5357",anchor:"\u5F00\u53D1\u6307\u5357",level:1},{content:"\u76EE\u5F55\u7ED3\u6784",anchor:"\u76EE\u5F55\u7ED3\u6784",level:2},{content:"\u5FEB\u901F\u4E0A\u624B",anchor:"\u5FEB\u901F\u4E0A\u624B",level:2},{content:"nodejs\u6A21\u62DF\u63A5\u53E3",anchor:"nodejs\u6A21\u62DF\u63A5\u53E3",level:2},{content:"\u4EE3\u7801\u6A21\u5F0F",anchor:"\u4EE3\u7801\u6A21\u5F0F",level:2}]};const f=t,j={class:"vuedoc"},m=u(`<h1 id="\u5F00\u53D1\u6307\u5357" data-source-line="1"><a class="markdownIt-Anchor" href="#\u5F00\u53D1\u6307\u5357">#</a> \u5F00\u53D1\u6307\u5357</h1><p data-source-line="3">\u6B22\u8FCE\u6709\u5174\u8DA3\u7684\u540C\u5B66\u53C2\u4E0E\u5B8C\u5584\u6587\u6863</p><h2 id="\u76EE\u5F55\u7ED3\u6784" data-source-line="5"><a class="markdownIt-Anchor" href="#\u76EE\u5F55\u7ED3\u6784">#</a> \u76EE\u5F55\u7ED3\u6784</h2><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-text hljs--one-dark"><code>nodejs // \u6A21\u62DF\u540E\u7AEF\u63A5\u53E3
public
 \u251C\u2500mock // \u6A21\u62DF\u6570\u636E
 \u251C\u2500static  // \u9759\u6001\u8D44\u6E90
   \u251C\u2500 iconfont icon\u56FE\u6807
   \u2514\u2500 plugins \u8868\u5355\u8BBE\u8BA1\u7F16\u8F91\u5668\u53CA\u5BCC\u6587\u672C\u7F16\u8F91\u5668\u76F8\u5173js
src
 \u251C\u2500api // \u6570\u636E\u8BF7\u6C42\u63A5\u53E3
 \u251C\u2500assets // scss\u53CA\u56FE\u7247
 \u251C\u2500components // \u6846\u67B6\u5E03\u5C40\u7EC4\u4EF6
 \u251C\u2500docs // \u4F7F\u7528\u8BF4\u660E\u6587\u6863
 \u2514\u2500views // \u9875\u9762
   \u251C\u2500design // \u8868\u5355\u8BBE\u8BA1\u4E3B\u7A0B\u5E8F\u7EC4\u4EF6
     \u251C\u2500components // \u8868\u5355\u8868\u683C\u8BBE\u8BA1\u516C\u5171\u7EC4\u4EF6
     \u251C\u2500dataList // \u5217\u8868\u8BBE\u8BA1
     \u251C\u2500dataScreen // \u6570\u636E\u53EF\u89C6\u5316\u5927\u5C4F\u8BBE\u8BA1
     \u251C\u2500dataSource // \u6570\u636E\u6E90\u8BBE\u8BA1
     \u251C\u2500form // \u8868\u5355\u8BBE\u8BA1
     \u2514\u2500index.vue \u8BBE\u8BA1\u9996\u9875
   \u251C\u2500 system \u7CFB\u7EDF\u7BA1\u7406\u76F8\u5173\u9875\u9762
</code></pre><h2 id="\u5FEB\u901F\u4E0A\u624B" data-source-line="30"><a class="markdownIt-Anchor" href="#\u5FEB\u901F\u4E0A\u624B">#</a> \u5FEB\u901F\u4E0A\u624B</h2><p data-source-line="32">\u8FDB\u5165\u9879\u76EE\u5B89\u88C5\u4F9D\u8D56\u5305</p><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-text hljs--one-dark"><code>git clone https://github.com/337547038/vue-form-design.git
yarn install
yarn run dev
</code></pre><h2 id="nodejs\u6A21\u62DF\u63A5\u53E3" data-source-line="40"><a class="markdownIt-Anchor" href="#nodejs\u6A21\u62DF\u63A5\u53E3">#</a> nodejs\u6A21\u62DF\u63A5\u53E3</h2><p data-source-line="42">\u4F53\u9A8C\u5B8C\u6574\u7684\u6D41\u7A0B\u53EF\u542F\u52A8nodejs\u6A21\u62DF\u63A5\u53E3\u6570\u636E\uFF0C\u4F7F\u7528mock/json\u6570\u636E\u53EA\u80FD\u67E5\u770B\uFF1B</p><p data-source-line="44">\u5148\u5C06<code>/nodejs/akform.sql</code>\u5BFC\u5165\u5230mysql\u6570\u636E\u5E93\u91CC\uFF0C\u5728db.js\u91CC\u4FEE\u6539\u6570\u636E\u5E93\u8FDE\u63A5\u914D\u7F6E</p><p data-source-line="46">\u8FDB\u5165nodejs\u76EE\u5F55\u5B89\u88C5\u4F9D\u8D56</p><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-text hljs--one-dark"><code>yarn install
yarn dev
</code></pre><p data-source-line="53">\u6D4F\u89C8\u5668\u8FDB\u5165 <a href="http://localhost:3000">http://localhost:3000</a> \u5F00\u59CB\u4F53\u9A8C</p><h2 id="\u4EE3\u7801\u6A21\u5F0F" data-source-line="55"><a class="markdownIt-Anchor" href="#\u4EE3\u7801\u6A21\u5F0F">#</a> \u4EE3\u7801\u6A21\u5F0F</h2><p data-source-line="57">\u4EE3\u7801\u7F16\u8F91\u8F93\u5165\u6846\u53EF\u652F\u6301<code>json</code>\u6216<code>javascript</code>\u4E24\u79CD\u6A21\u5F0F\uFF0C\u521D\u59CB\u4F7F\u7528\u65F6\u53EF\u901A\u8FC7\u4FEE\u6539<code>/src/utils/form.ts</code>\u91CC\u7684<code>EDITTYPE</code>\u7684\u503C</p>`,18),v=[m];function _(a,s,e,c,n,o){return p(),h("div",j,v)}const k=d(f,[["render",_]]);export{k as default};
