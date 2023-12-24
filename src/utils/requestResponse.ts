import { getRequest } from '@/api'
//import { ElMessage } from 'element-plus'
import { jsonParseStringify } from '@/utils/design'

interface RequestParams {
  requestUrl: string //请求url
  params: { [key: string]: any } // 请求参数
  beforeFetch?: Function // 请求前方法
  afterFetch?: string | Function // 请求后结果后方法
  options?: { [key: string]: any } //请求其他附加参数
  route?: { [key: string]: any } //路由参数
  formModel?: { [key: string]: any } // 当前表单所有值
}

/**
 * 统一处理beforeFetch和afterFetch提交数据接口请求
 * @param requestUrl 请求url或apiKey
 * @param params 请求参数
 * @param beforeFetch 请求后结果后方法
 * @param afterFetch 请求前方法
 * @param options 请求其他附加参数
 * @param route 路由参数
 * @param formModel // 当前表单所有值
 */
export const requestResponse = ({
  requestUrl,
  params = {},
  beforeFetch,
  afterFetch,
  options = {},
  route = {},
  formModel
}: RequestParams) => {
  return new Promise((resolve, reject) => {
    if (!requestUrl) {
      resolve({})
    }
    let beforeResult: any = params
    if (typeof beforeFetch === 'function') {
      //要求beforeFetch一定要有return，否则不起作用。
      // 这里修改下不让直接修改params的值也能生效，防止如表单拦截修改时页面会显示被修改后的值
      beforeResult = beforeFetch(
        jsonParseStringify(params),
        route,
        jsonParseStringify(formModel)
      )
      if (beforeResult === false) {
        //拦截方式beforeFetch返回false阻止发送请求
        reject({ code: 'return false', message: 'before return false' })
        return
      } else if (beforeResult && typeof beforeResult === 'string') {
        console.log('返回字符串处理：' + beforeResult)
        //返回字符串时，这里可根据返回的自定义字符串标识处理各种复杂的情况
        //beforeParams = xx
      }
    }
    //没有返回时使用原始的params
    getRequest(requestUrl, beforeResult || params, options)
      .then((res: any) => {
        let result: any = res.data
        if (typeof afterFetch === 'function') {
          result = afterFetch('success', result, res)
          if (typeof result === 'string') {
            console.log('返回字符串处理：' + result)
            //返回字符串时，这里可根据返回的自定义字符串标识处理各种复杂的情况
            //将处理后的值给result即可
            //result=xx
          }
          if (result === false) {
            reject({
              code: 'return false',
              message: 'response return false'
            })
          }
        }
        //没有return值时使用返回没经处理的值
        resolve({ data: result || res.data, message: res.message })
      })
      .catch((res: any) => {
        if (typeof afterFetch === 'function') {
          afterFetch('fail', res)
        }
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
  const events: any = props.data?.events
  if (typeof propsEvent === 'function') {
    event = propsEvent
  } else if (events && typeof events[key] === 'function') {
    event = events[key]
  }
  return event
}
