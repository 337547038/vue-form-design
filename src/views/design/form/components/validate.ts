// 快速添加 内置校验规则
interface ValidateTypes {
  type: string
  label: string
  regExp: RegExp
  message: string
}
const validateConfig: ValidateTypes[] = [
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
    type: 'money',
    label: '金额',
    regExp: /^[0-9]+\.?[0-9]{0,2}$/,
    message: '请输入正确的金额，最多两位小数'
  },
  {
    type: 'card',
    label: '身份证',
    regExp:
      /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/,
    message: '请输入身份证号'
  },
  {
    type: 'cn',
    label: '中文',
    regExp: /[\u4e00-\u9fa5]+/,
    message: '请输入中文'
  },
  {
    type: 'numberLetter',
    label: '数字字母',
    regExp: /[0-9a-zA-Z]$/,
    message: '请输入数字或字母'
  },
  {
    type: 'url',
    label: '网址',
    regExp: /^https?:\/\/((.)+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?.(\?)?)*)*$/,
    message: '请输入网址'
  },
  {
    type: 'longitude',
    label: '经度',
    regExp: /^[-+]?(0?\d{1,2}\.\d{1,10}|1[0-7]?\d\.\d{1,10}|180\.0{1,10})$/,
    message: '请输入正确的经度'
  },
  {
    type: 'latitude',
    label: '纬度',
    regExp: /^[-+]?([0-8]?\d{1}\.\d{1,10}|90\.0{1,10})$/,
    message: '请输入正确的纬度'
  }
]
export default validateConfig
