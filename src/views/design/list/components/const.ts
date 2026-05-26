export const uiType = ['primary', 'success', 'warning', 'danger', 'info']
export const defaultBtn = [
  {
    type: 'primary',
    label: '添加',
    tooltip: '',
    icon: 'Plus',
    class: '',
    key: 'add'
  },
  {
    type: 'primary',
    label: '编辑',
    tooltip: '',
    icon: 'Edit',
    class: '',
    key: 'edit'
  },
  {
    type: 'primary',
    tooltip: '',
    label: '查看',
    key: 'detail',
    class: '',
    icon: 'Histogram'
  },
  {
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
  {
    type: 'primary',
    label: '导出',
    tooltip: '导出',
    icon: 'icon-export',
    class: '',
    key: 'export'
  }
]

export const tableOtherColumns = [
  {
    label: '多选',
    type: 'selection',
    prop: 'selection'
  },
  {label: '序号', type: 'index', width: '70px', prop: 'index'},
  {label: '操作', prop: 'operate'}
]