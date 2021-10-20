export default {
  state: {
    controlAttr: {},
    activeKey: ''
  },
  mutations: {
    setControlAttr(state, obj) {
      state.controlAttr = obj
    },
    setActiveKey(state, key) {
      state.activeKey = key
    }
  },
  actions: {
    // action 与mutations类似, 但是它提交的是mutations
    // 提交方法 $store.dispatch('toggleHello')
    /* toggleHello: ({commit}) => {
       commit('changeHello')
     } */
  }
}
