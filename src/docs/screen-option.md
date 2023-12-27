# 可视化数据大屏

数据可视化大屏使用`position`和`let`和`top`定位布局。

注意：当使用了`right、top`或其他非`px`单位布局时，当前组件将不能进拖动缩放及合并等操作

## 大屏配置

包括一些基本的属性配置项，设计大屏宽高背景色及大屏全局样式

其中`编辑样式`可进行css样式编辑

### 全局数据

当可视化大屏引用组件比较多时，若每个组件都单独从接口获取数据，这种做法明显不合理，后端同学可能也不会这么提供。
因此引入全局数据请求接口，将数据接口处理好提供给每个组件调用。如可在`afterFetch`中对接口返回数据处理。
这里return的res可在每个组件的全局或动态数据方法中获取

#### beforeFetch

获取数据发送接口请求前方法，可用于对请求的数据进行处理转换等操作，以提交符合接口的数据要求

```javascript
opt=(data, route) => {
  // data请求参数，route当前路由信息
  console.log('beforeFetch',data)
  return data // 这里需将处理后请求数据返回
}
```

#### afterFetch

发送数据请求响应事件，这里可对接收到的数据进行处理，以符合使用需要

```javascript
opt=(type, res) => {
// 请求响应结果 这里返回的数据可在global中获取
    console.log('afterFetch',res)
    return res // 这里处理后返回的数据可在组件方法中的global中取到
}
```

## 属性配置

可编辑当前组件的位置图层等信息，可使用`left、right、top、bottom`定位。

提示：当使用`top`或者`bottom`定位时，对应的`left`或者`top`将被修正为`auto`，并且当前组件不能进行拖动和缩放操作


## 数据
数据类型：
- 1.静态：对于图表即为option部分
- 2.全局：即从前面大屏配置的`afterFetch`返回的数据中提取
- 3.动态：从`url`获取，同时在当前`afterFetch`事件中也可取到全局的数据

```javascript
//全局
opt=(data, global) => {
    // data当前组件所需数据，global为大屏配置获取到的数据
    return data
}
```

### afterFetch

数据请求结果完成事件，需要此事件对数据进行处理。
使用此方法对组件设置，可满足各种图表数据展示，而无需对`echarts`进行层层封装，可直接从echarts官网将图表配置好，
复制过来替换好接口数据即可。减少学习成本

```javascript
opt=(res, data, global) => {
    // res响应数据, 当前组件数据data，global全局数据
    console.log('afterFetchScreen',data)
    return data //返回新的图表数据
}
```