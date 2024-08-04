//数据处理
import { getRequest } from '@/api'
import { string2json, stringToObj } from '@/utils/design.ts'
import type { FormList } from '@/types/form.ts'
//根据id获取编辑数据
export const getInitData = (id: string) => {
  return new Promise(resolve => {
    getRequest('designById', { id: id }).then((res: { data: any }) => {
      const result = res.data
      const tableData = stringToObj(result.listData) // 列表数据
      const searchData = stringToObj(result.data) // 搜索表单数据
      const dict = string2json(result.dict)
      resolve({ tableData, searchData, dict, source: result.source })
    })
  })
}
//  获取所有可用的表单数据源
export const getFormSourceList = (name?: string) => {
  return new Promise(resolve => {
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
//根据选择的表单数据源获取可用的表头信息
export const getFormColumns = (id: number) => {
  return new Promise(resolve => {
    getRequest('designById', { id: id }).then(
      (res: { data: { data: string } }) => {
        const content = stringToObj(res.data.data)
        //filterFiled(content)
        resolve(filterFiled(content))
      }
    )
  })
}
const excludeType = [
  'txt',
  'title',
  'table',
  'component',
  'upload',
  'button',
  'tinymce',
  'inputSlot',
  'flex'
]
const filterFiled = (obj: any) => {
  const temp: any = []
  obj?.list.forEach((item: FormList) => {
    if (item.type === 'grid' || item.type === 'tabs') {
      item.columns.forEach((col: FormList) => {
        filterFiled(col)
      })
    } else if (['card', 'div'].includes(item.type)) {
      filterFiled(item)
    } else if (!excludeType.includes(item.type) && item.name) {
      const help = item.config.help
      temp.push({
        prop: item.name,
        label: item.formItem?.label,
        ...help
      })
    }
  })
  return temp
}
