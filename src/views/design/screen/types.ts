export interface Config {
  width: string
  height: string
  background?: string
  primary?: string
  requestUrl?: string
  method?: string
  loopTime?: number
  beforeFetch?: Function
  afterFetch?: Function | string
}
export interface CSSProperties {
  width: number | string
  height: number | string
  left: number
  top: number
  bottom?: number
  right?: number
  zIndex?: number
  display?: boolean
}
export interface ScreenData {
  type: string
  position: CSSProperties
  columns?: any
  option?: any
  config?: any
  events?: any
  groupId?: string
  id?: string
}
export interface OpenDrawer {
  //visible: boolean
  title?: string
  direction?: string
  content?: any
  codeType?: string
  callback?: Function | string
  type: string
  tips?: string
}

export interface UpdatePosition {
  type: string //事件类型
  left?: number
  top?: number
  width?: number
  height?: number
  moveX?: number //移动的距离
  moveY?: number
  eventKey?: string
}

export interface Contextmenu {
  type: string
  x: number
  y: number
}
export interface Contextmenu2 extends Contextmenu {
  activeIndex: number
  tempRectIndex: number[]
  callback: (type: string, data?: any) => void
}
