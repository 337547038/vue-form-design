//import { flatToTree } from '@/utils/flatTree'
/** 处理返回结果，当数据比较复杂时，使用在线编辑器如afterResponse方法不太适合，key即为afterResponse的字符串值
必须要return
*/
/**
 * 处理数据请求或返回信息
 * @param res // 请求的参数或返回的结果
 * @param key // 设置的key
 * @param route // 路由信息
 */
const formatResult = (res: any, key: string, route?: any) => {
  console.log(res, key, route)
  return res
}

export default formatResult
