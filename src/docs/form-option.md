# ak-form 配置手册

配置数据由表单设计器通过拖拽添加相应组件及填写对应字段配置自动生成。脱离表单设计器时可按此数据格式要求，直接使用`ak-form`表单，即`ak-form`表单组件可不依懒于表单设计器工作。

## 表单配置
### - 表单名称
`config.name`

用于保存的表单设计显示的名称

### - 数据源
`config.soucrceId`

指定当前表单数据的对应的数据库表，即当前表单数据保存对应的数据库id。若没有配置数据源，则需在下面的接口数据事件中配置增删查改相关的url

### - 表单标识
`form.name`

当前表单的名称，可根据此标识使用`get[formName]ControlByName`获得当前其他选项数据

### - 表单标签宽度
`form.labelWidth`

`el-form`的表单属性，设置表单label的宽度

### - 表单样式名称
`form.class`

自定义的表单样式名称，可快速选择内置好的表单布局类名，或自定义类名

### - 字段名后添加冒号
`form.showColon`

统一设置表单label是否添加冒号

### - 组件尺寸
`form.size`

`el-form`的表单属性

### - 快速添加确定取消按钮
`config.submitCancel`

- 类型：boolean/string[]

快速添加表单提交和取消按钮。为数组时可指定显示的名称，如['保存','取消']

### - 将object转string提交
`config.transformData`

- 类型：boolean

统一数据提交格式，开启后会尝试将`object`类型的数据使用`JSON.stringify`转换后提交保存。根据id查询详情时再尝试使用`JSON.parse`恢复。

### - 编辑表单样式
`config.style`

编写有样式时会在当前页面head中插入style脚本，作用范围为当前页面。相当于.vue文件中的style scoped中的样式。

### - 新增修改数据保存url
`config.submit`

点击表单提交按钮后数据保存的url接口地址，如当前表单设定了数据源，提交时则保存到对应的数据库表中，此时可不设置


同add

### - 获取表单数据url
`config.requestUrl`

编辑时获取表单初始值接口url，用法同add

### - before事件
`events.before`
- 类型：before?: string | ((params: any, obj: any) => any)

请求列表数据，编辑和删除等接口事件发送请求前执行事件，这里可对发送的数据进行拦截处理。
* params请求的参数，可对此参数进行修改，然后return回去
* obj.type支持的类型，表单数据`get | add | edit`，选项数据`linkage | remote | edit | default`用于表示接口事件类型
* obj.route当前页面路由信息
* obj.model当前表单值

同时支持string字符串类型，这个需要自定义开发，适用于处理一些比较复杂的逻辑处理时，根据设置的字符将处理逻辑写入本地文件。可查看`/src/utils/beforeAfter.ts`根据提示完成

### - after事件
`events.after`
- 类型：after?: string | ((res: any, success: boolean, type?: string) => any)

类似于前面的`before`。最后需要将处理后的结果 return res

### - change事件
`events.change`
- 类型：change?: string | ((key: string, model: any) => any)

表单组件改变事件，可修改model后返回。即可实现当组件a改变时，修改b组件的值

* key 当前组件的name值
* model 当前表单的值


```javascript
const opt={
  events:{
    change:(key,model)=>{
      // 当名为name1的组件值改变时，设置表单xxx的值
      if(key==='name1'){
        model.xxxx='xx'
      }
      return model
    }
  }
}
```


## 字段配置
支持的组件类型`input、textarea、radio、checkbox、select、inputSlot、datePicker、timePicker、colorPicker、switch、inputNumber、cascader、rate、slider、treeSelect、txt、title、tabs、flex、card、divider、button、table、component、upload、tinymce、grid、div……`

对不同的组件类型有不一样的属性，部分是组件原来的prop，为了方便配置选择了部分些常用的prop用于可视化设计，其他的可通过`编辑属性`或`生成预览脚本`窗口进行编写。当然也可以自定义开发你所需要的prop

### 通用属性

#### - 设为Input输入框的前/后缀

设置为`true`即当前组件的`type=inputSlot`，将可在input组件的前后缀使用，使用方法同`select`。
使用时设置input的前缀或后缀为当前组件name值即可，格式为`key:name`

```vue preview

<template>
  <ak-form :data="formData" />
</template>
<script setup>
  import { ref } from "vue";

  const formData = ref({
    list: [
      {
        type: "inputSlot",
        control:
          {
            modelValue: "",
            teleported: true,
            style: { width: "100px" }
          },
        options: [
          {
            label: "选项1",
            value: "1"
          }
        ],
        config:
          {
            optionsType: 0,
            optionsFun: ""
          },
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
        config:
          {
            prepend: "",
            append: "key:select1" // 这里是重点：将name=select1的组件作为当前组件的后缀
          },
        name: "input1724465076902",
        formItem:
          {
            label: "单行文本"
          }
      }],
    form:
      {
        size: "default"
      },
    config:
      {
        submitCancel: false
      }
  });
</script>
```

其他通用属性大部分都是当前组件的一些属性，比较容易理解，这里就不一一介绍了。

