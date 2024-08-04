// 这个要先合并好再传给operateButton.vue
import type { Button } from '@/types/table'
import { permission } from '@/directive/permissions'
const defaultBtn: Button = {
  add: {
    type: 'primary',
    name: 'Add',
    label: '',
    tooltip: '添加',
    icon: 'Plus',
    class: '',
    key: 'add'
  },
  edit: {
    type: 'primary',
    name: 'Edit',
    label: '',
    tooltip: '编辑',
    icon: 'Edit',
    class: '',
    key: 'edit'
  },
  detail: {
    type: 'primary',
    tooltip: '查看',
    key: 'detail',
    name: 'Detail',
    class: '',
    icon: 'Histogram'
  },
  del: {
    render: 'confirm',
    type: 'danger',
    label: '',
    tooltip: '删除',
    name: 'Del',
    icon: 'Delete',
    key: 'del',
    popConfirm: {
      title: '确认删除该记录吗？',
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      confirmButtonType: 'danger'
    }
  },
  export: {
    type: 'primary',
    name: 'Export',
    label: '导出',
    tooltip: '导出',
    icon: 'icon-export',
    class: '',
    key: 'export'
  }
}
export const mergeDefaultBtn = (buttons: Button, position = 'top') => {
  const temp: any = []
  //表格上方按钮预设有add/edit/del，表格行右侧预设有edit/detail/del
  const includeBtn =
    position === 'top'
      ? ['edit', 'add', 'del', 'export']
      : ['edit', 'detail', 'del']
  buttons.forEach((item: Button) => {
    // 同时返回有权限的
    if (permission(item.permission)) {
      if (item.key && includeBtn.includes(item.key)) {
        if (item.key === 'del') {
          item.popConfirm = Object.assign(
            defaultBtn[item.key].popConfirm,
            item.popConfirm || {}
          )
        }
        //表格上方时默认添加label
        let defaultLabel: any = {}
        if (position === 'top' && !item.label) {
          const labelArray: any = {
            add: '新增',
            edit: '编辑',
            del: '批量删除',
            export: '导出'
          }
          defaultLabel = { label: labelArray[item.key] || item.label }
        }
        temp.push(Object.assign({}, defaultBtn[item.key], defaultLabel, item))
      } else {
        temp.push(item)
      }
    }
  })
  return temp
}
