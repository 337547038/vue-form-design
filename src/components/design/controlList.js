const selectOption = [
  {
    label: 'label1', value: 'value1'
  },
  {
    label: 'label2', value: 'value2'
  },
  {
    label: 'label3', value: 'value3'
  }
]
const config = {
  type: 'fixed', // 选项类型 fixed固定选项；async动态选项
  source: 0, // 0数据，1方法函数
  request: 'get', // 请求类型
  sourceFun: '' // 方法名或请求url
}
export default [
  {
    title: '基础字段',
    children: [
      {
        type: 'input',
        label: '单行文本',
        icon: 'input',
        control: {
          modelValue: ''
        },
        slot: {}
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
        options: selectOption,
        config: config
      },
      {
        type: 'checkbox',
        label: '多选框组',
        icon: 'checkbox',
        control: {
          modelValue: []
        },
        options: selectOption,
        config: config
      },
      {
        type: 'select',
        label: '下拉选择框',
        icon: 'select',
        control: {
          modelValue: [],
          appendToBody: true
        },
        options: selectOption,
        config: config
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
        type: 'switch',
        label: '开关',
        icon: 'switch',
        control: {
          modelValue: false
        }
      },
      {
        type: 'number',
        label: '计数器',
        icon: 'number',
        control: {
          modelValue: ''
        }
      },
      {
        type: 'cascader',
        label: '级联选择器',
        icon: 'cascader',
        control: {
          modelValue: []
        },
        options: [],
        config: config
      },
      {
        type: 'txt',
        label: '文字',
        icon: 'text',
        control: {
          modelValue: ''
        }
      },
      {
        type: 'title',
        label: '标题',
        icon: 'title',
        control: {
          modelValue: '标题'
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
        control: {
          border: true
        },
        config: {}
      },
      {
        type: 'component',
        label: '自定义组件',
        icon: 'component',
        control: {
          modelValue: ''
        },
        template: '', // 组件模板名称
        component: '' // 根据template注入的组件
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
        control: {},
        item: {}
      },
      {
        type: 'card',
        label: '卡片布局',
        icon: 'card',
        list: [],
        control: {},
        item: {}
      }
    ]
  }
]
