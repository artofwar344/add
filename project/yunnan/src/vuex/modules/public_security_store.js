import * as api from '../../api/api'


const state = {
  formData: {},
  subFormData: {},
  uploadFiles: [],
   nationnalityParams: [{
    flex: 1,
    values: [],
    showText: 'cmnCdNm',
    className: 'slot1',
   }],
   religionParams: [{
    flex: 1,
    values: [],
    showText: 'cmnCdNm',
    className: 'slot1',
   }],
   soldierParams: [{
    flex: 1,
    values: [],
    showText: 'cmnCdNm',
    className: 'slot1',
   }],
   academicParams: [{
    flex: 1,
    values: [],
    showText: 'cmnCdNm',
    className: 'slot1',
   }],
   marriedParams: [{
    flex: 1,
    values: [],
    showText: 'cmnCdNm',
    className: 'slot1',
   }],
  areaMinParams: [{
    flex: 1,
    values: [],
    showText: 'cmnCdNm',
    className: 'slot1',
   }],
  relParams: [{
    flex: 1,
    values: [],
    showText: 'cmnCdNm',
    className: 'slot1',
   }],
  mzParams: [{
    flex: 1,
    values: [],
    showText: 'cmnCdNm',
    className: 'slot1',
   }],
  genderParams: [{
    flex: 1,
    values: [],
    showText: 'cmnCdNm',
    className: 'slot1',
   }],
  xueParams: [{
    flex: 1,
    values: [],
    showText: 'cmnCdNm',
    className: 'slot1',
   }],
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

  provinceMinParam: [{
    flex: 1,
    values: [],
    showText: 'regnShtn',
    className: 'slot1',
  }],

  provinceParam: [{
    flex: 1,
    values: [],
    showText: 'regnNm',
    className: 'slot1',
  }],
  cityParam: [{
    flex: 1,
    values: [],
    showText: 'regnNm',
    className: 'slot1',
  }],
  countyParam: [{
    flex: 1,
    values: [],
    showText: 'regnNm',
    className: 'slot1',
  }],
  currentDoPage: '',
  temporaryResParams: [{
    flex: 1,
    values: [],
    showText: 'cmnCdNm',
    className: 'slot1',
  }],
  applyReasonParams: [{
    flex: 1,
    values: [],
    showText: 'cmnCdNm',
    className: 'slot1',
  }],
  applyReasonType:'',
  tempSaveData:{},
}

const getters = {
  formData: state => state.formData,
  subFormData: state => state.subFormData,
  uploadFiles: state => state.uploadFiles,
  relParams: state => state.relParams,
  mzParams: state => state.mzParams,
  genderParams: state => state.genderParams,
  xueParams: state => state.xueParams,
  policeStationParam: state => state.policeStationParam,
  areaCityParam: state => state.areaCityParam,
  areaCountyParam: state => state.areaCountyParam,
  currentDoPage: state => state.currentDoPage,
  areaMinParams: state => state.areaMinParams,
  academicParams: state => state.academicParams,
  marriedParams: state => state.marriedParams,
  religionParams: state => state.religionParams,
  soldierParams: state => state.soldierParams,
  nationnalityParams: state => state.nationnalityParams,
  temporaryResParams: state => state.temporaryResParams,
  applyReasonParams: state => state.applyReasonParams,
  applyReasonType: state => state.applyReasonType,
  tempSaveData: state => state.tempSaveData,

  provinceParam: state => state.provinceParam,
  cityParam: state => state.cityParam,
  countyParam: state => state.countyParam,

  provinceMinParam: state => state.provinceMinParam
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
      let rep = await api.fetchAreaParams(params)
      let obj = {
        code: params.level,
        data: rep
      }
      commit('setArea', obj)
    } catch (e) {
      console.log(e)
    }
  },

  async fetchArea ({ commit }, parm) {
    let rep = await api.fetchArea(parm)

    let obj = {
      code: parm.regnLevel,
      data: rep
    }
    commit('setCommonArea', obj)
  },

  async fetchTempSaveData ({ commit }, params) {
    try {
      let data = await api.fetchTempSaveData(params);
      console.log(this._vm.$toast("临时保存成功"));
      commit('setTempSaveData', data)
    } catch (e) {
      console.log(e)
    }
  },

  async fetchGetTempData ({ commit }) {
    try {
      let data = await api.fetchGetTempData();
      commit('setTempSaveData', data)
    } catch (e) {
      console.log(e)
    }
  },
}

const mutations = {
  setFormData (state, data) {
    console.log(data[Object.keys(data)])
    state[Object.keys(data)] = data[Object.keys(data)]
  },

  setCurrentPage (state, data) {
    console.log(data)
    console.log(state)
    state.currentDoPage = data
  },

  setCommonParams (state, obj) {
    console.log(obj)
    switch (obj.code) {
      case '1011':
        state.genderParams[0].values = obj.data
        break;
      case '1012':
        state.mzParams[0].values = obj.data
        break;
      case '1014':
        state.xueParams[0].values = obj.data
        break;
      case '1019':
        state.relParams[0].values = obj.data
        break;
      case '1020':
        state.temporaryResParams[0].values = obj.data
      break;
      case '1021':
       state.applyReasonParams[0].values = obj.data
       break;
      case '1016':
        state.marriedParams[0].values = obj.data
        break;
      case '1015':
        state.academicParams[0].values = obj.data
        break;
      case '1017':
        state.soldierParams[0].values = obj.data
        break;
      case '1018':
        state.religionParams[0].values = obj.data
        break;
      case '1013':
        state.nationnalityParams[0].values = obj.data
        break;
      case '1023':
        state.relParams[0].values = obj.data
        break;
      default: break;
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
        break;

      case '2':
        state.policeStationParam[0].values = obj.data
        break;
    }
  },

  setCommonArea (state, obj) {
    switch (obj.code) {
      case '1':
        state.provinceParam[0].values = obj.data

        obj.data.map(item => {
          if (item.regnShtn) {
            state.provinceMinParam[0].values.push(item)
          }
        })
        break;
      case '2':
        state.cityParam[0].values = obj.data
        break;
      case '3':
        state.countyParam[0].values = obj.data
        break;
      default: break;
    }

  },

  setTempSaveData(state, data) {
    state.tempSaveData = data
  },

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
