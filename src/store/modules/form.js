export default {
  state: {
    controlAttr: {},
    tableHeadCheck: true,
    activeKey: ''
  },
  mutations: {
    // 这里填充数据的操作方法
    // 提交方法 $store.commit('changeHello',value)
    /* changeHello: state => {
      state.hello += '欢迎'
    }, */
    setControlAttr(state, obj) {
      // console.log(obj)
      state.controlAttr = obj
    },
    tableHeadCheck(state, bool) {
      state.tableHeadCheck = bool
    },
    setActiveKey(state, key) {
      state.activeKey = key
    }
    /* setRemoteFunc(state, obj) {
      console.log(obj)
      state.remoteFunc = obj
    } */
  },
  actions: {
    // action 与mutations类似, 但是它提交的是mutations
    // 提交方法 $store.dispatch('toggleHello')
    /* toggleHello: ({commit}) => {
       commit('changeHello')
     } */
  }
}
