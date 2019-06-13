import Vue from 'vue'
import Vuex from 'vuex'

import zzlsStore from './modules/zzls_store'
import publicSecurityStore from './modules/public_security_store'


Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  workId: ''
}

const getters = {
  workId: state => state.workId
}

const actions = {}

const mutations = {
  setWorkId (state, data) {
    state.workId = data
  }
}

export default new Vuex.Store({
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations,
  modules: {
    zzlsStore,
    publicSecurityStore
  },
  strict: debug
})