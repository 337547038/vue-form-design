import { getRequest } from '@/api'
import { ElMessage } from 'element-plus'

interface RequestParams {
  requestUrl: string //请求url
  params: { [key: string]: any } // 请求参数
  beforeRequest?: Function // 请求前方法
  afterResponse?: string | Function // 请求后结果后方法
  options?: { [key: string]: any } //请求其他附加参数
  route?: { [key: string]: any } //路由参数
}

/**
 * 统一处理beforeRequest和afterResponse从接口获取数据
 * @param requestUrl 请求url或apiKey
 * @param params 请求参数
 * @param beforeRequest 请求后结果后方法
 * @param afterResponse 请求前方法
 * @param options 请求其他附加参数
 * @param route 路由参数
 */
export const requestResponse = ({
  requestUrl,
  params = {},
  beforeRequest,
  afterResponse,
  options = {},
  route = {}
}: RequestParams) => {
  return new Promise((resolve, reject) => {
    if (!requestUrl) {
      resolve({})
    }
    if (typeof beforeRequest === 'function') {
      const result = beforeRequest(params, route)
      if (result === false) {
        return
      }
      params = result
    }
    getRequest(requestUrl, params, options)
      .then((res: any) => {
        let result = res.data
        if (afterResponse) {
          if (typeof afterResponse === 'function') {
            result = afterResponse(result)
          } else {
            // 这里处理afterResponse使用了字符串类型时
            //result = formatScreen(afterResponse, result)
          }
        }
        resolve(result)
      })
      .catch((res: any) => {
        ElMessage.error(res.message || '请求异常')
        reject()
      })
  })
}
