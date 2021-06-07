/**
 * Created by 337547038 on 2018/8/15 0015.
 */
// from https://github.com/ElemeFE/element/blob/dev/src/mixins/emitter.js
// 解决使用$emit时$on会触发两次
export default {
  methods: {
    dispatch (componentName, eventName, params) {
      var parent = this.$parent || this.$root
      var name = parent.$options.componentName

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent

        if (parent) {
          name = parent.$options.componentName
        }
      }
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params))
      }
    }
  }
}
