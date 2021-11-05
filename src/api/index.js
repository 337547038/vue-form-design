import request from '@/utils/request'

// 保存修改自定义创建表单
export function saveDesignForm(data) {
  return request({
    url: '/saveDesignForm',
    method: 'POST',
    data
  })
}

// 根据id返回表单数据
export function getDesignFormRow(id) {
  return request({
    url: '/getDesignFormRow?id=' + id,
    method: 'get'
  })
}

// 返回指定表所有数据
export function getList(tableName) {
  return request({
    url: '/list?name=' + tableName,
    method: 'get'
  })
}

// 返回选定数据源表相关字段
export function getFiled(formId) {
  return request({
    url: '/getFiled?formId=' + formId,
    method: 'get'
  })
}

// 保存表单新增修改数据
export function saveForm(data, tableName) {
  return request({
    url: '/saveFormList?name=' + tableName,
    method: 'post',
    data
  })
}

// 修改保存
export function editForm(data, tableName, id) {
  return request({
    url: `/editFormList?name=${tableName}&id=${id}`,
    method: 'post',
    data
  })
}

// 根据id返回指定表当前记录
export function getRowById(id, tableName) {
  return request({
    url: `/getRowById?id=${id}&name=${tableName}`,
    method: 'get'
  })
}
