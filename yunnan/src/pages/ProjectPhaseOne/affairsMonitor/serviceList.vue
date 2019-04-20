<template>
  <div class="livehood-page">
    <div class="container">
      <towtop :name="titlename" />

      <div class="zw_title">
        <div class="func">
          <div class="title_word">
            <router-link to="/appOfficeHall">手机办件</router-link>
          </div>
        </div>
        <div class="func">
          <div class="title_word">
            <router-link to="/appPublicityService">手机服务</router-link>
          </div>
        </div>
        <div class="func">
          <div class="title_word title_active">
            服务清单
          </div>
          <div class="title_bottom"></div>
        </div>
        <div class="func">
          <div class="title_word">
            <router-link to="/affairsMonitorpublicityService">服务公示</router-link>
          </div>
        </div>
        <div class="func">
          <div class="title_word title_active">
            <router-link to="/affairsMonitorOfficeHall">办事大厅</router-link>
          </div>
        </div>
      </div>
      <div class="box keyword">
        <div class="keyword_top">
          <div class="keyword_top_part">
            <div style="float:left; margin-left: .4rem">
              <div>
                <Field readonly :error="errorSelectInfo" :propserror="errorSelect01"  label="" desc=""
                       disableclear type="text" placeholder="云南省" required :value="confirmValSelect01"
                       v-on:errorchange="errorChangeFun" @click.native="open('pickerselect01')">
                  <span slot="append" class=""></span>
                </Field>
                <Huiselect
                  ref="pickerselect01"
                  position="bottom"
                  :dataslots="selectData01"
                  class="example-select_item"
                  @confirms="selectConfirmFun01"
                ></Huiselect>
              </div>
            </div>
            <!--<div class="triangle_ship" style="float: right"></div>-->
          </div>
          <div class="keyword_top_part" style="border-left: 2px solid #F1F3F6">
            <div style="float:left; margin-left: .4rem">
              <div>
                <Field readonly :error="errorSelectInfo2" :propserror="errorSelect02"  label="" desc=""
                       disableclear type="text" placeholder="请选择区县" required :value="confirmValSelect02"
                       v-on:errorchange="errorChangeFun2" @click.native="open2('pickerselect02')">
                  <span slot="append2" class=""></span>
                </Field>
                <Huiselect
                  ref="pickerselect02"
                  position="bottom"
                  :dataslots="selectData02"
                  class="example-select_item"
                  @confirms="selectConfirmFun02"
                ></Huiselect>
              </div>

            </div>
            <!--<div class="triangle_ship"></div>-->
          </div>
        </div>
        <!--<div class="keyword_bottom_part">
          <div class="bottom_left"><div class="blue_dot"></div><div class="keyword_bottom_left">达标</div></div>
          <div class="bottom_right"><div class="red_dot"></div><div class="keyword_bottom_right">不达标</div></div>
        </div>-->
      </div>
      <div class="box item_type">
        <div class="header">
          <div class="left">
            <span class="v-line"></span>
            <p>事项类型分布</p>
          </div>
        </div>
        <div class="content">
          <div class="item_type_g" id="item_type_g"></div>
        </div>
      </div>
      <div class="box service_type">
        <div class="header">
          <div class="left">
            <span class="v-line"></span>
            <p>服务类型分布</p>
          </div>
        </div>
        <div class="content">
          <div class="service_type_g" id="service_type_g"></div>
        </div>
      </div>
      <div class="box department_type">
        <div class="header">
          <div class="left">
            <span class="v-line"></span>
            <p>部门事项分布</p>
          </div>
        </div>
        <div class="content">
          <div class="department_type_g" id="department_type_g"></div>
        </div>
      </div>
      <div class="box channel_type">
        <div class="header">
          <div class="left">
            <span class="v-line"></span>
            <p>办理渠道</p>
          </div>
        </div>
        <div class="content">
          <div class="channel_type_g" id="channel_type_g"></div>
        </div>
      </div>
      <div class="box degree_type">
        <div class="header">
          <div class="left">
            <span class="v-line"></span>
            <p>办理深度</p>
          </div>
        </div>
        <div class="content">
          <div class="degree_type_g" id="degree_type_g"></div>
        </div>
      </div>

      <!--<div id="heatmap" style="width: 97%; height: 500px;"></div>-->
    </div>
  </div>

