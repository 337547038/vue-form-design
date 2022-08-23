# AKList 内容列表

适用于导出vue文件

## API

### Props

| 参数            | 类型           | 说明                         |
|---------------|--------------|----------------------------|
| tableData     | object       | 设计表格配置数据                   |
| searchData    | object       | 列表页条件筛选表单数据，同表单的`formData` |
| beforeRequest | function     | 请求列表前参数处理方法，可对请求参数处理       |
| afterResponse | function     | 请求完成后列表数据处理方法              |
| showPage      | boolean/true | 是否显示分页信息                   |
| requestUrl    | string       | 请求的api接口方法                 |
| searchBtn     | string[]     | 列表筛选表单按钮                   |

### Methods

| 方法          | 说明           |
|-------------|--------------|
| getListData | 列表请求方法，可手动调用 |

### Slot

| 参数           | 说明                               |
|--------------|----------------------------------|
| default      | 位于筛选表单和表格列表间，可用于存放添加删除数据的按钮或其他操作 |
| -            | columns对应的props                  |

### tableData

| 参数         | 类型     | 说明             |
|------------|--------|----------------|
| tableProps | Object | 表格配置           |
| columns    | Array  | 表格列配置          |
| dict       | Object | 数据字典，表格与搜索表单共享 |
