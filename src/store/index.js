import Vue from 'vue'
import Vuex from 'vuex'
import jwtDecode from 'jwt-decode'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    usrName: null
  },

  //commmit
  mutations: {
    setToken (state, newToken) {
      localStorage.setItem('token', newToken)
      state.token = newToken
    },
    setUserName (state, newUsrName) {
      state.usrName = newUsrName
    },
  },

  // dispatch
  actions: {
    reciveToken (context, token) {
      context.commit('setToken', token)
      localStorage.setItem('token', token)
      
      const {name} = jwtDecode(token);
      context.commit('setUserName', name)
      
      axios.defaults.headers.common['token'] = `Bearer ${token}`
    },

    removeToken (context) {
      context.commit('setToken', null)
      localStorage.removeItem('token')
      context.commit('setUserName', null)
      delete axios.defaults.headers.common['token']
    }
  }
})
