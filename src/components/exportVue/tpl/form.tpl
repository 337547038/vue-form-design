<template>
  <div>
    <ak-form
      ref="formRef"
      :operate-type="formType"
      :data="formData"
      request-url=""
      submit-url=""
      :before="beforeSubmit">
    </ak-form>
  </div>
</template>
<script setup lang="ts">
  import { ref, computed, provide } from 'vue'
  const formRef = ref()
  const formData = ref({list:[{type:"input",control:{modelValue:"",disabled:false},config:{span:12},name:"input1778990287710",formItem:{label:"单行文本",rules:[{required:true,message:"Please input Activity name",trigger:"blur"},{min:3,max:5,message:"Length should be 3 to 5",trigger:"blur"}]},customRules:[]},{type:"textarea",control:{modelValue:""},config:{},name:"textarea1778990289948",formItem:{label:"多行文本"}},{type:"grid",columns:[{attr:{span:12},list:[]},{attr:{span:12},list:[]}],control:{},config:{}},{type:"tabs",columns:[{label:"Tab1",list:[]}],control:{},config:{}}],form:{size:"default",name:"858"},config:{submitCancel:true}})
    // todo 存在编辑时，可选add、edit、detail、design、search，默认add
  const formType = computed(() => {
     return 'add'
  })


  // 表单提交时参数处理
  const beforeSubmit = (params,type,obj)=>{
    // params请求的参数，可根据type作判断，对params作修改后return回去
    // 需要将params参数return
    return params;
  }
</script>