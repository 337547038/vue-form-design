import { createStore } from 'vuex'
import form from './modules/form'
export default createStore({
  /*state: {
    name: 'zhagnsan'
  }*/
  modules: {
    form
  }
})
/*
import Vue from 'vue'
import vuex from 'vuex'
import getters from './getters'
import app from './modules/app'

Vue.use(vuex)
export default new vuex.Store({
  getters,
  modules: {
    app
  }
})
*/
