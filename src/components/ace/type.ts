export interface AceDrawerT {
  title?: string
  direction?: string
  content?: any
  callback?: (val: string) => void | null
  type?: string
  key?: string
}