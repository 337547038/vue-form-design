// 数据处理
import {getRequest} from '@/api'
import {string2json, stringToObj} from '@/utils/design.ts'
// 根据id获取编辑数据
export const getInitData = (id: string) => {
  return new Promise((resolve) => {
    getRequest('designById', {id: id}).then((res: { data: any }) => {
      const result = res.data
      const tableData = stringToObj(result.listData) // 列表数据
      const searchData = stringToObj(result.data) // 搜索表单数据
      const dict = string2json(result.dict) // todo
      resolve({tableData, searchData, dict, name: result.name})
    })
  })
}
//  获取所有可用的表单数据源
export const getFormSourceList = (name?: string) => {
  return new Promise((resolve) => {
    const params = {
      extend: {
        pageSize: 20
      },
      query: {
        name: name,
        type: 1 // 只获取表单的
      }
    }
    getRequest('designList', params).then((res: { data: { list: any } }) => {
      resolve(res.data.list)
    })
  })
}
// 根据选择的表单数据源获取可用的表头信息
export const getFormColumns = (id: number) => {
  return new Promise((resolve) => {
    getRequest('designById', {id: id}).then(
        (res: any) => {
          const content = stringToObj(res.data.data)
          resolve({...getFilterData(content), ...{name: res.data.name, dict: stringToObj(res.data.dict)}})
        }
    )
  })
}
const includeType = ['input', 'radio', 'checkbox', 'select', 'switch', 'datePicker', 'timePicker']
const getFilterData = (obj: any) => {
  const searchDataList: any = [] // 用于搜索表单
  const columns: any = []//用于表头
  obj.list?.forEach((item: any) => {
    if (['grid', 'tabs', 'card'].includes(item.type)) {
      item.columns.forEach((col: any) => {
        getFilterData(col)
      })
    } else if (['div'].includes(item.type)) {
      getFilterData(item)
    } else if (includeType.includes(item.type) && item.name && item.formItem?.label) {
      delete item.customRules // 删除校验
      if (item.formItem.rules) {
        delete item.formItem.rules
      }
      searchDataList.push(item)
      columns.push({
        prop: item.name,
        label: item.formItem?.label,
        help: item.help || ''
      })
    }
  })
  return {searchData: {list: searchDataList, config: {submitCancel: true}}, columns}
}
