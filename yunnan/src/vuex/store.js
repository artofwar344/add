import Vue from 'vue'
import Vuex from 'vuex'
import $expressdelivery from './modules/expressdelivery'
import zzlsStore from './modules/zzls_store'
import publicSecurityStore from './modules/public_security_store'
import reapplyStore from './modules/reapply_store'
import bureauFinanceStore from './modules/bureauFinance_store'
import AICstore from './modules/aic_store'

// import getters from './getters'


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

Vue.use(Vuex)

const store = new Vuex.Store({
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations,
  modules: {
    $expressdelivery,
    user: {
        mutations: {
            save(state, user) {
                // store.isLogin = user.token;
                state.loginUser = user;
                // Cookies.set('Authorization', user.token)
            },
            remove(state) {
                state.loginUser = {};
            }
        },
        state: {
            loginUser: {}
        }
    },

    zzlsStore,
    publicSecurityStore,
    bureauFinanceStore,
    AICstore,
    reapplyStore
  },
  // getters
})

export default store
