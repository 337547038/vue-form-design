//数据处理
import { beforeAfter, getRequestEvent } from '@/utils/beforeAfter'
import { ElMessage } from 'element-plus'
import { debounce } from '@/utils'
import SparkMD5 from 'spark-md5'
import { requestResponse } from '@/utils/requestResponse.ts'

export const getOptions = debounce((data = {}) => {
  return new Promise((resolve, reject) => {
    const {
      optionsType,
      optionsFun,
      method = 'post',
      after,
      before,
      label,
      value,
      cache // =cache=false不缓存
    } = data
    if (optionsType !== 0) {
      let sourceFun = optionsFun
      // 接口数据源
      if (optionsType === 1 && sourceFun) {
        // 当前控件为动态获取数据，防多次加载，先从本地取。data=true时直接请求
        const spark = new SparkMD5()
        spark.append(sourceFun + data)
        const key = spark.end()
        const ajaxCache = designStore.getFormAjaxCache(key)
        if (ajaxCache && !cache) {
          if (props.data.type === 'treeSelect') {
            control.value.data = ajaxCache
          } else {
            options.value = ajaxCache
          }
        } else {
          // 从url里提取一个动态值,${name}形式提取name
          if (sourceFunKey.value) {
            const val = formProps.model[sourceFunKey.value]
            const string = '${' + sourceFunKey.value + '}'
            sourceFun = sourceFun.replace(string, val)
          }
          beforeAfter({
            apiKey: sourceFun,
            params: data,
            before: before,
            after: after,
            options: { method: method },
            route: route,
            formModel: formProps.model
          })
            .then((res: any) => {
              const result = res.data.list || res.data
              let formatRes: any = result
              // 这里做数据转换，很多时候后端并不能提供完全符合且一样的数据
              if (!afterFetch && (label || value)) {
                // 没有设置afterFetch时，这里将数据转换为[{label:'',value:''}]形式。只处理一级
                formatRes = []
                result.forEach((item: any) => {
                  formatRes.push({
                    label: item[label] || item.label,
                    value: item[value] || item.value
                  })
                })
              }
              // console.log('formatRes', formatRes)
              if (props.data.type === 'treeSelect') {
                control.value.data = formatRes
              } else {
                options.value = formatRes
              }
              if (typeof formatRes === 'object') {
                designStore.setFormAjaxCache(key, formatRes) //缓存，例如子表添加时不用每添加一行就请求一次
              }
            })
            .catch((res: any) => {
              if (props.data.type === 'treeSelect') {
                control.value.data = []
              } else {
                options.value = []
              }
              console.log(res)
            })
        }
      }
      setFormDict(formProps.dict) // 表格里新增时行时需要重新设一次
    }
  })
})

export const getData = ({ props, state, page, searchFormValue, route }) => {
  return new Promise((resolve, reject) => {
    // 优先使用config配置的
    const getUrl = props.data.apiKey?.list || props.apiKey?.list
    if (!getUrl) {
      console.warn(new Error('请先设置请求apiKey.list'))
      return
    }
    if (page) {
      state.currentPage = page
    }
    state.loading = true
    // 筛选查询一般不存在校验，这里直接取值
    const formValue = searchFormValue || {}
    const params = {
      extend: {
        sort: props.data.config?.orderSort,
        pageSize: state.pageSize,
        pageNum: state.currentPage
      },
      query: Object.assign({}, formValue, props.query)
    }
    beforeAfter({
      apiKey: getUrl,
      params: params,
      before: getRequestEvent(props, 'before'),
      after: getRequestEvent(props, 'after'),
      route: route,
      type: 'getData'
    })
      .then((res: any) => {
        const data = res.data
        resolve(data)
        state.dict = data.dict || {}
        state.total = data.total || 0
      })
      .catch(() => {
        reject()
        state.total = 0
        state.dict = {}
        state.loading = false
      })
  })
}
