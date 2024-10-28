# AKForm 表单

适用于导出vue文件

## AKForm表单使用方式

```html
<ak-form :formData="formData"></ak-form>
```

### Props

| 参数          | 类型                                                           | 说明                                       |
|-------------|--------------------------------------------------------------|------------------------------------------|
| data        | object                                                       | 设计的生成表单数据                                |
| operateType | string                                                       | 表单展示模式，可选`add、edit、detail、design、search` |
| disabled    | boolean/false                                                | 表单禁用模式，类似于表单模式查看                         |
| submitUrl   | string                                                       | 表单提交url                                  |
| requestUrl  | string                                                       | 用于显示表单数据，请求url                           |
| before      | string / ((params: any, obj: any) => any)                    | 表单接口请求前事件                                |
| after       | string / ((res: any, success: Boolean, type: string) => any) | 表单接口请求事件                                 |
| query       | object                                                       | 一些附加的请求参数。也可在`before`处添加                 |
| params      | object                                                       | 提交表单一些附加参数，如在提交修改时可添加id等信息。而不需要在提交前拦截处理  |


### Events
| 事件名      | 说明                                                                              |
|----------|---------------------------------------------------------------------------------|
| btnClick | 按钮组件点击事件                                                                        |
| change   | 表单组件值发生变化事件{ name: string, value: any, model: any, prop: string, options: any } |


### Methods

| 方法          | 说明                                                               |
|-------------|------------------------------------------------------------------|
| validate    | 表单校验方法                                                           |
| getValue    | 用于获取表单的值                                                         |
| setValue    | 对表单设置初始值(model,filter:boolean) filter=true时将会过滤掉model中不属于当前表单的字段 |
| setOptions  | 对表单选择项快速设置                                                       |
| resetFields | 重置表单方法                                                           |
| getData     | 加载表单初始数据(params:any)                                             |
| submit      | 表单提交                                                             |

  两个全局特殊方法

| 方法                         | 说明                                      |
|----------------------------|-----------------------------------------|
| get[formName]ControlByName | 用于根据name值获取formData中的数据项(name:string)   |
| get[formName]ValueByName   | 用于根据name值获取formData中的数据项的值(name:string) |


### Slot

| 参数      | 说明  |
|---------|-----|
| default | -   |


### data

更多数据详细配置可查看[配置手册](/#/docs/form-option)

代码编辑输入框可支持`json`或`javascript`，初始使用时可通过修改`/src/utils/design.ts`里的`EDITTYPE`的值

```javascript
formData = {
  list: [
    {
      type: "input",
      control:
        {
          modelValue: ""
        },
      config:
        {},
      name: "inputText",
      formItem:
        {
          label: "标题名称"
        },
      customRules: [
        {
          type: "required",
          message: "必填项",
          trigger: "blur"
        }]
    },
    {
      type: "select",
      control:
        {
          modelValue: "",
          teleported: true
        },
      options: [],
      config:
        {
          optionsType: 1,
          optionsFun: "demo/option",
          method: "get",
          cache: true,
          before: (params, obj) =>
          {
            // params请求的参数，可根据type作判断，对params作修改后return回去
            // 需要将params参数return
            return params;
          },
          after: (res, success, type) =>
          {
            // res接口返回结果，type当前事件类型，success是否成功；对结果修改后返回
            console.log(type, res);
            return res;
          },
          transformData: "string",
          linkage: "inputText",
          queryName: "name"
        },
      name: "checkbox",
      formItem:
        {
          label: "多选"
        }
    }],
  form:
    {
      size: "default",
      name: "formName",
      labelWidth: "150px",
      showColon: false,
      class: "form-row-2"
    },
  config:
    {
      submitCancel: true,
      name: "保存的表单名称",
      sourceId: 20,
      transformData: true,
      submitUrl: "", // 表单提交保存接口url
      requestUrl: "" // 获取表单初始数据url
    },
  events:
    {
      before: (params,obj) =>
      {
        // params请求的参数，可根据type作判断，对params作修改后return回去
        // 需要将params参数return
        return params;
      },
      after: (res, success, type) =>
      {
        // res接口返回结果，type当前事件类型，success是否成功；对结果修改后返回
        console.log(type, res);
        return res;
      },
      change: (key, model) =>
      {
        // key当前改变组件的name值,model表单的值，可修改后返回新值
        console.log("change", key);
        return model;
      }
    }
}
```
