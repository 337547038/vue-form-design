export interface Config {
  width: string
  height: string
  background?: string
  primary?: string
  requestUrl?: string
  method?: string
  loopTime?: number
  beforeRequest?: Function
  afterResponse?: Function | string
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
