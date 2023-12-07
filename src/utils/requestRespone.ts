import { getRequest } from '@/api'
import { ElMessage } from 'element-plus'

interface RequestParams {
  requestUrl: string //请求url
  params: { [key: string]: any } // 请求参数
  beforeRequest?: Function // 请求前方法
  afterResponse?: string | Function // 请求后结果后方法
  options?: { [key: string]: any } //请求其他附加参数
  route?: { [key: string]: any } //路由参数
  formModel?: { [key: string]: any } // 当前表单所有值
}

/**
 * 统一处理beforeRequest和afterResponse提交数据接口请求
 * @param requestUrl 请求url或apiKey
 * @param params 请求参数
 * @param beforeRequest 请求后结果后方法
 * @param afterResponse 请求前方法
 * @param options 请求其他附加参数
 * @param route 路由参数
 * @param formModel // 当前表单所有值
 */
export const requestResponse = ({
  requestUrl,
  params = {},
  beforeRequest,
  afterResponse,
  options = {},
  route = {},
  formModel
}: RequestParams) => {
  return new Promise((resolve, reject) => {
    if (!requestUrl) {
      resolve({})
    }
    if (typeof beforeRequest === 'function') {
      const result = beforeRequest(params, route, formModel)
      if (result === false) {
        //拦截方式beforeRequest返回false阻止发送请求
        reject({ code: 'return false', message: 'beforeRequest return false' })
        return
      }
      params = result
    } else if (beforeRequest && typeof beforeRequest === 'string') {
      //使用了字符时，这里也可以拦截统一处理，由线上转为线下
    }
    getRequest(requestUrl, params, options)
      .then((res: any) => {
        let result = res.data
        if (afterResponse) {
          if (typeof afterResponse === 'function') {
            result = afterResponse(result) || result
          } else {
            // 这里处理afterResponse使用了字符串类型时
            //result = formatScreen(afterResponse, result)
          }
        }
        resolve({ data: result, message: res.message })
      })
      .catch((res: any) => {
        ElMessage.error(res.message || '请求异常')
        reject(res)
      })
  })
}
/**
 * 返回当前事件，优先返回props的，否则返回events里的
 * @param props
 * @param key
 * @return props[key]或props.data.events[key]
 */
export const getRequestEvent = (props: any, key: string) => {
  let event
  const propsEvent = (props as any)[key]
  const events: any = props.data.events
  if (typeof propsEvent === 'function') {
    event = propsEvent
  } else if (events && typeof events[key] === 'function') {
    event = events[key]
  }
  return event
}
