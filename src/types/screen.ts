export interface ScreenData {
  type: string
  width?: number | string
  height?: number | string
  x?: number | string
  y?: number | string
  bottom?: number | string | undefined
  right?: number | string | undefined
  zIndex?: number
  locked?: boolean
  display?: boolean
  option?: any
  events?: any
  children?: ScreenData[]
  id: string
  label?: string
  notUseInlineStyle?: boolean // 是否使用内联样式
  optionsType?: 0 | 1 // 0静态/全局数据，1动态远程数据
  method?: "get" | 'post' // 动态数据时接口请求类型
  requestUrl?: string,　//　请求的url或apikey
  before?: (params: Record<string, any>) => any
  after?: (params: Record<string, any>, data: any) => any
  class?: string //样式名
  text?: string　//文本类型时显示的文本
  direction?: 'left'|'right'|'top'|'bottom'  //滚动方向,type=sText
  speed?: number // 滚动速度　type=sText/table
  step?: number //每单位时间滚动的距离,type=sText
  fontSize?: string // 字体大小　type=text/clock/sText
  border?: string // 边框　//　type=border
  background?: string // type=border
  component?: string // type=component
  color?: string // type=text/clock/sText
  src?: string // type=background
  dateTime?: string
  carousel?: string // 是否轮播 type=table

}