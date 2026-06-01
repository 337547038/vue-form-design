export interface AceDrawerT {
  title?: string
  direction?: string
  content?: any
  callback?: (val: Record<string, any> | string) => void | null
  type?: 'json' | 'css' | 'javascript' | 'text' | ''
  key?: string //当title或content为空时，可根据key匹配
  tip?: string//使用key匹配内容时，用于辅助补充提示编辑区信息
}

export interface DrawerConfig {
  [key: string]: () => AceDrawerT
}