# ak-form 配置手册

配置数据由表单设计器通过拖拽添加相应组件及填写对应字段配置自动生成。脱离表单设计器时可按此数据格式要求，直接使用`ak-form`
表单，即`ak-form`表单组件可不依懒于表单设计器工作。

## 一些表单配置说明

### - 快速添加确定取消按钮

`config.submitCancel`

- 类型：boolean/string[]

快速添加表单提交和取消按钮。设置为`true`可快速显示`确定`和`取消`两个按钮，如其他可自定义，格式为

```javascript
const submitCancel = [
  {
    label: '确定',
    key: 'submit', // 添加此属性相当于快速设置的确定，可选submit/reset/cancel
    // 其他属性详见el-button
  },
  {
    label: '取消'
  }
]
```

### - 将object转string提交

`config.transformData`

- 类型：boolean

统一数据提交格式，开启后会尝试将`object`类型的数据使用`JSON.stringify`转换后提交保存。根据id查询详情时再尝试使用
`JSON.parse`恢复。
对于子表、flex布局以及checkbox这些数据都为object/array，转为字符串提交保存就很有必要的，要不后端接口就要处理

### - 编辑表单样式

`config.style`

编写有样式时会在当前页面head中插入style脚本，作用范围为当前页面。相当于.vue文件中的style scoped中的样式。

### - 新增修改数据保存url

`config.submit`

点击表单提交按钮后数据保存的url接口地址，如当前表单设定了数据源，提交时则保存到对应的数据库表中，此时可不设置

### - 获取表单数据url

`config.requestUrl`

编辑时获取表单初始值接口url，用法同submit

### - before事件

`config.before`

- 类型：before?: string | ((params: any, obj: any) => any)

请求列表数据，编辑和删除等接口事件发送请求前执行事件，这里可对发送的数据进行拦截处理。

* params请求的参数，可对此参数进行修改，然后return回去
* obj.type支持的类型，表单数据`fetch`|`submit`两种，用于表示接口事件类型。表单同时存在获取和请求时需要区分不同事件
* obj.route当前页面路由信息
* obj.model当前表单值
* return false 可阻止事件

同时支持string字符串类型，这个需要自定义开发，适用于处理一些比较复杂的逻辑处理时，根据设置的字符将处理逻辑写入本地文件。可查看
`/src/utils/beforeAfter.ts`根据提示完成

### - after事件

`config.after`

- 类型：after?: string | ((res: any, success: boolean, type?: string) => any)

类似于前面的`before`。最后需要将处理后的结果 return res

### - change事件

`config.change`

- 类型：change?: string | ({ prop, value, parentProp, options, model }) => any)

表单组件改变事件，可修改model后返回。即可实现当组件a改变时，修改b组件的值

* prop 当前组件的name值
* model 当前表单的值
* value 当前组件的值
* parentProp 当前组件为table/flex时的name值
* options 组件为radio/select/checkbox时的下拉选择数据

```javascript
const opt = {
  config: {
    change: ({ prop, value, parentProp, options, model }) => {
      // 当名为name1的组件值改变时，设置表单xxx的值
      if (prop === 'name1') {
        model.xxxx = 'xx'
      }
      return model
    }
  }
}
```
### - 表单字典
提供给列表使用的字典，使用场景：表单中有一个`select`组件使用了固定或接口数据的`options`，通过表单添加数据时此时存在数据库的是`value`，不是`label`值时；
当`select`字段需要在列表中显示时，这里就直接显示了`value`值，通过使用`render=tag/text`的方法即可直接使用这里设置的字典值了


## 一些字段配置说明

### - 设为Input输入框的前/后缀

设置为`true`即当前组件的`type=inputSlot`，将可在input组件的前后缀使用，使用方法同`select`。
使用时设置input的前缀或后缀为当前组件name值即可，格式为`key:name`
注意：此类型不能在table/flex中使用

```vue preview

<template>
  <ak-form :data="formData"/>
</template>
<script setup>
  import {ref} from "vue";

  const formData = ref({
    list: [
      {
        type: "inputSlot",
        control:
          {
            modelValue: "",
            teleported: true,
            style: {width: "100px"}
          },
        options: [
          {
            label: "选项1",
            value: "1"
          }
        ],
        optionsType: 0,
        name: "select1",
        formItem:
          {
            label: "下拉选择框"
          }
      },
      {
        type: "input",
        control:
          {
            modelValue: ""
          },
        append: "key:select1", // 这里是重点：将name=select1的组件作为当前组件的后缀,
        name: "text",
        formItem:
          {
            label: "单行文本"
          }
      }],
    config:
      {
        submitCancel: false
      }
  });
</script>
```


### - 指定label/value属性值

`config.label`

- 当config.optionsType===1时有效

用于从接口数据中提取指定的字段作为下拉选项的label值，默认为`label`。如接口返回没有`label`和`value`字段，则需设置

```javascript
// 接口返回数据为name和id,则此时需要设置label='name',valule='id'
const res = [
  {
    name: '选项1',
    id: '1'
  },
  {
    name: '选项2',
    id: '2'
  }
]
```

### - 缓存数据结果

`config.cache`

* 类型：boolean

* 当config.optionsType===1时有效

将接口返回的数据存在sessionStorage，减少重复请求

### - 尝试转换value值为

`config.transformData`

* 可选值 none、number、string

对组件的数字值进行转换，Number型数字和String型数字互转。实际场景：

