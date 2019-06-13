<template>
  <div class="myaddress_wrap">
    <mt-header title="我的地址">
      <mt-button slot="left" @click="CheckAll(checkName)" style="color:#666">{{checkName}}</mt-button>
      <mt-button slot="right" @click="back()" style="color:#666">取消</mt-button>
    </mt-header>
    <div class="hearder_bottom"></div>
    <div class="address_list">
      <div class="select_express" v-for="item in addressList">
        <div class="dot">
          <input type="checkbox" :checked="item.isSelected==1?true:false" @click="checkedOne(item)">
        </div>
        <div class="dizhi">
          <div class="addressDetail">
            <div class="tit">{{item.post_name}}&nbsp;&nbsp;&nbsp;&nbsp;{{item.post_tel}}</div>
            <div class="cont">{{item.prov_code}}{{item.city_code}}{{item.cnty_code}}{{item.address}}</div>
          </div>
          <!--<div class="addressUpdate">
                        <img slot="icon" @click="toSelfAddress(item)" src="../../assets/images/address_update.png" width="18" height="18">
          </div>-->
        </div>
      </div>
    </div>
    <div class="del_address">
      <mt-button @click="delAddress()" :disabled="(addressList.length>0)?false:true">删除</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkName: "全选",
      val: "",
      // 初始化全选按钮, 默认不选
      isCheckedAll: false,
      //存放所选选项
      addressList: [],
      //checklist设置
      my_address_list: [],
      userid: ""
    };
  },
  methods: {
    //单选
    checkedOne(item) {
      if (item.isSelected == 0) {
        item.isSelected = 1;
      } else {
        item.isSelected = 0;
      }
      console.log(this.addressList);
      //          let idIndex = this.addressList.indexOf(itemId)
      //          if (idIndex >= 0) {
      //          // 如果已经包含了该id, 则去除(单选按钮由选中变为非选中状态)
      //          this.addressList.splice(idIndex, 1)
      //          } else {
      //          // 选中该checkbox
      //          this.addressList.push(itemId)
      //          }
      //          let checkedCount = this.addressList.length;
      //          if(this.my_address_list.length == checkedCount){
      //              this.isCheckedAll = true;
      //              this.checkName = '取消全选'
      //          }else{
      //              this.isCheckedAll = false
      //              this.checkName = '全选'
      //          }
    },
    //全选
    CheckAll(e) {
      this.addressList.forEach((item, index) => {
        if (e == "全选") {
          item.isSelected = 1;
        } else {
          item.isSelected = 0;
        }
      });
      if (e == "全选") {
        this.checkName = "取消全选";
      } else {
        this.checkName = "全选";
      }
    },
    back() {
      this.$router.go(-1);
    },
    toSelfAddress(item) {
      this.$router.push({
        path: "/updateAddress",
        query: {
          row: item
        }
      });
    },
    getData() {
      let data = {
        txnCommCom: {
          tStsTraceId: "110567890",
          txnIttChnlId: 'C0011234567890987654321',
          txnIttChnlCgyCode: 'AC02C001'
        },
        txnBodyCom: {
          matter_id: window.sessionStorage.getItem("matterid"),
          member_id: this.userid
        }
      };
      this.$ajaxRequest("post", "/gsp/fsx04004", data)
        .then(res => {
          this.addressList = res.list;
          this.addressList.forEach((item, index) => {
            item.isSelected = 0;
          });
        })
        .catch(error => {});
    },
    delData(postid, isEnd) {

				this.$ajaxRequest("post","/gsp/fsx04003", {
							txnCommCom: {
								tStsTraceId: "110567890",
								txnIttChnlId: 'C0011234567890987654321',
								txnIttChnlCgyCode: 'AC02C001'
							},
							txnBodyCom: {
								member_id: this.userid,
								postid: postid
							}
					}	)
					.then(res => {
				
							this.getData();
		
					})
					.catch(error => {
						console.log(error);
					});
},
delAddress() {
		let selectedList = [];
		this.addressList.forEach((item, index) => {
			if(item.isSelected == 1) {
				selectedList.push(item);
			}
		});
		selectedList.forEach((item, index) => {
			if(index == selectedList.length - 1) {
				this.delData(item.post_id, true);
			} else {
				this.delData(item.post_id);
			}
		});//          for(let i=0;i<this.addressList.length;i++){
      //          	if(){
      //
      //          	}
      //              this.delData(this.addressList[i])
      //          }
    }
  },
  mounted() {
    this.userid = sessionStorage.userid || "31cea592cd5d4f65bbfbefcef462d994";

    this.getData();
  }
};
</script>

<style scoped>
.myaddress_wrap {
  position: relative;
  margin-bottom: 1rem;
}

.mint-header {
  height: 1.28rem;
  background-color: #ffffff;
  padding-top: 0.29rem;
}

.mint-header >>> .mint-header-title {
  font-size: 0.34rem;
  color: #333333;
}

.hearder_bottom {
  height: 0.2rem;
  background-color: #f1f3f6;
}

.address_list {
  background-color: #ffffff;
}

.address_list .select_express {
  height: 1.3rem;
  border-bottom: 0.02rem solid #eeeeee;
  margin: 0 0.36rem;
  padding: 0;
  padding-top: 0.2rem;
}

.address_list .dot {
  float: left;
  width: 0.32rem;
  height: 0.32rem;
  /* border: 0.02rem solid #B8B8B8; */
  /* border-radius: 0.32rem; */
  margin-top: 0.5rem;
  margin-right: 0.2rem;
}

.address_list .dot input {
  width: 0.32rem;
  height: 0.32rem;
  border: 0.02rem solid #b8b8b8;
  color: #ffffff;
}

.address_list .dizhi {
  width: 90%;
  float: left;
  vertical-align: middle;
}

.dizhi .addressDetail {
  float: left;
}
/* .address_list :last-child{
    border:0;
} */

.select_express .addressDetail {
  float: left;
}

.addressDetail .tit {
  font-size: 0.28rem;
  font-weight: 600;
  line-height: 0.6rem;
  text-align: left;
}

.addressDetail .cont {
  color: #666666;
  font-size: 0.22rem;
  line-height: 0.4rem;
  text-align: left;
  overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
}

.select_express .addressUpdate {
  float: right;
  margin-top: 0.46rem;
}

.del_address {
  position: fixed;
  bottom: 0;
  left: 0;
  background: #ffffff;
  height: 1rem;
  width: 100%;
  line-height: 1rem;
  text-align: center;
}

.del_address >>> .mint-button--default {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  color: #2d7ffc;
}
</style>