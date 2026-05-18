export interface AceDrawerT {
  title?: string
  direction?: string
  content?: any
  callback?: (val: Record<string, any> | string) => void | null
  type?: 'json' | 'css' | 'javascript'|'text'|''
  key?: string
}

export interface DrawerConfig {
  [key: string]: () => AceDrawerT
}