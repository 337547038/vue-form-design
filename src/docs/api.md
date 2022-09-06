# API 接口

## 1. 表单管理

用于保存创建设计的表单，提供数据增加、修改、查看、删除等操作。表各字段说明：

| 参数         | 类型       | 必填  | 说明                    | 支持搜索 |
|------------|----------|-----|-----------------------|------|
| id         | int      | -   | 自增 id                 | -    |
| formId     | int      | -   | 设计表单选择的数据源 id         | -    |
| name       | varchar  | ✓   | 设计的表单名称               | ✓    |
| type       | int      | -   | 表单和列表两种类型 1 表单 2 列表   | ✓    |
| formData   | text     | -   | 设计生成的表单数据             | -    |
| searchData | text     | -   | 设计生成的表单列表搜索数据         | -    |
| tableData  | text     | -   | 设计生成的表单数据列表数据         | -    |
| status     | int      | -   | 是否启用 1启用（默认） 0禁用      | ✓    |
| updateDate | datetime | -   | 更新时间                  | -    |
| creatDate  | datetime | -   | 创建时间                  | -    |
| dict       | text     | -   | 用于匹配的字典数据，一般不设置，从接口获取 | -    |

### 1.1 新增/修改保存

接口名称：/design/save

请求类型：POST

请求参数：

```json
{
  "id": 1,
  "formId": "1",
  "name": "设计表单的名称",
  "formData": "{list:[],form:{labelWidth:\"\",class:\"\",size:\"default\",name:\"form1661506141137\"}}",
  "searchData": "",
  "tableData": "",
  "type": 1,
  "status": 1,
  "dict": ""
}
```

请求结果：

```json
{
  "code": 200,
  "data": [],
  "message": "新增/修改成功"
}
```

### 1.2 数据列表

接口名称：/design/list

请求类型：POST

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

| 参数        | 说明       |
|-----------|----------|
| pageSize  | 每页分多少条记录 |
| pageIndex | 当前第几页    |

请求结果：

```json
{
  "code": 200,
  "data": {
    "dict": {
      "status": {
        "0": "禁用",
        "1": "启用"
      },
      "type": {
        "1": "表单",
        "2": "表格"
      }
    },
    "list": [
      {
        "formId": 1,
        "id": 4,
        "name": "form1661994171692",
        "status": 1,
        "type": 1,
        "creatDate": "2022-08-30T08:00:00.000Z",
        "updateDate": "2022-09-01T08:33:53.000Z"
      },
      {
        "formId": 1,
        "id": 5,
        "name": "示例表单",
        "status": 1,
        "type": 1,
        "creatDate": "2022-09-01T09:08:05.000Z",
        "updateDate": "2022-09-01T09:08:05.000Z"
      }
    ],
    "pageInfo": {
      "total": 2
    }
  },
  "message": "成功"
}
```

参数说明

| 参数             | 说明     |
|----------------|--------|
| dict           | 列表匹配字典 |
| pageInfo.total | 分页信息   |

### 1.3 修改数据状态

接口名称：/design/changeStatus

请求类型：POST

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
  "message": "修改成功"
}
```

### 1.4 根据 id 获取数据

接口名称：/design/formById

请求类型：POST

请求参数：

```json
{
  "id": 1
}
```

请求结果：

```json
{
  "code": 200,
  "data": {
    "id": 4,
    "formId": 1,
    "name": "form1661994171692",
    "type": 1,
    "formData": "",
    "searchData": "",
    "tableData": "",
    "status": 1,
    "updateDate": "",
    "creatDate": "",
    "dict": ""
  },
  "message": "成功"
}
```

### 1.5 根据 id 删除

接口名称：/design/delete

请求类型：POST

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
  "message": "删除成功"
}
```

## 2. 表单内容数据表（数据演示表）

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

### 2.1 新增/修改保存

接口名称：/content/save

请求类型：POST

请求参数：

```json
{
  "id": 1,
  "tid": 1,
  "cascader": [],
  "checkbox": [
    1
  ],
  "colorPicker": "",
  "component": "测试回填值",
  "datePicker": "2022-08-04T16:00:00.000Z",
  "inputNumber": 0,
  "radio": 1,
  "rate": 2,
  "richText": "<p>富文本内容</p>",
  "select": 1,
  "slider": 3,
  "switch": true,
  "table": [
    {
      "table1": "1",
      "table2": "value1"
    }
  ],
  "text": "示例表单",
  "textarea": "",
  "timePicker": "2022-08-29T05:50:50.000Z",
  "upload": []
}
```

请求参数说明：

| 字段  | 说明        | 必填         |
|-----|-----------|------------|
| id  | 当前记录id，自增 | -          | 
| tid | 设计生成的表单id | ✓          |
| ... | 其他设计的表单元素 | 根据设计时的校验规则 |

