<!-- Created by 337547038 on 2021/9/27. -->
<template>
  <el-form-item
    v-bind="data.formItem"
    :prop="otherProp || data.name"
    :class="config.className"
    :rules="itemRules as any"
    :label="getLabel(data.formItem as FormItem)"
  >
    <template #label v-if="config.help">
      {{ getLabel(data.formItem) }}
      <Tooltip :content="config.help" />
    </template>
    <div
      class="form-value"
      v-if="formProps.operateType === 'detail'"
      v-html="value"
    ></div>
    <template v-else>
      <el-input
        v-bind="control"
        v-model="value"
        :disabled="disabledEdit"
        :type="inputType as any"
        v-if="['input', 'password'].includes(data.type)"
      >
        <template #prepend v-if="config.prepend">
          <AKSelect
            v-if="getInputSlot('p')"
            :data="getInputSlot('p')"
            :disabled="disabledEdit"
            type="slot"
          />
          <span v-else>{{ config.prepend }}</span>
        </template>
        <template #append v-if="config.append">
          <AKSelect
            v-if="getInputSlot()"
            :data="getInputSlot()"
            :disabled="disabledEdit"
            type="slot"
          />
          <span v-else>{{ config.append }}</span></template
        >
      </el-input>
      <el-input
        v-bind="control"
        v-model="value"
        :disabled="disabledEdit"
        type="textarea"
        v-if="data.type === 'textarea'"
      />
      <el-radio-group
        v-bind="control"
        :disabled="disabledEdit"
        v-model="value"
        v-if="data.type === 'radio'"
      >
        <el-radio
          :key="index"
          :value="item.value"
          v-for="(item, index) in options"
        >
          {{ item.label }}
        </el-radio>
      </el-radio-group>
      <el-checkbox-group
        v-bind="control"
        :disabled="disabledEdit"
        v-model="value"
        v-if="data.type === 'checkbox'"
      >
        <el-checkbox
          v-for="(item, index) in options"
          :key="index"
          :value="item.value"
          >{{ item.label }}
        </el-checkbox>
      </el-checkbox-group>
      <AKSelect
        v-if="
          data.type === 'select' ||
          (formProps.operateType === 'design' && data.type === 'inputSlot')
        "
        :data="data"
        :disabled="disabledEdit"
        v-model="value"
        :options="options"
        :remote-method="getRemoteOptions"
      />
      <upload-file
        v-model="value"
        v-if="data.type === 'upload'"
        :control="control"
        :disabled="disabledEdit"
        :config="config"
      />
      <chunk-upload
        v-if="data.type === 'chunkUpload'"
        v-model="value"
        :control="control as any"
        :disabled="disabledEdit"
        :config="config as any"
      />
      <component
        v-if="['cascader', 'treeSelect'].includes(data.type)"
        :is="currentComponent"
        v-bind="control"
        :disabled="disabledEdit"
        :options="options"
        v-model="value"
      />
      <component
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
        :is="currentComponent"
        v-bind="control"
        :disabled="disabledEdit"
        v-model="value"
      />
      <template v-if="data.type === 'tinymce'">
        <!--  设计模式时拖动会出现异常，设计模式暂用图片代替-->
        <tinymce-edit
          v-bind="control"
          :config="config"
          :disabled="disabledEdit"
          v-model="value"
          v-if="
            ['add', 'edit', 'detail'].includes(formProps.operateType as number)
          "
        />
        <img
          alt=""
          src="./tinymce.png"
          v-if="formProps.operateType === 'design'"
          style="max-width: 100%"
        />
      </template>
    </template>
  </el-form-item>
</template>

