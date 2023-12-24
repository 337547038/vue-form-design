<template>
  <div class="config-option">
    <div class="config-sidebar">
      <el-tree
        :data="dataList"
        :props="defaultProps"
        @node-click="handleNodeClick"
      />
    </div>
    <div class="config-content">
      <form-option />
    </div>
  </div>
</template>
<script setup>
  import { onMounted, computed } from 'vue'
  import FormOption from './components/formOption.md'

  const defaultProps = {
    children: 'children',
    label: 'label'
  }
  const handleNodeClick = data => {
    const filterLabel = data.label.replace(/:\s.*$/, '').replace(/\[|\]/g, '')
    if (filterLabel) {
      const nameId = filterLabel.toLowerCase().trim()
      const heading = document.getElementById(nameId)
      const length = document.querySelectorAll(`.${nameId}`).length
      // 因为转md的原因，存在多个相同id时，始终只返回第一个,会跳转不正确。存在多个时就不跳
      if (heading && length === 1) {
        heading.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }
  const dataList = computed(() => {
    const newData = transformData(list)
    const other = [
      { label: 'get[formName]ControlByName' },
      { label: 'get[formName]ValueByName' }
    ]
    return [...newData, ...other]
  })
  const list = {
    list: [
      {
        type: 'input',
        control: {
          modelValue: '',
          placeholder: 'placeholder',
          disabled: false
        },
        config: {
          className: 'class',
          help: '帮助信息',
          span: 24,
          prepend: '前缀',
          append: '后缀',
          disabledEdit: false,
          displayAdd: false,
          displayEdit: false,
          displayDetail: false,
          hidden: '隐藏表达式',
          disabled: '禁用表达式'
        },
        name: 'input',
        formItem: {
          label: '单行文本',
          hideLabel: false,
          rules: []
        },
        customRules: [
          {
            type: 'required',
            message: '必填项',
            trigger: 'blur'
          }
        ]
      },
      {
        type: 'textarea',
        control: {
          modelValue: '',
          placeholder: 'placeholder',
          rows: 5,
          disabled: false
        },
        config: {
          className: 'class',
          help: '帮助信息',
          span: 24,
          disabledEdit: false,
          displayAdd: false,
          displayEdit: false,
          displayDetail: false,
          hidden: '隐藏表达式',
          disabled: '隐藏表达式'
        },
        name: 'textarea',
        formItem: {
          label: '多行文本',
          hideLabel: false,
          rules: []
        }
      },
      {
        type: 'radio',
        control: {
          modelValue: '',
          disabled: false
        },
        options: [
          {
            label: '标签名',
            value: '0'
          }
        ],
        config: {
          optionsType: 0,
          disabledEdit: false,
          displayAdd: true,
          displayEdit: true,
          displayDetail: true,
          hidden: '隐藏表达式',
          disabled: '禁用表达式',
          span: 0,
          help: '帮助信息',
          className: 'cla',
          transformData: 'none',
          optionsFun: '',
          method: 'get',
          label: 'label',
          value: 'value',
          query: {},
          beforeFetch: data => {
            // data经过处理后返回
            console.log('beforeFetch', data)
            return data
          },
          afterFetch: res => {
            // res返回数据
            console.log('afterFetch', res)
            return res
          }
        },
        name: 'radio',
        formItem: {
          label: '单选框组',
          hideLabel: false
        }
      },
      {
        type: 'checkbox',
        control: {
          modelValue: [],
          disabled: false
        },
        options: [
          {
            label: '标签1',
            value: '1'
          }
        ],
        config: {
          optionsType: 2,
          help: '帮助信息',
          span: 24,
          className: 'cls',
          disabledEdit: false,
          displayAdd: false,
          displayEdit: false,
          displayDetail: false,
          hidden: '隐藏表达式',
          disabled: '禁用表达式',
          transformData: 'string',
          optionsFun: '',
          method: 'get',
          query: {},
          beforeFetch: (data, route) => {
            // data经过处理后返回
            console.log('beforeFetch', data)
            return data
          },
          afterFetch: res => {
            // res返回数据
            console.log('afterFetch', res)
            return res
          }
        },
        name: 'checkbox',
        formItem: {
          label: '多选框组',
          hideLabel: false,
          rules: [
            {
              required: true,
              message: '必填项',
              trigger: 'change'
            }
          ]
        }
      },
      {
        type: 'select',
        control: {
          modelValue: '',
          disabled: false,
          placeholder: 'placeholder'
        },
        options: [
          {
            label: '标签名',
            value: '0'
          }
        ],
        config: {
          optionsType: 0,
          disabledEdit: false,
          displayAdd: true,
          displayEdit: true,
          displayDetail: true,
          hidden: '隐藏表达式',
          disabled: '禁用表达式',
          span: 0,
          help: '帮助信息',
          className: 'cla',
          transformData: 'none',
          optionsFun: '',
          method: 'get',
          label: 'label',
          value: 'value',
          queryName: '远程搜索name',
          beforeFetch: data => {
            // data经过处理后返回
            console.log('beforeFetch', data)
            return data
          },
          afterFetch: res => {
            // res返回数据
            console.log('afterFetch', res)
            return res
          },
          addAll: '全部'
        },
        name: 'radio',
        formItem: {
          label: '下拉选择框',
          hideLabel: false
        }
      },
      {
        type: 'inputSlot',
        control: {
          modelValue: '',
          appendToBody: true
        },
        options: [
          {
            label: '标签1',
            value: '1'
          }
        ],
        config: {
          optionsType: 1,
          span: 0,
          className: 'cls',
          transformData: 'string',
          optionsFun: '/api',
          query: {},
          method: 'post',
          beforeFetch: (data, route) => {
            // data经过处理后返回
            console.log('beforeFetch', data)
            return data
          },
          afterFetch: res => {
            // res返回数据
            console.log('afterFetch', res)
            return res
          },
          label: 'label',
          value: 'value'
        },
        name: 'slot',
        formItem: {
          label: '下拉选择框',
          rules: [
            {
              required: true,
              message: '必填项',
              trigger: 'change'
            }
          ]
        }
      },
      {
        type: 'datePicker',
        control: {
          modelValue: '',
          placeholder: 'placeholder',
          disabled: false
        },
        config: {
          className: 'cls',
          help: '帮助信息',
          span: 24,
          disabledEdit: false,
          displayAdd: false,
          displayEdit: false,
          displayDetail: false,
          hidden: '隐藏表达式',
          disabled: '隐藏表达式'
        },
        name: 'datePicker',
        formItem: {
          label: '日期选择器',
          hideLabel: false,
          rules: [
            {
              required: true,
              message: '必填项',
              trigger: 'change'
            }
          ]
        }
      },
      {
        type: 'timePicker',
        control: {
          modelValue: '',
          placeholder: 'placeholder',
          disabled: false
        },
        config: {
          className: 'cls',
          help: '帮助信息',
          disabledEdit: false,
          displayAdd: false,
          displayEdit: false,
          displayDetail: false,
          hidden: '隐藏表达式',
          disabled: '隐藏表达式'
        },
        name: 'timePicker',
        formItem: {
          label: '时间选择器',
          hideLabel: false,
          rules: [
            {
              required: true,
              message: '必填项',
              trigger: 'change'
            }
          ]
        }
      },
      {
        type: 'colorPicker',
        control: {
          modelValue: ''
        },
        config: {
          className: 'cls',
          help: '帮助信息',
          span: 24,
          displayAdd: false,
          displayEdit: false,
          displayDetail: false,
          hidden: '隐藏表达式',
          disabled: '隐藏表达式'
        },
        name: 'colorPicker',
        formItem: {
          label: '取色器',
          hideLabel: false,
          rules: [
            {
              required: true,
              message: '必填项',
              trigger: 'change'
            }
          ]
        }
      },
      {
        type: 'switch',
        control: {
          modelValue: false,
          activeValue: 1,
          inactiveValue: 0,
          disabled: false
        },
        config: {
          help: '帮助信息',
          disabledEdit: false,
          displayAdd: false,
          displayEdit: false,
          displayDetail: false,
          hidden: '隐藏表达式',
          disabled: '隐藏表达式'
        },
        name: 'switch',
        formItem: {
          label: '开关',
          hideLabel: false
        }
      },
      {
        type: 'inputNumber',
        control: {
          modelValue: 0
        },
        config: {
          className: 'cls',
          help: '帮助信息',
          span: 24,
          displayAdd: false,
          displayEdit: false,
          displayDetail: false,
          hidden: '隐藏表达式',
          disabled: '隐藏表达式'
        },
        name: 'inputNumber',
        formItem: {
          label: '计数器',
          hideLabel: false,
          rules: [
            {
              required: true,
              message: '必填项',
              trigger: 'change'
            }
          ]
        }
      },
      {
        type: 'cascader',
        control: {
          modelValue: [],
          disabled: false
        },
        options: [
          {
            value: '标签1',
            label: 'value',
            children: []
          }
        ],
        config: {
          optionsType: 1,
          className: 'cls',
          help: '帮助信息',
          span: 24,
          disabledEdit: false,
          displayAdd: false,
          displayEdit: false,
          displayDetail: false,
          hidden: '隐藏表达式',
          disabled: '禁用表达式',
          transformData: 'number',
          optionsFun: '/api',
          query: {},
          method: 'post',
          label: 'label',
          value: 'value',
          beforeFetch: (data, route) => {
            // data经过处理后返回
            console.log('beforeFetch', data)
            return data
          },
          afterFetch: res => {
            // res返回数据
            console.log('afterFetch', res)
            return res
          }
        },
        name: 'cascader',
        formItem: {
          label: '级联选择器',
          hideLabel: false,
          rules: [
            {
              required: true,
              message: '必填项',
              trigger: 'change'
            }
          ]
        }
      },
      {
        type: 'rate',
        control: {
          modelValue: 0,
          disabled: false,
          max: 5
        },
        config: {
          className: 'cls',
          help: '帮助信息',
          span: 24,
          displayAdd: false,
          displayEdit: false,
          displayDetail: false,
          hidden: '隐藏表达式',
          disabled: '隐藏表达式'
        },
        name: 'rate',
        formItem: {
          label: '评分',
          hideLabel: false,
          rules: [
            {
              required: true,
              message: '必填项',
              trigger: 'change'
            }
          ]
        }
      },
      {
        type: 'slider',
        control: {
          modelValue: 0,
          min: 1,
          max: 100,
          step: 10
        },
        config: {
          className: 'cls',
          help: '帮助信息',
          span: 24,
          displayAdd: false,
          displayEdit: false,
          displayDetail: false,
          hidden: '隐藏表达式',
          disabled: '隐藏表达式'
        },
        name: 'slider',
        formItem: {
          label: '滑块',
          hideLabel: false,
          rules: [
            {
              required: true,
              message: '必填项',
              trigger: 'change'
            }
          ]
        }
      },
      {
        type: 'treeSelect',
        control: {
          modelValue: '',
          data: [
            {
              label: '标签1',
              id: 1,
              children: []
            }
          ],
          renderAfterExpand: false,
          placeholder: 'placeholder',
          multiple: false,
          disabled: false
        },
        config: {
          optionsType: 1,
          className: 'cls',
          help: '帮助信息',
          span: 24,
          disabledEdit: false,
          displayAdd: false,
          displayEdit: false,
          displayDetail: false,
          hidden: '隐藏表达式',
          disabled: '禁用表达式',
          optionsFun: '/api',
          query: {},
          method: 'get',
          beforeFetch: (data, route) => {
            // data经过处理后返回
            console.log('beforeFetch', data)
            return data
          },
          afterFetch: res => {
            // res返回数据
            console.log('afterFetch', res)
            return res
          },
          transformData: 'none'
        },
        name: 'treeSelect',
        formItem: {
          label: '树形控件',
          hideLabel: false,
          rules: [
            {
              required: true,
              message: '必填项',
              trigger: 'change'
            }
          ]
        }
      },
      {
        type: 'txt',
        control: {
          modelValue: 'html文本'
        },
        config: {
          className: 'cls',
          span: 24,
          displayAdd: false,
          displayEdit: false,
          displayDetail: false,
          hidden: '隐藏表达式',
          disabled: '隐藏表达式'
        }
      },
      {
        type: 'title',
        control: {
          modelValue: '标题'
        },
        config: {
          className: 'cls',
          help: '帮助信息',
          span: 24,
          displayAdd: false,
          displayEdit: false,
          displayDetail: false,
          hidden: '隐藏表达式',
          disabled: '隐藏表达式'
        }
      },
      {
        type: 'button',
        control: {
          label: '保存',
          key: 'submit'
        },
        config: {
          className: 'cls',
          span: 24,
          displayAdd: false,
          displayEdit: false,
          displayDetail: false,
          hidden: '隐藏表达式',
          disabled: '隐藏表达式'
        }
      },
      {
        type: 'table',
        list: [
          {
            name: 'index',
            type: 'index',
            item: {
              label: '序号'
            },
            control: {},
            config: {}
          },
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
          }
        ],
        tableData: [],
        control: {
          border: true
        },
        config: {
          addBtnText: '添加一行',
          delBtnText: '删除'
        },
        name: 'table'
      },
      {
        type: 'component',
        control: {
          modelValue: ''
        },
        config: {
          componentName: '全局注册的组件名'
        },
        name: 'component',
        formItem: {
          label: '自定义组件'
        }
      },
      {
        type: 'upload',
        control: {
          modelValue: '',
          action: '/upload',
          name: 'file',
          listType: 'picture'
        },
        config: {
          tip: '提示文字',
          btnText: '上传'
        },
        name: 'upload',
        formItem: {
          label: '图片/文件'
        }
      },
      {
        type: 'tinymce',
        control: {
          modelValue: '',
          height: '文本高度',
          width: '文本宽度',
          imgUrl: '图片上传地址',
          blobUrl: '附件上传地址'
        },
        config: {
          style: 'simple'
        },
        name: 'tinymce',
        formItem: {
          label: 'tinymce富文本'
        }
      },
      {
        type: 'grid',
        columns: [
          {
            attr: {
              span: 12
            },
            list: []
          },
          {
            attr: {
              span: 12
            },
            list: []
          }
        ],
        control: {},
        config: {}
      },
      {
        type: 'tabs',
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
        list: [],
        control: {},
        config: {},
        formItem: {
          label: '卡片布局'
        }
      },
      {
        type: 'flex',
        list: [],
        tableData: [],
        control: {},
        config: {
          addBtnText: '添加一行',
          delBtnText: '删除'
        },
        name: 'flex'
      },
      {
        type: 'divider',
        control: {
          direction: 'horizontal',
          borderStyle: 'solid',
          contentPosition: 'left'
        },
        config: {
          className: 'cls',
          span: 24,
          displayAdd: false,
          displayEdit: false,
          displayDetail: false,
          hidden: '隐藏表达式',
          disabled: '隐藏表达式'
        },
        formItem: {
          label: '分割线'
        }
      },
      {
        type: 'div',
        control: {},
        config: {
          hidden: '隐藏表达式',
          disabled: '禁用表达式',
          displayDetail: false,
          displayEdit: false,
          displayAdd: false,
          span: 0,
          className: 'class'
        },
        list: []
      }
    ],
    form: {
      size: 'large',
      name: 's',
      labelWidth: '100',
      class: '',
      showColon: true
    },
    config: {
      addLoad: true,
      style: '.a{}',
      submitUrl: 'ad',
      editUrl: 'dd',
      requestUrl: 'dd',
      submitCancel: true
    },
    events: {
      beforeFetch: data => {
        // data经过处理后返回
        console.log('beforeFetch', data)
        return data
      },
      afterFetch: res => {
        // res返回数据
        console.log('afterFetch', res)
        return res
      },
      beforeSubmit: data => {
        // data经过处理后返回
        console.log('beforeFetch', data)
        return data
      },
      afterSubmit: res => {
        // res返回数据
        console.log('afterFetch', res)
        return res
      },
      change: (key, model) => {
        // name当前改变组件的值,model表单的值
        console.log('onChange', key)
        return model
      }
    }
  }
  const transformData = (list, temp = []) => {
    for (const key in list) {
      const type = Object.prototype.toString.call(list[key])
      if (type === '[object Object]') {
        const name = list[key].type || key
        temp.push({
          label: `${name} : {...},`,
          children: transformData(list[key])
        })
      } else if (type === '[object Array]') {
        const child = list[key].length === 1 ? list[key][0] : list[key]
        temp.push({
          label: `${key} : [{...}],`,
          children: transformData(child)
        })
      } else {
        let text = list[key]
        if (typeof text === 'function') {
          text = '...'
        }
        temp.push({ label: `${key} : "${text}",` })
      }
    }
    return temp
  }
  onMounted(() => {
    setTimeout(() => {
      //document.querySelector('.sidebar').style.display = 'none'
      //存在重复id，跳转会异常。转为class
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
      headings.forEach(heading => {
        const id = heading.id.split('-')[0]
        if (id) {
          heading.className = id
        }
      })
    }, 500)
  })
</script>

<style lang="scss">
  .config-option {
    height: 100%;
    display: flex;
    background: #fff;
  }

  .config-sidebar {
    width: 250px;
    overflow-y: auto;
  }

  .config-content {
    flex: 2;
    border-left: 1px solid #ddd;
    padding: 0 20px;
    overflow-y: auto;
  }
</style>
