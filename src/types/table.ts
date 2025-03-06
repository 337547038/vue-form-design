import type { ButtonType, ButtonProps, PopconfirmProps, TableColumnCtx } from 'element-plus/es'

export interface ApiKey {
  list?: string
  edit?: string
  del?: string
  export?: string
}
export interface Columns extends Partial<TableColumnCtx<any>> {
  help?: string
  render?: 'switch' | 'image' | 'tag' | 'url' | 'datetime' | 'date' | 'buttons'
  attr?: any // 附加属性，当`render=switch、image、tag、button`组件的属性。
  replaceValue?: { [key: string | number]: string } // 仅当`render=tag/text`时,{ '1': '启用', '0': '禁用' }
  custom?: { [key: string | number]: string } // 仅当`render=tag/text`时,{ '1': 'success', '0': 'danger' }
  timeFormat?: string // 仅当`render=datetime、date`时，对日期格式化，如YYYY年MM月dd日
  buttons?: Button[]
  prop?: string
  renderFormatter?: (val: any, row: any) => any // 使用了 render 属性时,渲染前对字段值的预处理方法，需返回新值
}

export interface Button {
  // 渲染方式confirm=带确认框的按钮
  render?: 'confirm'
  name?: string // 按钮名称
  tooltip?: string // 鼠标放置时的 title 提示
  label?: string // 直接在按钮内显示的文字，tooltip 有值时可为空
  class?: string
  type?: ButtonType // 按钮类型，请参考 element plus 的按钮类型
  icon?: string // 按钮 icon
  popConfirm?: PopconfirmProps // render=confirm时
  // 自定义点击事件
  click?: (row: { [key: string]: any }) => void | boolean
  // 按钮是否显示，请返回布尔值。true显示
  display?: (row: { [key: string]: any }) => boolean
  // 按钮是否禁用，请返回布尔值
  disabled?: (row: { [key: string]: any }) => boolean
  // 自定义el-button属性
  attr?: ButtonProps
  key?: 'add' | 'edit' | 'del' | 'detail' | 'export' // 内容三个特殊值常用的按钮key。其它自定义按钮无需key
  permission?: string // 权限校验标识
}
export interface TableData {
  tableProps?: any
  columns: Columns[]
  controlBtn: Button[]
  events?: {
    before?: string | ((type: EventType, params: any, rout: any) => boolean)
    after?: string | ((type: EventType, res: any, isSuccess?: boolean) => any)
  }
  treeData?: {
    show: boolean
    before?: string | ((type: EventType, params: any, rout: any) => boolean)
    after?: string | ((type: EventType, res: any, isSuccess?: boolean) => any)
    method: string
    requestUrl: string
    name: string
  }
  config?: any
  apiKey?: ApiKey
  pk?: string | number
}

export type EventType = 'switchChange' | 'getData' | 'del' | 'search' | 'export'
