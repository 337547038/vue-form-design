<script>
export default {
  name: 'tableTd',
  data() {
    return {}
  },
  // columnIndex当前列号
  // index当前行号
  // toggle 扩展或子级展开收起状态
  // parentRow 子级下拉时，包含的父级信息
  props: ['column', 'row', 'index', 'title', 'columnIndex', 'showHideExtend', 'toggle', 'parentRow'],
  components: {},
  methods: {
    _onCellClick(row, column, rowIndex, columnIndex) {
      this.$emit('cellClick', row, column, rowIndex, columnIndex)
    }
  },
  computed: {},
  mounted() {
  },
  render(h) {
    const row = this.row // 传进来的表格行数数据
    const column = this.column // column组件数据
    const $index = this.index
    const columnIndex = this.columnIndex
    const title = this.title
    const extendToggle = this.showHideExtend && this.showHideExtend.bind(this, this.index, this.row) // 用于展开或收起扩展方法
    const toggle = this.toggle
    const parentRow = this.parentRow
    let classNameTd = column.fixed
    if (column.className && column.fixed) {
      classNameTd += ' ' + column.className
    } else if (column.className) {
      classNameTd = column.className
    }
    let display = false
    let rowspan = ''
    let colspan = ''
    if (this.$parent.rowColSpan) {
      // 有合并方法
      const merge = this.$parent.rowColSpan(this.index, this.columnIndex, this.row, this.column)
      if (merge) {
        // 合并方法有返回值的单元格
        // 大于1时
        colspan = merge[1] > 1 ? merge[1] : 1
        rowspan = merge[0] > 1 ? merge[0] : 1
        // 计算出合并后不显示的单元格，如1和2合并=>显示1不显示2
        let displayArr = []
        // 这里处理同一行
        for (let i = 1; i < colspan; i++) {
          const col = this.columnIndex + i
          displayArr.push(`${this.index}:${col}`)
        }
        // 这里处理不同行时，即纵向合并
        for (let j = 1; j < rowspan; j++) {
          for (let i = 0; i < colspan; i++) {
            const col = this.columnIndex + i
            const rol = this.index + j
            displayArr.push(`${rol}:${col}`)
          }
        }
        // 这里存store会好些，单为这组件这里先不引入，先使用全局变量代替
        window.rowspanColspan = displayArr
        // window.sessionStorage.setItem(this.$parent.rowspanColspan, JSON.stringify(displayArr))
      }
      const activeRowCol = `${this.index}:${this.columnIndex}`
      // let displayArr = window.sessionStorage.getItem(this.$parent.rowspanColspan)
      let displayArr = window.rowspanColspan
      if (displayArr) {
        // displayArr = JSON.parse(displayArr)
        if (displayArr.indexOf(activeRowCol) !== -1) {
          display = true
        }
      }
    }
    if (display) {
      return ''
    } else {
      return (<td
        class = {classNameTd}
        rowspan = {rowspan > 1 ? rowspan : null}
        colspan = {colspan > 1 ? colspan : null}
        style = {'text-align:' + column.align}
        title = {title || column.title ? row[column.prop] : null}
        on-click={(ev) => {
          this._onCellClick(row, column, $index, columnIndex)
        }}>
        {
          this.column.renderCell.call(this, h, {
            row,
            column,
            $index,
            extendToggle,
            toggle,
            parentRow
          })
        }
      </td>)
    }
  }
}
</script>
