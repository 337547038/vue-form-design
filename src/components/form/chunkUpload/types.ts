export interface FileList {
  fileName?: string
  fileUrl: string
  [key: string]: any
}

export interface TempFileList {
  size: number // 大小
  progress: number // 上传进度
  speed: string // 上传速度
  remainingTime: string // 剩余时间预估
  status: number // 上传状态
  name: string
  src: string // 预览用的src
  type: string
  file: File
  source: any // 用于取消上传
}
