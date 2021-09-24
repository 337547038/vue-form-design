const selectOption = [
  {
    label: 'option1', value: 'option1'
  },
  {
    label: 'option2', value: 'option2'
  },
  {
    label: 'option3', value: 'option3'
  }
]
export default [
  {
    title: '基础字段',
    children: [
      {
        type: 'input',
        label: '单行文本',
        icon: 'input',
        control: {
          value: ''
        }
      },
      {
        type: 'textarea',
        label: '多行文本',
        icon: 'textarea',
        control: {
          value: ''
        }
      },
      {
        type: 'radio',
        label: '单选框组',
        icon: 'radio',
        control: {
          value: ''
        },
        options: selectOption
      },
      {
        type: 'checkbox',
        label: '多选框组',
        icon: 'checkbox',
        control: {
          value: []
        },
        options: selectOption
      },
      {
        type: 'select',
        label: '下拉选择框',
        icon: 'select',
        control: {
          value: [],
          appendToBody: true
        },
        options: selectOption,
      },
      {
        type: 'datePicker',
        label: '日期选择器',
        icon: 'date',
        control: {
          value: '',
          type: 'date',
          readonly: true,
          appendToBody: true
        }
      },
      {
        type: 'switch',
        label: '开关',
        icon: 'switch',
        control: {
          value: false
        }
      },
      {
        type: 'number',
        label: '计数器',
        icon: 'number',
        control: {
          value: ''
        }
      },
      {
        type: 'txt',
        label: '文字',
        icon: 'text',
        control: {
          value: ''
        }
      },
      {
        type: 'title',
        label: '标题',
        icon: 'title',
        control: {
          value: '标题'
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
        tableData: [],
        control: {}
      },
      {
        type: 'cascader',
        label: '级联选择器',
        icon: 'cascader',
        control: {
          value: []
        },
        options: []
      },
      {
        type: 'component',
        label: '自定义组件',
        icon: 'component',
        control: {
          value: ''
        },
        template: []
      },
      {
        type: 'upload',
        label: '图片',
        icon: 'image',
        control: {}
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
      }
    ]
  }
]
