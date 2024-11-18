export const getDrawerTitle = {
  after:
    '获取数据响应处理之后事件，可对请求返回数据进行处理；支持返回字符串形式',
  before: '获取数据请求发送之前事件，可对请求参数进行处理；支持返回字符串形式',
  editCss: '当前表单应用页的样式，类似于.vue文件中的style scoped中的样式',
  change:
    '表单组件值改变事件。这里可修改其他组件的值。返回字符串形式可在@/utils/formChangeValue中处理',
  editRules:
    '可参考UI组件表单校验，<a'
    + ' href=\'https://element-plus.gitee.io/zh-CN/component/form.html#%E8%A1%A8%E5%8D%95%E6%A0%A1%E9%AA%8C\''
    + ' target=\'_blank\' style=\'color:red\'>详情点击</a>',
  editProps: '可添加当前组件所有prop属性及事件方法',
  creatJson: '可编辑修改或将已生成的脚本粘贴进来',
  button: '可添加当前组件所有prop属性及事件方法'
}

const beforeTip: any = {
  form: '可选fetch/submit。使用时需对type作判断',
  list: '可选fetch/submit/del/export。使用时需对type作判断',
  tree: '可选del'
}
export const getDrawerContent = (key: string, tips = 'form') => {
  switch (key) {
    case 'before':
      return ('opt=(params) => {\n'
        + '  // params请求的参数，需对params作修改后return回去。\n'
        + `  console.log(params)\n`
        + '  return params\n'
        + '}')
    case 'beforeType':
      return ('opt=(params, type, obj) => {\n'
        + '  // params请求的参数，需对params作修改后return回去。\n'
        + '  // type当前操作类型。' + beforeTip[tips] + '\n'
        + '  return params\n'
        + '}')
    case 'after':
      return ('opt=(res, success) => {\n'
        + '  // res接口返回结果，success是否成功；对结果修改后返回\n'
        + `  console.log(res, success)\n`
        + '  return res\n'
        + '}')
    case 'afterType':
      return (
        'opt=(res, success, type) => {\n'
        + '  // res接口返回结果，type当前操作事件类型，success是否成功；对结果修改后返回\n'
        + '  // ' + beforeTip[tips] + '\n'
        + `  console.log(type, res)\n`
        + '  return res\n'
        + '}'
      )
    case 'afterScreen':
      return (
        'opt=(res, data) => {\n'
        + '  // res响应数据, 当前组件数据data\n'
        + '  // 这里可直接使用getScreenGlobal取得全局的数据\n'
        + '  console.log(res, data)\n'
        + '  return data //返回新的图表数据\n'
        + '}'
      )
    case 'afterScreenGlobal':
      return (
        'opt=(res,success) => {\n'
        + '  // res响应数据，保存在window.getScreenGlobal\n'
        + '  return res //返回处理后的数据\n'
        + '}'
      )
    case 'change':
      return (
        'opt=(key,model) => {\n'
        + '  // key当前改变组件的name值,model表单的值，可修改后返回新值\n'
        + '  console.log(\'change\',key)\n'
        + '  return model\n'
        + '}'
      )
    case 'renderFormatter':
      return (
        'opt=(val,row) => {\n'
        + '  // 渲染前对字段值的预处理方法，需返回新值\n'
        + '  return val\n'
        + '}'
      )
  }
}
