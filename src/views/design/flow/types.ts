export interface NodeList {
  id: string
  nodeType: number
  parentId: string
  content?: string
  order?: number
  userType?: string
  flowType?: string
  priority?: number
}
export interface EmitsEvent {
  event: string
  nodeType?: number
  id: string
  parentId?: string
  addType?: number
}
