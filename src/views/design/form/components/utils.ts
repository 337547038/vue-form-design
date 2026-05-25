import { jsonParseStringify } from '@/utils/design'

/**
 * 根据设计数据源时选择的组件类型快速一键生成对应组件代码
 * @param list
 */
export const getDesignDataBySource = (list: any) => {
  const temp: any = []
  list.forEach((item: any) => {
    const defaultObj = jsonParseStringify({
      type: item.filedType,
      control: {
        modelValue: ''
      },
      name: item.name,
      formItem: {
        label: item.label
      }
    })
    let custom: any = {}
    switch (item.filedType) {
      case 'select':
        custom = {
          control: {
          },
          options: [],
          optionsType: 0
        }
        break
      case 'radio':
        custom = {
          options: [],
          optionsType: 0
        }
        break
      case 'checkbox':
      case 'cascader':
        custom = {
          control: {
            modelValue: []
          },
          options: [],
          optionsType: 0
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

