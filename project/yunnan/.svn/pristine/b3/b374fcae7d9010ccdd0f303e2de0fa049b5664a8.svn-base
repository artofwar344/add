import * as api from '../../api/api'


const state = {
  formData: {},
  mzParams: [],
  genderParams: [],
  xueParams: [],
  policeStationParam: [{
    flex: 1,
    values: [],
    showText: 'orgName',
    className: 'slot1',
   }],
  areaCityParam: [{
    flex: 1,
    values: [],
    showText: 'orgName',
    className: 'slot1',
  }],
  areaCountyParam: [{
    flex: 1,
    values: [],
    showText: 'orgName',
    className: 'slot1',
  }],
  currentDoPage: ''
}

const getters = {
  formData: state => state.formData,
  mzParams: state => state.mzParams,
  genderParams: state => state.genderParams,
  xueParams: state => state.xueParams,
  policeStationParam: state => state.policeStationParam,
  areaCityParam: state => state.areaCityParam,
  areaCountyParam: state => state.areaCountyParam,
  currentDoPage: state => state.currentDoPage
}

const actions = {
  async fetchCommonParams ({ commit }, params) {
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
  },

  async fetchPoliceStation ({ commit }, params) {
    try {
      let rep = await api.fetchPoliceStation(params)
      let obj = {
        code: params,
        data: rep
      }
      commit('setPolice', obj)
    } catch (e) {
      console.log(e)
    }
  },

  async fetchAreaParams ({ commit }, params) {
    try {
      let rep = await api.fetchAreaParams(params.code)
      let obj = {
        code: params.level,
        data: rep
      }
      console.log(obj)
      commit('setArea', obj)
    } catch (e) {
      console.log(e)
    }
  }
}

const mutations = {
  setFormData (state, data) {
    state.formData = Object.assign({}, data, state.formData)
  },

  setCurrentPage (state, data) {
    state.currentDoPage = data
  },
  
  setCommonParams (state, data) {
    switch (data.code) {
      case '1011': 
        state.genderParams = data
      case '1012':
       state.mzParams = data
      case '1014':
        state.xueParams = data
    }
  },

  setPolice (state, obj) {

    switch (obj.code) {
      case '0': 
       state.policeStationParam[0].values = obj.data 
    }
  },

  setArea (state, obj) {
    switch (obj.code) {
      case '0': 
       state.areaCityParam[0].values = obj.data
       break;

      case '1':
        state.areaCountyParam[0].values = obj.data

      case '2':
        state.policeStationParam[0].values = obj.data
    }
  },


}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}