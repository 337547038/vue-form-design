import { getRequest } from '@/api'
import { stringToObj, appendOrRemoveStyle } from '@/utils/design'
import { ElMessage } from 'element-plus'
import { beforeAfter } from '@/utils/beforeAfter'

export const getInitData = (id: string | number, route?: any) => {
  return new Promise((resolve, reject) => {
    if (!id) {
      return reject()
    }
    // 获取初始表单数据
    getRequest('designById', { id: id })
      .then(async (res: { data: any }) => {
        const result = res.data
        const resultData = stringToObj(result.data)
        if (resultData.config?.style) {
          appendOrRemoveStyle('screenStyle', resultData.config.style, true)
        }
        window.getScreenGlobal = {}
        await getGlobalData(resultData.config, route)
        resolve(resultData)
      })
      .catch((res: any) => {
        console.log('catch', res)
        ElMessage.error(res.message || '加载异常')
        reject()
      })
  })
}
export const getGlobalData = (config: any, route?: any) => {
  return new Promise((resolve, reject) => {
    const { requestUrl, before, after, method }: any = config
    if (requestUrl) {
      beforeAfter({
        apiKey: requestUrl,
        before: before,
        after: after,
        route,
        params: {},
        options: { method: method },
        type: 'get'
      })
        .then((res: any) => {
          // 将全局数据保存在window里，以方便调用
          window.getScreenGlobal = res.data
          resolve(res.data)
        })
        .catch((res: any) => {
          reject(res)
        })
    } else {
      resolve()
    }
  })
}
