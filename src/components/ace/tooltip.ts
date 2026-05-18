export const getAceTitle = {
  after:
      '获取数据响应处理之后事件，可对请求返回数据进行处理；支持返回字符串形式',
  before: '获取数据请求发送之前事件，可对请求参数进行处理；支持返回字符串形式',
  editCss: '当前应用页的样式，类似于.vue文件中的style scoped中的样式',
  change:
      '表单组件值改变事件。这里可修改其他组件的值。返回字符串形式可在@/utils/formChangeValue中处理',
  editRules:`可参考UI组件表单校验，<a href="https://element-plus.org/zh-CN/component/form" target="_blank" style="color: red">详情点击</a>`,
  editProps: '可添加当前组件所有prop属性及事件方法',
  creatJson: '可编辑修改或将已生成的脚本粘贴进来',
  button: '可添加当前组件所有prop属性及事件方法'
}

const beforeTip: any = {
  form: '可选fetch/submit。使用时需对type作判断',
  list: '可选fetch/submit/del/export。使用时需对type作判断',
  tree: '可选del'
}
export const getAceContent = (key: string, tips = 'form') => {
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
          + '  // obj可能包含路由及表单信息\n'
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
          + '  // res响应数据, 当前组件数据data，也即图表的option\n'
          + '  console.log(res, data)\n'
          + '  // 如对当前组件进行赋值\n'
          + '  // data.xAxis.data = res.line.xAxis\n'
          + '  // data.series[0].data = res.line.data\n'
          + '  // data.series[1].data = res.line.data1\n'
          + '  // 还可以在静态编辑数据里使用字符串占位符，如 data:"{{getScreenComp.xAxis}}"\n'
          + '  // getScreenComp即为res的值"\n'
          + '  return data //返回新的图表数据\n'
          + '}'
      )
    case 'afterScreenGlobal':
      return (
          'opt=(res,success) => {\n'
          + '  // res响应数据，保存在store中，在组件中可使用 {{getScreenGlobal.xxx}}获取\n'
          + '  return res //返回处理后的数据\n'
          + '}'
      )
    case 'change':
      return (
          'opt=(obj) => {\n'
          + '  // 表单组件改变事件，可修改后返回新值\n'
          + '  // name:当前组件名称, value:当前值, model：当前表单值, prop:当前组件名称, options：选项数据\n'
          + '  console.log(\'change\',obj)\n'
          + '  return obj.model\n'
          + '}'
      )
    case 'renderFormatter':
      return (
          'opt=(val,row) => {\n'
          + '  // 渲染前对字段值的预处理方法，需返回新值\n'
          + '  return val\n'
          + '}'
      )
    case 'editRules':
      return (
          'opt = [\n' +
          '/*{required: true, message: \'Please input Activity name\', trigger: \'blur\'},\n' +
          '    {min: 3, max: 5, message: \'Length should be 3 to 5\', trigger: \'blur\'},\n' +
          '    {\n' +
          '      validator: (rule, value, callback) => {\n' +
          '        if (!value) {\n' +
          '          return callback(new Error(\'Please input the age\'))\n' +
          '        }\n' +
          '        setTimeout(() => {\n' +
          '          if (!Number.isInteger(value)) {\n' +
          '            callback(new Error(\'Please input digits\'))\n' +
          '          } else {\n' +
          '            if (value < 18) {\n' +
          '              callback(new Error(\'Age must be greater than 18\'))\n' +
          '            } else {\n' +
          '              callback()\n' +
          '            }\n' +
          '          }\n' +
          '        }, 1000)\n' +
          '      }, trigger: \'blur\'\n' +
          '    }*/\n' +
          ']'
      )
  }
}
