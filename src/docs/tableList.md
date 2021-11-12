# tableList 内容列表

## API

### Props

|参数|类型|说明|
|----------|--------------|--------|
|tableData     | object         |表格配置数据|
|searchData    | object         |列表页条件筛选表单数据，同表单的`formData`|
|beforeRequest | function       |请求列表前参数处理方法，可对请求参数处理|
|afterResponse | function       |请求完成后列表数据处理方法|
|showPage      | boolean/true   |是否显示分页信息|
|autoLoad      | boolean/true   |进入页面后自动加载列表请求数据|
|requestUrl    | function       |请求的api接口方法|
|tableList     | array          |当requestUrl没传时，可使用外部数据渲染表格|

### Methods

|方法|说明|
|----------|--------|
|getListData  |列表请求方法，可手动调用|
|getValue  |用于获取表单的值|
|setValue  |对表单设置初始值|

### Slot

|参数|说明|
|----------|--------|
|DFSearchForm  |筛选表单slot,可自定义按钮和添加自定条件字段|
|DFTable       |自定义表格，即不使用组件内置的|
|default       |位于筛选表单和表单间的slot，可用于存放添加删除数据的按钮|
|-             |columns对应的props|

### tableData

|参数|类型|说明|
|----------|--------------|--------|
|config    |Object |表格配置|
|columns   |Array  |表格列配置|
