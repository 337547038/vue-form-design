import type {Button} from "@/types/table";

const defaultBtn: any = {
  add: {
    type: 'primary',
    label: '添加',
    tooltip: '',
    icon: 'Plus',
    class: '',
    key: 'add'
  },
  edit: {
    type: 'primary',
    label: '编辑',
    tooltip: '',
    icon: 'Edit',
    class: '',
    key: 'edit'
  },
  detail: {
    type: 'primary',
    tooltip: '',
    label: '查看',
    key: 'detail',
    class: '',
    icon: 'Histogram'
  },
  del: {
    render: 'confirm',
    type: 'danger',
    label: '删除',
    tooltip: '',
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
    label: '导出',
    tooltip: '导出',
    icon: 'icon-export',
    class: '',
    key: 'export'
  }
}
export const getBtnOptions = (position = 'top') => {
  const showList = position === 'top' ? ['add', 'edit', 'del', 'export'] : ['edit', 'detail', 'del']
  return showList.map(key => ({
    label: defaultBtn[key].label,
    value: defaultBtn[key].key
  }))
}
export const mergeDefaultBtn = (buttons: Button[]) => {
  return buttons?.map((item: any) => {
    const config = defaultBtn[item.key] || {}
    return {...config, ...item}
  })
}
