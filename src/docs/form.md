# AKForm 表单

适用于导出vue文件

## AKForm表单使用方式

```html

<ak-form :formData="formData"></ak-form>
```

## 基本表单

```vue preview
<!-- Created by weiXin:337547038 -->
<template>
  <div>
    <ak-form
      :data="formData"
    ></ak-form>
  </div>
</template>
<script setup lang="ts">
  import {ref} from 'vue'

  const formData = ref({
    list: [
      {
        type: "input",
        control:
          {
            modelValue: ""
          },
        formItem:
          {
            label: "用户名"
          },
        name: "userName"
      }],
    config:
      {
        submitCancel: true
      }
  })
</script>

```

### Props

| 参数          | 类型                                                           | 说明                                                                                                   |
|-------------|--------------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| data        | object                                                       | 设计的生成表单数据                                                                                            |
| operateType | string                                                       | 表单展示模式，可选`add、edit、detail、search`，默认add。其中`search`模式用于列表页表格上方的条件筛选表单；如果页面中没有使用根据不同的模式去隐藏可禁用某个组件，可不填。 |
| disabled    | boolean/false                                                | 表单禁用模式，类似于表单模式查看                                                                                     |
| submitUrl   | string                                                       | 表单提交url                                                                                              |
| requestUrl  | string                                                       | 用于显示表单数据，请求url                                                                                       |
| before      | string / ((params: any, other: {route,model,type}) => any)   | 表单接口请求前事件,type当前操作事件类型，可选fetch/submit获取和提交数据                                                         |
| after       | string / ((res: any, success: Boolean, type: string) => any) | 表单接口请求事件，success请求返回是否成功                                                                             |
| query       | object                                                       | 一些附加的请求参数。也可在`before`处添加                                                                             |
| params      | object                                                       | 提交表单一些附加参数，如在提交修改时可添加id等信息。而不需要在提交前拦截处理                                                              |

### Events

| 事件名      | 说明                                                                                                                                                                                   |
|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| btnClick | 按钮组件点击事件                                                                                                                                                                             |
| change   | 表单组件值发生变化事件{ prop: string, value: any, model: any, parentProp: string, options: any }。prop为当前的name值，model为当前表单的值，parentProp为上级(talbe/flex)的name值，options为radio/checkbox/select下拉选择数据 |
| focus    | 同change                                                                                                                                                                              |
| bulr     | 同change                                                                                                                                                                              |

### Methods

| 方法          | 说明                                                                                                   |
|-------------|------------------------------------------------------------------------------------------------------|
| validate    | 表单校验方法                                                                                               |
| getValue    | 用于获取表单的值                                                                                             |
| setValue    | 对表单设置初始值(model,filter:boolean,emit=true) filter=true时将会过滤掉model中不属于当前表单的字段。使用此方法设置表单值时是否触发表单change事件 |
| setOptions  | 对表单选择项快速设置                                                                                           |
| resetFields | 重置表单方法                                                                                               |
| getData     | 加载表单初始数据(params:any)                                                                                 |
| submit      | 表单提交                                                                                                 |

两个全局特殊方法

| 方法                         | 说明                                                 |
|----------------------------|----------------------------------------------------|
| get[formName]ControlByName | 用于根据key（config.key）值获取formData中的数据项(name:string)   |
| get[formName]ValueByName   | 用于根据key（config.key）值获取formData中的数据项的值(name:string) |

### Props.data

| 参数            | 类型       | 说明                                                                                              |
|---------------|----------|-------------------------------------------------------------------------------------------------|
| type          | type组件类型 | 见设计面板组件                                                                                         |
| control       | object   | 当前组件的props值                                                                                     |
| name          | string   | 当组件名称，用于el-item-form的prop值                                                                      |
| customRules   | array    | 自定义的校验规则                                                                                        |
| options       | array    | 组件为radio/checkbox/select等组件的下拉数据选项                                                              |
| before        | function | 远程数据获取前置事件                                                                                      |
| after         | function | 远程数据响应前置事件                                                                                      |
| transformData | string   | 用于解决radio/checkbox/select显示异常问题，由于接口及设计等一些原因，有时v-model的值和options.value的值类型会不一致，同为数字但存在字符型和数值形两种 |
| linkage       | string   | 用于实现级联效果                                                                                        |
| ...           | ...      | 更多属性见设计面板的字段配置，对于不同的类型对应有不同的配置                                                                  |

### Slot

| 参数      | 说明 |
|---------|----|
| default | -  |

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
      optionsType: 1,
      optionsFun: "demo/option",
      method: "get",
      cache: true,
      before: (params, otherObj) => {
        // params请求的参数，
        // otherObj包含了当前表单信息，路由信息和操作类型type
        // return false可阻止发送请求
        // 需要将params参数return
        return params;
      },
      after: (res, success) => {
        // res接口返回结果，type当前事件类型，success是否成功；对结果修改后返回
        console.log(res, success);
        return res;
      },
      transformData: "string",
      linkage: "inputText",
      queryName: "name",
      name: "checkbox",
      formItem:
          {
            label: "多选"
          }
    }],
  config:
      {
        key: "formName",
        labelWidth: "150px",
        showColon: false,
        class: "form-row-2",
        submitCancel: true,
        name: "保存的表单名称",
        sourceId: 20,
        transformData: true,
        submitUrl: "", // 表单提交保存接口url
        requestUrl: "", // 获取表单初始数据url
        before: (params, otherObj) => {
          // params请求的参数，可根据type作判断，对params作修改后return回去
          // otherObj包含了当前表单信息，路由信息和操作类型type
          // type可选'fetch' | 'submit'，即获取表单数据请求和提交表单请求
          // return false可阻止发送请求
          // 需要将params参数return
          return params;
        },
        after: (res, success, type) => {
          // res接口返回结果，type当前事件类型，success是否成功；对结果修改后返回
          console.log(type, res);
          return res;
        },
        change: ({key, model, value, options, parentProp}) => {
          // key当前改变组件的name值,model表单的值，可修改后返回新值
          console.log("change", key);
          return model;
        }

      }
}
```