</template>

<script>
  import towtop from '@/components/HederTwo'
  import { liveUrl } from "@/components/toptow.js";

  let yn_area = require('./area.json');
  export default {
    data () {
      return {
        // selector 1
        errorSelect01: false,
        errorSelectInfo: '',
        selectData01: [{
          flex: 1,
          values:  [{"text":"云南省", value:"530000"}, {"text":"昆明市","value":"530100"},{"text":"曲靖市","value":"530300"},{"text":"玉溪市","value":"530400"},{"text":"保山市","value":"530500"},{"text":"昭通市","value":"530600"},{"text":"丽江市","value":"530700"},{"text":"普洱市","value":"530800"},{"text":"临沧市","value":"530900"},{"text":"楚雄州","value":"532300"},{"text":"红河州","value":"532500"},{"text":"文山州","value":"532600"},{"text":"大理州","value":"532900"},{"text":"迪庆州","value":"533400"},{"text":"德宏州","value":"533100"},{"text":"怒江州","value":"533300"},{"text": "西双版纳州","value": "532800"}],
          className: 'slot1',
          showText:'text',
          defaultIndex:3
        }],
        confirmValSelect01:[],

        // selector2
        errorSelect02: false,
        errorSelectInfo2: '',
        selectData02: [{
          flex: 1,
          values: [],
          className: 'slot1',
          showText:'text',
          defaultIndex:3
        }],
        confirmValSelect02:[],

        titlename: '云南省政务服务大数据监控中心',
        fsData:1,
        cityValue: 70,
        cityStyle: "",
        districtValue: 99,
        districtStyle: "",
        cityColor: "",
        districtColor: "",
        rColor : {
          base:[69, 125, 221, 239, 240],
          sub:[56, 96, 18, 1, -140]
        },
        gColor : {
          base:[9, 28, 55, 133, 199],
          sub:[19, 27, 78, 66, 6]
        },
        bColor : {
          base:[15, 58, 47, 60, 86],
          sub:[43, -11, 13, 26, -33]
        },
        regionId : "530000000000",
        regFlag : "1"
      }
    },

    components:{
      towtop
    },
    created () {

    },

    mounted () {
      this.mountedMethod();
    },

    computed: {

    },
    methods: {
      getMonth(sub) {
        let date = new Date();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        if(month - sub <= 0) {
          year -= 1;
          month = month + 12 - sub;
        } else {
          month = month - sub;
        }
        if(month < 10) {
          month = "0" + month;
        }
        return year + "" + month;
      },
      mountedMethod() {
        this.calColorValue();
        // 事项类型分布
        let itemTypeQuery = {
          regionId: this.regionId,
          regFlag:this.regFlag
        }
        this.ajaxWapper("/goven/svrList/levelMatterIndexQry",itemTypeQuery,
          (res)=>{
            this.draw_item_type_g(res.data.data);
          });
        // 服务类型分布
        let serviceTypeQuery = {
          regionId: this.regionId,
          regFlag:this.regFlag,
          chanType: "-1"};
        this.ajaxWapper("/goven/svrList/matterTypeIndexQry", serviceTypeQuery,
          (res) => {
            this.draw_service_type_g(res.data.data);
          })
        // this.draw_service_type_g();
        // 部门事项分布
        let departmentQuery = {
          regionId: this.regionId,
          regFlag:this.regFlag,
          startDate: this.getMonth(1),
          endDate:this.getMonth(1)
        };
        this.ajaxWapper("/goven/svrList/matterDisIndexQry", departmentQuery,
          (res) => {
            this.draw_department_type_g(res.data.data);
          });
        // 办理渠道
        let channelQUery = {
          regionId: this.regionId,
          regFlag:this.regFlag,
          startDate:this.getMonth(1),
          endDate:this.getMonth(1)
        };
        this.ajaxWapper("/goven/svrList/tranTypeIndexQry", channelQUery,
          (res) => {
            this.draw_channel_type_g(res.data.data);
          });
        // 办理深度
        let deQuery = {regionId: this.regionId, regFlag: this.regFlag, startDate: this.getMonth(1), endDate: this.getMonth(1)};
        this.ajaxWapper("/goven/svrList/tranDepthIndexQry", deQuery,
          (res) => {
            this.draw_degree_type_g(res.data.data);
          }
        )
      },
      ajaxWapper(url, query, recall) {
        let UrlIp=''
        if(urls.hostname=='web.yn.gov.cn'){
          UrlIp="https://zwfw.yn.gov.cn:8081"+url
        }else{
          UrlIp="http://128.196.221.144:8081"+url
        }
        UrlIp="https://zwfw.yn.gov.cn:8081"+url
        // UrlIp="https://data.yn.gov.cn:8081"+url
        //UrlIp="https://data.yn.gov.cn:8081"+url
        this.$axios({method:"post",url:UrlIp,data:query}).then(res=>{
          recall(res);
        });
      },

      // 第一个selector
      open(picker) {
        this.$refs[picker].open();
        document.activeElement.blur();
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
      },
      errorChangeFun(val) {
        this.errorSelect01 = val;
      },
      selectConfirmFun01(selectedVal){
        this.selectData02[0].values = yn_area[selectedVal[0].value];
        this.confirmValSelect02 = "";
        if(selectedVal[0].value === "530000") {   // 选择省级
          this.regFlag = 1;
        } else {                                  // 选择市级
          this.regFlag = 2;
        }
        this.regionId = selectedVal[0].value;
        this.regionId += "000000";
        this.mountedMethod();
        if(typeof selectedVal[0] === 'object'){
          this.confirmValSelect01 = selectedVal[0].text;
        }else{
          this.confirmValSelect01 = selectedVal;
        }
      },


      // 第二个selector
      open2(picker) {
        console.log("选择第二个");
        if(!this.selectData02[0].values || this.selectData02[0].values.length == 0) {
          return;
        }
        console.log("第二个执行")
        this.$refs[picker].open();
        document.activeElement.blur();
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
      },
      errorChangeFun2(val) {
        this.errorSelect02 = val;
      },
      selectConfirmFun02(selectedVal){
        this.regionId = selectedVal[0].value;
        this.regFlag = 3;
        this.regionId += "000000";
        this.mountedMethod();
        if(typeof selectedVal[0] === 'object'){
          this.confirmValSelect02 = selectedVal[0].text;
        }else{
          this.confirmValSelect02 = selectedVal;
        }
      } ,
      // 办理深度
      draw_degree_type_g(res) {
        res = res[0];
        let degree_type_g = this.$echarts.init(document.getElementById("degree_type_g"));
        let option = {
          tooltip:{
            show: true
          },

          color: ["#FAC305","#FA6365", "#4299FD","#19C976"],
          type:"pie",

          legend:[
            {
              orient: "horizontal",
              x: "5%",
              y: "80%",
              align: "left",
              data:['一级深度'],
              icon:"circle"
            },
            {
              orient: "horizontal",
              x: "55%",
              y: "80%",
              align: "left",
              data:['二级深度'],
              icon:"circle"
            },
            {
              orient: "horizontal",
              x: "5%",
              y: "90%",
              align: "left",
              data:['三级深度'],
              icon:"circle"
            },
            {
              orient: "horizontal",
              x: "55%",
              y: "90%",
              align: "left",
              data:['四级深度'],
              icon:"circle"
            }
            // orient: 'horizontal',
            // data:['线上线下一体化','网上办理','窗口办理',"内部办理"],
            // icon:"circle",
            // top:300,
            // left: 0
          ],
          series: [
            {
              roseType : 'radius',
              type: 'pie',
              data: [{value:res.levelOne,name:"一级深度",name2:"(办事指南)"},
                     {value:res.levelTwo,name:"二级深度",name2:"(原件审核)"},
                     {value:res.levelThree,name:"三级深度",name2:"(原件核验)"},
                     {value:res.levelFour,name:"四级深度",name2:"(全网网办)"}],
              startAngle:180,
              radius : ['20%', '45%'],
              z:10,
              label : {
                show: true,
                formatter: item=>{
                  return "{b|" + item.data.name + "}\n{a|\t" + item.data.name2 + "}";
                },
                rich:{
                  a:{
                    color:"#A1A1A1",
                    align: "right",
                    lineHeight: 22
                  },
                  b:{
                    color:"#353535"
                  }
                },
                verticalAlign:"top"
              },
              labelLine:{
                normal:{
                  length: 9,
                  length2: 17
                }
              },
              itemStyle:{
                normal: {
                  color: function(params) {
                    var color = ["#FAC305","#FA6365", "#4299FD","#19C976"];
                    return color[params.dataIndex];
                  },

                }
              }
            }]
        };
        degree_type_g.setOption(option, true);
      },
      // 办理渠道 pie
      draw_channel_type_g(res) {

        res = res[0];
        let inteTotalNum = res.inteTotalNum;    // 线上线下一体化
        let onlineWebTotalNum = res.onlineWebTotalNum; // 网上办理
        let winTotalNum = res.winTotalNum;      // 窗口办理
        let audTotalNum = res.audTotalNum;      // 内部办理

        let channel_type_g = this.$echarts.init(document.getElementById("channel_type_g"));
        let option = {
          tooltip:{
            show: true
          },
          color: ["#FAC305","#FA6365", "#4299FD","#19C976"],
          type:"pie",
          legend:[
            {
              orient: "horizontal",
              x: "5%",
              y: "80%",
              align: "left",
              data:['线上线下一体化'],
              icon:"circle"
            },
            {
              orient: "horizontal",
              x: "55%",
              y: "80%",
              align: "left",
              data:['网上办理'],
              icon:"circle"
            },
            {
              orient: "horizontal",
              x: "5%",
              y: "90%",
              align: "left",
              data:['窗口办理'],
              icon:"circle"
            },
            {
              orient: "horizontal",
              x: "55%",
              y: "90%",
              align: "left",
              data:['内部办理'],
              icon:"circle"
            }
            // orient: 'horizontal',
            // data:['线上线下一体化','网上办理','窗口办理',"内部办理"],
            // icon:"circle",
            // top:300,
            // left: 0
          ],
          series: [
            {
              roseType : 'radius',
              type: 'pie',
              radius: ['20%', '60%'],
              data: [{value:inteTotalNum,name:"线上线下一体化"},{value:onlineWebTotalNum,name:"网上办理"},
                {value:winTotalNum,name:"窗口办理"},{value:audTotalNum,name:"内部办理"}],
              startAngle:180,
              z:10,
              label : {
                show: false
              },
              labelLine:{
                normal:{
                  length: 9,
                  length2: 17
                }
              }
            }]
        };
        channel_type_g.setOption(option, true);
      },
      // 部门事项分布 bar
      draw_department_type_g(res) {

        let xData = [];
        let barData = [];
        let numData = [];
        if(res) {
          for(var i = 0; i < res.length; i ++) {
            xData[i] = res[i].deparName;
            barData[i] = (res[i].matterNum / 1000).toFixed(3);
            numData[i] = res[i].matterNum;
          }
        }
        let department_type_g = this.$echarts.init(document.getElementById("department_type_g"));
        let option = {
          color: ["#4299FD"],
          tooltip: {
            start:0,
            end: 40,
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#999'
              }
            },
            formatter:(res) => {
              console.log(res);
              let value = res[0].name + "<br/>";
              value += res[0].marker + res[0].value + "千件<br/>";
              return value;
            }
          },
          dataZoom: [
            {
              type: 'slider',
              show: true,
              handleSize: 8,
              start: 0,
              end: 40,
              showDetail: true,
              filter: "none",
              left: 7,
              maxValueSpan: 0
            }
          ],
          xAxis: [
            {
              type: 'category',
              data: xData,
              axisPointer: {
                type: 'shadow'
              },
              axisLabel: {
                interval: 0,
                rotate: -75
              }
            }
          ],
          yAxis: [

            {
              type: 'value',
              name: '           接件量 (千件)',
              axisTick: {
                show: false
              },
              splitLine: {
                lineStyle: {}
              },
              nameTextStyle: {
                color: ['#A0A0A0'],
                align: "right",
                width: 100
              },
              splitLine: {
                lineStyle: {
                  color: ['#fff']
                }
              }
            }
          ],
          grid: {
            left: '1%',
            right: '5%',
            bottom: '25%',
            top: '20%',
            containLabel: true
          },
          series: [
            {
              name: '事件项',
              type: 'bar',
              data: barData

            }
          ]
        };
        department_type_g.setOption(option, true);
      },
      // 服务类型分布 pie
      draw_service_type_g(res) {
        console.log("服务类型分布");
        console.log(res);
        // res = res[0];
        res = res[0];
        let total = res.sevTotalNum + res.auditTotalNum + res.funcTotalNum;
        let service_type_g = this.$echarts.init(document.getElementById("service_type_g"));
        let option = {
          color: ["#FAC305","#FA6365", "#4299FD"],
          type:"pie",
          tooltip:{
            formatter:(res) => {
              console.log(res);
              return res.marker + res.name + "<br/>" +
                  "<p style='text-align: left'>总计：" + res.data.numValue + "件" + "</p>" +
                "<p style='text-align: left;'>占比：" + res.data.value + "%</p>";
            }
          },
          legend:{
            orient: 'horizontal',
            data:['公共服务类','内部审批','行政职权类'],
          },
          series: [
            {
              type: 'pie',
              radius: ['20%', '60%'],
              data: [{numValue:res.sevTotalNum,name:"公共服务类", value:  (res.sevTotalNum * 100 / total).toFixed(2)},
                     {numValue:res.auditTotalNum,name:"内部审批", value:  (res.auditTotalNum * 100 / total).toFixed(2)},
                     {numValue:res.funcTotalNum,name:"行政职权类", value:  (res.funcTotalNum * 100 / total).toFixed(2)}],
              startAngle:180,
              z:10,
              label : {
                formatter: item=>{
                  return "{b|" + item.data.name + "}\n{a|\t" + item.value + "%}";
                },
                rich:{
                  a:{
                    color:"#A1A1A1",
                    align: "right",
                    lineHeight: 22
                  },
                  b:{
                    color:"#353535"
                  }
                },
                verticalAlign:"top"
              },
              labelLine:{
                show: false,
                normal:{
                  length: 30,
                  length2: 0
                }
              },
              itemStyle:{
                normal: {

                }
              }
            }]
        };
        service_type_g.setOption(option, true);
      },
      // 事项类型分布
      draw_item_type_g(res) {
        let citys = [];   //
        let data1 = [];   // 通用
        let data2 = [];   // 本级
        let data3 = [];   // 实施
        let end = 100;
        if(res) {
          for(var i = 0; i < res.length; i ++) {
            data1[i] = res[i].genTotal / 1000;
            data2[i] = res[i].total / 1000;
            data3[i] = res[i].lowerTotal / 1000;
            citys[i] = res[i].regionName;
          }
          end = parseInt(100 / ((citys.length / 5) + 1));
        }
        let item_type_g = this.$echarts.init(document.getElementById("item_type_g"));
        let option = {
          color: ["#FAC305","#FA6365", "#4299FD"],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#999'
              }
            },
            formatter:(res) => {
              let result = res[0].axisValue + "<br/>";
              for(var i = 0; i < res.length; i ++) {
                result += res[i].marker;
                result += res[i].value + "(千件)<br/>"
              }
              return result;
            }
          },
          legend:{
            orient: 'horizontal',
            data:['通用事项','本级事项','实施事项'],
          },
          dataZoom : [
            {
              type: 'slider',
              show: true,
              handleSize: 8,
              showDetail: false,
              filter: "none",
              start: 0,
              end: end,
              left:7,
              maxValueSpan: 0
            }
          ],
          xAxis: [
            {
              type: 'category',
              data: citys,
              axisPointer: {
                type: 'shadow'
              },
              axisLabel:{
                interval:0,
                rotate:0
              }
            }
          ],
          yAxis: [

            {
              type: 'value',
              name: '           接件量 (千件)',
              axisTick: {
                show: false
              },
              splitLine: {
                lineStyle: {
                }
              },
              nameTextStyle: {
                color: ['#A0A0A0'],
                align: "right",
                width: 100
              },
              splitLine: {
                lineStyle: {
                  color: ['#fff']
                }
              }
            }
          ],
          grid: {
            left: '1%',
            right: '5%',
            bottom: '25%',
            top: '20%',
            containLabel: true
          },
          series: [
            {
              name:'通用事项',
              type:'bar',
              data:data1

            },
            {
              name:'本级事项',
              type:'bar',
              data:data2
            },
            {
              name:'实施事项',
              type:'bar',
              data:data3
            }
          ]


        };
        item_type_g.setOption(option, true);
      },
      calColorValue() {   // 按百分比计算颜色
        this.cityStyle = (this.cityValue - 2)  + "%";
        this.districtStyle = (this.districtValue - 2) + "%";
        this.cityColor = this.calColor(this.cityValue);
        this.districtColor = this.calColor(this.districtValue);
      },
      calColor(percent) {
        return "#" + this.getColorValue(percent, this.rColor) +
          this.getColorValue(percent, this.gColor) +
          this.getColorValue(percent, this.bColor);
      },
      getColorValue(percent, color) {
        let p = parseInt(percent / 20);
        let value = parseInt(color.base[p] + ((percent % 20) / 20) * color.sub[p]);
        value = value.toString(16);
        if(value.length < 2) {
          value = "0" + value;
        }
        return value;
      },
      getColorValue(percent, color) {
        let p = parseInt(percent / 20);
        let value = parseInt(color.base[p] + ((percent % 20) / 20) * color.sub[p]);
        value = value.toString(16);
        if(value.length < 2) {
          value = "0" + value;
        }
        return value;
      }
    }
  }
