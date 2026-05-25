<!-- Created by weiXin:337547038 -->
<template>
  <div>
    <ak-form
      ref="formRef"
      :data="formData"
      :operate-type="formType"
      request-url=""
      submit-url=""
      :before="before"
      :params="params"
      :after="after"
    />
  </div>
</template>
<script setup lang="ts">
  import {ref, computed} from 'vue'

  const formData = ref({
    list: [
      {
        type: "select",
        control:
          {
            modelValue: "",
            appendToBody: true
          },
        options: [
          {
            label: "事假",
            value: "1"
          },
          {
            label: "病假",
            value: "2"
          },
          {
            label: "调休",
            value: "3"
          },
          {
            label: "产假",
            value: "4"
          },
          {
            label: "陪产假",
            value: "5"
          },
          {
            label: "婚假",
            value: "6"
          },
          {
            label: "丧假",
            value: "7"
          }],
        optionsType: 0,
        transformData: "string",
        name: "type",
        formItem:
          {
            label: "请假类型",
            rules: [
              {
                required: true,
                message: "请选择请假类型",
                trigger: "change"
              }]
          }
      },
      {
        type: "datePicker",
        control:
          {
            modelValue: "",
            type: "date",
            placeholder: "请填写开始时间",
            valueFormat: "YYYY-MM-DD"
          },
        name: "startTime",
        formItem:
          {
            label: "开始时间",
            rules: [
              {
                required: true,
                message: "请选择开始时间",
                trigger: "change"
              }]
          }
      },
      {
        type: "datePicker",
        control:
          {
            modelValue: "",
            type: "date",
            placeholder: "请填写结束时间",
            valueFormat: "YYYY-MM-DD"
          },
        name: "endTime",
        formItem:
          {
            label: "结束时间",
            rules: [
              {
                required: true,
                message: "请选择结束时间",
                trigger: "change"
              },
              {
                validator: (rule, value, callback) =>
                {
                  const val = getaskForLeaveValueByName('startTime')
                  if (value <= val)
                  {
                    callback(new Error('结束时间必须大于开始时间'))
                  }
                  else
                  {
                    callback()
                  }
                },
                trigger: "blur"
              }]
          }
      },
      {
        type: "input",
        control:
          {
            modelValue: "",
            placeholder: "自动计算时长",
            disabled: true
          },
        append: "天",
        name: "duration",
        formItem:
          {
            label: "时长"
          }
      },
      {
        type: "textarea",
        control:
          {
            modelValue: "",
            placeholder: "不填写不能通过"
          },
        span: 24,
        name: "remark",
        formItem:
          {
            label: "请假事由",
            rules: [
              {
                required: true,
                message: "请填写请假事由",
                trigger: "change"
              }]
          }
      },
      {
        type: "upload",
        control:
          {
            modelValue: ""
          },
        name: "files",
        formItem:
          {
            label: "图片附件",
            rules: []
          }
      }],
    config:
      {
        submitCancel: true,
        sourceId: 14,
        name: "请假流程表单",
        size: "default",
        class: "form-row-2",
        labelWidth: "100px",
        change: (
          {
            prop,
            model
          }) =>
        {
          // name当前改变组件的值,model表单的值
          console.log('model',model)
          if (['startTime', 'endTime'].includes(prop) && model.startTime && model.endTime)
          {
            model.duration = (new Date(model.endTime) - new Date(model.startTime)) / (1000 * 60 * 60 * 24)
          }
          return model
        },
        key: "askForLeave"
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
