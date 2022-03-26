<template>
  <div>
    <ak-form-design :formData="formData" ref="formName" :type="2">
    </ak-form-design>
    <el-button type="primary" @click="submit">提交</el-button>
  </div>
</template><script>
import {reactive, toRefs, provide, ref} from 'vue'

export default {
  name: "addForm",
  props: {},
  components: {},
  setup(props) {
    const state = reactive({
      formData: {list:[{name:"input1648302679544",type:"input",control:{modelValue:"121"},config:{},item:{label:"单行文本",showLabel:false},rules:[],customRules:[]},{name:"textarea1648302680801",type:"textarea",control:{modelValue:"212"},config:{},item:{label:"多行文本",showLabel:false},rules:[],customRules:[]},{name:"radio1648302683047",type:"radio",control:{modelValue:"value1"},options:[{label:"label1",value:"value1"},{label:"label2",value:"value2"},{label:"label3",value:"value3"}],config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"单选框组",showLabel:false},rules:[]},{name:"card1648302971726",type:"card",list:[{name:"input1648302979218",type:"input",control:{modelValue:"5858"},config:{},item:{label:"单行文本",showLabel:false},rules:[],customRules:[]}],control:{},config:{},item:{label:"卡片布局",showLabel:false},rules:[]},{name:"checkbox1648302685167",type:"checkbox",control:{modelValue:["label1","label2"]},options:[{label:"label1",value:"value1"},{label:"label2",value:"value2"},{label:"label3",value:"value3"}],config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"多选框组",showLabel:false},rules:[]},{name:"select1648302687366",type:"select",control:{modelValue:"value1",appendToBody:true},options:[{label:"label1",value:"value1"},{label:"label2",value:"value2"},{label:"label3",value:"value3"}],config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"下拉选择框",showLabel:false},rules:[]},{name:"grid1648302942347",type:"grid",columns:[{attr:{span:12},list:[{name:"input1648302946911",type:"input",control:{modelValue:"585"},config:{},item:{label:"单行文本",showLabel:false},rules:[],customRules:[]}]},{attr:{span:12},list:[{name:"input1648302949597",type:"input",control:{modelValue:"585"},config:{},item:{label:"单行文本",showLabel:false},rules:[],customRules:[]}]}],control:{},config:{}},{name:"divider1648302967534",type:"divider",control:{},item:{label:"分割线",showLabel:false},rules:[]},{name:"tabs1648302955155",type:"tabs",columns:[{label:"Tab1",list:[{name:"input1648302958686",type:"input",control:{modelValue:"585"},config:{},item:{label:"单行文本",showLabel:false},rules:[],customRules:[]}]}],control:{},config:{}},{name:"tinymce1648302930298",type:"tinymce",control:{modelValue:"12333333"},config:{},item:{label:"tinymce富文本",showLabel:false},rules:[]},{name:"title1648302879594",type:"title",control:{modelValue:"标题"},config:{},item:{label:"标题",showLabel:false},rules:[]},{name:"datePicker1648302689907",type:"datePicker",control:{modelValue:{},type:"date"},config:{},item:{label:"日期选择器",showLabel:false},rules:[]},{name:"timePicker1648302703845",type:"timePicker",control:{modelValue:{}},config:{},item:{label:"时间选择器",showLabel:false},rules:[]},{name:"colorPicker1648302708570",type:"colorPicker",control:{modelValue:"#DE3A3A"},config:{},item:{label:"取色器",showLabel:false},rules:[]},{name:"switch1648302715949",type:"switch",control:{modelValue:false},config:{},item:{label:"开关",showLabel:false},rules:[]},{name:"number1648302718216",type:"number",control:{modelValue:4},config:{},item:{label:"计数器",showLabel:false},rules:[]},{name:"cascader1648302723320",type:"cascader",control:{modelValue:["guide"]},options:[{value:"guide",label:"Guide"},{value:"guide2",label:"Guide2"}],config:{type:"fixed",source:0,request:"get",sourceFun:""},item:{label:"级联选择器",showLabel:false},rules:[]},{name:"rate1648302781095",type:"rate",control:{modelValue:4},config:{},item:{label:"评分",showLabel:false},rules:[]},{name:"slider1648302866816",type:"slider",control:{modelValue:13},config:{},item:{label:"滑块",showLabel:false},rules:[]},{name:"txt1648302870511",type:"txt",control:{modelValue:"文字 "},config:{},item:{label:"文字",showLabel:false},rules:[]},{name:"table1648302894985",type:"table",list:[{name:"input1648302900053",type:"input",control:{modelValue:"123"},config:{},item:{label:"单行文本",showLabel:false},rules:[],customRules:[]}],tableData:[],control:{border:true},config:{}}],config:{labelWidth:"",class:"",size:"default",name:"form1648300327079",rulesComm:[]}}
    })
    // 表单控件值改变事件
    /*provide('DFControlChange', ({key, value}) => {
      console.log(key)
      console.log(value)
    })*/
    const formName=ref()
    const submit = () => {
      formName.value.validate((valid) => {
        console.log(valid)
        if (valid) {
          alert('submit')
        } else {
          console.log('error submit')
          return false
        }
      })
    }
    return {
      ...toRefs(state),
      submit,
      formName
    }
  }
}
</script>
