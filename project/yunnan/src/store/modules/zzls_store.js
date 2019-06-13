
import * as api from '../../api/api'

const state = {
  choseType: '',
  currentpage: '',
  PjudParams: [{
    flex: 1,
    values: [],
    showText: 'c_name',
    className: 'slot1',
   }],
  subJudParams: [{
    flex: 1,
    values: [],
    showText: 'c_name',
    className: 'slot1',
   }],
  userInfo: {},
  formData: {}
}

const getters = {
  formData: state => state.formData,
  choseType: state => state.choseType,
  currentpage: state => state.currentpage,
  userInfo: state => state.userInfo,
  PjudParams: state => state.PjudParams,
  subJudParams: state => state.subJudParams
}

const actions = {

  async fetchJudicialParams ({commit}, parm) {
     let rep = await api.fetchJudicialParams(parm)

     let obj = {
       code: parm.level,
       data: rep.list
     }
     commit('setJudParams', obj)
  }
  
}

const mutations = {
  setFormData (state, data) {
    state.formData = Object.assign({}, data, state.formData)
  },

  setchoseType (state, data) {
    state.choseType = data.type
    state.currentpage = data.current
  },

  setUserInfo (state, data) {
    state.userInfo = data
  },

  setJudParams (state, obj) {
    console.log(obj)
    switch (obj.code) {
      case '1':
        state.PjudParams[0].values = obj.data
        break;
      case '2':
        state.subJudParams[0].values = obj.data
        break;
      default: break;

    }
    
  }

}


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}