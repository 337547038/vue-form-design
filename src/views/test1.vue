<template>
  <div>
    <ak-form
      ref="formNameEl"
      :operate-type="formType"
      :data="formData"
      request-url=""
      submit-url=""
      :before="beforeSubmit"
    />
  </div>
</template>

<script setup lang="ts">
  import {ref, computed, provide} from 'vue'
  //definePage({meta:{layout:'hidden'}})

/*  definePage({
    meta: {
      requiresAuth: true,
      layout:'hidden'
    },
  })*/
  const formNameEl = ref()
  const formData = ref({
    list: [{
      type: "select",
      control: {modelValue: "", appendToBody: true},
      options: [{label: "事假", value: "1"}, {label: "病假", value: "2"}, {label: "调休", value: "3"}, {
        label: "产假",
        value: "4"
      }, {label: "陪产假", value: "5"}, {label: "婚假", value: "6"}, {label: "丧假", value: "7"}],
      config: {optionsType: 0, transformData: "string"},
      name: "type",
      formItem: {label: "请假类型", rules: [{required: true, message: "请选择请假类型", trigger: "change"}]}
    }, {
      type: "datePicker",
      control: {modelValue: "", type: "date", placeholder: "请填写开始时间", valueFormat: "YYYY-MM-DD"},
      config: {},
      name: "startTime",
      formItem: {label: "开始时间", rules: [{required: true, message: "请选择开始时间", trigger: "change"}]}
    }, {
      type: "datePicker",
      control: {modelValue: "", type: "date", placeholder: "请填写结束时间", valueFormat: "YYYY-MM-DD"},
      config: {},
      name: "endTime",
      formItem: {
        label: "结束时间", rules: [{required: true, message: "请选择结束时间", trigger: "change"}, {
          validator: (rule: any, value: number, callback: (arg0: Error | undefined) => void) => {
            console.log('validate', rule, value)
            const val = window.getaskForLeaveValueByName('startTime')
            console.log(val,'val')
            if (value <= val) {
              callback(new Error('结束时间必须大于开始时间'))
            } else {
              callback(undefined)
            }
          }, trigger: "blur"
        }]
      }
    }, {
      type: "input",
      control: {modelValue: "", placeholder: "自动计算时长", disabled: true},
      config: {append: "天"},
      name: "duration",
      formItem: {label: "时长"}
    }, {
      type: "textarea",
      control: {modelValue: "", placeholder: "不填写不能通过"},
      config: {span: 24},
      name: "remark",
      formItem: {label: "请假事由", rules: [{required: true, message: "请填写请假事由", trigger: "change"}]}
    }, {
      type: "upload",
      control: {modelValue: ""},
      config: {},
      name: "files",
      formItem: {label: "图片附件", rules: []}
    }],
    form: {size: "default", class: "form-row-2", labelWidth: "100px", name: "askForLeave"},
    config: {submitCancel: true, sourceId: 14, name: "请假流程表单"},
    events: {
      change: (
          {
            name,
            model
          }) => {
        // name当前改变组件的值,model表单的值
        console.log(model)
        if (['startTime', 'endTime'].includes(name) && model.startTime && model.endTime) {
          model.duration = (new Date(model.endTime) - new Date(model.startTime)) / (1000 * 60 * 60 * 24)
        }
        return model
      }
    }
  })
  // todo 存在编辑时，可选add、edit、detail、design、search，默认add
  const formType = computed(() => {
    return 'add'
  })


  // 表单提交时参数处理
  const beforeSubmit = (params, type, obj) => {
    // params请求的参数，可根据type作判断，对params作修改后return回去
    // 需要将params参数return
    return params;
  }
</script>