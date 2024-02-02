import { jsonParseStringify } from '@/utils/design'

/**
 * 根据设计数据源时选择的组件类型快速一键生成对应组件代码
 * @param list
 */
const getInitList = (list: any) => {
  const temp: any = []
  list.forEach((item: any) => {
    const defaultObj = getDefault(item)
    let custom: any = {}
    switch (item.filedType) {
      case 'select':
        custom = {
          control: {
            appendToBody: true
          },
          options: [],
          config: {
            optionsType: 0
          }
        }
        break
      case 'radio':
        custom = {
          options: [],
          config: {
            optionsType: 0
          }
        }
        break
      case 'checkbox':
      case 'cascader':
        custom = {
          control: {
            modelValue: []
          },
          options: [],
          config: {
            optionsType: 0
          }
        }
        break
      case 'switch':
        custom = {
          control: {
            modelValue: false
          },
          options: []
        }
        break
      case 'datePicker':
        custom = {
          control: {
            type: 'date'
          }
        }
        break
      case 'inputNumber':
      case 'slider':
        custom = {
          control: {
            modelValue: 0
          }
        }
        break
    }
    temp.push(Object.assign({}, defaultObj, custom))
  })
  return temp
}

const getDefault = (obj: any) => {
  return jsonParseStringify({
    type: obj.filedType,
    control: {
      modelValue: ''
    },
    config: {},
    name: obj.name,
    formItem: {
      label: obj.label
    }
  })
}
export default getInitList
