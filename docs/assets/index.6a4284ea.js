import{a0 as r,f as l,A as i,H as d,o as p,b as h,a1 as u}from"./index.fbb3896e.js";const v=""+new URL("img1.3c955a92.png",import.meta.url).href,n=l({components:{},setup(a){const s=[],e=i({});return{toggleCode:o=>{const t="vdpv_"+o;e[t+"Height"]===0?e[t+"Height"]=(s[o].value?s[o].value.offsetHeight:0)||0:e[t+"Height"]=0},...d(e)}}});n.$vd={matter:{},toc:[{content:"\u76EE\u5F55\u7ED3\u6784",anchor:"\u76EE\u5F55\u7ED3\u6784",level:1},{content:"\u5FEB\u901F\u4E0A\u624B",anchor:"\u5FEB\u901F\u4E0A\u624B",level:1},{content:"\u4EE3\u7801\u7F16\u8F91\u652F\u6301json\u6216javascript",anchor:"\u4EE3\u7801\u7F16\u8F91\u652F\u6301json\u6216javascript",level:1}]};const m=n,f={class:"vuedoc"},_=u(`<h1 id="\u76EE\u5F55\u7ED3\u6784" data-source-line="1"><a class="markdownIt-Anchor" href="#\u76EE\u5F55\u7ED3\u6784">#</a> \u76EE\u5F55\u7ED3\u6784</h1><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-text hljs--one-dark"><code>public
 \u251C\u2500mock // \u6A21\u62DF\u6570\u636E
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
</code></pre><h1 id="\u5FEB\u901F\u4E0A\u624B" data-source-line="22"><a class="markdownIt-Anchor" href="#\u5FEB\u901F\u4E0A\u624B">#</a> \u5FEB\u901F\u4E0A\u624B</h1><p data-source-line="24">\u8FDB\u5165\u9879\u76EE\u5B89\u88C5\u4F9D\u8D56\u5305</p><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-text hljs--one-dark"><code>git clone https://github.com/337547038/vue-form-design.git
yarn install
yarn run dev
</code></pre><p data-source-line="33">\u6D4F\u89C8\u5668\u8FDB\u5165 <a href="http://localhost:3000">http://localhost:3000</a> \u5F00\u59CB\u521B\u5EFA\u8868\u5355</p><p data-source-line="35"><img src="`+v+'" alt=""></p><h1 id="\u4EE3\u7801\u7F16\u8F91\u652F\u6301json\u6216javascript" data-source-line="37"><a class="markdownIt-Anchor" href="#\u4EE3\u7801\u7F16\u8F91\u652F\u6301json\u6216javascript">#</a> \u4EE3\u7801\u7F16\u8F91\u652F\u6301json\u6216javascript</h1><p data-source-line="39">\u4EE3\u7801\u7F16\u8F91\u8F93\u5165\u6846\u53EF\u652F\u6301<code>json</code>\u6216<code>javascript</code>\uFF0C\u521D\u59CB\u4F7F\u7528\u65F6\u53EF\u901A\u8FC7\u4FEE\u6539<code>/src/utils/form.ts</code>\u91CC\u7684<code>EDITTYPE</code>\u7684\u503C</p>',11),g=[_];function j(a,s,e,c,o,t){return p(),h("div",f,g)}const x=r(m,[["render",j]]);export{x as default};
