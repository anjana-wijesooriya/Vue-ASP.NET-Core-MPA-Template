import Vue from 'vue'
import Vuex from 'vuex'

import Sidebar from '../../modules/sidebar.js'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    Sidebar
  },
  strict: debug
})
