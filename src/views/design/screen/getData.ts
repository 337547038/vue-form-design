import { getRequest } from '@/api'
import { stringToObj, appendOrRemoveStyle } from '@/utils/design'
import { ElMessage } from 'element-plus'
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
        if (requestUrl) {
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
        } else {
          resolve({
            screenData: resultData
          })
        }
      })
      .catch((res: any) => {
        console.log('catch', res)
        ElMessage.error(res.message || '加载异常')
        reject()
      })
  })
}
