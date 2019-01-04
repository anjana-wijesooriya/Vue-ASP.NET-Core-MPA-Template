const types = {
  TOGGLE_SIDEBAR: 'TOGGLE_SIDEBAR'
}

// initial state
const state = {
  sidebarOpen: true
}

// getters
const getters = {
  sidebarOpen: state => state.sidebarOpen
}

// actions
const actions = {
  toggleSidebar ({ commit, state }) {
    commit(types.TOGGLE_SIDEBAR)
  }
}

// mutations
const mutations = {
  [types.TOGGLE_SIDEBAR] (state) {
    state.sidebarOpen = !state.sidebarOpen
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
