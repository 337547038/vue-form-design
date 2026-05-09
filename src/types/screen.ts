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
}