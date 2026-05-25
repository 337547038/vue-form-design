<template>
  <el-form-item
    v-bind="data.formItem"
    :class="data.className"
    :prop="parentProp||data.name"
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
      v-model="modelValue"
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
      v-model="modelValue"
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
      v-model="modelValue"
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
      v-model="modelValue"
      :disabled="disabled"
    />
    <select-comp
      v-if="['select','inputSlot'].includes(data.type)"
      :data="data"
      :disabled="disabled"
      :options="options"
      :remote-method="getSelectRemoteMethod"
    />
    <el-cascader
      v-if="data.type==='cascader'"
      v-bind="control"
      v-model="modelValue"
      :disabled="disabled"
      :data="options"
    />
    <el-tree-select
      v-if="data.type==='treeSelect'"
      v-bind="control"
      v-model="modelValue"
      :disabled="disabled"
      :data="options"
    />
    <upload-file
      v-if="data.type === 'upload'"
      v-model="modelValue"
      :data="data"
      :disabled="disabled"
    />
    <chunk-upload
      v-if="data.type === 'chunkUpload'"
      v-model="modelValue"
      :data="data"
      :disabled="disabled"
    />
    <template v-if="data.type === 'tinymce'">
      <!--  设计模式时拖动会出现异常，设计模式暂用图片代替-->
      <tinymce-edit
        v-if="
          ['add', 'edit', 'detail'].includes(store.formType)
        "
        v-bind="control"
        v-model="modelValue"
        :disabled="disabled"
      />
      <img
        v-if="store.formType.indexOf('design')!==-1"
        alt=""
        src="./widgets/tinymce.png"
        style="max-width: 100%"
      >
    </template>
  </el-form-item>
</template>
<script setup lang="ts">
  import type {Component} from "@/types/designForm.ts";
  import {computed, markRaw, watch, ref, onMounted, onUnmounted, inject} from "vue";
  import {storeToRefs} from "pinia";
  import Tooltip from "@/components/tooltip/index.vue";
  import selectComp from './widgets/select.vue'
  import {
    getNameForEach,
    getOptionsList,
    getRemoteMethodDebounce,
    getTransformLabelValue
  } from "./utils";
  import validate from "./validate";
  import {objectToArray} from "@/utils/design";
  import UploadFile from './widgets/uploadFile.vue'
  import ChunkUpload from './chunkUpload/index.vue'
  import TinymceEdit from './widgets/tinymce.vue'
  import ExpandUser from './expand/user.vue'

  const props = withDefaults(
    defineProps<{
      data: Component
      parentProp?: string //子表/flex时的form-item的prop值，用于子表校验用
    }>(),
    {
      parentProp: ''
    }
  )
  const store = inject('formStore')
  const {formValue} = storeToRefs(store)

  const modelValue = defineModel<any>()

  const currentComponent = computed(() => {
    if (props.data.type === 'component') {
      // 自定义组件
      return props.data.componentName
    }
    if (props.data.type === 'expand-user') {
      return markRaw(ExpandUser)
    }
    return `el-${props.data.type}`
  })
  const getLabel = computed(() => {
    const showColon = store.formConfig.showColon
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
  const getSelectRemoteMethod = (option: any) => {
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
    const control = getNameForEach(store.formList, slotKey)
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

  const akFormValueChange = inject('akFormValueChange', '') as any
  const unwatch = watch(
    () => modelValue.value,
    (newVal: any) => {
      let parentProp = ''
      if (props.parentProp) {
        // 将prop设为当前table或flex的name
        const parts = props.parentProp?.split('.')
        if (parts?.length) {
          parentProp = parts[0]
        }
      }
      akFormValueChange && akFormValueChange({
        prop: props.data.name,
        value: newVal,
        parentProp: parentProp,
        options: options.value,
        model: formValue.value
      })
    }
  )
  //级联
  const linkage = props.data.linkage
  const unWatchLink = linkage
    ? watch(
      () => formValue.value[linkage],
      (val: any) => {
        getRemoteMethodDebounce(props.data, (opt: any) => {
          optionsList.value = opt
        }, {[linkage]: val})
      }
    )
    : null
  onMounted(() => {
    getOptionsList(props.data, (opt: Record<string, any>) => {
      optionsList.value = opt
    })
  })
  onUnmounted(() => {
    unwatch()
    unWatchLink && unWatchLink()
  })

</script>
