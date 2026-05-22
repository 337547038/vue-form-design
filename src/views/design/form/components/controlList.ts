const selectOption: any = []
export default [
  {
    title: '基础字段',
    children: [
      {
        type: 'input',
        label: '单行文本',
        icon: 'input',
        control: {
          // 组件所有属性
          modelValue: ''
        }
      },
      {
        type: 'textarea',
        label: '多行文本',
        icon: 'textarea',
        control: {
          modelValue: ''
        }
      },
      {
        type: 'radio',
        label: '单选框组',
        icon: 'radio',
        control: {
          modelValue: ''
        },
        options: selectOption, // 下拉选项数据集合
        optionsType: 0 // 0固定 1数据源 2 接口字典
      },
      {
        type: 'checkbox',
        label: '多选框组',
        icon: 'checkbox',
        control: {
          modelValue: []
        },
        options: selectOption,
        optionsType: 0 // 0固定 1数据源 2 接口字典
      },
      {
        type: 'select',
        label: '下拉选择框',
        icon: 'select',
        control: {
          modelValue: '',
          teleported: true
        },
        options: selectOption,
      },
      {
        type: 'datePicker',
        label: '日期选择器',
        icon: 'date',
        control: {
          modelValue: '',
          type: 'date'
        }
      },
      {
        type: 'timePicker',
        label: '时间选择器',
        icon: 'time',
        control: {
          modelValue: ''
        }
      },
      {
        type: 'colorPicker',
        label: '取色器',
        icon: 'color',
        control: {
          modelValue: ''
        }
      },
      {
        type: 'switch',
        label: '开关',
        icon: 'switch',
        control: {
          modelValue: false
        }
      },
      {
        type: 'inputNumber',
        label: '计数器',
        icon: 'number',
        control: {
          modelValue: 0
        }
      },
      {
        type: 'cascader',
        label: '级联选择器',
        icon: 'cascader',
        control: {
          modelValue: []
        },
        options: []
      },
      {
        type: 'rate',
        label: '评分',
        icon: 'rate',
        control: {
          modelValue: 0
        }
      },
      {
        type: 'slider',
        label: '滑块',
        icon: 'slider',
        control: {
          modelValue: 0
        }
      },
      {
        type: 'treeSelect',
        label: '树形控件',
        icon: 'tree2',
        control: {
          modelValue: '',
          data: [],
          renderAfterExpand: false
        },
        optionsType: 0
      },
      {
        type: 'txt',
        label: '文字',
        icon: 'text',
        control: {
          modelValue: '请输入文字信息'
        }
      },
      {
        type: 'title',
        label: '标题',
        icon: 'title',
        control: {
          modelValue: '标题'
        }
      },
      {
        type: 'button',
        label: '按钮',
        icon: 'button',
        control: {
          label: '保存'
        }
      }
    ]
  },
  {
    title: '高级字段',
    children: [
      {
        type: 'table',
        label: '子表',
        icon: 'table',
        list: [],
        tableData: [], // 子表表格列表数据集合
        control: {
          border: true
        },
          addBtnText: '添加一行'
      },
      {
        type: 'component',
        label: '自定义组件',
        icon: 'component',
        control: {
          modelValue: ''
        }
      },
      {
        type: 'upload',
        label: '图片/文件',
        icon: 'image',
        control: {
          modelValue: '' // 也可以是[{name:'',url:''}]形式
        }
      },
      {
        type: 'chunkUpload',
        label: '选择上传',
        icon: 'upload',
        control: {
          modelValue: ''
        }
      },
      {
        type: 'tinymce',
        label: 'tinymce富文本',
        icon: 'tinymce',
        control: {
          modelValue: ''
        }
      }
    ]
  },
  {
    title: '布局字段',
    children: [
      {
        type: 'grid',
        label: '格栅布局',
        icon: 'grid',
        columns: [
          // 格栅列数据
          {
            attr: {span: 12},
            list: []
          },
          {
            attr: {span: 12},
            list: []
          }
        ],
        control: {}
      },
      {
        type: 'tabs',
        label: '标签页',
        icon: 'tabs',
        columns: [
          {
            label: 'Tab1',
            list: []
          }
        ],
        control: {}
      },
      {
        type: 'card',
        label: '卡片布局',
        icon: 'card',
        list: [],
        control: {}
      },
      {
        type: 'flex',
        label: '弹性字段',
        icon: 'flex',
        list: [],
        tableData: [], // 值集合
        control: {},

          addBtnText: '添加一行'

      },
      {
        type: 'divider',
        label: '分割线',
        icon: 'divider',
        control: {}
      },
      {
        type: 'div',
        label: 'div容器',
        icon: 'div',
        control: {},
        list: []
      }
    ]
  },
  {
    title: '扩展组件',
    children: [
      {
        type: 'expand-user',
        label: '选择用户',
        icon: 'user',
        control: {
          // 组件所有属性
          modelValue: ''
        }
      }
    ]
  }
]
