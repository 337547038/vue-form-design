import type {FormProps, FormItemProps} from 'element-plus/es'
import type {FormItem, Options} from "@/types/form.ts";

interface CustomRules {
  type: string
  message: string
  trigger: 'blur' | 'change'
  rules?: string //自定义正则
}

export interface Component {
  type: string
  control: Record<string, any> // 当前type表单控件所有props
  name?: string
  formItem?: FormItemProps
  className?: string // 自定义class
  hideLabel?: boolean // 隐藏label
  help?: string // 帮助信息
  span?: number // 表单栅格
  prepend?: string // 输入框前缀
  append?: string // 输入框后缀
  disabledEdit?: boolean // 是否禁用编辑
  displayAdd?: boolean // 添加页隐藏
  displayEdit?: boolean // 编辑页隐藏
  displayDetail?: boolean // 详情页隐藏
  conditionalDisplay?: string // 根据条件隐藏显示
  conditionalDisabled?: string // 根据条件禁用
  customRules?: CustomRules[] // 自定义检验规则,这个规则会合并进item.rules
}

export interface Config {
  props?: FormProps // 绑定el-form相关参数
  submitCancel?: boolean // 显示提交取消按钮
  name?: string // 表单名称
  before?: string | ((params: Record<string, any>, type: string, obj: any) => void)
  after?: string | ((res: Record<string, any>, success: boolean, type: string) => void)
  change?: (obj: Record<string, any>) => void
  transformData?: boolean // 将object转string提交
  size?: string // el-form的props值
  labelWidth?: string // el-form的props值
  class?: string // 自定义的样式名
  key?: string // 表单唯一标识
  sourceId?: number // 数据源id
  submitUrl?: string // 表单数据提交url
  requestUrl?: string // 表单数据回显数据接口
}

export interface FormData {
  list: Component[],
  config: Config
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