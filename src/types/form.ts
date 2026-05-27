import type {FormProps, FormItemProps} from 'element-plus/es'
import type {Before, After} from "@/types/index";

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
  optionsType?: number //远程数据获取方法0静态1接口2字典
  optionsFun?: string// optionsType=1时为接口url，2时为字典key
  label?: string // 接口数据时从数据哪个字段取label值
  value?: string//同上
  //before?: (params: Record<string, any>, other?: Other) => any
  before?: Before
  after?: After
  linkage?: string // 用于实现级联，当前select组件关联的linkage改变时，重新加载数据
  method?: 'get' | 'post'
  cache?: boolean //是否缓存数据
  [key: string]: any
}
export interface Config {
  props?: FormProps // 绑定el-form相关参数
  submitCancel?: boolean // 显示提交取消按钮
  name?: string // 表单名称
  before?: Before
  after?: After
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

export interface FormValueChange {
  parentProp?: string // 表格/flex的name，仅在子表/flex内组件修改时
  value: any
  model?: Record<string, any> | undefined
  prop: string // 设计时的name值
  options?: Record<string, any> | undefined // 选项值，radio/checkbox/select等时
}