</script>

<style lang="less" scoped>

  .hui-field {
    border-bottom: none;
    float: left;
  }

  .small_ball {
    width: .12rem;
    height: .12rem;
    border: .06rem solid black;
    background-color: black;
    border-radius: .12rem;
    float: left;
    margin-top: .06rem;
    margin-left: .04rem;

  }
  .red_dot {
    width: .16rem;
    height: .16rem;
    background-color: #FA6366;
    border: .08rem solid #FEE0E0;
    border-radius: .16rem;
    float: left;
  }

  .blue_dot {
    width: .16rem;
    height: .16rem;
    background-color: #2D7FFC;
    border: .08rem solid #D5E5FE;
    border-radius: .16rem;
    float: left;
  }
  .triangle_ship {
    width: 0;
    height: 0;
    border-left: .1rem solid transparent;
    border-right: .1rem solid transparent;
    border-top: .12rem solid #9B9B9B;
    float: left;
  }
  .livehood-page .container {
    .ht_box {
      margin-bottom: 0;
    }

    .tp_top {
      font-size: .25rem;
      color: #666666;
      height:.4rem;
    }

    .tp_bottom {
      text-align: center;
      color: #2D7FFC;
      height: .6rem;
      margin: 0 auto;
      font-size: .5rem;
      .tp_right  {
        font-size: .25rem;
      }
    }

    .zw_title {
      height: 1rem;
      background-color: #fff;
      width: 100%;
      margin: 0 auto;
      .func {
        float: left;
        height: .8rem;
        padding-top: .2rem;
        width: 20%;
        text-align: center;
        font-size: 12px;
        font-family: PingFangSC-Regular;
        .title_word {
          margin-bottom: .25rem;
          font-size: 12px !important;
          text-align: center;
          a {
            font-size: 12px;
            color: #333333;
            font-family: PingFangSC-Regular;
          }
        }
        .title_active {
          color: #2D7FFC;
        }
        .title_bottom {
          width: 35%;
          height: .04rem;
          background-color: #2D7FFC;
          margin: 0 auto;
          border: 1px solid #2D7FFC;
          border-radius: .04rem;
        }
      }
    }
    padding: 0.16rem 0;
    font-family: PingFangSC-Regular;

    .box {
      margin-top: .2rem;
      background-color: #fff;
      width: 100%;
    }
    .degree_type {
      .content {
        padding: 0.3rem 0 0.3rem 0.3rem;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        .degree_type_g {
          width: 97%;
          height: 320px;
        }
      }
    }
    .channel_type {
      .content {
        padding: 0.3rem 0 0.3rem 0.3rem;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        .channel_type_g {
          width: 97%;
          height: 320px;
        }
      }
    }
    .department_type{
      .content {
        padding: 0.3rem 0 0.3rem 0.3rem;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        .department_type_g {
          width: 97%;
          height: 360px;
        }
      }
    }
    .service_type {
      .content {
        padding: 0.3rem 0 0.3rem 0.3rem;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        .service_type_g {
          width: 97%;
          height: 280px;
        }
      }
    }
    .item_type {
      .content {
        padding: 0.3rem 0 0.3rem 0.3rem;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        .item_type_g {
          width: 97%;
          height: 340px;
        }
      }

    }

    .enter_situation {
      .content {
        padding: 0.3rem 0 0.3rem 0.3rem;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        .enter_situation_g {
          width: 97%;
          height: 340px;
        }
        .tp_container {
          float: left;
          width: 30%;
          margin: .1rem;
          .tp_top{
            .top_word {
              float: left;
              margin-left: .1rem;
            }
          }

        }
      }
    }
    .time_service_count {
      .content{
        padding: 0.3rem 0 0.3rem 0.3rem;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        .time_service_count_g {
          .office_service_count_g {
            width: 97%;
            height: 430px;
          }
        }
      }
    }

    .office_service_count {
      .content {
        padding: 0.3rem 0 0.3rem 0.3rem;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        .office_service_count_g {
          width: 97%;
          height: 430px;
        }
      }
      .tab {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 0.6rem;

        >p {
          padding: 0.12rem 0.66rem;
          font-size: 12px;
          letter-spacing: 0.18px;
        }

        .left {
          border-radius:50px 0 0 50px;
        }

        .left.active, .right.active {
          background: #2D7FFC;
          color: #fff;
        }

        .left.defult, .right.default {
          border: 1px solid #f1f3f6;
          box-shadow: 0 2px 4px 0;
        }

        .right {
          border-radius: 0 50px 50px 0;
        }


        .left.defult {
          border-right: 0;
        }

        .left.default {
          border-left: 0;
        }
      }
    }



    .keyword{
      height: 1.4rem;
      overflow: hidden;
      .keyword_top {
        height: 1.4rem;
        font-family: PingFangSC-Regular;
        font-size: 15px;
        color: #333333;
        text-align: left;
        .keyword_top_part {
          float: left;
          width: 49%;
          margin-top: .4rem;
          .red_dot {
            margin-left: .3rem;
            margin-top: .05rem;
          }
          .blue_dot {
            margin-left: .3rem;
            margin-top: .05rem;
          }
          .triangle_ship {
            margin-left: 1rem;
            margin-top: .1rem;
            float:left;
          }
          div {
            float: left;
            margin-left: 0;
          }
        }
      }
      .keyword_bottom_part {
        font-family: PingFangSC-Regular;
        height: 1rem;
        font-size: 14px;
        color: #333333;
        padding-top: .3rem;
        border-top: .01rem solid #F1F3F6;


        /*border-top: 2rem solid #F1F3F6;*/
        .bottom_left {
          float: left;
          width: 49%;
          .blue_dot {
            margin-left: 1.8rem;
          }
          .keyword_bottom_left {
            float: left;
            margin-left: .3rem;
          }
        }
        .bottom_right {
          float: left;
          width: 49%;
          .red_dot {
            margin-left: .4rem;
            margin-top: .05rem;
          }

          .keyword_bottom_right {
            float: left;
            margin-left: .3rem;
            margin-top: .05rem;
          }
        }


      }

    }
    .box {
      background: #fff;
      margin-bottom: 0.36rem;
      .header{
        height: 0.98rem;
        line-height: 0.98rem;
        padding: 0 0.36rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.28rem;
        border-bottom: 1px solid #F1F3F6;

        .left {
          .c_b_tit_right {
            font-family: "Microsoft-Yahei";
            font-size: .10rem;
            float: right;
            color: #999999;
            text-align: right;
          }
          .v-line {
            background: #2D7FFC;
            width: 0.06rem;
            height: 0.24rem;
            display: inline-block;
            margin-right: 0.1rem;
          }
          >p {
            display: inline-block;
            font-size: 15px;
            color: #333333;
            letter-spacing: 0.18px;
          }
        }
        .right {
          color: #999;
          img {
            height: 0.3rem;
            position: relative;
            top: 2px;
            display: inline-block;
            margin-right: 2px;
          }
        }
      }
    }
    .user_a {
      .content {
        padding: 0.3rem 0 0.3rem 0.3rem;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        .user_a_g {
          height: 350px;
          width: 100%;
        }
      }
    }
  }

</style>
