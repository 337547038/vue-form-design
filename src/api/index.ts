import request from '../utils/request'

//const isDev = import.meta.env.DEV
/*const api: any = {
  formFiled: './mock/getField.json', // 设计创建表单时可供选择的所有字段
  datasource: './mock/datasource.json', // 获取可供用于创建表单的数据源
  saveForm: '', // 保存或编辑设计的表单
  getFormById: './mock/designFormById.json', // 根据id获取已设计的表单
  getFormList: './mock/designList.json', // 获取所有已设计的表单
  delForm: '', // 根据id删除已设计的表单
  changeStatus: '', // 改变设计表单状态
  saveFormContent: '', // 往已设计好的表单里添加内容
  getFormContent: './mock/contentList.json', // 获取表单内容
  getContentList: './mock/contentId.json', // 获取表单内容列表
  delFormContent: '' // 删除表单内容
}*/
const api: any = {
  formFiled: '/getField', // 设计创建表单时可供选择的所有字段
  datasource: '/dataSource', // 获取可供用于创建表单的数据源
  saveForm: '/design/save', // 保存或编辑设计的表单
  getFormById: '/design/formById', // 根据id获取已设计的表单
  getFormList: '/design/list', // 获取所有已设计的表单
  delForm: '/design/delete', // 根据id删除已设计的表单
  changeStatus: '/design/changeStatus', // 改变设计表单状态
  saveFormContent: '/content/save', // 往已设计好的表单里添加内容
  getFormContent: '/content/id', // 获取表单内容
  getContentList: '/content/list', // 获取表单内容列表
  delFormContent: '/content/delete' // 删除表单内容
}
export const getRequest = (apiKey: string, data?: any, options = {}) => {
  const obj: any = Object.assign(
    {
      url: api[apiKey],
      method: 'POST', // github演示json格式时需要使用get
      data
    },
    options
  )
  return request(obj)
}
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
