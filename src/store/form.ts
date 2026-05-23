import {defineStore} from "pinia";
import {ref} from 'vue'
import type {Config, Component} from '@/types/designForm'
import SparkMD5 from "spark-md5";

export const useFormStore = defineStore('form', () => {

  //==================================设计生成的表单数据
  const designDataConfig = ref({})
  const setDesignDataConfig = (data: FormData) => {
    designDataConfig.value = data
  }
  // ============================================设计表单配置信息
  const designConfig = ref({})
  const setDesignConfig = (data: Config) => {
    designConfig.value = data
  }

  // ===============================当前选中的组件
  const selectComponent = ref({})
  const setSelectComponent = (component: Component) => {
    selectComponent.value = component
  }

  //=================================当前是设计类型，根据url参数
  const designType = ref('add') // 'add' | 'edit' | 'designForm' | 'detail' | 'search' | 'designSearch' | 'designFlow'
  const setDesignType = (type: string) => {
    designType.value = type || 'add'
  }

  //================================表单值
  const formValue = ref({})
  const setFormValue = (data: Record<string, any>) => {
    formValue.value = data
  }

  //===============================返回当前组件是否为选中状态
  const getIsActive = (item: Component) => {
    if (item.name) {
      return selectComponent.value.name === item.name
    } else {
      const spark = new SparkMD5()
      spark.append(JSON.stringify(item))
      const val1 = spark.end()
      const spark2 = new SparkMD5()
      spark2.append(JSON.stringify(selectComponent.value))
      const val2 = spark2.end()
      return val1 === val2
    }
  }

  //===============================通过手动设置表单项的如select/radio/checkbox选项值
  const formOptions = ref({})
  const setFormOptions = (data: { [key: string]: string[] }) => {
    formOptions.value = data
  }

  //==============================表单组件缓存接口数据
  const formComponentsDataCache = ref({})
  const setFormComponentsDataCache = (key: string, data: Record<string, any>) => {
    formComponentsDataCache.value[key] = data
  }
  const delFormComponentsDataCache = (key: string | undefined) => {
    if (key) {
      delete formComponentsDataCache.value[key]
    } else {
      //clear
      formComponentsDataCache.value = {}
    }
  }

  //============================设计时将option保存为供列表使用的字典
  const formOptionDict = ref({})
  const setFormOptionDict = (key: string, data?: Record<string, any>) => {
    if (!key) {
      formOptionDict.value = {}
    } else {
      formOptionDict.value[key] = data
    }
  }

  return {
    designDataConfig,
    setDesignDataConfig,
    designConfig,
    setDesignConfig,
    selectComponent,
    setSelectComponent,
    designType,
    setDesignType,
    formValue,
    setFormValue,
    getIsActive,
    formOptions,
    setFormOptions,
    formComponentsDataCache,
    setFormComponentsDataCache,
    delFormComponentsDataCache,
    formOptionDict,
    setFormOptionDict
  }
})