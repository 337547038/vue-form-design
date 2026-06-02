# ak-list 配置手册

## 一些数据列表配置

### -pk
`data.pk`
- 类型：string|number

当前列表数据主键，用于删除和编辑等相关操作


### -新增编辑显示方式
`data.config.openType`
可选dialog/page。设计列表页里点击新增或编辑按钮时，对应表单的显示方式，可以为弹窗和新标签页打开两种方式。


### -固定列表横向滚动条
`data.config.fixedBottomScroll`
- 类型：boolean，默认true。

当列表出现横向滚动条时，设置为true可将滚动条固定在浏览器底部。方便在翻页查看列表最右边信息时，无需先滚动纵向滚动条到底部，再滚动横向滚动条到右边才能查看

### -列显示隐藏设置
`data.config.columnsSetting`
- 类型：boolean，默认true。

用于设置表头列的显示与隐藏，即可个性化设置当前列表需要显示或隐藏哪些表头，以方便查看


### -条件查询是否跳转页面
`data.config.searchJump`
类型：boolean，默认false。即列表查询时，点击查询按钮是否带参数跳转页面。此方式有利于分享当前url

### -列表操作按钮下拉设置
`data.config.operateDropdown`
类型：number。一般为列表右侧的编辑删除等操作按钮，当按钮个大于当前设定时，其余的侧以下拉菜单的形式展示。如设置`operateDropdown=2`，当操作按钮个数大于2个时，其余的侧以下拉菜单展示。

## 一些字段属性配置说明
### -help
`data.columns.help`
显示在表头的帮助信息，鼠标滑过时提示

### -replaceValue
`data.columns.replaceValue`
类型:{ [key: string | number]: string }

仅当`render=tag/text`时,用于根据值替换成其他内容，常见于接口返回如status=0/1之类的，需要将0/1显示为对应的文案，则可使用设置`{ '1': '启用', '0': '禁用' }`

### -custom
`data.columns.custom`

类型：custom?: { [key: string | number]: string }

仅当`render=tag/text`时,tag的显示类型属性，如{ '1': 'success', '0': 'danger' }


### -renderFormatter
`data.columns.renderFormatter`

- 类型：renderFormatter?: (val: any, row: any) => any

  使用了 `render` 属性时,渲染前对字段的值进行预处理方法，需返回新值


### -操作按钮配置
适用于表格左上方及表格列表内右侧按钮

