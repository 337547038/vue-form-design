import { getRequest } from '@/api'
import { stringToObj } from '@/utils/form'
import { appendOrRemoveStyle } from '@/views/design/utils'
import { ElMessage } from 'element-plus'
import formatScreen from '@/utils/formatScreen'

export const getInitData = (id: string | number) => {
  return new Promise((resolve, reject) => {
    if (!id) {
      return reject()
    }
    // 获取初始表单数据
    getRequest('designById', { id: id })
      .then(res => {
        const result = res.data
        const resultData = stringToObj(result.data)
        if (resultData.config?.style) {
          appendOrRemoveStyle('screenStyle', resultData.config.style, true)
        }
        resolve(resultData)
      })
      .catch((res: any) => {
        // console.log(res)
        ElMessage.error(res.message || '加载异常')
        reject()
      })
  })
}
export const getGlobalData = (
  requestUrl: string,
  afterResponse: any,
  beforeRequest: any,
  method: string
) => {
  return new Promise((resolve, reject) => {
    let params = {}
    if (typeof beforeRequest === 'function') {
      params = beforeRequest({})
    }
    getRequest(requestUrl, params, { method: method })
      .then((res: any) => {
        const result = res.data
        let formatRes
        if (afterResponse) {
          if (typeof afterResponse === 'function') {
            formatRes = afterResponse(result)
          } else {
            formatRes = formatScreen(afterResponse, result)
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
