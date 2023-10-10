import logo from './test2.png'
export const imgPath = logo
export const title: string = '演示test2'
export const formData = {
  list: [
    {
      type: 'input',
      control: {
        modelValue: ''
      },
      config: {},
      name: 'input',
      formItem: {
        label: '单行文本'
      }
    },
    {
      type: 'radio',
      control: {
        modelValue: ''
      },
      options: [
        {
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
        }
      ],
      config: {
        optionsType: 0
      },
      name: 'radio1667180102980',
      formItem: {
        label: '单选框组'
      }
    },
    {
      type: 'checkbox',
      control: {
        modelValue: []
      },
      options: [
        {
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
        }
      ],
      config: {
        optionsType: 0
      },
      name: 'checkbox1667180107698',
      formItem: {
        label: '多选框组',
        showLabel: false
      }
    },
    {
      type: 'select',
      control: {
        modelValue: '',
        appendToBody: true
      },
      options: [
        {
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
        }
      ],
      config: {
        optionsType: 0
      },
      name: 'select1667180110029',
      formItem: {
        label: '下拉选择框'
      }
    },
    {
      type: 'datePicker',
      control: {
        modelValue: '',
        type: 'date'
      },
      config: {},
      name: 'datePicker1667180115571',
      formItem: {
        label: '日期选择器'
      }
    },
    {
      type: 'switch',
      control: {
        modelValue: false
      },
      config: {},
      name: 'switch1667180126483',
      formItem: {
        label: '开关'
      }
    }
  ],
  form: {
    labelWidth: '',
    class: '',
    size: 'default',
    name: 'form1663920704871'
  },
  config: {}
}
