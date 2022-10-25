import request from '../utils/request'

//const isDev = import.meta.env.DEV
const api: any = {
  formFiled: './mock/getField.json', // 设计创建表单时可供选择的所有字段
  datasource: './mock/datasource.json', // 获取可供用于创建表单的数据源
  saveForm: '', // 保存或编辑设计的表单
  getFormById: './mock/designFormById.json', // 根据id获取已设计的表单
  getFormList: './mock/designList.json', // 获取所有已设计的表单
  delForm: '', // 根据id删除已设计的表单
  changeStatus: '', // 改变设计表单状态
  saveFormContent: '', // 往已设计好的表单里添加内容
  getFormContent: './mock/contentId.json', // 获取表单内容
  getContentList: './mock/contentList.json', // 获取表单内容列表
  delFormContent: '' // 删除表单内容
}
/*const api: any = {
  formFiled: '/api/getField', // 设计创建表单时可供选择的所有字段
  datasource: '/api/dataSource', // 获取可供用于创建表单的数据源
  saveForm: '/api/design/save', // 保存或编辑设计的表单
  getFormById: '/api/design/formById', // 根据id获取已设计的表单
  getFormList: '/api/design/list', // 获取所有已设计的表单
  delForm: '/api/design/delete', // 根据id删除已设计的表单
  changeStatus: '/api/design/changeStatus', // 改变设计表单状态
  saveFormContent: '/api/content/save', // 往已设计好的表单里添加内容
  getFormContent: '/api/content/id', // 获取表单内容
  getContentList: '/api/content/list', // 获取表单内容列表
  delFormContent: '/api/content/delete', // 删除表单内容
  upload: '/api/upload/single' // 默认el-upload上传url，也可单独在设计时填写上传地址
}*/
export const getRequest = (apiKey: string, data?: any, options = {}) => {
  const obj: any = Object.assign(
    {
      url: api[apiKey],
      method: 'GET', // github演示json格式时需要使用get
      data
    },
    options
  )
  return request(obj)
}
export const uploadUrl = api.upload
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
