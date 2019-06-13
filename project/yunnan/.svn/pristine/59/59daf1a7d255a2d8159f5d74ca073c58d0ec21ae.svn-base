let staticParam={
  'tenant':'530000000000',

}
import Vue from '../../main'
import {cenurl} from '../../components/toptow'
export function getMapItemList(context,paramObj,fun) {
  context.requesting = true;
  let txnBodyCom = Object.assign(staticParam, paramObj)
  context.$axios({

    method: 'post',
    url: cenurl.url() + '/gsp/fsx11009',
    data:
      {
        'txnCommCom':{
          'tRecInPage': paramObj.tRecInPage.toString(),  //每页显示条数
          'tPageJump': paramObj.tPageJump.toString(),     //当前显示页数
          'tStsTraceId':'530000000000',
          'txnIttChniId':'00',
          'txnIttChniCgyCode':'11',
        },
        'txnBodyCom':{
          'keyword': paramObj.keyword,   //关键字查询 Itemlist决定
          'type':  paramObj.type,   //场馆类型  默认空字符串 查询全部
          'lon':  paramObj.lon, // 经度 查询本地数据为自身坐标，查询外地数据为外地州市市政府坐标
          'lat':  paramObj.lat,  //维度  查询本地数据为自身坐标，查询外地数据为外地州市市政府坐标

          'lon_own': paramObj.lon_own,  // 查询外地数据为自身坐标，查询本地数据可为空
          'lat_own':  paramObj.lat_own,  //  查询外地数据为自身坐标，查询本地数据可为空
          'local_data_flag':  paramObj.local_data_flag, //  空值不启用地区代码查询，用坐标和距离查询 01 外地查询  00自身定位，查询本地

          'regn_code':  paramObj.regn_code, //需求更改只用坐标查询，城市编码不再使用
          'scope':  paramObj.scope,
          'tenant':'530000000000',
        }
      },
    headers: {'c-tenancy-id': '530000000000','C-App-Id': 'GSP_APP_001', 'C-Dynamic-Password-Foruser': window.sessionStorage.getItem("usertoken") != 'null' ? window.sessionStorage.getItem("usertoken") : '1234567890'}
  })
    .then(res => {
      if (res.status == '200' && JSON.parse(res.data['C-Response-Body'])) {
        context.listData =  res.data;
        context[fun](res.data)
      }else{
        Vue.$toast(res.data['C-Response-Desc'])
      }
    })
    .catch(error => {
      // context[fun]()
     Vue.$toast(error)
    })
}
export function itemDetailSearch(id,callback,context){
  context.$axios({
    method: 'post',
    url:cenurl.url() + '/gsp/fsx11010',
    data:{
      txnBodyCom:{
        'tenant':'530000000000',
        'txn_itt_chnl_id':'00',
        'txn_itt_chnl_type':'11',
        'id':id
      }
    },

    headers: {'C-App-Id': 'GSP_APP_001', 'C-Dynamic-Password-Foruser': window.sessionStorage.getItem("usertoken") != 'null' ? window.sessionStorage.getItem("usertoken") : '1234567890'}
  })
    .then(res => {
      if (res.status == '200') {
        callback(res.data)
      } else {

      }
    })
    .catch(error => {
      // callback()
      console.log(error)
    })
}
//高德坐标转百度（传入经度、纬度）
export function bd_encrypt(gg_lng, gg_lat) {
  var X_PI = Math.PI * 3000.0 / 180.0;
  var x = gg_lng, y = gg_lat;
  var z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * X_PI);
  var theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * X_PI);
  var bd_lng = z * Math.cos(theta) + 0.0065;
  var bd_lat = z * Math.sin(theta) + 0.006;
  return {
    bd_lat: bd_lat,
    bd_lng: bd_lng
  }

}

