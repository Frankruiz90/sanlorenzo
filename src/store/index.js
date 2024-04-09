import { createStore } from 'vuex'

export default createStore({
  state: {
    dialog: false
  },
  getters: {
    getDialog:state => state.dialog
  },
  mutations: {
    setDialogTrue(state, value) {
      state.dialog = value
  },
  },
  actions: {
    setDialog(context,value) {
      context.commit('setDialog', value)
    }
  },
  modules: {
  }
})