### 选项配置

 支持组件`radio、select、checkbox、cascader、treeSelect`配置选项数据

#### - 选项数据源
`config.optionsType` 
- 类型：number 可选值0固定数据；1接口数据；2字典数据

#### - 选项数据源接口URL

`config.optionsFun`

* 类型：string

- 当config.optionsType===1时，为接口url
- 当config.optionsType===2时，为字典标识

#### - 远程数据参数字段名

`config.queryName`

* 类型：string  default:'name'

当开启了`Remote`远程数据时有效，作为参数请求接口，如`{name:'xxx'}`


#### - 开启远程数据Remote

`config.remote`

* 类型：boolean

用于从接口数据中提取指定的字段作为下拉选项的label值，默认为`label`。如接口返回没有`label`和`value`字段，则需设置。当值发生变化时，将根据输入的参数从配置的`config.
optionsFun`接口地址获取选项数据，参数key可通过`config.queryName`设置。

**远程数据编辑回显问题**

当`label`和`value`不相同时，接口服务端保存的一般为`value`值，由于是远程搜索在编辑时只能显示`value`的值。
为方便回显目前暂定在搜索时根据`value`的值请求，接口需要能够根据value id查找出初始默认值

#### - 指定label属性值

`config.label`

- 当config.optionsType===1时有效

用于从接口数据中提取指定的字段作为下拉选项的label值，默认为`label`。如接口返回没有`label`和`value`字段，则需设置

```javascript
// 接口返回数据为name和id,则此时需要设置label='name',valule='id'
const res=[
  {
    name:'选项1',
    id:'1'
  },
  {
    name:'选项2',
    id:'2'
  }
]
```

#### - 指定value属性值
`config.value`

同上面label


#### - 缓存数据结果
`config.cache`

* 类型：boolean

* 当config.optionsType===1时有效

将接口返回的数据存在sessionStorage，减少重复请求


#### - 尝试转换value值为
`config.transformData`

* 可选值 none、number、string

对组件的数字值进行转换，Number型数字和String型数字互转。实际场景：

```javascript
// 接口返回的value为String类型时
const result = {value:'1'}
// 接口返回选项数据如：
const options=[
  {
    label:'选项1',
    value:1
  }
]

// 此时无法回显正常的值，<el-select v-model=result.value/>
```


#### - 联动关联
`config.linkage`

* 类型：string

实现如省市联动的效果，当关联的name发生改变时，当前组件会重新根据name对应组件值发起请求。可查看示例控制面板输出

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
          placeholder:'值发生改变时，下拉选择框会重新发起请求'
        },
      config:
        {},
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
      options: [],
      config:
        {
          optionsType: 1,
          optionsFun: "demo/options",
          method: "get",
          linkage: "name1", // 关联前面的单行文本name=input1的组件
          before: (params, {type, route,model}) =>
          {
            // 当由name1发生改变触发的请求时，此时type=linkage
            console.log(type)
            return params
          },
          after: (res, success, type) =>
          {
            // res接口返回结果，type当前事件类型，success是否成功；对结果修改后返回
            console.log(type, res)
            return res
          }
        },
      name: "select1",
      formItem:
        {
          label: "下拉选择框"
        }
    }],
  form:
    {
      size: "default"
    },
  config:
    {
      submitCancel: false
    }
})
</script>
```

### 校验设置

- 对于input输入框，我们提供了丰富的校验规则，你只需选择校验的正确类型和输入提示语即可。如还不满足使用，可通过`编写校验规则`弹窗编写规则，如

```vue preview
<template>
  <ak-form :data="formData"></ak-form>
</template>
<script setup>
  import {ref} from 'vue'
  const formData=ref({
    list: [
      {
        type: "input",
        control:
          {
            modelValue: ""
          },
        config:
          {},
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
        config:
          {},
        name: "password2",
        formItem:
          {
            label: "确认密码",
            rules: [
              {
                validator: (rule, value, callback) =>
                {
                  if (value === '')
                  {
                    callback(new Error('请输入确认密码'))
                  }
                  else
                  {
                    // 假如当前表单名为form1。获取组件password的值和当前值对比
                    const password = getform1ValueByName('password')
                    if (password === value)
                    {
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
    form:
      {
        size: "default",
        name: "form1"
      },
    config:
      {
        submitCancel: true
      }
  })
</script>
```


- 除系统内置的校验规则，还可通过可`@/components/form/validate.ts`扩展，添加常用校验规则

- 对于选择类的如select、checkbox类的可以校验是否为空

### 其他属性

可通过其他属性弹窗编写当前组件的prop，详见ui官网



## 表单方法
### - get[formName]ControlByName

- 类型：function(name)

表单页全局方法，用于根据组件`form.name`值获取当前的数据项。

注意：`formName`值为表单唯一标识，即`form.name`

```javascript
const control = getformNameControlByName('name')
```

### - get[formName]ValueByName

- 类型：function(name)

同get[formName]ControlByName。返回值不一样







