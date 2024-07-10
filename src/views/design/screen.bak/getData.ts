import { getRequest } from '@/api'
import {
  stringToObj,
  appendOrRemoveStyle,
  objToStringify
} from '@/utils/design'
import { ElMessage } from 'element-plus'
import { requestResponse } from '@/utils/requestResponse'
import type { ScreenData } from './types'

export const getInitData = (id: string | number, route?: any) => {
  return new Promise((resolve, reject) => {
    if (!id) {
      return reject()
    }
    // 获取初始表单数据
    getRequest('designById', { id: id })
      .then((res: { data: any }) => {
        const result = res.data
        const resultData = stringToObj(result.data)
        if (resultData.config?.style) {
          appendOrRemoveStyle('screenStyle', resultData.config.style, true)
        }
        const { requestUrl, beforeFetch, afterFetch, method }: any =
          resultData.config
        requestResponse({
          requestUrl,
          beforeFetch,
          afterFetch,
          route,
          params: {},
          options: { method: method }
        })
          .then((res: any) => {
            //将全局数据保存在window里，以方便调用
            window.getScreenGlobal = res.data
            resolve({
              screenData: resultData,
              globalData: res.data
            })
          })
          .catch(() => {
            reject({ screenData: resultData })
          })
      })
      .catch((res: any) => {
        console.log('catch', res)
        ElMessage.error(res.message || '加载异常')
        reject()
      })
  })
}

export const getReplaceGlobal = (data: ScreenData) => {
  //转为字符串好替换预定的数据标识
  //即将1. data:"{{getScreenGlobal.line.xAxis}}"转为data:getScreenGlobal.line.xAxis
  //2. text:"标题{{getScreenGlobal.title}}"转为 text:"标题xxx"
  const newStr = objToStringify(data)
    .replace(/"{{.*?}}"/g, function (match) {
      return match.slice(3, -3)
    })
    .replace(/{{.*?}}/g, function (match) {
      //2,-2即减去{{和}}，得到括号内的文本，作为函数执行
      return new Function('return ' + match.slice(2, -2))()
    })
  return stringToObj(newStr)
}
