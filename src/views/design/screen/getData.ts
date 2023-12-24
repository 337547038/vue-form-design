import { getRequest } from '@/api'
import { stringToObj, appendOrRemoveStyle } from '@/utils/design'
import { ElMessage } from 'element-plus'
import formatScreen from '@/utils/formatScreen'
import { requestResponse } from '@/utils/requestResponse'

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
          .then((data: any) => {
            resolve({ screenData: resultData, globalData: data })
          })
          .catch(() => {
            reject()
          })
      })
      .catch((res: any) => {
        ElMessage.error(res.message || '加载异常')
        reject()
      })
  })
}
// @ts-ignore
export const getGlobalData = ({
  requestUrl,
  afterFetch,
  beforeFetch,
  method
}: {
  requestUrl: string
  afterFetch: any
  beforeFetch: any
  method: string
}) => {
  return new Promise((resolve, reject) => {
    if (!requestUrl) {
      resolve({})
    }
    let params = {}
    if (typeof beforeFetch === 'function') {
      params = beforeFetch({})
    }
    getRequest(requestUrl, params, { method: method })
      .then((res: any) => {
        const result = res.data
        let formatRes
        if (afterFetch) {
          if (typeof afterFetch === 'function') {
            formatRes = afterFetch(result)
          } else {
            formatRes = formatScreen(afterFetch, result)
          }
        }
        resolve(formatRes || result)
      })
      .catch((res: any) => {
        ElMessage.error(res.message || '加载异常')
        reject()
      })
  })
}
