# 可视化数据大屏

数据可视化大屏使用`position`的`let`和`top`定位布局。

注意：当使用了`right、top`或其他非`px`单位布局时，当前组件将不能进拖动缩放及合并等操作

## 大屏配置

包括一些基本的属性配置项，设计大屏宽高背景色及大屏全局样式

其中`编辑样式`可进行css样式编辑

### 全局数据

当可视化大屏引用组件比较多时，若每个组件都单独从接口获取数据，这种做法明显不合理，后端同学可能也不会这么提供。
因此引入全局数据请求接口，将数据接口处理好提供给每个组件调用。如可在`after`中对接口返回数据处理。
这里return的res可在每个组件的全局或动态数据方法中获取

#### before

获取数据发送接口请求前方法，可用于对请求的数据进行处理转换等操作，以提交符合接口的数据要求

```javascript
opt=(data) => {
  // data请求参数
  console.log('before',data)
  return data // 这里需将处理后请求数据返回
}
```

#### after

发送数据请求响应事件，这里可对接收到的数据进行处理，以符合使用需要

```javascript
opt=(res,success) => {
  // res响应数据，保存在window.getScreenGlobal
  console.log(res)
  return res // 返回需要保存的数据
}
```

这里返回的数据存放在`store`里，可在页面组件数据中使用`getScreenGlobal`文本替换的方法获取．如：
```javascript
//假如返回的数据为global这种形式
const res = {
  series:[148, 57, 497, 478, 143, 292, 245, 317, 460, 49, 118, 281],
  xAxisData:["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
  name:'图表名称',
  pie:[20,80]  // 需要取20时则使用 getScreenGlobal.pie.0 0表示数组下标
}
// 图表的数据
const opt = {
  title:
      {
        text: "{{getScreenGlobal.name}}",　//　=> 图表名称
      },
  xAxis:
      {
        type: "category",
        data: "{{getScreenGlobal.xAxisData}}"
      },
  yAxis:
      {
        type: "value"
      },
  grid:
      {
        left: 0,
        bottom: 30
      },
  series: [
    {
      data: "{{getScreenGlobal.series}}",
      type: "bar"
    }]
}
```

## 属性配置

可编辑当前组件的位置图层等信息，可使用`left、right、top、bottom`定位。

提示：当使用`top`或者`bottom`定位时，对应的`left`或者`top`将被修正为`auto`，并且当前组件不能进行拖动和缩放操作

### 自定义组件

当使用自定义组件时，组件名称应为全局注册的组件名。

作为导出vue使用时，可以为当前`import`的组件，如

```javascript
import { markRaw } from 'vue'
import myComponents from 'xxxx';
{
  componentName: markRaw(myComponents)
}
```

### 数据
数据类型：
- 1.静态/全局：对于图表即为option部分，这里可使用`getScreenGlobal`从`store`数据中获取相应数据，在此处使用时需按约定使用特殊标识包起来，如
```javascript 
{
  data: "{{getScreenGlobal.xxxx}}"
}
```
- 2.动态：从`url`获取，可在`after`事件里对数据处理后返回，使用`getScreenComp`方法替换．也可直接在`after`方法里直接赋值

```javascript
const opt = {
  title:
      {
        text: "{{getScreenComp.name}}",　//　=> 图表名称
      },
  xAxis:
      {
        type: "category",
        data: "{{getScreenComp.xAxisData}}"
      },
  yAxis:
      {
        type: "value"
      },
  grid:
      {
        left: 0,
        bottom: 30
      },
  series: [
    {
      data: "{{getScreenComp.series}}",
      type: "bar"
    }]
}
```

#### after

数据请求结果完成事件，需要此事件对数据进行处理。
使用此方法对组件设置，可满足各种图表数据展示，而无需对`echarts`进行层层封装，可直接从`echarts`官网将图表配置好，
复制过来替换好接口数据即可。减少学习成本

```javascript
opt=(res, data) => {
    // res响应数据, 当前组件数据data
    console.log('afterScreen',data)
  　//如对当前组件进行赋值
  　//data.xAxis.data = res.line.xAxis
  　//data.series[0].data = res.line.data
  　//data.series[1].data = res.line.data1
  　//同时也可以使用文本替换的方式，使用getScreenComp，即getScreenComp=res
    return data //返回新的图表数据
}
```
