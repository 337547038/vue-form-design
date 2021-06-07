import Vue from 'vue'
import vuex from 'vuex'
import getters from './getters'
import form from './modules/form'

Vue.use(vuex)
export default new vuex.Store({
  getters,
  modules: {
    form
  }
})
