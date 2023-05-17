const selectOption: any = [
  /*{
    label: '标签1',
    value: 'value1'
  },
  {
    label: '标签2',
    value: 'value2'
  },
  {
    label: '标签3',
    value: 'value3'
  }*/
]
const config: { optionsType: number } = {
  optionsType: 0 // 0固定 1数据源 2 接口字典
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
          // 组件所有属性
          modelValue: ''
        },
        config: {} // 其他配置信息
      },
      {
        type: 'textarea',
        label: '多行文本',
        icon: 'textarea',
        control: {
          modelValue: ''
        },
        config: {}
      },
      {
        type: 'radio',
        label: '单选框组',
        icon: 'radio',
        control: {
          modelValue: ''
        },
        options: selectOption, // 下拉选项数据集合
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
          modelValue: '',
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
        },
        config: {}
      },
      {
        type: 'timePicker',
        label: '时间选择器',
        icon: 'time',
        control: {
          modelValue: ''
        },
        config: {}
      },
      {
        type: 'colorPicker',
        label: '取色器',
        icon: 'color',
        control: {
          modelValue: ''
        },
        config: {}
      },
      {
        type: 'switch',
        label: '开关',
        icon: 'switch',
        control: {
          modelValue: false
        },
        config: {}
      },
      {
        type: 'inputNumber',
        label: '计数器',
        icon: 'number',
        control: {
          modelValue: 0
        },
        config: {}
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
        type: 'rate',
        label: '评分',
        icon: 'rate',
        control: {
          modelValue: 0
        },
        config: {}
      },
      {
        type: 'slider',
        label: '滑块',
        icon: 'slider',
        control: {
          modelValue: 0
        },
        config: {}
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
        config: {
          optionsType: 0
        }
      },
      {
        type: 'txt',
        label: '文字',
        icon: 'text',
        control: {
          modelValue: ''
        },
        config: {}
      },
      {
        type: 'title',
        label: '标题',
        icon: 'title',
        control: {
          modelValue: '标题'
        },
        config: {}
      },
      {
        type: 'button',
        label: '按钮',
        icon: 'button',
        control: {
          label: '保存'
        },
        config: {}
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
        config: {
          addBtnText: '添加一行'
        }
      },
      {
        type: 'component',
        label: '自定义组件',
        icon: 'component',
        control: {
          modelValue: ''
        },
        config: {}
        /*template: '', // 组件模板名称
                component: '' // 根据template注入的组件*/
      },
      {
        type: 'upload',
        label: '图片/文件',
        icon: 'image',
        control: {
          modelValue: '' // 也可以是[{name:'',url:''}]形式
        },
        config: {}
      },
      {
        type: 'tinymce',
        label: 'tinymce富文本',
        icon: 'tinymce',
        control: {
          modelValue: ''
        },
        config: {}
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
            attr: { span: 12 },
            list: []
          },
          {
            attr: { span: 12 },
            list: []
          }
        ],
        control: {},
        config: {}
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
        config: {}
      },
      {
        type: 'card',
        label: '卡片布局',
        icon: 'card',
        list: [],
        control: {},
        config: {},
        item: {} // label标题相关
      },
      {
        type: 'flex',
        label: '弹性布局',
        icon: 'flex',
        list: [],
        tableData: [], // 值集合
        control: {},
        config: {
          addBtnText: '添加一行'
        }
      },
      {
        type: 'divider',
        label: '分割线',
        icon: 'divider',
        control: {},
        config: {}
      },
      {
        type: 'div',
        label: 'div容器',
        icon: 'div',
        control: {},
        config: {},
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
        },
        config: {} // 其他配置信息
      }
    ]
  }
]
