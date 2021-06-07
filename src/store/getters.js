// getters 和 vue 中的 computed 类似 , 都是用来计算 state 然后生成新的数据 ( 状态 ) 的。
export default {
  hello(state) {
    // return state.app.hello
  }
  // helloWord: state => state.app.helloWord
}
