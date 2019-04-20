<template>
  <div class="livehood-page">
    <towtop :name="titlename" />
    <div class="container">
      <div class="box social">
        <div class="header">
          <div class="left">
            <span class="v-line"></span>
            <p>社会情感曲线</p>
          </div>
          <div class="right"></div>
        </div>
        <div class="content" style="height: 3.9rem">
          <div class="button">
            <p :class="eType == 1 ? 'years active': 'years default'" @click="selectE(1, this)">最近一年</p>
            <p :class="eType == 2 ? 'month active': 'month default'" @click="selectE(2, this)">最近一季度</p>
            <p :class="eType == 3 ? 'weeks active': 'weeks default'" @click="selectE(3, this)">最近一个月</p>
          </div>
          <div id="emotionChart" class="emotionChartZone"></div>
          <div class="progess">
            <!--<div>
              <div class="left" style="float:left"><img :src="require('../../../assets/images/focusOpinion/good3@3x.png')" alt=""></div>
              <div class="process_outer"  style="float:left">
                <div class="process_inner" style="background-color:#2D7FFC" v-bind:style={width:'40%'}></div>
              </div>
              <div class="right" style="float:left;line-height: 20px;">{{progress_zm.toFixed(2)}}%</div>
            </div>-->
            <!--<div style="height: 30px; width: 100%; background-color: red;">
              <div style="background-color: red; height: 30px;background-color: gainsboro;width: 7%;float: left">
                <img :src="require('../../../assets/images/focusOpinion/good3@3x.png')" alt="" style="margin: 3px 3px 3px 0;">
              </div>
              <div style="background-color: darkorange; width: 86%;height: 30px;">
                <div class="process_outer" style="margin: 30px;">
                  <div class="process_inner"></div>
                </div>
              </div>
            </div>-->
            <div class="process_container">
              <div class="process_left">
                <img :src="require('../../../assets/images/focusOpinion/good3@3x.png')" alt="">
              </div>
              <div class="process_outer">
                <div class="process_inner process_blue" v-bind:style="zmObject"></div>
              </div>
              <div class="process_right">{{progress_zm}}</div>
            </div>
            <div style="height: .2rem;"></div>
            <div class="process_container">
              <div class="process_left">
                <img :src="require('../../../assets/images/focusOpinion/good2@3x.png')" alt="">
              </div>
              <div class="process_outer">
                <div class="process_inner process_blue" v-bind:style="fmObject"></div>
              </div>
              <div class="process_right">{{progress_fm}}</div>
            </div>
            <div style="height: .2rem;"></div>
            <div class="process_container">
              <div class="process_left">
                <img :src="require('../../../assets/images/focusOpinion/good1@3x.png')" alt="">
              </div>
              <div class="process_outer">
                <div class="process_inner process_blue" v-bind:style="jdObject"></div>
              </div>
              <div class="process_right">{{progress_jd}}</div>
            </div>


            <!--<mt-progress :value="progress_zm" class="blue">
              <div slot="start" class="left"><img :src="require('../../../assets/images/focusOpinion/good3@3x.png')" alt=""></div>
              <div slot="end" class="right">{{progress_zm.toFixed(2)}}%</div>
            </mt-progress>
            <mt-progress :value="progress_fm" class="yellow">
            <div slot="start" class="left"><img :src="require('../../../assets/images/focusOpinion/good2@3x.png')" alt=""></div>
              <div slot="end" class="right">{{progress_fm.toFixed(2)}}%</div>
            </mt-progress>
            <mt-progress :value="progress_jd" class="red">
              <div slot="start" class="left"><img :src="require('../../../assets/images/focusOpinion/good1@3x.png')" alt=""></div>
              <div slot="end" class="right">{{progress_jd.toFixed(2)}}%</div>
            </mt-progress>-->
          </div>
        </div>
      </div>
      <div class="box keyword">
        <div class="header">
          <div class="left">
            <span class="v-line"></span>
            <p>精选热词</p>
          </div>
          <div class="right">
            <img :src="require('../../../assets/images/focusOpinion/chage@3x.png')" alt="">
            <span @click="changeHotword()">换一批</span>
          </div>
        </div>
        <div class="content">
          <p v-for="(item, index) in hw.split(',')" @click="hotwordSearch(item)"
             :class="(index<3)?'label-item default':index<6?'label-item pra':'label-item dam'">
            {{item}}</p>
        </div>
      </div>
      <div class="box focus">
        <div class="header">
          <div class="left">
            <div class="v-line"></div>
            <p>焦点搜索</p>
            <p></p>
          </div>
          <div class="right">
            <input v-model="search_input">
            <img :src="require('../../../assets/images/focusOpinion/search.png')" alt="" @click="searchFocus()"/>
          </div>
        </div>
        <div class="content">
          <div class="tab">
            <p :class="fsData== 0 ? 'left active':'left default'" @click="peopleFocus(0)">民情焦点事件排行</p>
            <p :class="fsData== 1 ? 'right active':'right default'"  @click="peopleFocus(1)"
            style="box-shadow:none;">民情焦点人物排行</p>
          </div>
          <div class="list">
            <p class="list-item" v-for="(item, index) in fsContent" :key="index"
               @click="toDetailPage(item.id)"
            >
              <span>
                  {{item.index}}. {{item.title}}
              </span>
              <img :src="require('@/assets/images/focusOpinion/arrow@3x.png')" alt="">
             </p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import towtop from '../../../components/HederTwo'
