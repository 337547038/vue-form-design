export interface NodeList {
  id: string
  nodeType: number
  parentId: string
  content?: string // 选择的用户
  userType?: string
  flowType?: string
  priority?: number
  //rules?: string // 条件规则
}
export interface EmitsEvent {
  event: string
  nodeType?: number
  id: string
  parentId?: string
  addType?: number
}
