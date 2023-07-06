import request from '../utils/request'
import form from './form'
import system from './system'
import flow from './flow'
const allApi: any = Object.assign(form, system, flow)
export const getRequest = (apiKey: string, data?: any, options: any = {}) => {
  let url = allApi[apiKey] || apiKey
  // 解决动态url 如/api/delete/id(id为动态时)
  // url设置为：/api/delete/$id
  // options参数设置：options:{apikey:$id:xx}
  if (Object.keys(options.apiKey || {}).length) {
    for (const key in options.apiKey) {
      url = url.replace(key, options.apiKey[key])
    }
  }
  let obj: any = Object.assign(
    {
      url: '/api/' + url, // 添加个前缀
      method: 'POST',
      data
    },
    options
  )
  // localhost和github演示时使用下面地址
  // 使用node接口时可使用本地ip地址访问或注释下面代码
  const host = window.location.host
  if (host.indexOf('localhost') !== -1 || host.indexOf('github') !== -1) {
    let id = ''
    if (url.indexOf('/id') !== -1 && data.id) {
      id = data.id + ''
    }
    if (url.indexOf('/id') !== -1 && data.formId) {
      id += data.formId
    }
    if (url.indexOf('design/list') !== -1 && data.type) {
      id = data.type
    }
    if (url.indexOf('content/list') !== -1 && data.formId) {
      id = data.formId
    }
    if (
      url.includes('/save') ||
      url.includes('/edit') ||
      url.includes('/delete') ||
      url.includes('/creat') ||
      url.includes('/change') ||
      url.includes('/single')
    ) {
      url = 'ok'
    }
    if (options.method) {
      delete options.method
    }
    obj = Object.assign(
      {
        url: `./mock/${url}${id}.json`,
        method: 'GET',
        params: data
      },
      options
    )
  }
  return request(obj)
}
export const uploadUrl = '/api/' + allApi.upload
/*export function uploadFiledTinymce(data, url) {
  return request({
    url: url || '/upload/single',
    method: 'post',
    data,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}*/
