# API 接口

## 表单管理

用于保存创建设计的表单，提供数据增加、修改、查看、删除等操作。表各字段说明：

| 参数         | 类型       | 必填  | 说明                  | 支持搜索 |
|------------|----------|-----|---------------------|------|
| id         | int      | -   | 自增 id               | -    |
| formId     | int      | -   | 设计表单选择的数据源 id       | -    |
| name       | varchar  | ✓   | 设计的表单名称             | ✓    |
| type       | int      | -   | 表单和列表两种类型 1 表单 2 列表 | ✓    |
| formData   | text     | -   | 设计生成的表单数据           | -    |
| searchData | text     | -   | 设计生成的表单列表搜索数据       | -    |
| tableData  | text     | -   | 设计生成的表单数据列表数据       | -    |
| status     | int      | -   | 是否启用 1 启用 0 禁用      | ✓    |
| updateDate | datetime | -   | 更新时间                | -    |
| creatDate  | datetime | -   | 创建时间                | -    |

### 新增/修改

接口名称：xxxx

请求类型：POST

请求参数：

```json
{
  "id": 1,
  "formId": "1",
  "name": "设计表单的名称",
  "formData": "{list:[],form:{labelWidth:\"\",class:\"\",size:\"default\",name:\"form1661506141137\",formId:\"\",title:\"表单名称\"}}",
  "searchData": "",
  "tableData": "",
  "type": 1,
  "status": 1
}
```

请求结果：

```json
{
  "code": 200,
  "data": "新增/修改成功"
}
```

### 数据列表

接口名称：xxxx

请求类型:POST

请求参数：（用于条件搜索，非必填）

```json
{
  "name": "设计表单的名称",
  "type": 1,
  "status": 1,
  "pageInfo": {
    "pageSize": 20,
    "pageIndex": 1
  }
}
```

请求参数说明：

| 参数      | 说明             |
| --------- | ---------------- |
| pageSize  | 每页分多少条记录 |
| pageIndex | 当前第几页       |

请求结果：

```json
{
  "code": 200,
  "data": {
    "list": [
      {
        "id": 1,
        "formId": 1,
        "name": "设计的表单名称",
        "updateDate": "2022-08-80 08:08:008",
        "creatDate": "2022-08-80 08:08:008",
        "status": 1,
        "type": 1
      }
    ],
    "pageInfo": {
      "total": 10
    }
  }
}
```

pageInfo 参数

| 参数  | 说明     |
| ----- | -------- |
| total | 分页信息 |

### 修改数据状态

接口名称：xxxx

请求类型:POST

请求参数：

```json
{
  "id": 1,
  "status": 1
}
```

返回结果：

```json
{
  "code": 200,
  "data": "修改成功"
}
```

### 根据 id 获取数据

接口名称：xxxx

请求类型:POST

请求参数：

```json
{
  "id": 1
}
```

请求结果：

按提交时的格式和数据类型，返回所有数据

### 根据 id 删除

接口名称：xxxx

请求类型:POST

请求参数：

```json
{
  "id": 1
}
```

返回结果：

```json
{
  "code": 200,
  "data": "删除成功/失败"
}
```

## 表单内容数据表（数据演示表）

用于保存表单数据内容，数据演示表包括各演示字段：

| 参数          | 类型      | 说明         | 
|-------------|---------|------------|
| text        | varchar | 单行文本框字段演示  |
| textarea    | varchar | 多行文本框字段演示  |
| radio       | varchar | 单选组字段演示    |
| checkbox    | varchar | 多选组字段演示    |
| select      | int     | 下拉选择框字段演示  |
| datePicker  | varchar | 日期选择器字段演示  |
| timePicker  | varchar | 时间选择器字段演示  |
| colorPicker | varchar | 颜色选择字段演示   |
| switch      | varchar | 开关字段演示     |
| inputNumber | varchar | 计数器字段演示    |
| cascader    | varchar | 级联字段演示     |
| rate        | varchar | 评分字段演示     |
| slider      | varchar | 滑块字段演示     |
| upload      | varchar | 图片文件上传字段演示 |
| richText    | text    | 富文本编辑器字段演示 |
| component   | varchar | 自定义组件字段演示  |
| table       | text    | 子表字段演示     |
| table1      | varchar | 子表字段1      |
| table2      | int     | 子表字段2      |

### 新增/修改

接口名称：xxxx

请求类型:POST

请求参数：

```json
{
  "id": 1
}
```

返回结果：

```json
{
  "code": 200,
  "data": "新增/修改成功/失败"
}
```

## 可创建表单数据源

接口名称：xxxx

请求类型:POST

请求参数：无

返回结果：

```json
{
  "code": 200,
  "data": [
    {
      "name": "示例表单",
      "id": "1"
    }
  ]
}
```
