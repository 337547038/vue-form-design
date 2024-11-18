import { getRequest } from '@/api'
import { stringToObj, appendOrRemoveStyle } from '@/utils/design'
import { ElMessage } from 'element-plus'
import { beforeAfter } from '@/utils/beforeAfter'

export const getInitData = (id: string | number) => {
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
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        window.getScreenGlobal = {}
        await getGlobalData(resultData.config)
        resolve(resultData)
      })
      .catch((res: any) => {
        console.log('catch', res)
        ElMessage.error(res.message || '加载异常')
        reject()
      })
  })
}
export const getGlobalData = (config: any) => {
  return new Promise((resolve, reject) => {
    const { requestUrl, before, after, method }: any = config
    if (requestUrl) {
      beforeAfter({
        apiKey: requestUrl,
        before: before,
        after: after,
        params: {},
        options: { method: method },
        type: 'none'
      })
        .then((res: any) => {
          // 将全局数据保存在window里，以方便调用
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          window.getScreenGlobal = res.data
          resolve(res.data)
        })
        .catch((res: any) => {
          reject(res)
        })
    } else {
      resolve({})
    }
  })
}
