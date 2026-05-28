import {formatNumber, objectToArray} from "@/utils/design";
import type {Component} from "@/types/form";
import {computed} from "vue";
import {debounce, getStorage} from "@/utils";
import SparkMD5 from "spark-md5";
import {beforeAfter} from "@/utils/beforeAfter";

/**
 * 提供一个方法，用于根据name从data.list里查找数据
 * @param data
 * @param name
 */
export const getNameForEach = (data: any, name: string) => {
  let temp = {}
  for (const key in data) {
    const dataKey = data[key]
    if (dataKey.name === name) {
      return dataKey
    }
    if (['grid', 'tabs'].includes(dataKey.type)) {
      dataKey.columns.forEach((co: any) => {
        temp = getNameForEach(co.children, name)
      })
    }
    if (['card', 'div'].includes(dataKey.type) && dataKey.children?.length) {
      temp = getNameForEach(dataKey.children, name)
    }
  }
  return temp
}
//处理radio/select/checkbox等选择数据取值
export const getTransformLabelValue = (type: string, obj: Record<string, any>, config: Record<string, any>) => {
  const {transformData, label, value} = config
  if (type === 'label') {
    return getTransformData(label ? obj[label] : obj.label, transformData)
  } else {
    return getTransformData(value ? obj[value] : obj.value, transformData)
  }
}
const getTransformData = (val: any, transform: string) => {
  switch (transform) {
    case 'string':
      try {
        return val.toString()
      } catch (e) {
        return val
      }
    case 'number':
      return formatNumber(val)
    case 'none':
    default:
      return val
  }
}
//============================获取option相关
const globalDict = computed(() => {
  return getStorage('akAllDict')
})
export const getOptionsList = (component: Component, store: any, callback: (opt: Record<string, any>) => void) => {
  if (['select', 'radio', 'checkbox', 'treeSelect', 'inputSlot'].includes(component.type)) {
    const {optionsType, optionsFun} = component
    const {filterable, remote} = component.control
    if (optionsType === 2 && optionsFun) {
      console.log('2')
      // 从字典获取,根据设定key从字典获取
      if (globalDict.value) {
        const opt = globalDict.value[optionsFun]
        if (opt !== undefined) {
          callback && callback(objectToArray(opt))
        }
      }
    } else if (optionsType === 1 && optionsFun) {
      console.log('else')
      // 从接口获取
      if (filterable && remote) {
        // 远程搜索时，初始不需要请求。编辑时需要回显 todo
        /*if (formProps.operateType === 'edit') {
          // 暂统一按照id从接口获取数据作为回显
          getOptions({id: props.modelValue}, 'edit')
        }*/
      } else {
        getRemoteMethod(component, store, callback)
      }
    }
  }
}
//设计面板属性测试时/保存字典，store={}
export const getRemoteMethod = (component: Component, store: any, callback: (opt: Record<string, any>) => void, data = {}) => {
  const {formValue = {}} = store
  const {optionsType, optionsFun, cache, method, before, after} = component
  const {remote} = component.control
  let params = {}
  // 有联动条件的带上联动的参数
  if (component.linkage) {
    params = {
      [component.linkage]: formValue[component.linkage]
    }
  }
  Object.assign(params, data)
  let cacheKey: string = ''
  if (optionsType === 1 && optionsFun) {
    // 当前控件为动态获取数据，防多次加载，先从本地取。
    // remote时参数过多，暂不缓存
    if (cache && !remote && Object.keys(store).length) {
      const spark = new SparkMD5()
      spark.append(optionsFun + JSON.stringify(params))
      cacheKey = spark.end()
      const cacheData = store.formComponentsDataCache[cacheKey]
      if (cacheData) {
        callback && callback(cacheData)
        return false
      }
    }
    beforeAfter({
      apiKey: optionsFun,
      params: params,
      before: before,
      after: after,
      options: {method: method},
      route: {},//todo route,
      formModel: formValue.value,
      type: 'fetch'
    })
        .then((res: any) => {
          const result = res.data.list || res.data
          callback && callback(result)
          if (cache && !remote && Object.keys(store).length) {
            store.setFormComponentsDataCache(cacheKey, result)
          }
        })

  }
}

export const getRemoteMethodDebounce = debounce((component: Component, store: any, callback: (opt: Record<string, any>) => void, data = {}) => {
  getRemoteMethod(component, store, callback, data)
})
//==========================================options相关结束