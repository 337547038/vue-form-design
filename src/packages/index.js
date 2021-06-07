/**
 * Created by 337547038 on .
 */
// 所有需要全局注册的组件入口
import Button from './button/index'
import {Checkbox, CheckboxGroup} from './checkbox/index'
import DatePicker from './datePicker/index'
import {Dialog, DialogAlert} from './dialog/index'
import {Form, FormItem, AutoForm} from './form/index'
import Input from './input/index'
import {Radio, RadioGroup} from './radio/index'
import {Select, Option} from './select/index'
import Switch from './switch/index'
import {Table, TableColumn} from './table/index'
import Textarea from './textarea/index'
import Pagination from './pagination/index'
import {Tabs, TabPane} from './tabs'

const component = [
  Button,
  Dialog,
  Form, FormItem,
  Input,
  Select,
  Option,
  Switch,
  Table, TableColumn,
  DatePicker,
  Checkbox, CheckboxGroup,
  Textarea,
  Radio, RadioGroup,
  AutoForm,
  Pagination,
  Tabs, TabPane
]
const install = function (Vue, options) {
  component.forEach(item => {
    Vue.component(item.name, item)
  })
  Vue.prototype.$dialog = DialogAlert.Dialog
  Vue.prototype.$dialogClear = DialogAlert.Clear
  Vue.prototype.$alert = DialogAlert.Alert
  Vue.prototype.$msg = DialogAlert.Msg
}
export default install

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
