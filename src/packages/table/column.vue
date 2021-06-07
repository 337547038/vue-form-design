<script>
import {prefixCls} from '../prefix'

export default {
  name: `${prefixCls}Column`,
  componentName: 'Column',
  data() {
    return {
      renderCell: {}
    }
  },
  props: {
    prop: String, // 参数
    label: String, // 显示的th名称
    width: String,
    className: {
      type: String,
      default: ''
    },
    align: {
      // 对齐方式，可选left/center/right
      validator: function (value) {
        return ['left', 'center', 'right'].indexOf(value) !== -1
      }
    },
    type: {
      // 可选selection（多选）/index序号
      validator: function (value) {
        return ['selection', 'index', 'extend'].indexOf(value) !== -1
      }
    },
    /* whiteSpace: {
      // 当前列文本样式，true会添加class='white-space'
      type: Boolean,
      default: false
    }, */
    fixed: {
      // 固定当前列，可选left/right
      validator: function (value) {
        return ['left', 'right'].indexOf(value) !== -1
      }
    },
    sortBy: {
      // 当前列显示排序按钮
      type: Boolean,
      default: false
    },
    title: {
      // 鼠标滑过单元格时是否显示title提示语
      type: Boolean,
      default: false
    },
    order: {
      type: [String, Number]
    },
    drag: { // 当前单元格允许拖动，仅在table设置drag＝true时有效
      type: Boolean,
      default: true
    }
  },
  created() {
    this.renderCell = (h, {row, column, $index, extendToggle, toggle, parentRow}) => {
      if (this.$scopedSlots.default) {
        // row 当前行信息
        // index 当前行序号
        // extend 扩展及子级展开或收起方法
        // toggle 扩展及子级展开或收起的状态
        // parentRow 子级行信息时，包含的父级信息
        const data = {row: row, index: $index + 1, extend: extendToggle, toggle: toggle, parentRow: parentRow}
        // return h('div', style, [this.$scopedSlots.default(data)])
        return this.$scopedSlots.default(data)
      }
      // return row[column.prop];
      if (column.type === 'selection') {
        // 如果selectedRows有当前行，则为选中状态
        let className = `${prefixCls}-checkbox`
        if (this.$parent.selectedRows.indexOf(row) !== -1) {
          className += ' checked'
        }
        return h('label', {
          attrs: {class: className},
          on: {
            click: this._handleChange.bind(this, row, $index)
          }
        }, [
          h('span', {class: `${prefixCls}-checkbox-inner`})
        ])
        /* return h('label', style, [
          h('label', {
            attrs: {class: className},
            on: {
              click: this._handleChange.bind(this, row)
            }
          })
        ]) */
      }
      if (column.type === 'index') {
        // return h('div', style, $index + 1)
        return $index + 1
      }
      return row[column.prop]
    }
  },
  methods: {
    _handleChange(row, index) {
      this.$parent.handleChange(row, index)
    }
  },
  mounted() {
  },
  computed: {
    parent() {
      // 查找父组件
      let parent = this.$parent
      let parentName = parent.$options.componentName
      if (parent) {
        while (parentName !== 'table' && parent.$parent) {
          parent = parent.$parent
          parentName = parent.$options.componentName
        }
      }
      return parent
    }
  },
  watch: {},
  render(h) {
    // return null
    return h('div', this.$slots.default)
  }
}
</script>
