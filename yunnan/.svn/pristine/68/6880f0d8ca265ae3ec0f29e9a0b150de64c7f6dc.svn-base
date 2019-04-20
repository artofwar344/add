<template>
  <div class="livehood-page">
    <towtop :name="titlename" />
    <div class="container">
      <div class="box social">
        <div class="header">
          <div class="left">
            <span class="v-line"></span>
            <p>社会情感曲线
            </p>
          </div>
          <div class="right"><span>
              最近一个月
            </span></div>
        </div>
        <div class="content">
          <div id="emotionChart" class="emotionChartZone"></div>
          <div class="progess">
            <div class="process_container">
              <div class="process_left">
                <img :src="require('../../../assets/images/focusOpinion/good3@3x.png')" alt="">
              </div>
              <div class="process_outer">
                <div class="process_inner process_blue" v-bind:style="zmObject"></div>
              </div>
              <div class="process_right">{{progress_zm}}%</div>
            </div>
            <div style="height: .2rem;"></div>
            <div class="process_container">
              <div class="process_left">
                <img :src="require('../../../assets/images/focusOpinion/good2@3x.png')" alt="">
              </div>
              <div class="process_outer">
                <div class="process_inner process_blue" v-bind:style="fmObject"></div>
              </div>
              <div class="process_right">{{progress_fm}}%</div>
            </div>
            <div style="height: .2rem;"></div>
            <div class="process_container">
              <div class="process_left">
                <img :src="require('../../../assets/images/focusOpinion/good1@3x.png')" alt="">
              </div>
              <div class="process_outer">
                <div class="process_inner process_blue" v-bind:style="jdObject"></div>
              </div>
              <div class="process_right">{{progress_jd}}%</div>
            </div>
            <!--<mt-progress :value="progress_zm" class="blue">
              <div slot="start" class="left"><img :src="require('../../../assets/images/focusOpinion/good3@3x.png')" alt=""></div>
              <div slot="end" class="right">{{progress_zm.toFixed(2)}}%</div>
            </mt-progress>
            <mt-progress :value="progress_fm" class="yellow">
              <div slot="start" class="left">
                <img :src="require('../../../assets/images/focusOpinion/good2@3x.png')" alt=""></div>
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
            <p>关注人数</p>
          </div>
        </div>
        <div class="content">
          <div id="viewer_container" class="viewer_container"></div>
        </div>
      </div>
      <div class="box keyword">
        <div class="header">
          <div class="left">
            <span class="v-line"></span>
            <p>社会情感统计</p>
          </div>
        </div>
        <div class="content">
          <div id="emotion_pie" class="emotion_pie"></div>
        </div>
      </div>
      <div class="box letter_list">
        <div class="header">
          <div class="left">
            <span class="v-line"></span>
            <p>信件列表</p>
          </div>
        </div>
        <div class="content">
          <div class="list">
            <p class="list-item" v-for="(item, index) in letterList" @click="openLetterDetail(item)">
              <span>{{index + 1}}、{{item[1]}}</span>
              <span v-if="item[2] == '0'">
                <img :src="require('../../../assets/images/focusOpinion/good3@3x.png')">
              </span>
              <span v-else-if="item[2] == '1'">
                <img :src="require('../../../assets/images/focusOpinion/good2@3x.png')">
              </span>
              <span v-else>
                <img :src="require('../../../assets/images/focusOpinion/good1@3x.png')">
              </span>

            </p>
          </div>
        </div>
      </div>
      <div class="box keyword">
        <div class="header">
          <div class="left">
            <span class="v-line"></span>
            <p>拓扑图</p>
          </div>
        </div>
        <div class="content">
          <div id="topG" class="TopG"></div>
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
        titlename: '焦点详情',
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
        detailType:0,     // 事件: 0, 人物: 1
        prov:"530000000000",
        letterList:[]
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
      this.$router.afterEach(function (to, from, next) {
        window.scrollTo(0, 99999);
      });
      this.id = sessionStorage.getItem("focusOpinion_id");
      this.detailType = sessionStorage.getItem("focusOpinion_type");
      console.log("id:" + this.id);
      console.log("detailType:" + this.detailType);
      // ----------情感曲线
      this.selectE(3);
      // ------------关注人数
      let viewerRequest = null;
      if(this.detailType == 0) {
        viewerRequest = {"query": [{
            "id": "focuseventtoemotionlineoflittle",
            "sqlMap": {
              "HDFS_DATA_DT":this.date,
              "PROV_ID": this.prov,
              "CLUSTER_ID":this.id
            }
        }],
          txnBodyCom:{}}
      } else {
        viewerRequest = {"query": [{
            "id": "focuspeopletoemotionlineoflittle",
            "sqlMap": {
              "HDFS_DATA_DT":this.date,
              "PROV_ID": this.prov,
              "MEMBERID":this.id
            }
          }],
          txnBodyCom:{}};
      }
      this.$ajaxRequest("post","/dss/kylin",viewerRequest).then(
        (res) => {
          console.log("关注人数:");
          console.log(res);
          if(this.detailType == 0) {
            this.drawViewerCharts(res.focuseventtoemotionlineoflittle); // 事件
          } else {
            this.drawViewerCharts(res.focuspeopletoemotionlineoflittle);  // 人物
          }
        }
      );
    // ------------社会情感统计
      let pieQuery = null;
      if(this.detailType == 0) {
        pieQuery = {"query": [{
            "id": "focuseventtoemotioncircle",
            "sqlMap": {
              "HDFS_DATA_DT": this.date,
              "PROV_ID": this.prov,
              "CLUSTER_ID": this.id
            }
          }],
          txnBodyCom:{}};
      } else {
        pieQuery = {"query": [{
            "id": "focuspeopletoemotioncircle",
            "sqlMap": {
              "HDFS_DATA_DT": this.date,
              "PROV_ID": this.prov,
              "MEMBERID": this.id
            }
          }],
          txnBodyCom:{}}
      }
      this.$ajaxRequest("post", "/dss/kylin", pieQuery).then(
        (res) => {
          if(this.detailType == 0) {
            this.drawEmotionPie(res.focuseventtoemotioncircle);
          } else {
            this.drawEmotionPie(res.focuspeopletoemotioncircle);
          }
        }
      );
      // ------ 信件列表
      let letterQuery = null;
      if(this.detailType == 0) {
        letterQuery = {"query": [{
            "id": "focuseventletterist",
            "sqlMap": {
              "HDFS_DATA_DT": this.date,
              "PROV_ID": this.prov,
              "CLUSTER_ID": this.id,
              "SORT_S":"0",
              "SORT_E":"10"
            }
          }],
          txnBodyCom:{}};
      } else {
        letterQuery = {"query": [{
            "id": "focuspeopleletterist",
            "sqlMap": {
              "HDFS_DATA_DT":this.date,
              "PROV_ID": this.prov,
              "MEMBERID": this.id,
              "SORT_S":"0",
              "SORT_E":"10"
            }
          }],
          txnBodyCom:{}};
      }
      this.$ajaxRequest("post", "/dss/kylin", letterQuery).then(
        (res) => {
          console.log("信件列表");
          console.log(res);
          let letters = null;
          console.log("信件");
          console.log(res);
          if(this.detailType == 0) {
            letters = res.focuseventletterist;
          } else {
            letters = res.focuspeopleletterist;
          }
          this.letterList = letters.slice(0, 10);
          for(var i = 0; i < this.letterList.length; i ++) {
            if(this.letterList[i][1].length > 18) {
              this.letterList[i][1] = this.letterList[i][1].substring(0, 18) + "...";
            }
          }
        }
      );
      // 拓扑图
      let topQuery = null;
      let topQuery2 = null;
      if(this.detailType == 0) {
        topQuery = {"query": [{
            "id": "tuoputudetail",
            "sqlMap": {
              "HDFS_DATA_DT":this.date,
              "PROV_ID": this.prov,
              "CLUSTER_ID":this.id
            }
          }],
          txnBodyCom:{}};
        topQuery2 = {"query": [{
            "id": "tuoputurelation",
            "sqlMap": {
              "HDFS_DATA_DT":this.date,
              "PROV_ID": this.prov,
              "CLUSTER_ID":this.id
            }
          }],
          txnBodyCom:{}}
      } else {
        topQuery = {"query": [{
            "id": "peopletuoputudetail",
            "sqlMap": {
              "HDFS_DATA_DT":this.date,
              "PROV_ID": this.prov,
              "MEMBERID":this.id
            }
          }],
          txnBodyCom:{}};
        topQuery2 = {"query": [{
            "id": "peopletuoputurelation",
            "sqlMap": {
              "HDFS_DATA_DT":this.date,
              "PROV_ID": this.prov,
              "MEMBERID":this.id
            }
          }],
          txnBodyCom:{}};
        }
      // 拓扑图
      console.log("拓扑图")
      this.$ajaxRequest("post", "/dss/kylin",topQuery2,null,
        (res) => {
          console.log("拓扑图1");
          console.log(res);
          res = JSON.stringify(res).replace("C-Response-Body", "body");
          res = JSON.parse(res).data.body;
          let res1 = res;
          this.$ajaxRequest("post", "/dss/kylin", topQuery,null,
            (res) => {
              console.log("拓扑图2");
              console.log(res);
              res = JSON.stringify(res).replace("C-Response-Body", "body");
              res = JSON.parse(res).data.body;
              let res2 = res;
              this.drawTopG(JSON.parse(res1), JSON.parse(res2));
            }
          )
        }).then((res) => {
        console.log("then");
        console.log(res);
      });

    },

    computed: {},
    methods: {
      // 转到信件列表
      openLetterDetail(item){
        console.log(item);
        this.$router.push({name:"focusOpinionLetterDetail", params:{
            id:item[0], face: item[2],
            type: this.detailType
          }})
      },
      // 拓扑图
      drawTopG(res1, res2) {
        console.log(JSON.stringify(res1))
        console.log(JSON.stringify(res2))
        // 权重
        // let w = [["万达","5.73","2018062111673499"],["东南角郑州银行","8.37","2018062111673499"],["东工路","4.06","2018062111673499"],["中华路万达嘉华酒店","7.96","2018062111673499"],["北关区法院","8.37","2018062111673499"],["弦歌","5.13","2018062111673499"],["德隆街","4.01","2018062111673499"],["文峰","3.37","2018062111673499"],["文昌","3.89","2018062111673499"],["永安街","5.05","2018062111673499"],["永明","4.63","2018062111673499"],["沃金大厦","8.37","2018062111673499"],["西南角广场","8.37","2018062111673499"],["近期","3.95","2018062111673499"],["黄河","4.72","2018062111673499"]];
        let w = {};
        let tuoputurelation = {}
        if(this.detailType == 0) {
          w = res2.tuoputudetail;
          tuoputurelation = res1.tuoputurelation;
        } else {
          w = res2.peopletuoputudetail;
          tuoputurelation = res1.peopletuoputurelation;
        }

        let weight = {};
        for(let i = 0; i < w.length; i ++) {
          let data = w[i];
          weight[data[0]] = parseFloat(data[1]);
        }

        // let tuoputurelation = [["中华路万达嘉华酒店","东南角郑州银行","2018062111673499"],["中华路万达嘉华酒店","北关区法院","2018062111673499"],["中华路万达嘉华酒店","沃金大厦","2018062111673499"],["中华路万达嘉华酒店","西南角广场","2018062111673499"],["中华路万达嘉华酒店","近期","2018062111673499"],["文峰","万达","2018062111673499"],["文峰","弦歌","2018062111673499"],["文峰","文昌","2018062111673499"],["文峰","永明","2018062111673499"],["文昌","东工路","2018062111673499"],["文昌","中华路万达嘉华酒店","2018062111673499"],["文昌","德隆街","2018062111673499"],["文昌","永安街","2018062111673499"],["文昌","黄河","2018062111673499"]];

        let gData = [];
        let gLinks = [];
        let names = {};
        for(var i = 0; i < tuoputurelation.length; i++) {
          if(!names[tuoputurelation[i][0]]) {
            let obj = {};
            obj.name = tuoputurelation[i][0];
            obj.label = { position:"bottom",  color:"#666666", fontSize: 12 }
            names[tuoputurelation[i][0]] = 1;
            obj.value = weight[obj.name];
            gData.push(obj);
          }
          if(!names[tuoputurelation[i][1]]) {
            let obj = {};
            obj.name = tuoputurelation[i][1];
            obj.label = { position:"bottom",  color:"#666666", fontSize: 12 }
            names[tuoputurelation[i][1]] = 1;
            obj.value = weight[obj.name];
            gData.push(obj);
          }

          gLinks[i] = {};
          gLinks[i].source = tuoputurelation[i][0];
          gLinks[i].target = tuoputurelation[i][1];
          gLinks[i].linkStyle = {};
          gLinks[i].linkStyle.width= 30;
        }
        console.log("top Data")
        console.log(gData);
        console.log(weight);
        console.log(names);
        let topG = this.$echarts.init(document.getElementById('topG'));

        let option = {
          animationDurationUpdate: 1500,
          animationEasingUpdate: 'quinticInOut',
          width:280,
          height: 1000,
          roam:true,
          series : [
            {
              force: {
                repulsion: 300
              },
              type: 'graph',
              symbolSize: 10,
              symbol:"circle",
              roam: true,
              layout: "force",
              label: {
                normal: {
                  show: true
                }
              },
              edgeSymbol: ['circle', 'line'],
              color:"#257BFF",
              edgeSymbolSize: [4, 10],
              edgeLabel: {
                normal: {
                  textStyle: {
                    fontSize: 10
                  }
                }
              },
              data: gData,
              links: gLinks,
              lineStyle: {
                normal: {
                  opacity: 0.9,
                  width: 2,
                  curveness: 0,
                  color: "#D5E6FF"
                }
              }
            }
          ]
        };
        if (option && typeof option === "object") {
          topG.setOption(option, true);
        }
      },
      // 社会情感统计
      drawEmotionPie(focuspeopletoemotioncircle) {
        focuspeopletoemotioncircle = focuspeopletoemotioncircle[0];
        let emotionPie = this.$echarts.init(document.getElementById('emotion_pie'));
        var option = {
          color:['#2D7FFC','#FAC306','#FA6366'],
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },

          // legend: {
          //     orient: 'vertical',
          //     x: 'left',
          //     data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
          // },
          series: [
            {
              type:'pie',
              radius: ['50%', '75%'],
              avoidLabelOverlap: true,
              itemStyle:{
                normal:{
                  label:{
                    textStyle:{
                      fontSize: 9
                    }
                  }
                }
              },
              name:'社会情感统计',
              itemStyle:{
                normal: {
                  color: function(params) {
                    var color = ['#2D7FFC',
                      '#FAC306',
                      '#FA6366'];
                    if(params.name.indexOf("极端声音") != -1){
                      return color[2];
                    }
                    if(params.name.indexOf("负面声音") != -1){
                      return color[1];
                    }
                    return color[0];
                  },

                }
              },
              tooltip:{
                show:true,
                formatter:item=> {
                  let rtValue = item.marker + item.name.substring(0, 4) + "<br/>";
                  rtValue += item.value + "件";
                  return rtValue;
                }
              },
              labelLine:{
                normal:{
                  length:3
                }
              },
              data:[
                {value:focuspeopletoemotioncircle[4], name:'极端声音\n' + parseFloat(focuspeopletoemotioncircle[5]).toFixed(2) + "%" , name2: focuspeopletoemotioncircle[5]},
                {value:focuspeopletoemotioncircle[2], name:'负面声音\n' + parseFloat(focuspeopletoemotioncircle[3]).toFixed(2) + "%", name2: focuspeopletoemotioncircle[3]},
                {value:focuspeopletoemotioncircle[0], name:'正面声音\n' + parseFloat(focuspeopletoemotioncircle[1]).toFixed(2) + "%", name2: focuspeopletoemotioncircle[1]}
              ]
            }
          ]
        }
        if (option && typeof option === "object") {
          emotionPie.setOption(option, true);
        }
      }
      ,//关注人数
      drawViewerCharts(focuspeopletoemotionlineoflittle) {

        // focuspeopletoemotionlineoflittle = [["20170913","wx_123976","3","0","3","0"],["20170914","wx_123976","13","0","13","0"],["20170915","wx_123976","5","0","5","0"]];
        let xData = [];
        let pData = [];
        for(var i = 0; i < focuspeopletoemotionlineoflittle.length; i ++) {
          var one = focuspeopletoemotionlineoflittle[i];
          xData[i] = one[0].substring(4, 6) + "-" + one[0].substr(6, 8);
          pData[i] = parseInt(one[2]);
        }
        let viewerContainer = this.$echarts.init(document.getElementById('viewer_container'));

        var option = {
          color:['#3A87FC'],
          tooltip : {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {

              }
            }
          },

          toolbox: {
            feature: {
              left: '5%',
              right: '5%',
              bottom: '0%',
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
              }
            }
          }
          ,
          series : [
            {
              name:'关注人数',
              type:'line',
              areaStyle: {},
              data:pData,
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
            }
          ]
        };
        if (option && typeof option === "object") {
          viewerContainer.setOption(option, true);
        }
      },
      // 选择社会情感曲线
      selectE(type) {
        let queryData = null;
        if(this.detailType == 0) {            // 事件
          queryData  = {"query": [{
              "id": "focuseventtoemotionline",
              "sqlMap": {
                "HDFS_DATA_DT":this.date,
                "PROV_ID": this.prov,
                "CLUSTER_ID":this.id
              }
            }],
            txnBodyCom:{}};
        } else {                            // 人物
          queryData = {"query": [{
              "id": "focuspeopletoemotionline",
              "sqlMap": {
                "HDFS_DATA_DT":this.date,
                "PROV_ID": this.prov,
                "MEMBERID":this.id
              }
            }],
            txnBodyCom:{}};
        }
        console.log("selectE");
        console.log(JSON.stringify(queryData));
        this.$ajaxRequest("post", "dss/kylin", queryData).then(
          (res) => {
            if(this.detailType == 0) {
              this.drawEmotionCharts(res.focuseventtoemotionline);
            } else {
              this.drawEmotionCharts(res.focuspeopletoemotionline);
            }
          }
        );

      },
      fetchHotWord () {
        let  queryData={"query": [{
              "id": "hotword",
              "sqlMap": {
                "HDFS_DATA_DT":"20171001",
                "PROV_ID": "650000"
              }
            }],
            txnBodyCom:{}}
        this.$ajaxRequest("post", "/dss/kylin", queryData).then(
          (res) => {
            let hotword = res.hotword;
            this.totalHotwords = hotword;
            for(var i = 0; i < 9; i ++) {
              this.hotwords[i] = hotword[i][0];
            }
            this.hotwordIndex = 9;
          })
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
        if(total) {
          this.progress_zm = ((zm / total) * 100).toFixed(2);
          this.progress_fm = ((fm / total) * 100).toFixed(2);
          this.progress_jd = ((jd / total) * 100).toFixed(2);
          this.zmObject.width = this.progress_zm + "%";
          this.fmObject.width = this.progress_fm + "%";
          this.jdObject.width = this.progress_jd + "%";
        }
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

    .letter_list {
      .content {
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
      }
    }

    .keyword {

      .content {
        padding: 0.3rem 0 0.3rem 0.3rem;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        .TopG {
          width: 100%;
          height: 500px;
        }
        .viewer_container {
          width: 97%;
          margin: 0 auto;
          height: 255px;
        }
        .emotion_pie {
          width: 100%;
          margin: 0 auto;
          height: 255px;
        }
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
      .header {
        .right {
          ont-family: PingFangSC-Regular;
          font-size: .1px;
          color: #999999;
          letter-spacing: .0012px;
          text-align: right;
        }
      }
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