返回结果：

```json
{
  "code": 200,
  "data": [],
  "message": "新增/修改成功/失败"
}
```

### 2.2 内容列表

接口名称：/content/list

请求类型：POST

请求参数：

```json
{
  "formId": "1",
  "pageInfo": {
    "pageSize": 20,
    "pageIndex": 1
  }
}
```

请求参数说明：

| 参数        | 说明       |
|-----------|----------|
| formId    | 列表id     |
| text      | 设置的搜索条件  |
| select    | 设置的搜索条件  |
| pageSize  | 每页分多少条记录 |
| pageIndex | 当前第几页    |

请求结果：

```json
{
  "code": 200,
  "data": {
    "dict": {
      "select": {
        "0": "男",
        "1": "女"
      }
    },
    "list": [
      {
        "dateTime": "2022-08-80 08:08:08",
        "id": 1,
        "select": 1,
        "text": "示例表单"
      }
    ],
    "pageInfo": {
      "total": 1
    }
  }
}
```

参数说明

| 参数             | 说明     |
|----------------|--------|
| dict           | 列表匹配字典 |
| pageInfo.total | 分页信息   |

### 2.3 根据id获取数据

接口名称：/content/id

请求类型：POST

请求参数：

```json
{
  "formId": "1",
  "id": "5"
}
```

请求结果：

```json
{
  "code": 200,
  "data": {
    "data": {
      "id": 5,
      "radio": "",
      "checkbox": "",
      "number": "",
      "cascader": "",
      "select1": "",
      "textarea": "456",
      "switch": 0,
      "text": "123",
      "upload": "",
      "datePicker": "0000-00-00",
      "timePicker": "0000-00-00",
      "colorPicker": "",
      "inputNumber": 0,
      "rate": 0,
      "slider": 0,
      "component": "",
      "richText": "",
      "table1": "",
      "updateDate": "2022-09-01T09:32:52.000Z",
      "creatDate": "2022-09-01T09:32:52.000Z"
    },
    "dict": {
      "radio": {
        "0": "男",
        "1": "女"
      },
      "checkbox": {
        "1": "看书",
        "2": "唱歌",
        "3": "跑步",
        "4": "旅游",
        "5": "象棋"
      },
      "select": {
        "1": "vue",
        "2": "react",
        "3": "angular",
        "4": "jquery"
      }
    }
  },
  "message": "成功"
}
```

### 2.4 根据 id 删除/批量删除

接口名称：/content/delete

请求类型：POST

请求参数：

```json
{
  "id": 1,
  "formId": 1
}
```
批量删除请求参数：

```json
{
  "id": "1,2,3",
  "formId": 1
}
```

返回结果：

```json
{
  "code": 200,
  "data": [],
  "message": "删除成功/失败"
}
```

## 3. 可创建表单数据源

接口名称：/dataSource

请求类型：POST

请求参数：无

返回结果：

```json
{
  "code": 200,
  "data": [
    {
      "id": 1,
      "name": "组件测试",
      "tableName": "component-test"
    }
  ],
  "message": ""
}
```

## 4. 根据id获取当前数据源可用字段

接口名称：/getField

请求类型：POST

请求参数：

```json
{
  "id": "1"
}
```

返回结果：

```json
{
  "code": 200,
  "data": [
    {
      "name": "radio",
      "label": "单选测试"
    },
    {
      "name": "checkbox",
      "label": "多选测试"
    },
    {
      "name": "number",
      "label": "计数器"
    },
    {
      "name": "cascader",
      "label": "级联"
    },
    {
      "name": "select1",
      "label": "下拉选择"
    },
    {
      "name": "textarea",
      "label": "文本框"
    },
    {
      "name": "switch",
      "label": "开关"
    },
    {
      "name": "text",
      "label": "单行文本"
    },
    {
      "name": "upload",
      "label": "图片文件"
    },
    {
      "name": "datePicker",
      "label": "时间选择器"
    },
    {
      "name": "timePicker",
      "label": "日期选择器"
    },
    {
      "name": "colorPicker",
      "label": "颜色选择器"
    },
    {
      "name": "inputNumber",
      "label": "计数器"
    },
    {
      "name": "rate",
      "label": "评分"
    },
    {
      "name": "slider",
      "label": "滑块"
    },
    {
      "name": "component",
      "label": "自定义组件"
    },
    {
      "name": "richText",
      "label": "富文本编辑器"
    },
    {
      "name": "table1",
      "label": "子表"
    }
  ],
  "message": "成功"
}
```

## 5. 图片/文件上传

接口地址如：

请求类型：post

请求参数：formData数据

返回结果：

```json
{
  "code": 200,
  "data": "上传后的图片或文件路径",
  "message": "上传成功"
}

```
