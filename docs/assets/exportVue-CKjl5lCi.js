import{r as e}from"./chunk-DECur_0Z.js";import{B as t,G as n,Kt as r,U as i,W as a,Xt as o,b as s,d as c,f as l,h as u,i as d,it as f,j as p,mt as m,p as h,x as g,y as _}from"./runtime-core.esm-bundler-BgH13u1H.js";import{r as v}from"./es-DvGMWAY8.js";import{s as y,t as b}from"./design-DBkXgHtz.js";import{n as x}from"./drawer-BNtVW6U4.js";var S={class:`main-tools`},C=g({__name:`headTools`,props:{showKey:{default:()=>[]},hideKey:{default:()=>[]}},emits:[`click`],setup(e,{emit:s}){let p=e,m=s,g=c(()=>{let e=[{icon:`del`,label:`清空`,key:1},{icon:`eye`,label:`预览`,key:2},{icon:`json`,label:`生成脚本预览`,key:3},{icon:`vue`,label:`导出vue文件`,key:4},{icon:`save`,label:`保存`,key:5}];return p.showKey?.length?e.filter(e=>p.showKey.includes(e.key)):p.hideKey?.length?e.filter(e=>!p.hideKey.includes(e.key)):e}),v=e=>{m(`click`,e)};return(e,s)=>{let c=n(`el-button`);return t(),u(`div`,S,[a(e.$slots,`default`),(t(!0),u(d,null,i(g.value,e=>(t(),h(c,{key:e.icon,link:``,type:`primary`,onClick:t=>v(e.icon)},{default:f(()=>[l(`i`,{class:r([`icon-`+e.icon])},null,2),_(o(e.label),1)]),_:2},1032,[`onClick`]))),128))])}}}),w=e(x(),1),T=`<!-- Created by weiXin:337547038 -->\r
<template>\r
  <div class="container" :style="style" v-loading="loading">\r
    <screen-show :data="designData.list"></screen-show>\r
  </div>\r
</template>\r
<script setup lang="ts">\r
  import {computed, onMounted, ref} from 'vue'\r
  import ScreenShow from '@/components/screen/show.vue'\r
  import {loadConfigResource} from "@/components/screen/getData";\r
\r
  definePage({meta: {layout: 'hidden'}})\r
  const loading = ref(false)\r
  const designData = ref({{designData}})\r
  const style = computed(() => {\r
    const {width, height, background, primary} = designData.value.config || {}\r
    return {\r
      width: width,\r
      height: height,\r
      background: background,\r
      color: primary,\r
      position: 'relative'\r
    }\r
  })\r
  const initConfig = () => {\r
    loadConfigResource(designData.value.config)\r
  }\r
  onMounted(() => {\r
    initConfig()\r
  })\r
<\/script>`,E=`<!-- Created by weiXin:337547038 -->\r
<template>\r
  <div>\r
    <ak-form\r
      ref="formRef"\r
      :data="formData"\r
      :operate-type="formType"\r
      request-url="{{requestUrl}}"\r
      submit-url="{{submitUrl}}"\r
      :before="before"\r
      :params="params"\r
      :after="after"\r
    ></ak-form>\r
  </div>\r
</template>\r
<script setup lang="ts">\r
  import {ref, computed} from 'vue'\r
\r
  const formData = ref({{formData}})\r
  // 表单提交时可附加的参数\r
  const params = ref({})\r
  // 表单操作类型，如没有设置添加和编辑页的禁用隐藏等设置可不传\r
  const formType = computed(() => {\r
    return 'add'\r
  })\r
\r
  // 获取表单数据值或是提交表单前事件，可使用return false阻止操作．other.type可选fetch/submit\r
  const before = (params: Record<string, any>, other: string) => {\r
    console.log('before', params, other)\r
    return params\r
  }\r
  // 获取表单数据或提交表单请求后事件,type可选fetch/submit\r
  const after = (res: any, success: boolean, type: string) => {\r
    if (success && type === 'submit') {\r
      console.log('after', res, success, type)\r
    }\r
  }\r
<\/script>\r
`,D=`<!-- created by weiXin:337547038 -->\r
<template>\r
  <div>\r
    <ak-list\r
      ref="tableListRef"\r
      :api-key='{{apiKey}}'\r
      :search-data="searchData"\r
      :data="tableData"\r
      @btn-click="listBtnClick"\r
    >\r
      <ak-form\r
        ref="formRef"\r
        :data="formData"\r
        :operate-type="operateType"\r
        submit-url=""\r
        :after="afterSubmit"\r
        @btn-click="formBtnClick"\r
      ></ak-form>\r
    </ak-list>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
  import {nextTick, ref} from 'vue'\r
\r
  const formRef = ref()\r
  const tableListRef = ref()\r
  const closeFormFn = ref()\r
  const operateType = ref('add')\r
\r
  const tableData = ref({{tableData}})\r
\r
  const searchData = ref({{searchData}})\r
\r
  const formData = ref({{formData}})\r
\r
  /**\r
   * 列表按钮点击事件\r
   * @param key 按钮标识\r
   * @param row 列表右则操作按钮事件时为当前行数据；列表右上方按钮时为当前所勾选的行id\r
   * @param close 用于关闭弹的方法\r
   */\r
  const listBtnClick = (key: string, row: any, close: any) => {\r
    closeFormFn.value = close\r
    if (key === 'edit') {\r
      operateType.value = key\r
      nextTick(() => {\r
        formRef.value.getData({id:row.id})\r
      })\r
    }\r
  }\r
  // 关闭弹窗\r
  const closeForm = () => {\r
    closeFormFn.value && closeFormFn.value()\r
  }\r
  const afterSubmit = (_: any, success: boolean, type: string) => {\r
    if (type === 'submit') {\r
      if (success) {\r
        // 添加成功，刷新列表数据并关闭弹窗\r
        tableListRef.value.getListData()\r
        closeForm()\r
      }\r
    }\r
  }\r
\r
  const formBtnClick = (type: string) => {\r
    if (type === 'reset' || type === 'cancel') {\r
      closeForm()\r
    }\r
  }\r
<\/script>\r
`,O=`<!-- Created by weiXin:337547038 -->\r
<template>\r
  <div>\r
    <ak-list\r
      ref="tableListRef"\r
      :api-key='{{apiKey}}'\r
      :search-data="searchData"\r
      :data="tableData"\r
      @btn-click="listBtnClick"\r
    >\r
    </ak-list>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
  import {nextTick, ref} from 'vue'\r
\r
  const tableListRef = ref()\r
  const tableData = ref({{tableData}})\r
  const searchData = ref({{searchData}})\r
\r
  /**\r
   * 列表按钮点击事件\r
   * @param key 按钮标识\r
   * @param row 列表右则操作按钮事件时为当前行数据；列表右上方按钮时为当前所勾选的行id\r
   */\r
  const listBtnClick = (key: string, row: any) => {\r
    if (key === 'add') {\r
      // 添加方法\r
    }else if(key==='edit'){\r
\r
    }else {\r
     // 其他按钮事件\r
    }\r
  }\r
<\/script>\r
`,k={class:`dialog-footer`},A=g({__name:`index`,setup(e,{expose:r}){let i=m(!1),a=m(),o=({data:e,type:t,search:n})=>{i.value=!0;let r=``;switch(t){case`screen`:r=T.replace(`{{designData}}`,y(e,!0,``));break;case`form`:r=c(e);break;case`list`:r=u(e,n);break}p(()=>{a.value=b({content:r,id:`editJsonCopy`,type:`html`})})},c=e=>E.replace(`{{formData}}`,y(e,!0,``)).replace(`{{requestUrl}}`,e.config.requestUrl||``).replace(`{{submitUrl}}`,e.config.submitUrl||``),u=(e,t)=>{let{list:n,del:r,edit:i,exportExcel:a}=e.config.apiKey||{},o=Object.fromEntries(Object.entries({list:n,del:r,edit:i,exportExcel:a}).filter(([,e])=>e)),s=e.config.openType===`dialog`?D:O;return delete e.config.name,delete e.config.formId,s.replace(`{{tableData}}`,y(e,!0,``)).replace(`{{apiKey}}`,y(o)).replace(`{{searchData}}`,y(t,!0,``)).replace(`{{formData}}`,y(t,!0,``))},d=e=>{p(()=>{let t=new w.default(e.target,{text:()=>a.value.getValue()});t.on(`success`,function(){v({message:`复制成功！`,type:`success`}),t.destroy()}),t.on(`error`,function(){v.error(`复制失败`),t.destroy()}),t.onClick(e)})},g=()=>{let e=`data:text/csv;charset=utf-8,`+a.value?.getValue(),t=new Date().getTime()+`.vue`,n=encodeURI(e),r=document.createElement(`a`);r.setAttribute(`href`,n),r.setAttribute(`download`,t),r.click()};return r({open:o}),(e,r)=>{let a=n(`el-button`),o=n(`el-dialog`);return t(),h(o,{modelValue:i.value,"onUpdate:modelValue":r[0]||=e=>i.value=e,title:`导出vue文件`,class:`export-dialog`,width:`80%`},{footer:f(()=>[l(`div`,k,[s(a,{type:`primary`,onClick:d},{default:f(()=>[...r[1]||=[_(` 复制数据 `,-1)]]),_:1}),s(a,{type:`primary`,onClick:g},{default:f(()=>[...r[2]||=[_(` 导出代码 `,-1)]]),_:1})])]),default:f(()=>[r[3]||=l(`div`,{id:`editJsonCopy`},null,-1)]),_:1},8,[`modelValue`])}}});export{C as n,A as t};