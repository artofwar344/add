import * as api from '../../api/api'

const state = {
  workId: '',
  sendDataSave: {},
}

const getters = {
  sendDataSave: state => state.sendDataSave,
  workId: state => state.workId
}

const actions = {
  async fetchCommonParams ({ commit }, params) {
    debugger
    try {
      let rep = await api.fetchCommonParams(params)
      let obj = {
        code: params,
        data: rep
      }
      commit('setCommonParams', obj)
    } catch (e) {
      console.log(e)
    }
  }
}

const mutations = {
  setWorkId (state, data) {
    console.log(state)
    state.workId = data
  },
  setSendData (state, data) {
    state.sendDataSave = data
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
