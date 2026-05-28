<!-- Created by weiXin:337547038 -->
<template>
  <div>
    <ak-form
      ref="formRef"
      :data="formData"
      :operate-type="formType"
      request-url="content/get"
      :query="{formId:57, id:6}"
      submit-url=""
      :before="before"
      :params="params"
      :after="after"
    />
  </div>
</template>
<script setup lang="ts">
  import {ref, computed, onMounted} from 'vue'

  const formRef=ref()
  onMounted(()=>{
    formRef.value.getData()
  })
  const formData = ref({
    list: [
      {
        type: "txt",
        control:
          {
            modelValue: "组件示例演示，可快速轻松实现功能复杂的各类型表单；功能强大、简单灵活、超乎你想象",
            style:
              {
                color: "red"
              }
          }
      },
      {
        type: "title",
        control:
          {
            modelValue: "基础字段"
          }
      },
      {
        type: "input",
        control:
          {
            modelValue: "",
            placeholder: "请输入标题名称"
          },
        name: "inputText",
        formItem:
          {
            label: "标题名称"
          },
        customRules: [
          {
            type: "required",
            message: "必填项",
            trigger: "blur"
          }]
      },
      {
        type: "radio",
        control:
          {
            modelValue: "0"
          },
        optionsType: 0,
        transformData: "number",
        name: "radio",
        formItem:
          {
            label: "性别"
          },
        options: [
          {
            label: "男",
            value: 1
          },
          {
            label: "女",
            value: 0
          }]
      },
      {
        type: "checkbox",
        control:
          {
            modelValue: []
          },
        options: [],
        optionsType: 2,
        optionsFun: "sys-flow",
        name: "checkbox",
        formItem:
          {
            label: "多选"
          }
      },
      {
        type: "select",
        control:
          {
            appendToBody: true
          },
        optionsType: 1,
        optionsFun: "demo/select",
        method: "get",
        label: "name",
        value: "value",
        name: "select1",
        formItem:
          {
            label: "选择框"
          },
        options: []
      },
      {
        type: "datePicker",
        control:
          {
            type: "date",
            placeholder: "请选择日期",
            format: "YYYY-MM-DD",
            valueFormat: "YYYY-MM-DD"
          },
        name: "dateTime",
        formItem:
          {
            label: "日期时间"
          }
      },
      {
        type: "switch",
        control:
          {
            modelValue: false,
            activeValue: 1,
            inactiveValue: 0
          },
        name: "switch",
        formItem:
          {
            label: "开关"
          }
      },
      {
        type: "textarea",
        control:
          {
            modelValue: ""
          },
        name: "textarea",
        formItem:
          {
            label: "多行文本"
          }
      },
      {
        type: "upload",
        control:
          {
            modelValue: ""
          },
        tip: "",
        btnText: "选择图片",
        name: "upload",
        formItem:
          {
            label: "图片文件上传"
          }
      },
      {
        type: "card",
        columns: [
          {
            label: "卡片1",
            list: [
              {
                type: "component",
                control:
                  {
                    modelValue: ""
                  },
                componentName: "ComponentTest",
                name: "component",
                formItem:
                  {
                    label: "选择位置"
                  },
                span: 0
              },
              {
                type: "expand-user",
                control:
                  {
                    modelValue: ""
                  },
                name: "user",
                formItem:
                  {
                    label: "选择用户"
                  },
                span: 0
              }]
          }],
        control:
          {},
        formItem:
          {
            label: "卡片布局"
          }
      },
      {
        type: "inputSlot",
        control:
          {
            modelValue: "",
            appendToBody: true,
            style:
              {
                width: "150px"
              }
          },
        options: [
          {
            label: "小时",
            value: "h"
          },
          {
            label: "分钟",
            value: "m"
          },
          {
            label: "天",
            value: "d"
          }],
        optionsType: 0,
        name: "prepend",
        formItem:
          {
            label: "前缀",
            hideLabel: true
          }
      },
      {
        type: "input",
        control:
          {
            modelValue: ""
          },
        append: "key:prepend",
        name: "select2",
        formItem:
          {
            label: "复合型"
          }
      },
      {
        type: "div",
        control:
          {},
        list: [
          {
            type: "title",
            control:
              {
                modelValue: "子表"
              },
            name: "title1706851586238",
            span: 0
          },
          {
            type: "table",
            list: [
              {
                type: "input",
                control:
                  {
                    modelValue: "",
                    placeholder: "请输入姓名"
                  },
                name: "name",
                formItem:
                  {
                    label: "姓名"
                  },
                customRules: [
                  {
                    type: "required",
                    message: "必填项",
                    trigger: "blur"
                  }]
              },
              {
                type: "select",
                control:
                  {
                    modelValue: "",
                    appendToBody: true
                  },
                options: [
                  {
                    label: "男",
                    value: "1"
                  },
                  {
                    label: "女",
                    value: "0"
                  },
                  {
                    label: "未知",
                    value: "2"
                  }],
                optionsType: 0,
                transformData: "string",
                name: "sex",
                formItem:
                  {
                    label: "性别"
                  }
              }],
            tableData: [],
            control:
              {
                border: true
              },
            addBtnText: "添加一行",
            name: "table2",
            span: 0
          }],
        span: ""
      },
      {
        type: "div",
        control:
          {},
        list: [
          {
            type: "title",
            control:
              {
                modelValue: "弹性字段"
              },
            span: 24
          },
          {
            type: "flex",
            list: [
              {
                type: "input",
                control:
                  {
                    modelValue: ""
                  },
                span: 10,
                name: "input1706851786349",
                formItem:
                  {
                    label: "姓名"
                  },
                customRules: [
                  {
                    type: "required",
                    message: "必填项",
                    trigger: "blur"
                  }]
              },
              {
                type: "input",
                control:
                  {
                    modelValue: ""
                  },
                span: 10,
                name: "tel",
                formItem:
                  {
                    label: "电话"
                  },
                customRules: [
                  {
                    type: "mobile",
                    message: "请输入手机号码",
                    trigger: "blur"
                  }]
              }],
            tableData: [],
            control:
              {},
            addBtnText: "添加一行",
            span: 24,
            delBtnText: "删除",
            name: "flex"
          }]
      },
      {
        type: "tinymce",
        control:
          {
            modelValue: ""
          },
        name: "tinymce",
        formItem:
          {
            label: "内容"
          },
        span: 24
      }],
    config:
      {
        submitCancel: true,
        sourceId: 20,
        name: "组件示例表单",
        transformData: true,
        size: "default",
        labelWidth: "120",
        key: "demo",
        class: "form-row-2"
      }
  })
  // 表单提交时可附加的参数
  const params = ref({})
  // 表单操作类型，如没有设置添加和编辑页的禁用隐藏等设置可不传
  const formType = computed(() => {
    return 'add'
  })

  // 获取表单数据值或是提交表单前事件，可使用return false阻止操作．other.type可选fetch/submit
  const before = (params: Record<string, any>, other: string) => {
    console.log('before', params, other)
    return params
  }
  // 获取表单数据或提交表单请求后事件,type可选fetch/submit
  const after = (res: any, success: boolean, type: string) => {
    if (success && type === 'submit') {
      console.log('after', res, success, type)
    }
  }
</script>
