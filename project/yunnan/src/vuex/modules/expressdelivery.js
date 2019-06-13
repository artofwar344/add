const expressdelivery = {
  modules: {},
  state: {
    intellectualselection: {},
    sendUserInfo: {},
    saveSendUserInfo: {},
    receiveUserInfo: {},
    saveTime: [],
    thingsInfo: '',
    leaveMessage: '',
    changCompany: {},
    remark: null,
    matterUserInfo: {},
    metarialList: [],
    wuliuTodeliveryWorkId:'',
    userid:'',
    matterid:window.sessionStorage.getItem("matterid"),
    accept:'',
    supplementImgInf: null,
    orgCode:null
  },
  mutations: {
    IntellectualSelection(state, data) {
      state.intellectualselection = data;
    },
    SendUserInfo(state, data) {
      state.sendUserInfo = data;
    },
    SaveSendUserInfo(state, data) {
      state.saveSendUserInfo = data;
    },
    ReceiveUserInfo(state, data) {
      state.receiveUserInfo = data;
    },
    SaveTime(state, data) {
      state.saveTime = data;
    },
    ThingsInfo(state, data) {
      state.thingsInfo = data;
    },
    LeaveMessage(state, data) {
      state.leaveMessage = data;
    },
    ChangCompany(state, data) {
      state.changCompany = data;
    }
  },
  actions: {}
}

export default expressdelivery
