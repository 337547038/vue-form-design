<template>
  <el-form-item
    v-bind="data.formItem"
    :class="data.className"
    :prop="data.name"
    :label="getLabel"
    :rules="getItemRules"
  >
    <template
      v-if="data.help"
      #label
    >
      {{ getLabel }}
      <Tooltip :content="data.help" />
    </template>
    <el-input
      v-if="['input', 'password','textarea'].includes(data.type)"
      v-bind="control"
      v-model="formValue[data.name]"
      :placeholder="getPlaceholder"
      :disabled="disabled"
      :type="inputType"
    >
      <template
        v-if="data.prepend"
        #prepend
      >
        <select-comp
          v-if="getInputSlot('p')"
          :data="getInputSlot('p')"
          :disabled="disabled"
          type="slot"
        />
        <span v-else>{{ data.prepend }}</span>
      </template>
      <template
        v-if="data.append"
        #append
      >
        <select-comp
          v-if="getInputSlot()"
          :data="getInputSlot()"
          :disabled="disabled"
          type="slot"
        />
        <span v-else>{{ data.append }}</span>
      </template>
    </el-input>
    <el-radio-group
      v-if="data.type === 'radio'"
      v-bind="control"
      v-model="formValue[data.name]"
      :disabled="disabled"
    >
      <el-radio
        v-for="(item, index) in options"
        :key="index"
        :value="getLabelValue('value',item)"
      >
        {{ getLabelValue('label', item) }}
      </el-radio>
    </el-radio-group>
    <el-checkbox-group
      v-if="data.type === 'checkbox'"
      v-bind="control"
      v-model="formValue[data.name]"
      :disabled="disabled"
    >
      <el-checkbox
        v-for="(item, index) in options"
        :key="index"
        :value="getLabelValue('value',item)"
      >
        {{ getLabelValue('label', item) }}
      </el-checkbox>
    </el-checkbox-group>
    <component
      :is="currentComponent"
      v-bind="control"
      v-if="
        [
          'rate',
          'slider',
          'switch',
          'inputNumber',
          'colorPicker',
          'timePicker',
          'datePicker',
          'component',
          'expand-user'
        ].includes(data.type)
      "
      v-model="formValue[data.name]"
      :disabled="disabled"
    />
    <select-comp
      v-if="['select','inputSlot'].includes(data.type)"
      :data="data"
      :disabled="disabled"
      :options="options"
      :remote-method="getRemoteMethod"
    />
    <el-cascader
      v-if="data.type==='cascader'"
      v-bind="control"
      v-model="formValue[data.name]"
      :disabled="disabled"
      :data="options"
    />
    <el-tree-select
      v-if="data.type==='treeSelect'"
      v-bind="control"
      v-model="formValue[data.name]"
      :disabled="disabled"
      :data="options"
    />
  </el-form-item>