```vue preview

<template>
  <el-form-item label="此时无法正常回显">
    <el-select v-model="value">
      <el-option
        :value="item.value"
        :label="item.label"
        v-for="item in options">
      </el-option>
    </el-select>
  </el-form-item>
</template>
<script setup>
  import {ref} from 'vue'

  const value = ref('1')
  const options = [
    {
      label: '选项1',
      value: 1
    }
  ]
</script>
```

### - 联动关联

`config.linkage`

* 类型：string

实现如省市联动的效果，当关联的name发生改变时，组件会重新发起请求查询options数据，并且会将关联的值作为参数发起请求。
因当前测试接口不支持查询，返回结果为固定的。可查看示例控制面板输出

```vue preview

<template>
  <ak-form :data="formData"></ak-form>
</template>
<script setup>
  import {ref} from 'vue'

  const formData = ref({
    list: [
      {
        type: "input",
        control:
          {
            modelValue: "",
            placeholder: '值发生改变时，下拉选择框会重新发起请求'
          },
        name: "name1",
        formItem:
          {
            label: "单行文本"
          }
      },
      {
        type: "select",
        control:
          {
            modelValue: "",
            teleported: true,
            remote: false,
            filterable: false,
          },
        label:'name',
        options: [],
        optionsType: 1,
        optionsFun: "demo/select",
        method: "get",
        linkage: "name1", // 关联前面的单行文本name=input1的组件
        before: (params, {type, route, model}) => {
          // 当由name1发生改变触发的请求时，此时type=linkage
          console.log(type)
          return params
        },
        after: (res, success, type) => {
          // res接口返回结果，type当前事件类型，success是否成功；对结果修改后返回
          console.log(type, res)
          return res
        },
        name: "select1",
        formItem:
          {
            label: "下拉选择框"
          }
      }],
    config:
      {
        submitCancel: false
      }
  })
</script>
```

### - 保存为列表字典
将当前组件的options选项作为字典保存供列表使用，即`表单配置里->表单字典`

### - 校验设置

- 对于input输入框，我们提供了丰富的校验规则，你只需选择校验的正确类型和输入提示语即可。如还不满足使用，可通过`编写校验规则`
  弹窗编写规则，如

```vue preview

<template>
  <ak-form :data="formData"></ak-form>
</template>
<script setup>
  import {ref} from 'vue'

  const formData = ref({
    list: [
      {
        type: "input",
        control:
                {
                  modelValue: ""
                },
        name: "password",
        formItem:
                {
                  label: "密码"
                },
        customRules: [
          {
            type: "required",
            message: "必填项",
            trigger: "blur"
          }]
      },
      {
        type: "input",
        control:
                {
                  modelValue: ""
                },
        name: "password2",
        formItem:
                {
                  label: "确认密码",
                  rules: [
                    {
                      validator: (rule, value, callback) => {
                        if (value === '') {
                          callback(new Error('请输入确认密码'))
                        } else {
                          // 假如当前表单名为form1。获取组件password的值和当前值对比
                          const password = getform1ValueByName('password')
                          if (password === value) {
                            callback()
                          }
                          callback(new Error('两次密码输入不一致'))
                        }
                      },
                      trigger: "blur"
                    }]
                },
        customRules: [
          {
            type: "required",
            message: "必填项",
            trigger: "blur"
          }]
      }],
    config:
            {
              submitUrl:'demo/select',
              key: "form1", //这里的key
              submitCancel: true
            }
  })
</script>
```

- 除系统内置的校验规则，还可通过可`@/components/form/validate.ts`扩展，添加常用校验规则

- 对于选择类的如select、checkbox类的可以校验是否为空


### - 表单方法

#### - get[formName]ControlByName

- 类型：function(name)

表单页全局方法，用于根据组件`config.key`值获取当前的数据项。

使用方法见上面`校验设置`示例里的确认密码，当确认密码改变时，先通过此方法获取密码输入框的值，再和当前输入的比较是否一致

```javascript
const control = getformNameControlByName('key')
//　注意：通过`导出vue文件`方法使用时，直接使用可能会报错，可添加window,如
const control = window.getformNameControlByName('key')
```

#### - get[formName]ValueByName

- 类型：function(name)

同get[formName]ControlByName。返回值不一样

## 常见问题

### select远程数据时如何回显

当组件`select`开启了`remote`和`filterable`，当在编辑状态需要回显选项时，约定根据查询的方式查询数据。

当前表单需要为编辑模式 `operate-type="edit"`。对组件设置了值时即访问`optionsFun`设置的接口地址，参数为`{id:'组件值''}`，可根据接口实际情况在`before`事件作参数处理
```vue preview
<!-- Created by weiXin: 337547038 -->
<template>
  <div>
    <ak-form
      ref="formRef"
      :data="formData"
      operate-type="edit"
    />
  </div>
</template>
<script setup lang="ts">
  import {ref, onMounted} from 'vue'

  const formData = ref({
    list: [
      {
        type: "select",
        control:
          {
            modelValue: "",
            teleported: true,
            remote: true,
            filterable: true
          },
        options: [],
        formItem:
          {
            label: "下拉选择框"
          },
        name: "select",
        optionsType: 1,
        method: "get",
        optionsFun: "demo/select",
        label: "name",
        value: "value",
        cache: true,
        transformData: "string",
        before: (params, obj) => {
          //可在这里对参数进行处理，回显数据查询默认为{id:xxxx},可根据接口实际参数
          return params
        }
      }
    ],
    config:
      {
        submitCancel: true,
      }
  })

  const formRef = ref()
  onMounted(() => {
    //模拟接口对表单赋值
    setTimeout(() => {
      formRef.value.setValue({
        select: '1'
      })
    }, 3000)
  })
</script>

```







