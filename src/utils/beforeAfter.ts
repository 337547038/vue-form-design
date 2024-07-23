import { jsonParseStringify } from '@/utils/design'
import { getRequest } from '@/api'

interface RequestParams {
  apiKey: string //请求url
  params: { [key: string]: any } // 请求参数
  options?: { [key: string]: any } //请求其他附加参数
  route?: { [key: string]: any } //路由参数
  formModel?: { [key: string]: any } // 当前表单所有值
  before?: (type: EventType, params: any, rout: any) => boolean
  after?: (type: EventType, res: any, isSuccess?: boolean) => any
  type: string
}
/**
 * 统一处理beforeFetch和afterFetch提交数据接口请求
 * @param apiKey 请求url或apiKey
 * @param params 请求参数
 * @param options 请求其他附加参数
 * @param route 路由参数
 * @param formModel // 当前表单所有值
 * @param before 请求后结果后方法
 * @param after 请求前方法
 * @param type 事件类型
 */
export const beforeAfter = ({
  apiKey,
  params,
  route,
  formModel,
  options,
  before,
  after,
  type
}: RequestParams) => {
  return new Promise((resolve, reject) => {
    if (!apiKey) {
      reject({ message: '请求api为空' })
    }
    let beforeResult: any = params
    if (typeof before === 'function') {
      //要求beforeFetch一定要有return，否则不起作用。
      // 这里修改下不让直接修改params的值也能生效，防止如表单拦截修改时页面会显示被修改后的值
      beforeResult = before({
        type: type,
        params: jsonParseStringify(params),
        route: route,
        model: jsonParseStringify(formModel)
      })
    } else if (before && typeof before === 'string') {
      console.log('返回字符串处理：' + beforeResult)
      //todo 返回字符串时，这里可根据返回的自定义字符串标识处理各种复杂的情况
      //beforeParams = xx
    }
    if (beforeResult === false) {
      //拦截方式beforeFetch返回false阻止发送请求
      reject({ message: '用户终止操作' })
      return
    }
    //允许使用before没有使用return
    getRequest(apiKey, beforeResult || params, options)
      .then((res: any) => {
        // 二进制数据则直接返回，返回时保存的文件名可从res.headers['content-disposition']获取
        const isBolb = res.request?.responseType === 'blob'
        let result: any = isBolb ? res : res.data
        if (typeof after === 'function') {
          result = after(type, result, true) || result
        } else if (typeof after === 'string' && after) {
          console.log('返回字符串处理：' + result)
          //返回字符串时，这里可根据返回的自定义字符串标识处理各种复杂的情况
          //将处理后的值给result即可
          //result=xx
        }
        if (result === false) {
          reject({
            message: '用户终止操作'
          })
          return
        }
        //没有return值时使用返回没经处理的值
        resolve({ data: result || res.data, message: res.message })
      })
      .catch((res: any) => {
        if (typeof after === 'function') {
          after(type, res)
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
