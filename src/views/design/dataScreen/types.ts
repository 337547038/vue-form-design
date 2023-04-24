export interface Config {
  width: string
  height: string
  background?: string
  primary?: string
}
export interface CSSProperties {
  width: number
  height: number
  left: number
  top: number
  zIndex?: number
  display?: string
}
export interface ScreenData {
  type: string
  position: CSSProperties
  columns?: any
  option?: any
  config?: any
  events?: any
}
