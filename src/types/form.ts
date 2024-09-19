import type { FormProps } from 'element-plus'

export interface Options {
  label: string
  value: string
  disabled?: boolean
}

export interface FormItem {
  label?: string
  labelWidth?: string
  required?: boolean
  rules?: any
  error?: string
  showMessage?: boolean
  inlineMessage?: boolean
  size?: string
  hideLabel?: boolean
}

export interface FormList {
  name: string
  type: string
  control: any // 当前type表单控件所有props
  formItem?: FormItem // formItem组件所有props
  config: any // 其他配置信息
  customRules?: any // 自定义检验规则,这个规则会合并进item.rules
  columns?: any // 布局字段
  tableData?: any // 子表时
  options?: Options[] // radio,checkbox,select选项
  list?: any
}
//export type EventType = 'get' | 'edit' | 'add'
export interface FormData {
  list: FormList[]
  form: FormProps // form所有props
  config?: {
    style?: string // 表单css样式，相当于scope
    hideField?: string[] // 使用v-if隐藏的字段，用于交互
    addLoad?: boolean
    submitCancel?: boolean | string[]
  }
  operateType?: 'add' | 'edit' | 'detail' | 'design' | 'search' // 当前表单操作类型
  pk?: string // 主键，用于判断当前表单是新增或为修改，判断方式为当前提交的表单内容中存在主键值，则认为是编辑状态
  apiKey?: ApiKey
  events?: {
    before?: string | ((params: any, obj: any) => any)
    after?: string | ((res: any, success: boolean, type?: string) => any)
    change?:
      | string
      | ((
          prop: stirng,
          value: any,
          model: any,
          name: string,
          options: any
        ) => any)
  }
}

export interface ApiKey {
  get?: string //根据id获取编辑数据
  edit?: string // 修改保存
  add?: string // 新增保存
}
