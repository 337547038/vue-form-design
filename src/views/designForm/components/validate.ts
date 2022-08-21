// 快速添加 内置校验规则
const validateConfig = [
  {
    type: 'required',
    label: '必填',
    regExp: /^\s*$/,
    message: '必填项'
  },
  {
    type: 'mobile',
    label: '手机号码',
    regExp: /^0{0,1}(13[0-9]|15[7-9]|153|156|18[7-9])[0-9]{8}$/,
    message: '请输入手机号码'
  },
  {
    type: 'tel',
    label: '固话',
    regExp: /^0\d{2,3}-\d{7,8}$/,
    message: '请输入固定电话号码'
  },
  {
    type: 'phone',
    label: '固话或手机',
    regExp: /^((0\d{2,3}(-?)\d{7,8})|(1[3456789]\d{9}))$/,
    message: '请输入固定电话号码或手机号'
  },
  {
    type: 'email',
    label: '邮箱',
    regExp: /^[a-z0-9A-Z._%-]+@([a-z0-9A-Z-]+\.)+[a-zA-Z]{2,4}$/,
    message: '请输入邮箱地址'
  },
  {
    type: 'int',
    label: '正整数',
    regExp: /^[0-9]*[1-9][0-9]*$/,
    message: '请输入正整数'
  },
  {
    type: 'number',
    label: '数字',
    regExp: /^\d+(\.\d+)?$/,
    message: '请输入数字'
  },
  {
    type: 'card',
    label: '身份证',
    regExp:
      /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/,
    message: '请输入身份证号'
  }
]
export default validateConfig