</template>
<script setup lang="ts">
  import type {Component} from "@/types/designForm.ts";
  import {computed, markRaw, watch, ref, onMounted, onUnmounted} from "vue";
  import {storeToRefs} from "pinia";
  import {useFormStore} from "@/store/form";
  import Tooltip from "@/components/tooltip/index.vue";
  import selectComp from './widgets/select.vue'
  import {getNameForEach, getOptionsList, getTransformLabelValue} from "./utils";
  import validate from "./validate";
  import type {FormValueChange} from "@/types/designForm";
  import {objectToArray} from "@/utils/design";

  const props = withDefaults(
    defineProps<{
      data: Component
    }>(),
    {}
  )
  const emits = defineEmits<{
    (e: 'change', value: FormValueChange): void
  }>()
  const store = useFormStore();
  const {formValue} = storeToRefs(store)
  const currentComponent = computed(() => {
    if (props.data.type === 'component') {
      // 自定义组件
      return props.data.componentName
    }
    if (props.data.type === 'expand-user') {
      // return markRaw(ExpandUser)
    }
    return `el-${props.data.type}`
  })
  const getLabel = computed(() => {
    const showColon = store.designConfig.showColon // todo
    const {formItem = {}, hideLabel} = props.data
    if (hideLabel) {
      return ''
    } else {
      return formItem.label + (showColon ? ':' : '')
    }
  })
  const control = computed(() => {
    return props.data.control
  })
  const inputType = computed(() => {
    if (props.data.type === 'input') {
      return 'text'
    } else {
      return props.data.type
    }
  })
  const getPlaceholder = computed(() => {
    return control.value.placeholder ? control.value.placeholder : `请输入${props.data.formItem?.label}`
  })

  //=====================================获取options
  const optionsList = ref(props.data.options)
  const options = computed(() => {
    // 使用了setOptions时，优先使用此值
    const opt = store.formOptions[props.data.name]
    if (opt) {
      return objectToArray(opt)
    } else {
      // 判断下option的类型，为对象时转换下
      return objectToArray(optionsList.value)
    }
  })

  // 这里数据转换放在选项里处理
  const getLabelValue = (type: string, obj: Record<string, any>) => {
    const {transformData, label, value} = props.data
    return getTransformLabelValue(type, obj, {transformData, label, value})
  }
  const getRemoteMethod = (option: any) => {
    optionsList.value = option
  }
  //=====================================获取options结束
  const getInputSlot = (key?: string) => {
    const {prepend, append} = props.data
    const slot = key === 'p' ? prepend : append
    const has = slot.indexOf('key:') === 0
    if (!has) {
      return false
    }
    const slotKey = slot.replace('key:', '')
    const control = getNameForEach(store.designDataConfig?.list, slotKey)
    if (!control || Object.keys(control)?.length === 0) {
      return false
    }
    return control
  }
  const disabled = computed(() => {
    const {operateType} = store
    const {control = {}, disabledEdit, conditionalDisabled} = props.data || {}
    // 查看模式 或 控件本身禁用 → 直接禁用
    if (operateType === 'detail' || control.disabled) {
      return true
    }
    // 编辑模式 + 配置禁用 → 直接禁用
    if (operateType === 'edit' && disabledEdit) {
      return true
    }
    // 条件禁用表达式执行
    if (conditionalDisabled) {
      try {
        const conditionFn = new Function('$', `return (${conditionalDisabled})`)
        return !!conditionFn(store.formValue)
      } catch (e) {
        console.warn('条件禁用表达式执行失败：', conditionalDisabled, e)
        return false
      }
    }
    return false
  })
  // 返回当前item项的校验规则
  const getItemRules = computed(() => {
    let temp = undefined
    const itemR: any = props.data.formItem?.rules || []
    const customR = formatCustomRules()
    // 如果三个都没有设置，则返回undefined
    if (itemR?.length || customR?.length) {
      temp = [...customR, ...itemR]
    }
    return temp
  })
  // 处理自定义校验规则，将customRules转换后追加到rules里
  const formatCustomRules = () => {
    const rulesList = props.data.customRules
    if (!rulesList || rulesList?.length === 0) {
      return []
    }
    const rulesReg: any = {}
    validate.forEach((item) => {
      rulesReg[item.type] = item.regExp
    })

    // 获取校验方法
    const temp: any = []
    rulesList.forEach((item: any) => {
      if (!item.message) {
        return // 没有填写提示错误的
      }
      let obj = {}
      if (item.type === 'required') {
        obj = {required: true}
      } else if (item.type === 'rules') {
        // 自定义表达式
        obj = {pattern: item.rules}
      } else if (item.type) {
        obj = {pattern: rulesReg[item.type]}
      }
      // 这里判断下防某些条件下重复push的可能或存重复校验类型
      let message: any = {message: item.message}
      temp.push(
        Object.assign(
          {
            trigger: item.trigger || 'blur'
          },
          obj,
          message
        )
      )
    })
    return temp
  }

  const unwatch = watch(
    () => formValue.value[props.data.name],
    (newVal: any) => {
      console.log('formItem watch')
      emits('change', {prop: props.data.name, value: newVal, model: formValue.value, options: options.value})
    }
  )
  onMounted(() => {
    getOptionsList(props.data, (opt: Record<string, any>) => {
      optionsList.value = opt
    })
  })
  onUnmounted(() => {
    unwatch()
  })

</script>
