/**
 * Created by llb on 2018/12/8.
 */
import * as api from '../../api/api'

const state = {
  workId: '',
  sendDataSave: {},
  pageDataSave: {},
  subFormData: {}
}

const getters = {
  sendDataSave: state => state.sendDataSave,
  pageDataSave: state => state.pageDataSave,
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
  setPageData (state, data) {
    state.pageDataSave = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
