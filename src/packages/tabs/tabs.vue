<!--<template>
  <div>
    <div v-for="(pane,index) in panes" :key="index">
      {{pane.label}}
      <div><slot name='pane.$slots'></slot></div>
      &lt;!&ndash;{this.panes.map(pane => {
      return pane.$slots.label || pane.label
      })}&ndash;&gt;
    </div>
    <div class="tabs-content">
      <slot></slot>
    </div>
  </div>
</template>-->
<script>
import {prefixCls} from '../prefix'

export default {
  name: `${prefixCls}Tabs`,
  props: {
    value: {
      type: String,
      default: 'tab-1'
    },
    change: Function,
    beforeLeave: {
      type: Function,
      default: function () {
        return true
      }
    },
    showContent: {
      // 是否显示切换内容
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      panes: [],
      active: this.value,
      tabName: 0 // tabPane的name值
    }
  },
  watch: {
    value(val) {
      this.active = val
    }
  },
  mounted () {
  },
  methods: {
    _onTabClick (item, index) {
      if (!item.disabled && this.beforeLeave(item.tabName)) {
        this.active = item.tabName
        this.$emit('input', item.tabName) // v-model时双向绑定
        this.change && this.change(item.tabName, item.label, index + 1)
        this.$emit('change', item.tabName, item.label, index + 1)
      }
    }
  },
  render () {
    return (
      <div class={`${prefixCls}-tabs`}>
        <div class="tabs-nav clearfix">
          {this.panes.map((pane, index) => {
            return (
              <div class={{
                'tabs-tab': true,
                'active': this.active === pane.tabName,
                'disabled': pane.disabled
              }}
              on-click={(ev) => {
                this._onTabClick(pane, index, ev)
              }}>
                {pane.$slots.label || pane.label}
              </div>)
          })}
        </div>
        {this.$slots.content}
        <div class="tabs-content" style={{'display': this.showContent ? null : 'none'}}>
          {this.$slots.default}
        </div>
      </div>
    )
  }
}
</script>
