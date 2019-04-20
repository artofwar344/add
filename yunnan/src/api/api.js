import {
  baseAPIRequest,
  httpRequestMethods,
} from './axios_init'

import vm from '@/main'

const sfAPI = Object.freeze({
  userAPI: '/gsp/mng90039',
  zyjgAPI: '/gsp/mng90038',
  changeApi: '/APPS/db/insert', 
  temSaveApi: '/APPS/matter/temporaryData/insert', //临时保存
  getTempDataApi: '/APPS/matter/temporaryData/echo', //回显临时保存数据
  JudOrgApi: '/gsp/mng90040',
  formAPI: ''
})

const policeAPI = Object.freeze({
  pAearApi: '/gsp/mng19021',
  commApi: '/gsp/mng19019',
  aearApi: '/gsp/mng19029',
  illegitimateApi: '/gsp/form00001'
})

const commAPI = Object.freeze({
  formApi: '/gsp/appForm00001',
  uploadApi: '/gsp/mng30008',
  areaApi: '/gsp/mng19021'
})

// export function change (parm) {
//   return baseAPIRequest(API, httpRequestMethods.POST, parm)
// }
export function fetchWorkId () {
  let matterid = window.sessionStorage.getItem("matterid")
  let userid = window.sessionStorage.getItem("userid")
  
  let data = {
    txnCommCom: {
        tRecInPage: "15",
        tPageJump: "13",
        tStsTraceId: "110567890",
        tenant: "530000000000",
        txn_itt_chnl_id: "0",
        txn_itt_chnl_type: "1"
      },
      txnBodyCom: {
        //memberId: '9621837961d5407c853559a39879bbd2',
        memberId: userid,
        matterId: matterid, //"79ABB23685267CC8E0530ADDC480B63A"
        //matterId: '79E75CD922A16232E0530ADDC4801B74', 
        //"79ABB23685267CC8E0530ADDC480B63A"
        tenant: "530000000000",
        txn_itt_chnl_id: "0",
        txn_itt_chnl_type: "1"
      }
  }

  return vm.$ajaxRequest('post','/gsp/mng30002', data)
}

export function fetchUserInfo (parm) {
  let data = {
    "txnCommCom": {
     "tenant":"530000000000",
     "txn_itt_chnl_id":"00",
     "txn_itt_chnl_type":"11"
    },
    "txnBodyCom": {
      "matter_id": window.sessionStorage.getItem("matterid"),
     "c_sfzh": parm
    }
   }

  let pageParams = {
    "tRecInPage": "10",
    "tPageJump": "1"
  }
  //  return baseAPIRequest(sfAPI.userAPI, httpRequestMethods.POST, data)
   return vm.$ajaxRequest(httpRequestMethods.POST, sfAPI.userAPI, data, pageParams)
  }

export function fetchJudicialParams (parm) {
  let data = {
    "txnCommCom": {
     "tenant":"530000000000",
     "txn_itt_chnl_id":"00",
     "txn_itt_chnl_type":"11"
    },
    "txnBodyCom": {
      "matter_id": window.sessionStorage.getItem("matterid"),
      "n_level": parm.level,
      "c_pid": parm.pid
    }
   } 

   return vm.$ajaxRequest(httpRequestMethods.POST, sfAPI.JudOrgApi, data)
}

export function zyjgVerify (parm) {
  let data = {
    "txnCommCom": {
     "tenant":"530000000000",
     "txn_itt_chnl_id":"00",
     "txn_itt_chnl_type":"11"
    },
    "txnBodyCom": {
      "matter_id": window.sessionStorage.getItem("matterid"),
      "c_zwmc": parm
    }
   }

   return vm.$ajaxRequest(httpRequestMethods.POST, sfAPI.zyjgAPI,  data)
}

// export function sumbitForm (parm) {
//   let data = {
//     page: "1",
//     end: "end",
//     work_id: "79ABB23685267CC8E0530ADDC480B63A",
//     message: {
//       matter_id: "79ABB23685267CC8E0530ADDC480B63A",
//       // matter_id: window.sessionStorage.getItem("matterid"),
//       member_id: "9621837961d5407c853559a39879bbd2",
//       // member_id: window.sessionStorage.getItem("userid"),
//       json_content: parm
//     }
//   }

//   return baseAPIRequest(sfAPI.changeApi, httpRequestMethods.POST, data)
// }


