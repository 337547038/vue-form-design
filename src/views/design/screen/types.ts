import type {EventType} from '@/types/table.ts'

export interface Config {
  width: string
  height: string
  background?: string
  primary?: string
  requestUrl?: string
  method?: string
  loopTime?: number
  before?: string | ((type: EventType, params: any, rout: any) => boolean)
  after?: string | ((type: EventType, res: any, isSuccess?: boolean) => any)
}
export interface CSSProperties {
  width?: number | string
  height?: number | string
  left?: number | string
  top?: number | string
  bottom?: number
  right?: number
  zIndex?: number
  display?: boolean
}
export interface ScreenData {
  type: string
  position: CSSProperties
  option?: any
  config?: any
  events?: any
  list?: ScreenData[]
  id?: string
  layerName?: string
}
export interface OpenDrawer {
  // visible: boolean
  title?: string
  direction?: string
  content?: any
  codeType?: string
  callback?: () => void | string
  type: string
  tips?: string
}

export interface UpdatePosition {
  type: string // 事件类型
  left?: number
  top?: number
  width?: number
  height?: number
  moveX?: number // 移动的距离
  moveY?: number
  eventKey?: string
}
