<template>
	<div class="zyzszxOnewrap">
		<towtop style="margin: 0" :name="titlename"/>
		<div class="header2">注销申请</div>
    <div class="item">
      <span class="label">姓名</span>
      <p class="item-content">{{nameValue}}</p>
    </div>
    <div class="item">
      <span class="label">性别</span>
      <p class="item-content">{{sexValue}}</p>
    </div>
    <div class="item">
      <span class="label">所在执业机构名称</span>
      <p class="item-content">{{constructValue}}</p>
    </div>
    <div class="item">
      <span class="label">执业证号</span>
      <p class="item-content">{{codeValue}}</p>
    </div>
    <div class="item" @click="open01('pickerselect01')">
      <span class="littlestarkingtwo">*</span>
      <span class="label">申请注销原因</span>
      <p class="item-content big">{{confirmValSelect01 ? confirmValSelect01 : '请选择'}}</p>
    </div>
		<Selectpopup ref="pickerselect01" position="bottom"   :dataslots="selectData01" :visible-item-count="5" class="example-select_item" @confirms="selectConfirmFun01">
		</Selectpopup>

		<!-- <Btn plain block @click="next_btn">下一步</Btn> -->
    <div class="padTopAdd5">
          <mybutton :btnData="btnData" @click="next_btn" />
        </div>
	</div>
