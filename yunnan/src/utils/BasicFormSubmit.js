/**
 * Created by llb on 2018/11/28.
 */
import Vue from '@/main'

const submitFrom = (opts) => {
  /* let sendData = {
    page: '1',
    end: 'end',
    work_id: opts.WorkId,
    message: {
      // matter_id: "73eae83fba0548958c84e3c8327d68c2",
      matter_id: window.sessionStorage.getItem('matterid'),
      // member_id: "9621837961d5407c853559a39879bbd2",
      member_id: window.sessionStorage.getItem('userid'),
      json_content: opts.sendData
    }
  } */
  const fromOpts = opts.from
  let sendData = {
    'txnBodyCom': {
      'txn_itt_chnl_id': '0',
      'txn_itt_chnl_type': '1',
      'tenant': '530000000000',
      'matter_id': sessionStorage.getItem('matterid'),
      'work_id': fromOpts.WorkId,
      'member_id': sessionStorage.getItem('userid'),
      'json_content': fromOpts.sendData
    }
  }
  Vue.$ajaxRequest('post', '/gsp/appForm00001', sendData).then((res) => {
    fromOpts.callback && fromOpts.callback(res)

    // ajaxRequest 不 reject 错误，我也很无奈，只能这样处理
    if (res['C-API-Status'] === '01') {
      fromOpts.callback && fromOpts.callback('error')
    }

    if (opts.noFile) return
    submitFile(opts.file)
  }).catch((response) => {})
}

const submitFile = (opts) => {
  let sendData = {
    txnBodyCom: {
      work_id: opts.WorkId,
      matter_id: window.sessionStorage.getItem('matterid'),
      // matter_id: "73eae83fba0548958c84e3c8327d68c2",
      member_id: window.sessionStorage.getItem('userid'),
      // member_id: "9621837961d5407c853559a39879bbd2",
      files: opts.sendData,
      receiver: opts.receiver
    },
    txnCommCom: {
      tenant: '5300000000000',
      txn_itt_chnl_id: '0',
      txn_itt_chnl_type: '1'
    }
  }
  Vue.$ajaxRequest('post', '/gsp/mng30008', sendData).then((res) => {
    console.log(res, '30008')
    opts.callback && opts.callback(res)
  })
}

const BasicFormSubmit = (opts) => {
  opts.from.WorkId = opts.WorkId
  opts.file.WorkId = opts.WorkId
  submitFrom(opts)
}

export default BasicFormSubmit
