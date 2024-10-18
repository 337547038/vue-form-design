// 数据处理
import { beforeAfter } from '@/utils/beforeAfter'
import SparkMD5 from 'spark-md5'
import { useDesignStore } from '@/store/design'

export const getOptionsData = (
  config: any,
  formModel: any,
  type: 'linkage' | 'remote' | 'edit' | 'default', // linkage联动改变时,remote远程搜索,edit远程搜索模式下修改时回显,default初始请求
  route: any,
  data?: any
) => {
  return new Promise((resolve, reject) => {
    const {
      optionsType,
      optionsFun,
      method = 'post',
      after,
      before,
      cache = true // cache=false不缓存
    } = config
    const designStore = useDesignStore()
    if (optionsType === 1 && optionsFun) {
      // 当前控件为动态获取数据，防多次加载，先从本地取。data=true时直接请求
      const spark = new SparkMD5()
      spark.append(optionsFun + data)
      const key = spark.end()
      const ajaxCache = designStore.getFormAjaxCache(key)
      if (ajaxCache && cache) {
        resolve(ajaxCache)
      } else {
        beforeAfter({
          apiKey: optionsFun,
          params: data,
          before: before,
          after: after,
          options: { method: method },
          route: route,
          formModel: formModel,
          type: type
        })
          .then((res: any) => {
            const result = res.data.list || res.data
            resolve(result)
            if (typeof formatRes === 'object') {
              designStore.setFormAjaxCache(key, result) // 缓存，例如子表添加时不用每添加一行就请求一次
            }
          })
          .catch((res: any) => {
            reject([])
            console.log(res)
          })
      }
    }
  })
}
