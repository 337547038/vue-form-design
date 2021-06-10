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
          value: '',
          data: selectOption
        }
      },
      {
        type: 'checkbox',
        label: '多选框组',
        icon: 'checkbox',
        control: {
          value: [],
          data: selectOption
        }
      },
      {
        type: 'select',
        label: '下拉选择框',
        icon: 'select',
        control: {
          value: [],
          options: selectOption,
          appendToBody: true
        }
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
        type: 'txt',
        label: '文字',
        icon: 'text',
        control: {
          value: ''
        }
      }
    ]
  },
  {
    title: '高级字段',
    children: [
      {
        type: 'childTable',
        label: '子表',
        icon: 'childTable',
        list: [],
        tableData: [],
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
            span: 12,
            list: []
          },
          {
            span: 12,
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
      }
    ]
  }
]