`data.config.controlBtn` 为表格左上方，`data.columns`下`render=buttons`为列表右侧按钮，如：
```javascript
const data={
  config:{
    controlBtn:[], //为表格左上方按钮配置
  },
  columns:[{
    render:'buttons', //为列表右侧按钮
    buttons:[]
  }]
}
```
对于按钮key=add/edit/del作了系统内置事件，在使用时可通过使用return false阻止或者key设置为空或不填
在默认下如果设置了`config.openType=dailog`，并且组件下有default slot，在点击`key=add/edit`时会将slot作为弹窗打开
```vue preview
<!-- created by weiXin:337547038 -->
<template>
  <div>
    <ak-list
            ref="tableListRef"
            :api-key="{}"
            :search-data="searchData"
            :data="tableData"
            @btn-click="listBtnClick"
    >
      <ak-form
              ref="formRef"
              :data="formData"
              :operate-type="operateType"
              submit-url=""
              :after="afterSubmit"
              @btn-click="formBtnClick"
      />
    </ak-list>
  </div>
</template>

<script setup lang="ts">
  import {nextTick, ref,onMounted} from 'vue'

  const formRef = ref()
  const tableListRef = ref()
  const closeFormFn = ref()
  const operateType = ref('add')

  const tableData = ref({
    columns: [
      {
        label: "多选",
        type: "selection",
        prop: "selection"
      },
      {
        prop: "text",
        label: "文本",
        help: ""
      },
      {
        prop: "checkbox",
        label: "性别",
        help: ""
      },
      {
        label: "操作",
        prop: "operate",
        render: "buttons",
        buttons: [
          {
            key: "edit",
            props:
                    {
                      size: "small"
                    }
          },
          {
            key: "del",
            props:
                    {
                      size: "small"
                    }
          }]
      }],
    config:
            {
              controlBtn: [
                {
                  key: "add"
                },
                {
                  key: "del"
                }],
              openType: "dialog",
              dialogWidth: "600"
            }
  })

  const searchData = ref({
    list: [
      {
        type: "input",
        control:
                {
                  modelValue: ""
                },
        name: "text",
        formItem:
                {
                  label: "文本"
                }
      },
      {
        type: "radio",
        control:
                {
                  modelValue: ""
                },
        name: "checkbox",
        formItem:
                {
                  label: "性别"
                },
        options: [
          {
            label: "男",
            value: "1"
          },
          {
            label: "女",
            value: "2"
          }],
        optionsType: 0
      }],
    config:
            {
              submitCancel: true
            }
  })

  const formData = ref({
    list: [
      {
        type: "input",
        control:
                {
                  modelValue: ""
                },
        name: "text",
        formItem:
                {
                  label: "文本"
                }
      },
      {
        type: "radio",
        control:
                {
                  modelValue: ""
                },
        name: "checkbox",
        formItem:
                {
                  label: "性别"
                },
        options: [
          {
            label: "男",
            value: "男"
          },
          {
            label: "女",
            value: "女"
          }],
        optionsType: 0
      }],
    config:
            {
              submitCancel: true
            }
  })

  /**
   * 列表按钮点击事件
   * @param key 按钮标识
   * @param row 列表右则操作按钮事件时为当前行数据；列表右上方按钮时为当前所勾选的行id
   * @param close 用于关闭弹的方法
   */
  const listBtnClick = (key: string, row: any, close: any) => {
    closeFormFn.value = close
    if (key === 'edit') {
      operateType.value = key
      nextTick(() => {
        formRef.value.setValue(row)
      })
    }
  }
  // 关闭弹窗
  const closeForm = () => {
    closeFormFn.value && closeFormFn.value()
  }
  const afterSubmit = (_: any, success: boolean, type: string) => {
    if (type === 'submit') {
      if (success) {
        // 添加成功，刷新列表数据并关闭弹窗
        tableListRef.value.getListData()
        closeForm()
      }
    }
  }

  const formBtnClick = (type: string) => {
    if (type === 'reset' || type === 'cancel') {
      closeForm()
    }
  }

  onMounted(()=>{
    //提供些演示数据
    tableListRef.value.setTableData([
      {text:'张三',checkbox:'男'},
      {text:'李四',checkbox:'女'},
    ])
  })
</script>

```

在点击按钮弹出对话框时，同时带有关闭弹窗的方法
```javascript
const listBtnClick = (key: string, row: any, close: any) => {
    // 这里close为关闭弹窗的方法，如
    // closeFn.value=close
    // 在需要关闭弹窗时使用closeFn.value&&closeFn.value()即可关闭
  }
```

为了更方便对弹窗作设置，还可以通过`pinia`对弹窗作设置及关闭
```javascript
import {useListDialogForm} from '@/store/list'
import {getCurrentInstance} from 'vue'

const instance = getCurrentInstance()
const formStore = useListDialogForm(instance.uid)() // 这里需传下唯一的id，自定或手动设置都可以
provide('akListDialogForm', formStore)
// 完成上面配置即可使用
formStore.setTitle('弹窗窗口标题')
formStore.setVisible(false) //关闭弹窗
formStore.setWidth('800px') //设置弹窗宽度
```

详细配置如：
```javascript
const buttons=[
  {
    //我们内置了常见的add、edit、detail、del、export按钮，只需按约定的key值设置即可快速设置
    key:'add'
  },
  {
    // 渲染方式:tooltip=带tip的按钮,confirm=带确认框的按钮，空为正常的按钮
    render: "tooltip",
    title: "", // 鼠标放置时的 title 提示
    label: "", // 直接在按钮内显示的文字，title 有值时可为空
    class: "",
    type: "primary", // 按钮类型，请参考 element plus 的按钮类型
    icon: "", // 按钮 icon
    popConfirm: {}, //自定popConfirm属性，当render=confirm
    // 自定义点击事件
    click: (row: { [key: string]: any }) => {
      //可使用return false阻止自定义按钮事件
    },
    // 按钮是否显示，true隐藏 false显示
    display: (row: { [key: string]: any }) =>{
      return true;
    },
    // 按钮是否禁用，true禁用
    disabled: (row: { [key: string]: any }) => {
      return false;
    },
    // 自定义el-button属性
    props: {}
  }
]
```
