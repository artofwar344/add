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
          <div class="title_word">
            <router-link to="/affairsMonitorServiceList">服务清单</router-link>
          </div>

        </div>
        <div class="func">
          <div class="title_word title_active">
            服务公示
          </div>
          <div class="title_bottom"></div>
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
                <Huiselect ref="pickerselect01"
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
      </div>
      <div class="box finished_type">
        <div class="header">
          <div class="left">
            <span class="v-line"></span>
            <p>办结率</p>
          </div>
        </div>
        <div class="content">
          <div class="keyword_top_part" v-bind:style={color:finishedColor}>
            {{finishedValue}}%
          </div>
          <div class="keyword_bottom_part">
            <div class="color_container">
              <div class="color_top">
                <div class="color_word" style="">
                  <div class="word">0</div></div>
                <div class="color_word" style=""><div class="word" style="left: -.1rem;">40</div></div>
                <div class="color_word" style=""><div class="word" style="left: -.1rem;">80</div></div>
                <div class="color_word" style=""><div class="word" style="left: -.1rem;">120</div></div>
                <div class="color_word" style=""><div class="word" style="left: -.1rem;">160</div><div class="word" style="left: 82%">200</div></div>
              </div>
              <div class="color_middle">
                <div class="color_bar"></div>
                <div class="color_trangle" v-bind:style={borderBottomColor:finishedColor,left:finishedStyle}></div>
              </div>
              <div class="color_bottom">
                <div class="tp_container">
                  <div class="tp_top">接件总数</div>
                  <div class="tp_bottom">
                    {{complate_rec}}<span class="tp_right">件</span>
                  </div>
                </div>
                <div class="tp_container" style="border-left: 1px solid #F1F3F6">
                  <div class="tp_top">办结总数</div>
                  <div class="tp_bottom">
                    {{complate_acc}}<span class="tp_right">件</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="box user_a">
        <div class="header">
          <div class="left">
            <span class="v-line"></span>
            <p>用户分析</p>
          </div>
        </div>
        <div class="content">
          <div class="user_a_g" id="user_a_g"></div>
        </div>
      </div>
      <div class="box raise_type">
        <div class="header">
          <div class="left">
            <span class="v-line"></span>
            <p>提速率</p>
          </div>
        </div>
        <div class="content">
          <div class="raise_type_g" id="raise_type_g"></div>
        </div>
      </div>
      <div class="box hot_service">
        <div class="header">
          <div class="left">
            <span class="v-line"></span>
            <p>热门服务</p>
          </div>
        </div>
        <div class="content">
          <div class="list">
            <p class="list-item" v-for="item in hotService">
                <span>{{item.matterName}}<h3>{{item.deparName}}</h3></span>
              <img :src="require('@/assets/images/focusOpinion/arrow@3x.png')" alt="">
            </p>
          </div>
        </div>
      </div>
      <div class="box satisfaction">
        <div class="header">
          <div class="left">
            <span class="v-line"></span>
            <p>事项服务满意度</p>
          </div>
        </div>
        <div class="content">
          <div class="satisfaction_g" id="satisfaction_g"></div>
          <div class="progess" v-for="item in satisBarData">
            <div class="tab">
              <div class="tab_text">{{item.matterName}}</div>
              <mt-progress :value="item.satRate" class="blue" style="width: 100%;">
                <div slot="end" class="right">{{item.satRate}}%</div>
              </mt-progress>
            </div>
          </div>
        </div>
      </div>
      <!--<div style="width: 100%; height: 1000px">-->
        <!--<div id="heatmap" style="width: 97%; height: 500px;"></div>-->
      <!--</div>-->
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
          values: [{"text":"云南省", value:"530000"}, {"text":"昆明市","value":"530100"},{"text":"曲靖市","value":"530300"},{"text":"玉溪市","value":"530400"},{"text":"保山市","value":"530500"},{"text":"昭通市","value":"530600"},{"text":"丽江市","value":"530700"},{"text":"普洱市","value":"530800"},{"text":"临沧市","value":"530900"},{"text":"楚雄州","value":"532300"},{"text":"红河州","value":"532500"},{"text":"文山州","value":"532600"},{"text":"大理州","value":"532900"},{"text":"迪庆州","value":"533400"},{"text":"德宏州","value":"533100"},{"text":"怒江州","value":"533300"},{"text": "西双版纳州","value": "532800"}],
          className: 'slot1',
          showText:'text',
          defaultIndex:0
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
        finishedValue: 0,
        finishedStyle:"",
        finishedColor:"",
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
        regFlag : "1",
        complate_acc:0,
        complate_rec:0,
        hotService: [],
        satisBarData:[],
        current_date:"",
        current_last_day: "",
        current_month:"",
        current_year:""
      }
    },

    components:{
      towtop
    },
    created () {

    },

    mounted () {
      // 获取时间
      this.ajaxWapper("/goven/common/nowDateQry", {},
        (res) => {
          console.log(res);
          this.current_date = res.data.data[0].date;
          this.current_last_day = res.data.data[0].latestDay;
          this.current_month = res.data.data[0].month;
          this.current_year = res.data.data[0].year;
          this.mountedMethod();
        }
      )
    },

    computed: {},
    methods: {
      getMonthDate(sub) {
        let date = new Date(
          new Date().getTime() - sub * 24 * 60 * 60 * 1000
        );
        let str = date.getFullYear() + "";
        if(date.getMonth() > 8) {
          str += (date.getMonth() + 1) + "";
        } else {
          str += "0" + (date.getMonth() + 1)
        }
        if(date.getDate() > 9) {
          str += date.getDate() + "";
        } else {
          str += "0" + date.getDate();
        }
        return str;
      },
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
        let now = new Date();
        let queryDate = now.getFullYear() + "" + (now.getMonth() + 1) + now.getDate();
        // --- 办结率
        let compQuery = {regionId:this.regionId,chanType:"-1", regFlag:this.regFlag,
          startDate:this.getMonthDate(0), endDate:this.current_last_day, date :
          this.getMonthDate(0)
        };
        this.ajaxWapper("/goven/svrBull/compleIndexQry", compQuery,
          (res) => {
            this.finishedValue = res.data.data[0].comple;
            this.complate_acc =  res.data.data[0].tranTotalNum   ; // 办件
            this.complate_rec = res.data.data[0].acceTotalNum;     // 接件
            this.calColorValue();
          });
        // -- 用户指标查询
        let yh_today = new Date();
        let yh_today_str = yh_today.getFullYear()  + "";
        yh_today_str += (yh_today.getMonth() > 8 ? (yh_today.getMonth() + 1) + "" : "0" + (yh_today.getMonth() + 1)) ;
        yh_today_str += ((yh_today.getDate() - 1) > 9 ? (yh_today.getDate() - 1)+ "" : "0" + (yh_today.getDate() - 1));
        let userQuery = {regionId:this.regionId, regFlag:this.regFlag,
          startDate:yh_today_str, endDate:yh_today_str};
        this.ajaxWapper("/goven/svrBull/userIndexQry", userQuery,
          (res) => {
            res = res.data.data;
            this.draw_user_a_g(res);
          }
        )
        // -- 提速率
        let raiseQuery = {regionId : this.regionId, regFlag : this.regFlag,
          startDate: this.getMonth(1), endDate: this.getMonth(1)};
        this.ajaxWapper("/goven/svrBull/serviceIndexQry", raiseQuery, (res) => {
          this.draw_raise_type_g(res.data.data);
        });
        // -- 热门服务
        let hotQuery = {regionId : this.regionId, chanType : "-1",
          regFlag : this.regFlag,  startDate: this.getMonth(1), endDate: this.getMonth(1)};
        this.ajaxWapper("/goven/svrBull/hotSvrIndexQry", hotQuery,
          (res) => {
            console.log(res);
            res = res.data.data;
            console.log(res);
            this.hotService = res;
            console.log(this.hotService);
            if(this.hotService) {
              for(var i = 0; i < this.hotService.length; i ++) {
                console.log(this.hotService[i].deparName)
                if(this.hotService[i].matterName && this.hotService[i].matterName.length > 20) {
                  this.hotService[i].matterName = this.hotService[i].matterName.substring(0, 20) + "...";
                }
              }
            }
          });
        // -- 事项服务满意度
        let satisQuery = {regionId : this.regionId, chanType : "-1",
          regFlag : this.regFlag,  startDate: this.getMonth(1), endDate: this.getMonth(1) };
        this.ajaxWapper("/goven/svrBull/satisfaction1IndexQry",satisQuery, (res) => {
          this.draw_satisfaction_g(res.data.data);
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
        console.log("第二个")
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
      ajaxWapper(url, query, recall) {
        var urls = window.location;
        let UrlIp=''
        // 路由IP
        if(urls.hostname=='web.yn.gov.cn'){
          UrlIp="https://zwfw.yn.gov.cn:8081"+url
        }else{
          UrlIp="http://128.196.221.144:8081"+url
        }
        UrlIp="https://zwfw.yn.gov.cn:8081"+url
        // UrlIp="https://data.yn.gov.cn:8081"+url
        // UrlIp="https://data.yn.gov.cn:8081"+url
        this.$axios({method:"post",url:UrlIp,data:query}).then(res=>{
          recall(res);
        });
      },
      // 如果为空返回0
      nullToZero(value) {
        if(!value) {
          return 0;
        } else {
          return value;
        }
      },
      // 事项服务满意度
      draw_satisfaction_g(res) {
        console.log("满意度")
        console.log(res);
        // 内圈满意度
        let sat = 0;
        let isSat = 0;
        let noSat = 0;

        let type1 = [];             // 公共服务
        let type2 = [];             // 行政审批
        let type3 = [];             // 行政服务
        if(res) {
          sat = this.nullToZero(res[0].sat);       // 满意
          isSat = this.nullToZero(res[0].isSat);   // 较满意
          noSat = this.nullToZero(res[0].noSat);   // 不满意
          for(let i = 1; i < res.length; i ++) {
              var type = res[i].rootType;
              var stype = null;
              switch(type) {
                case "1": stype = type1  ; break;   // 公共服务
                case "2": stype = type2 ; break;    // 行政审批
                case "3": stype = type3  ; break;   // 行政服务
              }
              if(stype) {
              stype[0] = res[i].matterSat;
              stype[1] = res[i].matterIsSat;
              stype[2] = res[i].matterNoSat;
              }
          }
        }
        console.log(type1);
        console.log(type2);
        console.log(type3);
        let satisfaction_g = this.$echarts.init(document.getElementById('satisfaction_g'));
        let option = {
          tooltip:{
            show : true,
            formatter: (params) => {
              let satisQuery = {regionId:this.regionId, regFlag : this.regFlag
                ,startDate: this.getMonth(1),endDate: this.getMonth(1),chanType: "-1"};
              let stype = 0;    // 满意度
              switch(params.data.name2) {
                case "很满意" : satisQuery.satFlag = "1"; break;
                case "较满意" : satisQuery.satFlag = "2"; break;
                case "不满意" : satisQuery.satFlag = "3"; break;
              }
              switch(params.data.name) {
                case "公共服务类": satisQuery.matterFlag="1";if(!params.data.type) {satisQuery.rootType="1"}  ;break;
                case "内部审批类": satisQuery.matterFlag="2";if(!params.data.type) {satisQuery.rootType="2"}  ;break;
                case "行政职权类": satisQuery.matterFlag="3";if(!params.data.type) {satisQuery.rootType="3"};break;
              }

              let rtValue = "";
              if(params.data.name2) {
                rtValue = params.marker + params.name + "<br/>" + params.data.name2 + "<br/>" + params.data.value + "次";
              } else {
                rtValue = params.marker + params.name + "<br/>" + params.data.value + "次";
              }
              console.log(satisQuery);
              this.ajaxWapper("/goven/svrBull/satisfaction2IndexQry", satisQuery,
                (res) => {
                  console.log(JSON.stringify(res.data.data));
                  this.satisBarData = res.data.data;
                })
              return rtValue;
            }
          },
          legend:[
            {
              orient: "horizontal",
              x: "5%",
              y: "80%",
              align: "left",
              data:['很满意'],
              icon:"circle"
            },{
              orient: "horizontal",
              x: "35%",
              y: "80%",
              align: "left",
              data:['较满意'],
              icon:"circle"
            },{
              orient: "horizontal",
              x: "65%",
              y: "80%",
              align: "left",
              data:['不满意'],
              icon:"circle"
            },
            {
              orient: "horizontal",
              x: "5%",
              y: "90%",
              align: "left",
              data:['行政职权类'],
              icon:"circle"
            },{
              orient: "horizontal",
              x: "35%",
              y: "90%",
              align: "left",
              data:['公共服务类'],
              icon:"circle"
            },{
              orient: "horizontal",
              x: "65%",
              y: "90%",
              align: "left",
              data:['内部审批类'],
              icon:"circle"
            }
          ]

          // icon:"circle",
          // data:["很满意","较满意","不满意","行政职权类","公共服务类","内部审批类"],
          // y:"bottom",
          // margin: 100
          ,
          series: [
            {
              center:['50%', '40%'],
              type:"pie",
              radius: ["30%", "60%"],
              data:[{name:"很满意", value:sat, name2:"很满意", type: 0}, {name:"较满意", value:isSat, name2:"较满意", type: 0}, {name:"不满意", value:noSat, name2:"不满意", type: 0}],
              label : {
                show: false
              },
              itemStyle:{
                normal: {
                  color: function(params) {
                    var color = ["#0CCD88",
                      "#3D93FC",
                      "#FA6366"];
                    return color[params.dataIndex];
                  },

                }
              }
            },{
              center:['50%', '40%'],
              type:"pie",
              radius:["63%", "67%"],
              data:[{name:"行政职权类", value:type1[0], name2:"很满意"},{name:"公共服务类", value:type2[0], name2:"很满意"}, {name:"内部审批类", value:type3[0], name2:"很满意"},
                    {name:"行政职权类", value:type1[1], name2:"较满意"},{name:"公共服务类", value:type2[1], name2:"较满意"}, {name:"内部审批类", value:type3[1], name2:"较满意"},
                    {name:"行政职权类", value:type1[2], name2:"不满意"},{name:"公共服务类", value:type2[2], name2:"不满意"}, {name:"内部审批类", value:type3[2], name2:"不满意"}],
              label : {
                show: false
              },
              itemStyle:{
                normal: {
                  color: function(params) {
                    var color = ["#7066E6",
                      "#FFEC2B",
                      "#FF9B12","#7066E6",
                      "#FFEC2B",
                      "#FF9B12","#7066E6",
                      "#FFEC2B",
                      "#FF9B12"];
                    return color[params.dataIndex];
                  },

                }
              }
            }]
        };
        satisfaction_g.setOption(option, true);
      },
      // 提速率
      draw_raise_type_g(res) {
        console.log("提速率");
        console.log(res);
        let xData = [];
        let monthData = [];
        let evagData = [];
        if(res) {
          for(var i = 0; i < res.length; i ++) {
            xData[i] = res[i].orgName;
            evagData[i] = res[i].onAcceMT;
            monthData[i] = res[i].onacceSpeed;
          }
        }
        let raise_type_g = this.$echarts.init(document.getElementById('raise_type_g'));
        let option = {
          color: ["#FAC305","#4299FD"],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#999'
              }
            }
          },
          dataZoom : [
            {
              type: 'slider',
              show: true,
              start: 0,
              end: 40,
              handleSize: 8,
              showDetail: false,
              filter: "none",
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
              axisLabel:{
                interval:0,
                rotate:20
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '           办事平均时长(分钟)',
              axisTick: {
                show: true
              },
              nameTextStyle: {
                color: ['#999999'],
                align: "right",
              },
              splitLine: {
                lineStyle: {
                  color: ['#fff']
                }
              }
            },
            {
              type: 'value',
              name: '月办事提速率',
              axisTick: {
                show: false
              },
              nameTextStyle: {
                color: ['#999999'],
                width: 100
              },
              splitLine: {
                lineStyle: {
                  color: ['#fff']
                }
              },
              axisLabel:{
                formatter:"{value}% "}
            }
          ],
          grid: {
            left: '3%',
            right: '5%',
            bottom: '25%',
            top: '20%',
            containLabel: true
          },
          series: [
            {
              name:'月办事提速率',
              type:'line',
              data:monthData,
              yAxisIndex: 1
            },
            {
              name:'办事平均时长(分钟)',
              type:'bar',
              data:evagData
            }
          ]
        };
        raise_type_g.setOption(option, true);
      },
      // 用户分析
      draw_user_a_g(res) {
        res = res[0];
        let ManTotalNum = res.ManTotalNum;              // 男
        let ProvTotalNum = res.ProvTotalNum;            // 本省
        let WomanTotalNum = res.WomanTotalNum;          // 女
        let legPerTotalNum = res.legPerTotalNum;        // 法人
        let natPerTotalNum = res.natPerTotalNum;        // 自然人
        let otherProvTotalNum = res.otherProvTotalNum;  // 外省
        let user_a_g = this.$echarts.init(document.getElementById('user_a_g'));
        let option = {
          tooltip:{
            show: true
          },
          color:["#FA6366", "#FACA08", "#3D93FC", "#0CCD88"],
          series: [
            {
              type: 'pie',
              radius: ['40%', '50%'],
              data: [{value:ManTotalNum,name:"男人"},{value:WomanTotalNum,name:"女人"}],
              avoidLabelOverlap: true,
              startAngle:180,
              z:10,
              label : {
                show: true
              },
              labelLine:{
                normal:{
                  length:37
                }
              },
              itemStyle:{
                normal: {
                  color: function(params) {
                    var color = ["#FCDD0D", "#FB7E81"];
                    return color[params.dataIndex];
                  },

                }
              }
            },
            {
              labelLine:{
                normal:{
                  length:27
                }
              },
              z:9,
              startAngle:90,
              type: 'pie',
              radius: ['50%', '60%'],
              data: [{value:ProvTotalNum,name:"本省"},{value:otherProvTotalNum,name:"外省"}],
              label: {
                show: true
              },
              itemStyle:{
                normal: {
                  color: function(params) {
                    var color = ["#08C173", "#74E99B"];
                    return color[params.dataIndex];
                  }
                }
              }
            },
            {
              startAngle:0,
              type: 'pie',
              radius: ['60%', '70%'],
              color:["#5F57E4","#2D7FFC"],
              data: [{value:legPerTotalNum,name:"法人"},{value:natPerTotalNum,name:"自然人"}],
              labelLine:{
                normal:{
                  length:2
                }
              },
              label : {
                show: true
              }
            }]
        }
        user_a_g.setOption(option, true);
      },
      calColorValue() {   // 按百分比计算颜色
        this.finishedStyle = (this.finishedValue/2 - 2)  + "%";
        this.finishedColor = this.calColor(this.finishedValue / 2);
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
    .list {
      padding: 0 0.36rem;
      .list-item {
        padding: 0 0.11rem;
        border-bottom: 1px solid #f1f3f6;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 0.8rem;
        font-size: .28rem;
        color: #444444;
        text-align: left;
        span {
          display: inline-block;
          h3 {
            color: #A8A8A8;
            font-size: .17rem;
          }
        }

        span:last-child {
          color: #d6d8da;
        }

        img {height: 0.3rem;}
      }
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

    .satisfaction {
      .content {
        padding: 0.3rem 0.3rem 0.3rem 0.3rem;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        .satisfaction_g {
          height: 320px;
          width: 97%;
        }
        .progess {
          width: 100%;
          padding: .2rem .1rem;
          .tab{
            border-top: 1px solid #F1F3F6;
            .tab_text{
              margin-top: .2rem;
              text-align: left;
              color: #333333;
              width: 100%;
              font-family: PingFangSC-Regular;
              font-size: 12px;
            }
            .mt-progress-content {
              padding: 0.06rem;

              .mt-progress-runway {
                height: 0.2rem !important;
                border: 1px solid #ebebeb;
                border-radius: 50px;
                background: #fff;
              }

              .mt-progress-progress {
                height: 0.12rem !important;
                border-radius: 50px;
              }
            }

            .left {margin-right: 0.2rem;}

            .right {margin-left: 0.2rem;
              font-size: 12px;
              color: #2D7FFC;}

            .blue .mt-progress-progress {
              background-color: #2D7FFC;
            }

            .yellow .mt-progress-progress {
              background-color: #FAC306;
            }

            .red .mt-progress-progress {
              background-color: #FA6366;
            }
          }


        }
      }
    }

    .raise_type {
      .content {
        padding: 0.3rem 0 0.3rem 0.3rem;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        .raise_type_g {
          height: 450px;
          width: 97%;
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
          width: 97%;
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
    .finished_type {
      .content {
        padding: 0.3rem 0 0.3rem 0.3rem;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        .keyword_top_part {
          font-size: .5rem;
          text-align: left;
          margin: .2rem .3rem;
        }
        .keyword_bottom_part {
          width: 97%;
          .color_container {
            width: 100%;
            margin: 0 auto;
            .color_top {
              width: 100%;
              height: .35rem;
              position: relative;
              .color_word {
                /*position: absolute;*/
                color: #999999;
                float: left;
                width: 20%;
                height: .22rem;
                position: relative;
                .word {
                  position: absolute;
                }
              }
            }
            .color_middle {
              width: 100%;
              height: .4rem;
              margin: 0 auto;
              position: relative;
              .color_bar {
                margin: 0 auto;
                width: 100%;
                height: .15rem;
                border: 0.01rem solid #fff;
                border-radius: .5rem;
                background:-webkit-linear-gradient(left, #45090F, #7D1C3A, #DD372F, #EF853C, #F0C756, #64CD35);
              }
              .color_trangle {
                width: 0;
                height: 0;
                border-left: .2rem solid transparent;
                border-right: .2rem solid transparent;
                border-bottom: .2rem solid #9B9B9B;
                position: absolute;
              }
            }
            .color_bottom {
              margin-top: .4rem;
              .tp_container {
                float: left;
                width: 49%;
              }
            }
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

  }

</style>