// 查询地域
export function fetchArea (parm) {
  let data = {
    "txnBodyCom":{
      "matter_id": window.sessionStorage.getItem("matterid"),
      "oType":parm.type || "GAT",
      "areaCode":"",
      "parentCode": parm.parentCode,
      "regnName":"",
      "regnLevel": parm.level
      }
   }

  return vm.$ajaxRequest(httpRequestMethods.POST, commAPI.areaApi, data)
}


export function fetchPoliceStation (code) {
  let data = {
    "txnBodyCom":{
      "matter_id": window.sessionStorage.getItem("matterid"),
      "org_level": code
      }
    }

  return vm.$ajaxRequest(httpRequestMethods.POST, policeAPI.pAearApi, data)
}

export function fetchAreaParams (parm) {
  let data = {
    "txnBodyCom": {
      "matter_id": window.sessionStorage.getItem("matterid"),
      "org_level": parm.level,
      "parent_code": parm.code
    }
   }

  return vm.$ajaxRequest(httpRequestMethods.POST, policeAPI.aearApi, data)
}

export function fetchCommonParams(code) {
  let data = {
    "txnBodyCom": {
      "matter_id": window.sessionStorage.getItem("matterid"),
      "parentId": code
    }
  }

  return vm.$ajaxRequest(httpRequestMethods.POST, policeAPI.commApi, data)
}

export function saveBirthSettle (parm) {
  console.log(parm)
  let obj = Object.assign({}, parm.formData, {
    // 固定内容
    "applyType": "1",
    "guid": "",
    "isMailMertal": "N",
    "netProjectType": "BST",
    "tskSource": "HZ",
    "work_id": parm.workId,
  })

  let data = {  
    "txnCommCom":
      {},
   "txnBodyCom":
      {
        "txn_itt_chnl_id":"0",
        "txn_itt_chnl_type":"1",
        "tenant":"53000000000",
        "matter_id": parm.matterId,
        "work_id": parm.workId,
        "member_id": parm.memberId,
        "json_content": obj
      }
   }
  
  return vm.$ajaxRequest(httpRequestMethods.POST, commAPI.formApi, data)
}

export function fetchTempSaveData(parm) {
  let matterid = window.sessionStorage.getItem("matterid");
  let userid = window.sessionStorage.getItem("userid");
  let form_id = matterid + userid;
  let data = {
    "txnBodyCom": {
      "matter_id": window.sessionStorage.getItem("matterid"),
      "form_id": form_id,
      "message": parm
    }
  };

  return vm.$ajaxRequest(httpRequestMethods.POST, sfAPI.temSaveApi, data,false,false,false,'1')
}

export function fetchGetTempData() {
  let matterid = window.sessionStorage.getItem("matterid");
  let userid = window.sessionStorage.getItem("userid");
  let form_id = matterid + userid;
  let data = {
    "txnBodyCom": {
      "matter_id": window.sessionStorage.getItem("matterid"),
      "form_id": form_id,
    }
  };

  return vm.$ajaxRequest(httpRequestMethods.POST, sfAPI.getTempDataApi, data,false,false,false,'1')
}


//附件上传
export function sumbitUploadData (obj) {
  let data =  {  
    "txnCommCom":
      {
      "txn_itt_chnl_id":"0",
      "txn_itt_chnl_type":"1",
      "tenant":"53000000000"
      },
   "txnBodyCom":
      {
        "matter_id": obj.matterId,
        "work_id": obj.workId,
        "member_id": obj.memberId,
        "files": obj.files
      }
   }

  return vm.$ajaxRequest(httpRequestMethods.POST, commAPI.uploadApi, data)
}


// 律师执业类别变更提交
export function sumbitLawChangeForm (obj) {
  let data = {  
    "txnCommCom":
      {},
   "txnBodyCom":
      {
        "txn_itt_chnl_id":"0",
        "txn_itt_chnl_type":"1",
        "tenant":"53000000000",
        "matter_id": obj.matterId,
        "work_id": obj.workId,
        "member_id": obj.memberId,
        "json_content": obj.formData
      }
   }  

  return vm.$ajaxRequest(httpRequestMethods.POST, commAPI.formApi, data)
}


export function projectChange (data) {
  

  return vm.$ajaxRequest(httpRequestMethods.POST, commAPI.formApi, data)

}

// 出入境预受理
export function domesticRequest (data) {
  return vm.$ajaxRequest("post", "/gsp/appForm00001", data)
  
}