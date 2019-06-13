import Vue from 'vue' 
import Router from 'vue-router';
import vm from '@/main'
const common = {
    filter:function(data,val){
        let EndList = [];
        for(let i in data){
            for(let j in val){
                if(data[i] == val[j].title){
                    EndList.push({
                        title: val[j].title,
                        msg: val[j].info,
                        name:val[j].name
                    })
                }
            }
        }
        return EndList
    },//数组过滤
    cmnDate:function(val){
        let time;
            time = this.dateFormat(val, 'yyyy-MM-dd')
        return time
    },//时间组件获取时间
    decimal:function(value){
        var value=Math.round(parseFloat(value)*100)/100;
        var xsd=value.toString().split(".");
        if(xsd.length==1){
        value=value.toString()+".00";
        return value;
        }
        if(xsd.length>1){
        if(xsd[1].length<2){
        value=value.toString()+"0";
        }
        return value;
        }
    },
    dateFormat:function(time, format){
        const t = new Date(time);
        const tf = function (i) {
          return (i < 10 ? '0' : '') + i;
        };
        return format.replace(/yyyy|MM|dd|HH|mm|ss/g, (a) => {
          switch (a) {
            case 'yyyy':
              return tf(t.getFullYear());
            case 'MM':
              return tf(t.getMonth() + 1);
            case 'mm':
              return tf(t.getMinutes());
            case 'dd':
              return tf(t.getDate());
            case 'HH':
              return tf(t.getHours());
            case 'ss':
              return tf(t.getSeconds());
            default:
              break;
          }
        });
    }
}   
export default common
