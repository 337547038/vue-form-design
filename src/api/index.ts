import request from '../utils/request'

//const isDev = import.meta.env.DEV

const api: any = {
  formFiled: './mock/formFiled.json', // 设计创建表单时可供选择的所有字段
  datasource: './mock/datasource.json', // 获取可供用于创建表单的数据源
  saveForm: './mock/saveform', // 保存或编辑设计的表单
  getFormById: './mock/editForm.json', // 根据id获取已设计的表单
  getFormList: './mock/formList.json', // 获取所有已设计的表单
  delForm: '', // 根据id删除已设计的表单
  saveFormContent: './mock/saveformcontent', // 往已设计好的表单里添加内容
  getFormContent: './mock/getformcontent.json', // 获取表单内容
  getContentList: './mock/getcontentlist.json', // 获取表单内容列表
  delFormContent: '', // 删除表单内容
  //getOptions: '/mock/getOption', // 设计创建表单时用于测试多选下拉项
  uploadFiled: './upload',
  formSubmit: './formSubmit'
}
export const getRequest = (apiKey: string, data?: any, options = {}) => {
  const obj: any = Object.assign(
    {
      url: api[apiKey],
      method: 'POST',
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