<script lang="ts" setup>
  import {
    inject,
    onMounted,
    computed,
    watch,
    ref,
    onUnmounted,
    markRaw
  } from 'vue'
  import { onBeforeRouteLeave, useRoute } from 'vue-router'
  import Tooltip from '../tooltip/index.vue'
  import TinymceEdit from './tinymce.vue'
  import { FormItem, FormList } from '@/types/form'
  import { formatNumber, objectToArray } from '@/utils/design'
  import validate from './validate'
  import ExpandUser from './expand/user.vue'
  import AKSelect from './select.vue'
  import { debounce } from '@/utils'
  import UploadFile from './upload.vue'
  import ChunkUpload from './chunkUpload/index.vue'
  import { getOptionsData } from '@/components/form/request'

  const props = withDefaults(
    defineProps<{
      data: FormList
      modelValue?: any
      otherProp?: string // 子表时的form-item的prop值，用于子表校验用
    }>(),
    {}
  )
  const emits = defineEmits<{
    (e: 'update:modelValue', val: any): void
  }>()
  const route = useRoute()
  const formProps = inject('akFormProps', {}) as any
  const inputType = computed(() => {
    return props.data.type === 'password' ? 'password' : 'text'
  })
  const config = computed(() => {
    return props.data.config || {}
  })

  const control = computed(() => {
    return props.data.control
  })
  const akFormValueChange = inject('akFormValueChange', '') as any

  // 选择数据转换，默认尝试转数字
  const transformOption = (val: string | number) => {
    switch (config.value.transformData) {
      case 'none':
        return val
      case 'string':
        try {
          return val.toString()
        } catch (e) {
          return val
        }
    }
    return formatNumber(val)
  }

  const value = computed({
    get() {
      return transformOption(props.modelValue)
    },
    set(newVal: any) {
      emits('update:modelValue', newVal)
      let prop = props.data.name
      if (props.otherProp) {
        // 将prop设为当前table或flex的name
        const parts = props.otherProp?.split('.')
        if (parts?.length) {
          prop = parts[0]
        }
      }
      akFormValueChange &&
        akFormValueChange({
          name: props.data.name,
          value: newVal,
          prop: prop,
          options: options.value
        })
    }
  })

  // 当通用修改属性功能添加新字段时，数组更新但toRefs没更新
  const getControlByName = inject('akGetControlByName') as any
  const getLabel = (ele: FormItem) => {
    const showColon = formProps.showColon ? '：' : ''
    if (ele) {
      return ele.hideLabel ? '' : ele.label + showColon
    } else {
      return ''
    }
  }
  const currentComponent = computed(() => {
    if (props.data.type === 'component') {
      // 自定义组件
      return config.value.componentName
    }
    if (props.data.type === 'expand-user') {
      return markRaw(ExpandUser)
    }
    return `el-${props.data.type}`
  })
  // 控制编辑模式下是否可用
  const disabledEdit: boolean = computed(() => {
    if (formProps.operateType === 'detail') {
      return true // 查看模式，为不可编辑状态
    }
    if (formProps.operateType === 'edit' && config.value.disabledEdit) {
      return true // 编辑模式设置了禁用
    }
    // 使用了禁用条件表达式
    const configDisabled = config.value?.disabled
    if (configDisabled) {
      const Fn = new Function('$', `return (${configDisabled})`)
      const pass = Fn(formProps.model) // pass=true满足条件隐藏
      if (pass) {
        return pass
      }
    }
    return control.value.disabled || false
  })
  // 返回当前item项的校验规则
  const itemRules = computed(() => {
    let temp
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
    validate &&
      validate.forEach(item => {
        rulesReg[item.type] = item.regExp
      })

    // 获取校验方法 父级使用provide方法注入
    const temp: any = []
    rulesList.forEach((item: any) => {
      if (!item.message) {
        return // 方法时允许提示信息为空
      }
      let obj = {}
      if (item.type === 'required') {
        obj = { required: true }
      } else if (item.type === 'rules') {
        // 自定义表达式
        obj = { pattern: item.rules }
      } else if (item.type) {
        obj = { pattern: rulesReg[item.type as string] }
      }
      // 这里判断下防某些条件下重复push的可能或存重复校验类型
      let message: any = { message: item.message }
      if (!item.message) {
        // 当使用validator校验时，如果存在message字段则不能使用 callback(new Error('x'));的提示
        message = {}
      }
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

  /****input slot处理***/
  const getInputSlot = (key?: string) => {
    const slot = key === 'p' ? config.value.prepend : config.value.append
    const has = slot.indexOf('key:') === 0
    if (!has) {
      return false
    }
    const slotKey = slot.replace('key:', '')
    const control = getControlByName(slotKey)
    if (!control || Object.keys(control)?.length === 0) {
      return false
    }
    return control
  }

  // option选项动态数据
  const optionsList = ref(props.options)
  const formOptions = inject('akFormSetOptions', {}) as any
  const options = computed(() => {
    // 使用了setOptions时，从set方法里取
    if (formOptions.value[props.data.name]) {
      return objectToArray(formOptions.value[props.data.name])
    } else {
      return optionsList.value
    }
  })
  const queryName = computed(() => {
    return props.data.config?.queryName || 'name'
  })
  const getOptions = (data = {}, type: string, callback?: any) => {
    getOptionsData(config.value, formProps.model, type, route, data).then(
      res => {
        if (props.data.type === 'treeSelect') {
          control.value.data = res // todo
        } else {
          optionsList.value = res
        }
        callback && callback()
      }
    )
  }
  // option选项远程数据，远程和联动时暂共用queryName
  const getRemoteOptions = debounce((name, callback: any) => {
    getOptions({ [queryName.value]: name }, 'remote', callback)
  })
  // 联动处理
  const linkage = computed(() => {
    return props.data.config?.linkage
  })
  const unWatch1 = linkage.value
    ? watch(
        () => formProps.model[linkage.value],
        val => {
          getOptions({ [queryName.value]: val }, 'linkage')
        }
      )
    : null
  // 初始化下拉选项
  const initGetOptions = () => {
    if (['select', 'radio', 'checkbox'].includes(props.data.type)) {
      const { optionsType, optionsFun } = props.data.config
      const { filterable, remote } = props.data.control
      if (optionsType === 2 && optionsFun) {
        // 从字典获取
        const dictVal = formProps.value.dict
        if (dictVal) {
          const opt = dictVal[optionsFun]
          if (opt !== undefined) {
            optionsList.value = objectToArray(opt)
          }
        }
      } else if (optionsType === 1 && optionsFun) {
        // 从接口获取
        if (filterable && remote) {
          // 远程搜索时，初始不需要请求。编辑时需要回显
          if (formProps.operateType === 'edit') {
            // 暂统一按照id从接口获取数据作为回显
            getOptions({ id: props.modelValue }, 'edit')
          }
        } else {
          let data = {}
          // 有联动条件的带上联动的参数
          if (linkage.value) {
            data = {
              [queryName.value]: formProps.model[linkage.value]
            }
          }
          getOptions(data, 'default')
        }
      }
    }
  }
  onMounted(() => {
    initGetOptions()
  })
  onUnmounted(() => {})
  onBeforeRouteLeave(() => {
    unWatch1 && unWatch1()
  })
</script>
