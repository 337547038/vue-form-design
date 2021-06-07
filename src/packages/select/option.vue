<script>
import {prefixCls} from '../prefix'

export default {
  name: `${prefixCls}Option`,
  data() {
    return {
      prefixCls: prefixCls,
      timer: ''
    }
  },
  props: {
    value: String,
    label: String,
    disabled: {
      type: Boolean,
      default: false
    },
    className: String
  },
  mounted() {
    this.$parent.filterOption.push({
      label: this.label,
      value: this.value,
      disabled: this.disabled,
      className: this.className
    })
    /* clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      this.$parent._setFirstText()
    }, 500) */
  },
  render() {
    return null
  }
}
</script>
