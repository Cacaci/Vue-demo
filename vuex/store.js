import Vue from 'vue'
import Vuex from 'vuex'

import note from './modules/note'
import actions from './actions'
Vue.use(Vuex)



// 将state, mutations传入
export default new Vuex.Store({
  modules: {
    note
  },
  actions
})
