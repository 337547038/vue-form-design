//Created by 337547038 weixin:337547038
import request from '../utils/request'
import form from './form'
import system from './system'
import flow from './flow'

const allApi: any = Object.assign(form, system, flow)

/**
 * 统一数据请求方法
 * @param apiKey // 定义的api key或是api请求接口url，也可在url前面带请求的方式
 * 1.定义好的key，如 'getLogin' => const allApi={getLogin:'/user/login'}
 * 2.不定义直接为接口url，如 '/user/login'
 * 3.url前带有请求的method类型，如 'get|/user/login'
 * @param data // 请求的参数，get时会在request.ts中将参数以params形式提交，即追加到url后面
 * @param options // 其他参数
 * 1.改变默认method => {method:'get'}，也可在url前添加，使用｜分隔
 * 2.改变或添加头部信息 => {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }}
 * 3.文档数据流时添加信息 => {responseType: 'blob'}
 * 4.解决apiKey带动态参数时，可添加$标识符 /api/delete/$id => {apiKey:{$id:xx}}
 */
export const getRequest = (
  apiKey: string,
  data: { [key: string]: any } = {},
  options: { [key: string]: any } = {}
) => {
  let url = allApi[apiKey] || apiKey
  if (Object.keys(options.apiKey || {}).length) {
    for (const key in options.apiKey) {
      url = url.replace(key, options.apiKey[key])
    }
  }
  let method: string = 'POST' // 默认请求方式
  // 如果url带有｜分隔符，提取｜前面的作为请求method并过滤掉｜前面的
  if (url.indexOf('|') !== -1) {
    method = url.split('|')[0]
    url = url.replace(/.*\|/, '')
  }
  //不是以/和http开头的，添加全局前缀
  if (!(url.startsWith('/') || url.startsWith('http'))) {
    url = 'api/' + url
  }
  let obj: any = Object.assign(
    {
      url: url, // 添加个前缀
      method: method,
      data
    },
    options
  )
  // localhost演示时使用下面地址
  // 使用接口时可使用本地ip地址访问或注释下面代码
  const host: string = window.location.host
  if (host.indexOf('localhost') !== -1 || host.indexOf('github') !== -1) {
    const { query = {}, id = '', extend = {} } = data
    let params: string = (query.type || '') + id + (extend.formId || '')
    if (
      url.includes('/get') ||
      url.includes('/list') ||
      url.includes('/login') ||
      url.includes('/flow/form')
    ) {
      /* empty */
    } else if (url.includes('/static/')) {
      url = url.replace('.json', '')
    } else {
      url = 'mock/ok'
      params = ''
    }
    if (options.method) {
      delete options.method
    }
    url = url.replace('api/', 'mock/')
    obj = Object.assign(
      {
        url: `${url}${params}.json`,
        method: 'GET'
        //params: data
      },
      options
    )
  }
  return request(obj)
}
export const uploadUrl: string = '/api/' + allApi.upload // el-upload上传地址