</template>
<script>
import towtop from "../../../../components/HederTwo";
import { cenurl } from "@/components/toptow.js";
import mybutton from "../../../../components/MyButton";
const profession = {};
export default {
  components: {
    mybutton,
    towtop
  },
  data() {
    return {
      btnData:[
        {
          text:'下一步',
          disabled: false,
          isSure: true,
        }
      ],
      titlename: "律师执业证书注销许可",
      nameValue: "",
      sexValue: "",
      constructValue: "",
      codeValue: "",
      confirmValSelect01: "",
      selectData01: [
        {
          flex: 1,
          values: [
            { text: "因本人不再从事律师职业", value: "1" },
            {
              text:
                "因与所在律师事务所解除聘用合同或者所在的律师事务所被注销，在六个月内未被其他律师事务所聘用",
              value: "2"
            },
            { text: "因其他原因终止律师执业的", value: "3" },
            { text: "因调出省外", value: "4" }
          ],
          className: "slot1",
          textAlign: "center",
          showText: "text"
        }
      ],
      setItem: [],
      getInfo: {},
      lawyerId: ""
    };
  },
  activated() {
    //   获取wordId并保存
    let WorkId;
    if (this.$route.query.WorkId) {
      WorkId = this.$route.query.WorkId;
    }
    sessionStorage.setItem("WorkId", WorkId);
    console.log(sessionStorage.getItem("WorkId"));

    // 反显原因
    console.log(sessionStorage.getItem("SFTreason"));
    if (sessionStorage.getItem("SFTreason")) {
      this.setItem = JSON.parse(sessionStorage.getItem("SFTreason"));
      this.selectConfirmFun01(this.setItem);
    }
    // else{
    //   let arr = [];
    //   arr.push(this.selectData01[0].values[0])
    //   this.selectConfirmFun01(arr)
    // }

    // let id = '1666677';
    let id = sessionStorage.getItem("cardid");
    let _self = this;
    let setdata = {
      txnCommCom: {
        tenant: "530000000000",
        txn_itt_chnl_id: "00",
        txn_itt_chnl_type: "11"
      },
      txnBodyCom: {
        matter_id: window.sessionStorage.getItem("matterid"),
        c_sfzh: id,
        c_xm: "",
        c_zyzh: ""
      }
    };
    let addData = {
      tRecInPage: "10",
      tPageJump: "1"
    };
    this.$ajaxRequest("post", "/gsp/mng90039", setdata,addData)
      .then(res => {
        if (res.list.length <= 0) {
          _self.$toast("搜索数据为空！");
          return false;
        } else {
          console.log(res.list);
          _self.nameValue = res.list[0].c_xm;
          if(res.list[0].c_xb=="01"){
            _self.sexValue = "男"
          }else if(res.list[0].c_xb=="02"){
            _self.sexValue = "女"
          }
          _self.constructValue = res.list[0].c_zyjgmc;
          _self.codeValue = res.list[0].c_zyzh;
          _self.lawyerId = res.list[0].c_bh;
          _self.getInfo = res.list[0];
        }
      })
      .catch(error => {
        console.log(error);
        _self.$toast("未查询到您的律师信息，无法办理此事项！");
      });
  },
  methods: {
    next_btn() {
      let _self = this;
      // 调用appForm001
      if (!this.confirmValSelect01) {
        this.$toast("请选择注销原因");
        return;
      }
      if (!this.nameValue) {
        this.$toast("未查询到您的律师信息，无法办理此事项！");
        return;
      }
      // sessionStorage.setItem("SFTgetInfo",JSON.stringify(this.getInfo));
      sessionStorage.setItem("SFTreason", JSON.stringify(this.setItem));

      let setdata = {
        txnCommCom: {
          tenant: "530000000000",
          txn_itt_chnl_id: "00",
          txn_itt_chnl_type: "11",
          "C-Business-Id": "111111111"
        },
        txnBodyCom: {
          // "work_id":sessionStorage.getItem("GATWorkId"),
          work_id: sessionStorage.getItem("WorkId"),
          matter_id: sessionStorage.getItem("matterid"),
          // "matter_id":'ea44d84cf8bb418080595c201fd9bdf4',
          // "member_id":sessionStorage.getItem("userid"),
          member_id: window.sessionStorage.getItem("userid"),
          json_content: {
            work_id: sessionStorage.getItem("WorkId"),
            lwr_id: this.lawyerId,
            rsn: this.setItem[0].value
          }
        }
      };
      console.log(setdata);
      this.$ajaxRequest("post", "/gsp/appForm00001", setdata)
        .then(res => {
          console.log(res);
          if (res.Status == "00") {
            this.$router.push("/zyzszx_two");
          } else if (res.Status == "01") {
            this.$toast(res.Error_Info.Message);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    open01(picker) {
      this.$refs[picker].open();
      document.activeElement.blur();
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
    },
    selectConfirmFun01(selectedVal) {
      // console.log(selectedVal)
      this.setItem = selectedVal;
      if (typeof selectedVal[0] === "object") {
        this.confirmValSelect01 = selectedVal[0].text;
      } else {
        this.confirmValSelect01 = selectedVal;
      }
      // console.log(this.confirmValSelect01)
    }
  }
};
</script>
<style>
.zyzszxOnewrap .header2 {
  width: 90%;
  margin: 0 auto;
  height: 0.6rem;
  font-size: 0.24rem;
  line-height: 0.6rem;
  text-align: left;
  color: #999;
}
.zyzszxOnewrap .hui-field_main {
  font-size: 0.28rem;
  line-height: 0.9rem;
  height: 0.9rem;
}
.zyzszxOnewrap .hui-field_star {
  display: none;
}
.zyzszxOnewrap .hui-btn.is-block {
  font-weight: 700;
  display: inline-block;
  width: 5.9rem;
  height: 0.9rem;
  margin: 0.6rem 0.35rem;
  background-color: #2d7ffc;
  font-size: 0.32rem;
  color: #fff;
}
.zyzszxOnewrap .hui-field_title {
  width: 3rem;
}
.zyzszxOnewrap .btm .hui-field_title {
  width: 6rem;
}
</style>

<style lang="less" scoped>
.zyzszxOnewrap {
  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    padding: 0 0.3rem;
    border-bottom: 1px solid #e1e2e6;
    position: relative;

    .item-content {
      flex: 1;
      height: 55px;
      line-height: 55px;

    }

    .item-content.big {
      height: auto;
      min-height: 55px;
      line-height: 33px;
      text-align: right;
      padding: 0.2rem;
      padding-right: 0;
    }
  }

  /*.star {*/
    /*font-size: 20px;*/
    /*color: red;*/
    /*display: inline-block;*/
    /*position: relative;*/
    /*top: 5px*/
  /*}*/
  .littlestarkingtwo{
    font-size: 0.4rem;
    color: red;
    display: inline-block;
    position: absolute;
    left: 0.05rem;
    top: 35%;
  }
}

</style>
