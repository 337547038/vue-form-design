export default {
  designSave: 'design/save', // 保存设计的表单
  designEdit: 'design/edit', // 保存设计的表单
  designList: 'design/list', // 获取所有已设计的表单
  designDelete: 'design/delete', // 根据id删除已设计
  designById: 'design/get', // 根据id获取已设计的表单
  sourceList: 'datasource/list', // 获取数据源列表
  sourceDelete: 'datasource/delete',
  sourceCreat: 'datasource/creat', // 创建数据源
  sourceEdit: 'datasource/edit', // 编辑数据源
  sourceById: 'datasource/get', // 根据id获取数据源
  saveFormContent: 'content/save', // 往已设计好的表单里添加内容
  editFormContent: 'content/edit', // 往已设计好的表单里添加内容
  getContentList: 'content/list', // 获取表单内容列表
  delFormContent: 'content/delete', // 删除表单内容
  getFormContent: 'content/get', // 获取表单内容
  upload: 'upload/single', // 默认el-upload上传url，也可单独在设计时填写上传地址
  importExcel: '', // 导出excel
  chunkUploadAddGroup: 'upload/group/save', // 选择上传文件添加分组
  chunkUploadEditGroup: 'upload/group/edit',
  chunkUploadDelGroup: 'upload/group/delete',
  chunkUploadGroupList: 'upload/group/list',
  chunkUploadFileList: 'upload/files/list', // 上传文件列表
  chunkUpload: 'upload/split', // 批量分片上传
  chunkUploadDel: 'upload/files/delete', // 批量分片上传
}
