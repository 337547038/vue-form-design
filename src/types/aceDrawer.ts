export interface AceOpenDrawer {
  visible?: boolean
  title?: string
  direction?: string
  content?: any
  codeType?: string
  callback?: () => void | string
  type: string
  tips?: string
}