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
          <div class="title_word">
            <router-link to="/affairsMonitorpublicityService">服务公示</router-link>
          </div>
        </div>
        <div class="func">
          <div class="title_word title_active">
            办事大厅
          </div>
          <div class="title_bottom"></div>
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
      <div class="box office_survey">
        <div class="header">
          <div class="left">
            <span class="v-line"></span>
            <p>办事大厅概况</p>
          </div>
        </div>
        <div class="content">
          <div class="tp_container">
            <div class="tp_top">今日接件总数</div>
            <div class="tp_bottom">
              {{view_today_acceTotalNum}}<span class="tp_right">件</span>
            </div>
          </div>
          <div style="float: left;width: .02rem; height: .7rem;background-color: #F1F3F6; margin-top: .5rem;"></div>
          <div class="tp_container">
            <div class="tp_top">今日办结总数</div>
            <div class="tp_bottom">
              {{view_today_tranTotalNum}}<span class="tp_right">件</span>
            </div>
          </div>
          <div class="tp_container">
            <div class="tp_top">累计接件总数</div>
            <div class="tp_bottom">
              {{view_acceTotalNum}}<span class="tp_right">件</span>
            </div>
          </div>
          <div style="float: left;width: .02rem; height: .7rem;background-color: #F1F3F6; margin-top: .5rem;"></div>
          <div class="tp_container">
            <div class="tp_top">累计办结总数</div>
            <div class="tp_bottom">
              {{view_tranTotalNum}}
              <span class="tp_right">件</span>
            </div>
          </div>
          <div class="tp_container">
            <div class="tp_top">大厅总数</div>
            <div class="tp_bottom">
              {{view_hallTotalNum}}<span class="tp_right">个</span>
            </div>
          </div>
          <div style="float: left;width: .02rem; height: .7rem;background-color: #F1F3F6; margin-top: .5rem;"></div>
          <div class="tp_container">
            <div class="tp_top">大厅窗口数</div>
            <div class="tp_bottom">
              {{view_hallWinTotalNum}}<span class="tp_right">个</span>
            </div>
          </div>
          <div class="tp_container">
            <div class="tp_top">大厅面积总数</div>
            <div class="tp_bottom">
              {{view_hallAreaTotalNum}}<span class="tp_right">㎡</span>
            </div>
          </div>
          <div class="tp_splite"></div>
          <div class="tp_container">
            <div class="tp_top">总人数</div>
            <div class="tp_bottom">
              {{view_personTotalNum}}<span class="tp_right">人</span>
            </div>
          </div>
        </div>

      </div>
      <div class="box region_service">
        <div class="header">
          <div class="left">
            <span class="v-line"></span>
            <p>地区服务量</p>
          </div>
        </div>
        <div class="content">
          <div class="region_service_g" id="region_service_g"></div>
        </div>
      </div>
      <div class="box office_service_count">
        <div class="header">
          <div class="left">
            <span class="v-line"></span>
            <p>部门服务量</p>
          </div>
        </div>
        <div class="content">
          <div class="tab" style="margin: .2rem auto;height: .4rem;">
            <p :class="fsData== 0 ? 'left active':'left default'" @click="switchType(0)">接件量</p>
            <p :class="fsData== 1 ? 'right active':'right default'"  @click="switchType(1)"
               style="box-shadow:none;">办件量</p>
          </div>
          <div class="office_service_count_g" id="office_service_count_g"></div>
        </div>
      </div>

      <div class="box time_service_count">
        <div class="header">
          <div class="left">
            <span class="v-line"></span>
            <p>时间段服务量趋势图</p>
          </div>
        </div>
        <div class="content">
          <div class="time_service_count_g" id="time_service_count_g" style="width: 97%; height: 430px">

          </div>
        </div>
      </div>
      <div class="box enter_situation">
        <div class="header">
          <div class="left">
            <span class="v-line"></span>
            <p>入驻情况</p>
          </div>
        </div>
        <div class="content">
          <div class="enter_situation_g" id="enter_situation_g"></div>
          <div>
            <div class="tp_container">
              <div class="tp_top"><div class="small_ball" style="background-color:#FA6366;border-color:#FA6366"></div><div class="top_word">入驻部门总数</div></div>
              <div class="tp_bottom">
                {{enterData.enterTotalNum}}<span class="tp_right">个</span>
              </div>
            </div>
            <div class="tp_container">
              <div class="tp_top"><div class="small_ball" style="background-color:#FACA08;border-color:#FACA08"></div><div class="top_word">部门总数</div></div>
              <div class="tp_bottom">
                {{enterData.deparTotalNum}}<span class="tp_right">个</span>
              </div>
            </div>
            <div class="tp_container">
              <div class="tp_top">部门入驻率</div>
              <div class="tp_bottom">
                {{enterData_deparRate}}%
              </div>
            </div>
            <div class="tp_container">
              <div class="tp_top"><div class="small_ball" style="background-color:#0CCD88;border-color:#0CCD88"></div><div class="top_word">入驻事项总数</div></div>
              <div class="tp_bottom">
                {{matterEnterTotalNum}}<span class="tp_right">件</span>
              </div>
            </div>
            <div class="tp_container">
              <div class="tp_top"><div class="small_ball" style="background-color:#3D93FC;border-color:#3D93FC"></div><div class="top_word">事项总数</div></div>
              <div class="tp_bottom">
                {{enterData.matterTotalNum}}<span class="tp_right">件</span>
              </div>
            </div>
            <div class="tp_container">
              <div class="tp_top">事项入驻率</div>
              <div class="tp_bottom">
                {{enterData.matterRate}}%
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--<div style="width: 100%; height: 1000px">-->
      <!--&lt;!&ndash;<div id="heatmap" style="width: 97%; height: 500px;"></div>&ndash;&gt;-->
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
          values:  [{"text":"云南省", value:"530000"}, {"text":"昆明市","value":"530100"},{"text":"曲靖市","value":"530300"},{"text":"玉溪市","value":"530400"},{"text":"保山市","value":"530500"},{"text":"昭通市","value":"530600"},{"text":"丽江市","value":"530700"},{"text":"普洱市","value":"530800"},{"text":"临沧市","value":"530900"},{"text":"楚雄州","value":"532300"},{"text":"红河州","value":"532500"},{"text":"文山州","value":"532600"},{"text":"大理州","value":"532900"},{"text":"迪庆州","value":"533400"},{"text":"德宏州","value":"533100"},{"text":"怒江州","value":"533300"},{"text": "西双版纳州","value": "532800"}],
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


        cityName:"云南省",
        titlename: '云南省政务服务大数据监控中心',
        fsData:1,
        regionId : "530000000000",
        regFlag : "1",
        enterData : {},
        enterData_deparRate : 0,
        enterData_matterRate: 0,
        view_tranTotalNum:0,
        view_acceTotalNum:0,
        view_today_acceTotalNum: 0,
        view_today_tranTotalNum: 0,
        view_hallTotalNum:0,          // 大厅总数
        view_hallWinTotalNum:0,       // 大厅窗口总数
        view_personTotalNum: 0,       // 人员总数
        view_hallAreaTotalNum:0,       // 大厅面积总数
        const_area: {},
        empty_code:"Y003",
        matterEnterTotalNum: 0,
        matterRate: 0,
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
        this.selectCity();  // 获取城市信息
        this.hallView();
        //  地区服务量
        let regionRequest = {regionId: this.regionId, regFlag: this.regFlag,
          startDate:this.getMonth(1), endDate:this.getMonth(1)};
        this.ajaxWapper("/goven/hall/regionAcceTranIndexQry", regionRequest, (res) => {
          this.draw_region_service_g(res.data.data);
        })

        // 部门服务量
        this.switchType(1);
        // --- 时间段
        // this.time_service_init();
        let timeQuery = {
          regionId: this.regionId, regFlag: this.regFlag, chanType: "-1",flag: 2,startDate: this.getMonth(6), endDate: this.getMonth(1)
        };
        this.ajaxWapper("/goven/hall/deparSequIndexQry", timeQuery,
          (res) => {
            this.draw_time_service_count_g(res.data.data);
          });
        // this.draw_time_service_count_g();
        // this.draw_office_service_count_g();

        // 入驻情况
        let enterDeptRequest = {regionId: this.regionId, regFlag: this.regFlag,endDate: this.getMonth(1),startDate: this.getMonth(1)};  // 入驻部门
        this.ajaxWapper("/goven/hall/entDeparIndexQry", enterDeptRequest,
          (res) => {
            console.log("入驻部门");
            console.log(res);
            if(res.data.code == this.empty_code || !res.data.data) {
              this.enterData.deparTotalNum = 0;
              this.enterData.enterTotalNum = 0;
              this.enterData.matterEnterTotalNum = 0;
              this.enterData.matterTotalNum = 0;
              this.enterData.matterRate = 0;
              this.enterData.deparRate = 0;
              this.enterData_deparRate = 0;
              let empty = this.empty_code;
              this.draw_enter_situation_g();
              return;
            }
            this.enterData_deparRate = res.data.data[0].deparRate; //部门入驻率
            this.enterData.deparTotalNum =res.data.data[0].deparTotalNum;        //部门总数
            this.enterData.enterTotalNum = res.data.data[0].enterTotalNum;  //入驻部门总数
            // 入驻事项指标查询服务
            let matterQuery = {regionId: this.regionId, regFlag: this.regFlag,endDate: this.getMonth(1),startDate: this.getMonth(1)};
            this.ajaxWapper("/goven/hall/entMatterIndexQry", matterQuery,
              (res) => {

                this.matterEnterTotalNum = res.data.data[0].enterTotalNum;  // 入驻事项总数
                this.enterData.matterTotalNum = res.data.data[0].matterTotalNum;      // 事项总数
                this.enterData.matterRate = res.data.data[0].matterRate;              // 事项入驻率
                console.log("entMatterIndexQry");
                console.log(this.matterEnterTotalNum);
                console.log(this.enterData.matterTotalNum);
                console.log(this.enterData.matterRate);
                // this.enterData_matterRate = res.data.data[0].matterRate;
                // this.enterData.matterName = res.data.data[0].matterName;
                this.draw_enter_situation_g();
              });
          }
        )
        console.log("入驻情况完成");
        return;
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
        this.mountedMethod();                     // 刷新页面
        console.log("当前regionId:" + this.regionId);
        console.log("当前regFlag:" + this.regFlag);
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
        console.log("当前region_code:" + this.regionId);
        console.log("当前regFlag:" + this.regFlag);
        if(typeof selectedVal[0] === 'object'){
          this.confirmValSelect02 = selectedVal[0].text;
        }else{
          this.confirmValSelect02 = selectedVal;
        }
      } ,
      ajaxWapper(url, query, recall) {
        var urls = window.location;
        let UrlIp=''
        // UrlIp="http://data.yn.gov.cn:8081"+url
        // UrlIp="https://zwfw.yn.gov.cn"+url
        if(urls.hostname=='web.yn.gov.cn'){
          UrlIp="https://zwfw.yn.gov.cn:8081"+url
        }else{
          UrlIp="http://128.196.221.144:8081"+url
        }
        UrlIp="https://zwfw.yn.gov.cn:8081"+url
        this.$axios({method:"post",url:UrlIp,data:query}).then(res=>{
          recall(res);
        });
      },
      // 城市改变
      onCityChange() {
      },
      // 办事大厅概况
      hallView() {
        let accRequest ={regionId: this.regionId, chanType: "-1", totalFlag: "1", date:this.current_last_day};
        this.ajaxWapper("/goven/hall/acceTranIndexQry", accRequest,
          (res) => {
            res = res.data.data[0];
            this.view_acceTotalNum = this.nullToZero(res.acceTotalNum);        // 累计接件总数
            this.view_tranTotalNum = this.nullToZero(res.tranTotalNum);        // 累计办结总数
          }
        );
        accRequest ={regionId: this.regionId, chanType: "-1", totalFlag: "0", date:this.current_last_day};
        this.ajaxWapper("/goven/hall/acceTranIndexQry", accRequest,
          (res) => {
            res = res.data.data[0];
            this.view_today_acceTotalNum = this.nullToZero(res.acceTotalNum);    // 今日接件总量
            this.view_today_tranTotalNum = this.nullToZero(res.tranTotalNum);    // 节日办件总量
          }
        );
        let hallRequest = {
          regionId: this.regionId,
          regFlag: this.regFlag
        };
        this.ajaxWapper("/goven/hall/hallParaIndexQry", hallRequest,
          (res) => {
            res = res.data.data[0];
            this.view_hallTotalNum =  this.nullToZero(res.hallTotalNum);           // 大厅总数
            this.view_hallWinTotalNum = this.nullToZero(res.hallWinTotalNum);      // 大厅窗口总数
            this.view_personTotalNum =  this.nullToZero(res.personTotalNum);       // 人员总数
            this.view_hallAreaTotalNum =  this.nullToZero(res.hallAreaTotalNum);   // 大厅面积总数
          }
        )
      },
      // 如果为空返回0
      nullToZero(value) {
        if(!value) {
          return 0;
        } else {
          return value;
        }
      },
      // 选择城市信息
      selectCity() {
        this.const_area = require('./area.json');

        // this.selectData01.values = this.const_area.city;
        // console.log(this.selectData01.values);
      },
      // 入住情况
      draw_enter_situation_g() {
        let enter_situation_g = this.$echarts.init(document.getElementById('enter_situation_g'));
        console.log(this.enterData);
        console.log(this.enterData.enterTotalNum);
        console.log(this.enterData.deparTotalNum);
        console.log(this.matterEnterTotalNum);
        console.log(this.enterData.matterTotalNum);
        let option = {
          color:["#FA6366", "#FACA08", "#3D93FC", "#0CCD88"],
          series: [
            {
              type: 'pie',
              radius: ['20%', '45%'],
              data: [this.enterData.enterTotalNum, this.enterData.deparTotalNum],
              label: {
                show: false
              },
              color:["#FA6366", "#FACA08"],
              itemStyle:{
                normal: {
                  color: function(params) {
                    var color = ["#FA6366", "#FACA08"];
                    return color[params.dataIndex];
                  }
                }
              }
            },
            {
              type: 'pie',
              radius: ['60%', '85%'],
              color:["#0CCD88","#3D93FC"],
              data: [this.matterEnterTotalNum, this.enterData.matterTotalNum],
              label : {
                show: false
              }
            }]
        };

        enter_situation_g.setOption(option, true);
      },
      time_service_init(){

        let month = [];
        let jHb = [];
        let bHb = [];
        let jZl = [];
        let bZl = [];
        let time_service_count_g = this.$echarts.init(document.getElementById('time_service_count_g'));

        let option = {
          color: ["#FA6365", "#FAC305","#4299FD","#0CCD88"],
          tooltip: {
            trigger: 'axis',
            show: true,
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#999'
              }
            }
          },
          legend:[
            // orient: 'horizontal',
            //     data:['接件服务量环比','办件服务量环比','接件服务量','办件服务量'],
            {
              orient: "horizontal",
              x: "5%",
              y: "5%",
              align: "left",
              data:['接件服务量环比'],
            },{
              orient: "horizontal",
              x: "55%",
              y: "5%",
              align: "left",
              data:['办件服务量环比'],
            },
            {
              orient: "horizontal",
              x: "5%",
              y: "10%",
              align: "left",
              data:['接件服务量'],
            },
            {
              orient: "horizontal",
              x: "55%",
              y: "10%",
              align: "left",
              data:['办件服务量'],
            }
          ],
          dataZoom : [
            {
              type: 'slider',
              show: true,
              handleSize: 8,
              showDetail: false,
              filter: "none",
              maxValueSpan: 0
            }
          ],
          xAxis: [
            {
              type: 'category',
              data: month,
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
              name: '           接件量 (万件)',
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
            },
            {
              type: 'value',
              name: '   办结率',
              axisTick: {
                show: false
              },
              nameTextStyle: {
                color: ['#A0A0A0'],
                width: 100
              },
              splitLine: {
                lineStyle: {
                  color: ['#fff']
                }
              },
              axisLabel:{
                formatter:"{value}% "}
            },
          ],
          grid: {
            left: '1%',
            right: '1%',
            bottom: '25%',
            top: '25%',
            containLabel: true
          },
          series: [
            {
              name:'接件服务量环比',
              yAxisIndex: 1,
              type:'line',
              data:jHb
            },
            {
              yAxisIndex: 1,
              name:'办件服务量环比',
              type:'line',
              data:jHb
            },
            {
              name:'接件服务量',
              type:'bar',
              data:jZl
            },
            {
              name:'办件服务量',
              type:'bar',
              data:bZl
            }
          ]
        };
        time_service_count_g.setOption(option, true);

      },
      // 时间段服务量趋势图
      draw_time_service_count_g(res) {
        console.log("时间段趋势图");
        console.log(res);
        // if(!res || res.length == 0){
        //   this.time_service_init();
        //   return;
        // }
        let month = [];
        let jHb = [];
        let bHb = [];
        let jZl = [];
        let bZl = [];
        if(res && res.length > 0) {
          console.log("for");
          for(var i = 0; i < res.length; i ++) {
            month[i] = res[i].month;
            jHb[i] = res[i].acceSequen;
            bHb[i] = res[i].tranSequen;
            jZl[i] = res[i].acceTotalNum / 10000;
            bZl[i] = res[i].tranTotalNum / 10000;
          }
        }
        let time_service_count_g = this.$echarts.init(document.getElementById('time_service_count_g'));

        let option = {
          color: ["#FA6365", "#FAC305","#4299FD","#0CCD88"],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#999'
              }
            },
            formatter: (res) => {
              let rtVal = "";
              for(var i = 0; i < res.length; i ++) {
                if(res[i].seriesName == "接件服务量环比" || res[i].seriesName == "办件服务量环比") {
                  rtVal += res[i].seriesName + ":" + res[i].value + "%";
                }
                if(res[i].seriesName == "接件服务量" || res[i].seriesName == "办件服务量") {
                  rtVal += res[i].seriesName + ":" + res[i].value + "万件";
                }
                rtVal += "<br/>";
              }
              console.log(rtVal);
              return rtVal;
            }
          },
          legend:[
            // orient: 'horizontal',
            //     data:['接件服务量环比','办件服务量环比','接件服务量','办件服务量'],
            {
              orient: "horizontal",
              x: "5%",
              y: "5%",
              align: "left",
              data:['接件服务量环比'],
            },{
              orient: "horizontal",
              x: "55%",
              y: "5%",
              align: "left",
              data:['办件服务量环比'],
            },
            {
              orient: "horizontal",
              x: "5%",
              y: "10%",
              align: "left",
              data:['接件服务量'],
            },
            {
              orient: "horizontal",
              x: "55%",
              y: "10%",
              align: "left",
              data:['办件服务量'],
            }
          ],
          dataZoom : [
            {
              type: 'slider',
              show: true,
              handleSize: 8,
              showDetail: false,
              filter: "none",
              maxValueSpan: 0,
              start: 0,
              end: 40
            }
          ],
          xAxis: [
            {
              type: 'category',
              data: month,
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
              name: '           接件量 (万件)',
              axisTick: {
                show: false
              },
              splitLine: {
                lineStyle: {
                }
              },
              nameTextStyle: {
                color: ['#A0A0A0'],
                align: "right"
              },
              splitLine: {
                lineStyle: {
                  color: ['#fff']
                }
              }
            },
            {
              type: 'value',
              name: '   办结率',
              axisTick: {
                show: false
              },
              nameTextStyle: {
                color: ['#A0A0A0'],
              },
              splitLine: {
                lineStyle: {
                  color: ['#fff']
                }
              },
              axisLabel:{
                formatter:"{value}% "}
            },
          ],
          grid: {
            left: '1%',
            right: '1%',
            bottom: '25%',
            top: '25%',
            containLabel: true
          },
          series: [
            {
              name:'接件服务量环比',
              yAxisIndex: 1,
              type:'line',
              data:jHb
            },
            {
              yAxisIndex: 1,
              name:'办件服务量环比',
              type:'line',
              data:bHb
            },
            {
              name:'接件服务量',
              type:'bar',
              data:jZl
            },
            {
              name:'办件服务量',
              type:'bar',
              data:bZl
            }
          ]
        };
        time_service_count_g.setOption(option, true);
      },
      // 部门服务量
      draw_office_service_count_g(res) {
        console.log("部门服务量");
        console.log(res);
        // 0: 接件量   1: 办件量
        let deptNames = [];      // 部门名称
        let data1 = [];         // 接件量 或 办件量
        let data2 = [];         // 办结率
        let chartName = "办件量";
        if(this.fsData == 0) {
          chartName = "接件量";
        }
        if(res) {
          for(var i = 0; i < res.length; i ++) {
            let acceTotalNum = res[i].acceTotalNum / 10000;   // 接件量
            let tranTotalNum = res[i].tranTotalNum / 10000;   // 办件量
            deptNames[i] = res[i].deparName;
            data2[i] = (tranTotalNum * 100 / acceTotalNum).toFixed(2);
            if(this.fsData == 0) {
              data1[i] = acceTotalNum;
            } else {
              data1[i] = tranTotalNum;
            }
          }
        }
        let office_service_count_g = this.$echarts.init(document.getElementById('office_service_count_g'));

        let option = {
          color: ["#3F96FD", "#FACC08"],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#999'
              }
            },
            formatter: (res) => {
              console.log(res);
              return res[0].name + "<br/>" + res[0].marker + res[0].data + "万件<br/>"
                + res[1].marker + res[1].data + "万件";
            }
          },
          dataZoom : [
            {
              type: 'slider',
              show: true,
              handleSize: 10,
              showDetail: false,
              maxValueSpan: 0,
              start: 0,
              end: 40
            }
          ],
          xAxis: [
            {
              type: 'category',
              data: deptNames,
              axisPointer: {
                type: 'shadow'
              },
              axisLabel:{
                interval:0,
                rotate:-75
              }
            }
          ],
          yAxis: [
            {
              axisTick: {
                show: false
              },
              type: 'value',
              name: '       接件量 (万件)',
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
            },
            {
              axisTick: {
                show: false
              },
              type: 'value',
              name: '办结率                   ',
              min: 0,
              nameTextStyle: {
                color: ['#A0A0A0'],
                width: 100
              },
              splitLine: {
                lineStyle: {
                  color: ['#fff']
                }
              },
              axisLabel:{
                formatter:"{value}% "}
            },
          ],
          grid: {
            left: '1%',
            right: '1%',
            bottom: '25%',
            top: '20%',
            containLabel: true
          },
          series: [
            {
              name: chartName,
              type:'bar',
              data:data1

            },
            {
              yAxisIndex: 1,
              name:'办结率',
              type:'line',
              data: data2
            }
          ]
        };
        office_service_count_g.setOption(option, true);
      },
      // 选择部门服务量
      switchType(type) {
        this.fsData = type;   // 0 : 接件量    1 : 办件量
        let deptRequest = {regionId: this.regionId, regFlag: this.regFlag, flag: "2", startDate:this.getMonth(1)
          , endDate:this.getMonth(1)};
        this.ajaxWapper("/goven/hall/businessIndexQry", deptRequest, (res) => {
          this.draw_office_service_count_g(res.data.data);
        })
      },
      // 地区服务量
      draw_region_service_g(res) {
        console.log("地区服务量");
        console.log(res);
        let xIndex = [];   // X轴
        let data1 = [];   // 办件总数
        let data2 = [];   // 接件总数
        if(res) {
          for(var i = 0; i < res.length; i ++) {
            data1[i] = res[i].tranTotalNum;
            data2[i] = -res[i].acceTotalNum;
            xIndex[i] = res[i].regionName;
          }
        }
        let region_service_g = this.$echarts.init(document.getElementById('region_service_g'));

        let option = {
          tooltip:{
            show: true,
            formatter: (params) => {
              console.log(params);
              return params.marker + params.name + "<br/>" + params.seriesName + "：" + Math.abs(params.value) + "件";
            }
          },
          backgroundColor: "#ffffff",
          color: ["#3F96FD", "#FACC08"],
          title: {
            text: '',
            textStyle: {
              fontSize: 12,
              color: "#A0A0A0",
            },
            left: "1%",
            top: "12%"
          },
          legend: {
            orient: 'horizontal',
            x: '30%',
            top: '1%',
            data: ['办件总数', '接件总数'],
            itemWidth: 25,
            itemHeight: 25,
            textStyle: {
              fontSize: 10
            }

          },
          dataZoom : [
            {
              type: 'slider',
              show: true,
              start: 0,
              end: 30,
              handleSize: 8,
              showDetail: true,
              filter: "none",
              left:7,
              maxValueSpan: 0
            }
          ],
          // tooltip: {
          //   trigger: 'axis',
          //   axisPointer: {
          //     type: 'shadow'
          //   }
          // },
          grid: {
            left: '1%',
            right: '5%',
            bottom: '25%',
            top: '20%',
            containLabel: true
          },
          xAxis: [{
            type: 'category',
            data: xIndex,
            axisTick:{
              show:false
            },
            axisLine : {
              lineStyle : {
                color:"#666666",
                width: 1
              }
            },
            axisLabel:{
              interval:0,
              rotate:-40
            }
          }],
          itemStyle: {
            barBorderRadius : 2
          },
          yAxis : {
            type : 'value',
            name: '                 事项件数',
            splitLine: {
              lineStyle: {
                color: ['#fff']
              }
            },lineStyle : {
              color:"#666666",
              width: 1
            },
            nameTextStyle: {
              color: ['#A0A0A0'],
              align: "right",
              width: 100
            },
            axisLine:{
              lineStyle:{
                color:'#000',
                width:1,
              }
            },
            axisLabel:{
              formatter: function (value, index) {
                return Math.abs(parseInt(value)) ;
              }
            }
          } ,
          series: [{
            name: '办件总数',
            type: 'bar',
            stack: '总量',
            barWidth: 40,
            label: {
              normal: {
                show: false,
              }
            },
            data: data1
          }, {
            name: '接件总数',
            type: 'bar',
            stack: '总量',
            barWidth: 40,
            label: {
              normal: {
                show: false,
              }
            },
            data: data2
          }]
        };
        if (option && typeof option === "object") {
          region_service_g.setOption(option, true);
        }
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
    width: .18rem;
    height: .18rem;
    border: .06rem solid black;
    background-color: black;
    border-radius: .24rem;
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
      font-size: .44rem;
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

    .office_survey {
      .content {
        padding: 0.3rem 0 0.3rem 0.3rem;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        .tp_container {
          margin: .1rem .2rem;
          width: 40%;
          float: left;
        }
        .tp_splite {
          float: left;width: .02rem; height: .7rem;background-color: #F1F3F6; margin-top: .4rem;
        }
      }
    }

    .keyword{
      .keyword_top {
        height: 1.4rem;
        overflow: hidden;
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
    .region_service {
      .content {
        padding: 0.3rem 0 0.3rem 0.3rem;
        display: flex;
        justify-content: flex-start;
        height: 360px;
        flex-wrap: wrap;
        .region_service_g {
          height: 350px;
          width: 97%;
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