import { liveUrl } from "../../../components/toptow.js";

export default {
  data () {
    return {
      zmObject:{width:"0%"},
      fmObject:{width:"0%"},
      jdObject:{width:"0%"},
      urls: '/kylin',
      date: "20171001",
      titlename: '民生分析图标',
      dataList: [
      ],
      eType:3,
      emotionChart:null,
      progress_zm: 0,
      progress_fm: 0,
      progress_jd: 0,
      hotwords:[],
      fsData: 1,
      totalHotwords:[],
      hotwordIndex:0,
      fsContent : [],
      search_input: "",
      provid: "530000000000",
      hw:""

    }
  },
  components:{
    towtop
  },
  created () {

  },

  mounted () {
    // 早上6点前算作是前天的数据取昨天的日期,
    // 6点到第二天的6点传昨天的日期
    let today = new Date();
    if(today.getHours() < 6) {
      today = new Date(today.getTime() - (2 * 1000 * 60 * 60 * 24))
    } else {
      today = new Date(today.getTime() - (1000 * 60 * 60 * 24))
    }
    this.date = today.getFullYear() + "";
    if(today.getMonth() < 9) {
      this.date = this.date.concat("0" + (today.getMonth() + 1));
    } else {
      this.date = this.date.concat((today.getMonth() + 1) + "");
    }
    if(today.getDate() < 10) {
      this.date = this.date.concat("0" + today.getDate());
    } else {
      this.date = this.date.concat(today.getDate());
    }
    console.log("取值日期:" + this.date);
    // ---------------------------------------------
    this.selectE(3); // 社会情感曲线
    this.fetchHotWord(); // 精选热词
    this.peopleFocus(0); // 焦点搜索
    console.log(this.hotwords)
  },

  computed: {},
  methods: {
    ajaxWapper(url, query, recall) {
        var urls = window.location;
        let UrlIp=''
        if(urls.hostname=='web.yn.gov.cn'){
             UrlIp="https://mdss.yn.gov.cn"+url
        }else{
            UrlIp="http://128.192.179.84:8088"+url
        }
      this.$axios({method:"post",url:UrlIp,data:query}).then(res=>{
        recall(res);
      });
    },
    // 精选热词点击搜索
    hotwordSearch(item) {
      sessionStorage.setItem("focusOpinion_input", item);
      sessionStorage.setItem("focusOpinion_type", 0);
      this.$router.push({name:"focusOpinionfocusSearch", params:{input:item, type: 0}})
    },
    // 转到详情页
    toDetailPage(id) {
      console.log("toDetailPage:" + id);
      sessionStorage.setItem("focusOpinion_id",id);
      sessionStorage.setItem("focusOpinion_type",this.fsData);
      this.$router.push({name: 'focusOpinionFocusDetail', params:{id:id,type:this.fsData}});
    },
    // 焦点搜索 搜索
    searchFocus() {
      console.log("livehoodAnalyze_tpe:" + this.fsData)
      sessionStorage.setItem("focusOpinion_input", this.search_input);
      sessionStorage.setItem("focusOpinion_type", 0);
      this.$router.push({name:"focusOpinionfocusSearch",params:{input : this.search_input,type:this.fsData}});
      /*let query = {
        key : this.search_input
      }
      this.$ajaxRequest("post", "/dss/getEsResult", query).then(
        (res) => {
          console.log("搜索内容:" + this.search_input)
          console.log(res);
      }
      )*/
    },
    // 焦点搜索 查询
    peopleFocus(type) {
      this.fsData = type;
      let queryData = null;
      if(type == 0) {
        queryData = {"query": [{
            "id": "focusOfCivilSort",
            "sqlMap": {
              "HDFS_DATA_DT":this.date,
              "PROV_ID": this.provid
            }
          }],
          txnBodyCom:{}}
      } else {
        queryData = {"query": [{
            "id": "focusOfPeople",
            "sqlMap": {
              "HDFS_DATA_DT":this.date,
              "PROV_ID": this.provid
            }
          }],
          txnBodyCom:{}}
      }
      this.$ajaxRequest("post", "/dss/kylin", queryData).then(
        (cent) => {
          console.log(cent);
          if(type == 0) {
            cent = cent.focusOfCivilSort;
          } else {
            cent = cent.focusOfPeople;
          }
          this.fsContent = [];
          for(var i = 0; i < cent.length; i ++) {
            let obj = {};
            if(cent[i][1] && cent[i][1].length > 16) {
              cent[i][1] = cent[i][1].substring(0, 18) + "...";
            }
            obj.title = cent[i][1];
            obj.index = cent[i][0];
            obj.id = cent[i][2];
            this.fsContent[i] = obj;
          }
        }
      );


    },
    // 换一批热词
    changeHotword() {
      this.hotwordIndex;
      this.hotwords = [];
      this.hw = "";
      for(var i = 0; i < 9; i ++) {
        if(this.hotwordIndex >= this.totalHotwords.length) {
          this.hotwordIndex = 0;
        }
        // this.hotwords[i] = this.totalHotwords[this.hotwordIndex ++][0];
        this.hw += this.totalHotwords[this.hotwordIndex ++][0] + ",";
      }
      if(this.hw.length > 0) {
        this.hw = this.hw.substring(0, this.hw.length - 1);
      }
      console.log(this.hw);
    },
    // 选择社会情感曲线
    selectE(type) {
      this.eType = type;
      let queryData = {};
      switch(type) {
        // 最近一年
        case 1 : queryData = { "query":[{"sqlMap": {"PROV_ID": this.provid, "HDFS_DATA_DT": this.date},
            "id": "yearemotionanalazy"}],
          txnBodyCom:{}}; break;
        // 最近一季度
        case 2 : queryData = { "query":[{"sqlMap": {"PROV_ID": this.provid, "HDFS_DATA_DT": this.date},
                              "id": "quarteremotionanalazy"}],
          txnBodyCom:{}
        }; break;
        // 最近一个月
        case 3 : queryData = {"query":[{"sqlMap": {"PROV_ID": this.provid, "HDFS_DATA_DT": this.date},
            "id": "monthemotionanalazy"}],
          txnBodyCom:{}}; break;
      }
      console.log(JSON.stringify(queryData));
      this.$ajaxRequest("post", "/dss/kylin", queryData).then((res) => {
            console.log(res);
            switch(type) {
              case 1: this.drawEmotionCharts(res.yearemotionanalazy, type); break;
              case 2: this.drawEmotionCharts(res.quarteremotionanalazy, type); break;
              case 3: this.drawEmotionCharts(res.monthemotionanalazy, type); break;
            }
      });
      // this.ajaxWapper("/dss/kylin", queryData,
      //   (res) => {
      //     console.log(res);
      //     switch(type) {
      //       case 1: this.drawEmotionCharts(res.yearemotionanalazy, type); break;
      //       case 2: this.drawEmotionCharts(res.quarteremotionanalazy, type); break;
      //       case 3: this.drawEmotionCharts(res.monthemotionanalazy, type); break;
      //     }
      //   }
      // );
    },
    fetchHotWord () {
      let request = {"query": [{
          "id": "hotword",
          "sqlMap": {
            "HDFS_DATA_DT":this.date,
            "PROV_ID": this.provid
          }
        }],
        txnBodyCom:{}};

      // var hotword = [["党和政府","1"],["王贵龙","0.7"],["盛世","0.7"],["红绿灯","0.58"],["惠民","0.49"],["公共场所","0.48"],["农业银行","0.48"],["卫生部","0.48"],["德宏","0.48"],["文明","0.48"],["老佰","0.48"],["胡玉英","0.48"],["苑与莲","0.48"],["金龙村","0.48"],["钱付","0.48"],["黄明","0.48"],["云联惠","0.47"],["人民银行","0.47"],["养犬","0.47"],["农业部","0.47"],["博鳌","0.47"],["小康","0.47"],["岳母","0.47"],["师专","0.47"],["承建商","0.47"],["景苑","0.47"],["玉龙","0.47"],["左转","0.4"],["由西向东","0.4"],["幼儿园","0.36"],["王清章","0.36"],["舒苑","0.36"],["鄂嘉镇","0.36"],["楚风苑","0.22"],["殷贵斌","0.22"],["腾冲","0.22"],["陆良","0.2"]];
      // this.totalHotwords = hotword;
      // for(var i = 0; i < 9; i ++) {
      //   if(hotword[i]) {
      //     this.hotwords[i] = hotword[i][0];
      //     this.hw += hotword[i][0] + ",";
      //   }
      // }
      // if(this.hw.length > 0) {
      //   this.hw = this.hw.substring(0, this.hw.length - 1);
      // }
      // this.hotwordIndex = 9;


      this.$ajaxRequest("post", "/dss/kylin", request).then(
        (res) => {
            console.log(res);
            let hotword = res.hotword;
            this.totalHotwords = hotword;
            for(var i = 0; i < 9; i ++) {
              if(hotword[i]) {
                this.hotwords[i] = hotword[i][0];
                this.hw += hotword[i][0] + ",";
              }
            }
            if(this.hw.length > 0) {
              this.hw = this.hw.substring(0, this.hw.length - 1);
            }
            this.hotwordIndex = 9;
        }
      );
    },

    // init图表
    drawEmotionCharts(monthemotionanalazy, type){
      let zmData = [];
      let fmData = [];
      let jdData = [];
      let xData = [];
      let zm = 0;
      let fm = 0;
      let jd = 0;
      for(let i = 0; i < monthemotionanalazy.length; i++) {
        let day = monthemotionanalazy[i];
        if(type == 1) {
          xData[i] = day[0];
        } else {
          xData[i] = day[0].substring(4, 6) + "-" + day[0].substring(6, 8);
        }
        zmData[i] = parseFloat(day[2]);
        fmData[i] = parseFloat(day[4]);
        jdData[i] = parseFloat(day[6]);
        zm += parseInt(day[1]);
        fm += parseInt(day[3]);
        jd += parseInt(day[5]);
      }
      let total = zm + fm + jd;
      console.log("zm:" + zm);
      console.log("fm:" + fm);
      console.log("jd:" + jd);
      this.progress_zm = zm;
      this.progress_fm = fm;
      this.progress_jd = jd;
      this.zmObject.width = (zm * 100 / total).toFixed(2) + "%";
      this.fmObject.width = (fm * 100 / total).toFixed(2) + "%";
      this.jdObject.width = (jd * 100 / total).toFixed(2) + "%";
      console.log(this.zmObject);
      let emotionChart = this.$echarts.init(document.getElementById('emotionChart'));
      let option = null;
      let colors = ['#3A87FC', '#F8C822', '#FA6D6E'];
      option = {
        color: colors,
        title: {
          text: ''
        },
        tooltip : {
          trigger: 'axis',
          formatter:(res) => {
            console.log(res);
            let value = res[0].axisValue + "<br/>";
            for(var i = 0; i < res.length; i ++) {
              value += "<p style='text-align: left'>" + res[i].marker + res[i].seriesName + ":" + res[i].data + "%</p>";
            }
            return value;
          },
          axisPointer: {
            type: 'cross',
            label: {
              // backgroundColor: '#fff'
            }
          }
        },
        legend: {
          // data:["正面声音","负面声音","极端声音"],
          data:[{name:"正面声音",textStyle:{color:'#000',fontSize:10}},
            {name:"负面声音",textStyle:{color:'#000',fontSize:10}},
            {name:"极端声音",textStyle:{color:'#000',fontSize:10}}],
          y: "bottom",
          padding: 15
        },
        toolbox: {
          feature: {
            left: '5%',
            right: '5%',
            bottom: '25%',
            top: '11%',
            containLabel: true
          }
        },
        grid: {
          left: '5%',
          right: '5%',
          bottom: '25%',
          top: '11%',
          containLabel: true
        },
        xAxis : [
          {
            type : 'category',
            boundaryGap : false,
            data : xData,
            axisLabel: {
              show: true,
              textStyle: {
                color: '#000',
                fontSize:'10',
                fontFamily: "PingFangSC-Regular"
              }
            },
            axisTick : {
              show: true,
              lineStyle:{
                type:"solid",
                width:"1"
              }
            }
          }
        ],
        yAxis : {
          type : 'value',
          axisTick: {
            show: false
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#000',
              fontSize:'10',
              fontFamily: "PingFangSC-Regular",
            }, formatter:function (value) {
              return value + "%";
            }
          }
        }
        ,
        series : [
          {
            name:'正面声音',
            type:'line',
            areaStyle: {},
            data:zmData,
            smooth: true,
            symbol:"none",
            areaStyle: {normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    {offset: 0, color: '#3A87FC'},
                    {offset: 0.5, color: '#C9DEFF'},
                    {offset: 1, color: '#F5F9FF'}
                  ]
                )
              }}
          },
          {
            name:'负面声音',
            type:'line',
            areaStyle: {},
            data:fmData,
            smooth: true,
            symbol:"none",
            areaStyle: {normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    {offset: 0, color: '#F8C822'},
                    {offset: 0.5, color: '#F7E7AA'},
                    {offset: 1, color: '#FBF4D7'}
                  ]
                )
              }}
          },
          {
            name:'极端声音',
            type:'line',
            stack: '总量',
            symbol:"none",
            areaStyle: {},
            data:jdData,
            smooth: true,
            areaStyle: {normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    {offset: 0, color: '#FA6D6E'},
                    {offset: 0.5, color: '#FCC3BB'},
                    {offset: 1, color: '#FDD8D1'}
                  ]
                )
              }}
          }
        ]
      };
      if (option && typeof option === "object") {
        emotionChart.setOption(option, true);
      }

    }
  }
}
</script>

