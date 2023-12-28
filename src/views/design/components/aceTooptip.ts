export const getDrawerTitle = {
  change:
    '表单组件值改变事件。这里可修改其他组件的值。返回字符串形式可在@/utils/formChangeValue中处理',
  afterSubmit: '表单提交响应事件；支持返回字符串形式',
  beforeSubmit: '表单数据提交前事件，可对提交数据进行处理；支持返回字符串形式',
  afterFetch:
    '获取表单初始数据响应处理之后事件，可对请求返回数据进行处理；支持返回字符串形式',
  beforeFetch:
    '获取表单初始数据请求发送之前事件，可对请求参数进行处理；支持返回字符串形式',
  optionsParams: '请求发送之前事件，可对请求参数进行处理；支持返回字符串形式',
  optionsResult: '请求响应事件处理；支持返回字符串形式',
  editCss: '当前表单应用页的样式，类似于.vue文件中的style scoped中的样式',
  editDict:
    '数据字典，用于匹配多选组、下拉选择等，提供动态获取Options接口字典数据，一般不设置，从接口dict获取。json格式："sex":{"0":"男","1":"女"}',
  creatJson: '可编辑修改或将已生成的脚本粘贴进来',
  editRules:
    "可参考UI组件表单校验，<a href='https://element-plus.gitee.io/zh-CN/component/form.html#%E8%A1%A8%E5%8D%95%E6%A0%A1%E9%AA%8C' target='_blank' style='color:red'>详情点击</a>",
  editProps: '可添加当前组件所有prop属性及事件方法',
  button: '可添加当前组件所有prop属性及事件方法',
  beforeDelete: '请求发送之前事件，可对请求参数进行处理',
  afterFetchScreen: '获取数据响应处理之后事件，可对请求返回数据进行处理；'
}
export const getDrawerContent = (key: string, tips?: string) => {
  switch (key) {
    case 'beforeFetch':
    case 'optionsParams':
      return (
        'opt=(data, route) => {\n' +
        '  // data请求参数，route当前路由信息\n' +
        `  console.log('${key}',data)\n` +
        '  return data\n' +
        '}'
      )
    case 'afterFetch':
    case 'optionsResult':
      return (
        'opt=(type, res) => {\n' +
        `  // 请求响应结果 ${tips || ''}\n` +
        `  console.log('${key}',res)\n` +
        '  return res\n' +
        '}'
      )
    case 'beforeSubmit':
      return (
        'opt=(data, route, model) => {\n' +
        '  // data提交的参数，route当前路由信息，当前表单值\n' +
        "  console.log('beforeSubmit',data)\n" +
        '  return data\n' +
        '}'
      )
    case 'afterSubmit':
      return (
        'opt=(type, data, res) => {\n' +
        '  // type(success,fail,validate),data响应数据,res响应结果\n' +
        "  console.log('afterSubmit',data)\n" +
        '  return data\n' +
        '}'
      )
    case 'change':
      return (
        'opt=(key,model) => {\n' +
        '  // key当前改变组件的name值,model表单的值，可修改后返回新值\n' +
        "  console.log('change',key)\n" +
        '  return model\n' +
        '}'
      )
    case 'afterFetchScreen':
      return (
        'opt=(res, data) => {\n' +
        '  // res响应数据, 当前组件数据data\n' +
        "  console.log('afterFetchScreen',data)\n" +
        '  return data //返回新的图表数据\n' +
        '}'
      )
  }
}
