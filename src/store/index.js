import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    usrName: null
  },

  mutations: {
    setToken (state, newToken) {
      localStorage.setItem('token', newToken)
      state.token = newToken
    },
    removeToken (state) {
      localStorage.removeItem('token')
      state.token = null
    },
    setUserName (state, newUsrName) {
      state.usrName = newUsrName
    },
  }
})