<style lang="less" scoped>
  .process_outer {
    width:  78%;
    height:  6px;
    border: 1px solid #DEDEDE;
    border-radius: 9px;
    display: block;
    float: left;
    margin-top: 8px;
  }
  .process_blue {
    background-color: #2D7FFC;
    border-color:#2D7FFC;
  }
  .process_yellow {
    background-color:#FAC306;
    border-color: #FAC306;
  }
  .process_red {
    background-color: #FA6366;
    border-color: #FA6366;
  }
  .process_inner {
    margin:  1px;
    height:  2px;
    border: 1px solid blue;
    border-radius: 6px;
  }
  .process_container {
    width:100%;
    height: .5rem;

  }
  .process_left {
    width: 8%;
    display: block;
    float: left;
    padding-top: 0px;

  }
  .process_right {
    width: 10%;
    display:  block;
    float: right;
    line-height: .5rem;
  }
  .livehood-page .container {
    padding: 0.16rem 0;
    font-family: PingFangSC-Regular;

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

    .keyword {
      .content {
        padding: 0.3rem 0 0.3rem 0.3rem;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;

        .label-item {
          padding: 0.1rem 0.4rem;
          border-radius: 20px;
          margin: 0 0.2rem 0.3rem;
          font-size: 15px;
          letter-spacing: 0.18px;
        }

        .default {
          background: #2D7FFC;
          color: #fff;
        }

        .pra {
          border: 1px solid #2D7FFC;
          color: #2D7FFC;
        }

        .dam {
          color: #999;
          border: 1px solid #999;

        }
      }

      .header .left {
        font-family: PingFangSC-Light;
        font-size: 14px;
        color: #999999;
        letter-spacing: -0.34px;
      }
    }

    .focus {
      .content {
        padding: 0.36rem 0 0 0;
      }
      .header .right {
        background: #fafafa;
        height: 0.6rem;
        border-radius: 50px;
        padding: 0 0.2rem;
        display: flex;
        align-items: center;
        >input {
          border: 0;
          height: 0.6rem;
          width: 3.5rem;
          background-color: #999999;
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

      .list {
        padding: 0 0.36rem;
        .list-item {
          padding: 0 0.11rem;
          border-bottom: 1px solid #f1f3f6;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 0.8rem;

          span {
            display: inline-block;
          }

          span:last-child {
            color: #d6d8da;
          }

          img {height: 0.3rem;}
        }
      }
    }

    .emotionChartZone {
      width: 100%;
      margin: 0 auto;
      height: 195px;
    }

    .social {
      height: 10rem;
      .content {
        padding-top: 0.35rem;
        .progess {
        padding: 0.5rem;

        img {
          height: 0.36rem;
          display: inline-block;
          position: relative;
          top: 3px;
        }

        .mt-progress-content {
          padding: 6px;

          .mt-progress-runway {
            height: 20px !important;
            border: 1px solid #ebebeb;
            border-radius: 50px;
            background: #fff;
          }

          .mt-progress-progress {
            height: 12px !important;
            border-radius: 50px;
          }
        }

        .left {margin-right: 0.2rem;}

        .right {margin-left: 0.2rem;}

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

      .button {
        display: flex;
        justify-content: center;

        >p {
          padding: 0.14rem 0.48rem;
          color: #333333;
          letter-spacing: 0.18px;
        }

        .years {
          border-radius:50px 0 0 50px;
        }

        .month {
          border-right: 0 !important;
          border-left: 0 !important;
        }

        .weeks {
          border-radius: 0 50px 50px 0;
        }

        .years.defult, .weeks.defult {
          border: 1px solid #f1f3f6;
        }

        .month.defult {
          border: 1px solid #f1f3f6;
        }

        .years.active, .weeks.active, .month.active {
            background: #2D7FFC;
            color: #fff;
         }
      }

      }
    }

  }

</style>
