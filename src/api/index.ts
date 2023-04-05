import request from '../utils/request'
import form from './form'
import dataList from './dataList'
import dict from './dict'
const allApi: any = Object.assign(form, dataList, dict)
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
  const obj: any = Object.assign(
    {
      url: '/api/' + url, // 添加个前缀
      method: 'POST', // github演示json格式时需要使用get
      data
    },
    options
  )
  return request(obj)
}
export const uploadUrl = allApi.upload
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
