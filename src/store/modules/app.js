/**
 * 简单演示用例
 */
const app = {
  state: {
    hello: 'hello',
    helloWord: ''
  },
  mutations: {
    // 这里填充数据的操作方法
    // 提交方法 $store.commit('changeHello',value)
    changeHello: state => {
      state.hello += '欢迎'
    }
  },
  actions: {
    // action 与mutations类似, 但是它提交的是mutations
    // 提交方法 $store.dispatch('toggleHello')
    toggleHello: ({commit}) => {
      commit('changeHello')
    }
  }
}

export default app
