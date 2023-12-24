export interface TableData {
  tableProps?: any
  columns: any
  controlBtn?: any
  events?: any
  treeData?: {
    show: boolean
    beforeFetch?: Function | string
    afterFetch?: Function | string
    method: string
    requestUrl: string
    name: string
  }
  operateBtn?: any
  config?: any
}
