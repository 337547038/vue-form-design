export interface TableData {
  tableProps?: any
  columns: any
  controlBtn?: any
  events?: any
  treeData?: {
    show: boolean
    beforeRequest?: Function
    afterResponse?: Function | string
    method: string
    requestUrl: string
    name: string
  }
  operateBtn?: any
  config?: any
}
