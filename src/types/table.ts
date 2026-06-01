import type {ButtonType, ButtonProps, PopconfirmProps, TableColumnCtx, TableProps} from 'element-plus/es'
import type {Before, After} from "@/types/index";
export interface ApiKey {
  list?: string
  edit?: string
  del?: string
  exportExcel?: string
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
  props?: ButtonProps
  key?: 'add' | 'edit' | 'del' | 'detail' | 'export' // 内容三个特殊值常用的按钮key。其它自定义按钮无需key
}

export interface TreeData {
  show: boolean
  before?: Before
  after?: After
  method: string
  requestUrl: string
  name: string
}

export interface Config {
  formId?: number // 所属表单
  name?: string // 名称
  openType: 'page' | 'dialog'// 页面打开方式
  dialogWidth?: number | string//窗口宽度
  fixedBottomScroll: boolean // 横向滚动固定在底部
  columnsSetting: boolean//列显示隐藏设置
  expand?: boolean//可折叠查询表单
  searchJump?: boolean//查询跳转页面
  operateDropdown?: number//操作列按钮下拉个数
  pageSize?: number//分页设置
  orderSort?: string//查询排序
  controlBtn: Button[] // 操作按钮
  before?: Before,
  after?: After,
  apiKey?: ApiKey,
  pk?: string | number
  tableProps?: TableProps<any>
  treeData?: TreeData

  [key: string]: any
}

export interface TableData {
  columns: Columns[]
  config?: Config
}

