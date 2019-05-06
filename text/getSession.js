import axios from 'axios';
const httpUrl = 'http://119.27.191.77/xhcFarmRecordServer'; 

function easyFunc(obj,items,url) {
  var result=[];
  var date = obj;
  var year = new Date(date['startDate']).getFullYear();
  var itemsname = items + sessionStorage.getItem("userId") + "_" + sessionStorage.getItem("typeId") + "_" + sessionStorage.getItem("guId") + "_" + year;
  var itemsdata = sessionStorage.getItem(itemsname);
  if (itemsdata != null) {
    return result = JSON.parse(itemsdata);
  } else {
    let prew = await axios.post(httpUrl + url, obj).then((res) => {
      if (res.status === 200) {
        sessionStorage.setItem(itemsname, JSON.stringify(res.data.data));
        return res.data.data;
      };
    }).catch(() => {
      // alert('ERROR')
    });
    return prew;
  }
};


export default {
  // testUrl:httpUrl,
  easyFunc
}