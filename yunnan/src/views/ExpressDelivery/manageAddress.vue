<template>
  <div class="manage_wrap">
    <mt-header title="地址管理">
      <router-link to="/delivery" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button slot="right" @click="toDel()">删除地址</mt-button>
    </mt-header>
    <div class="hearder_bottom"></div>
    <div class="userInfo">
      <mt-field class="receiveInfo" label="姓名" clear placeholder="请输入姓名" v-model="receiveInfo"></mt-field>
      <mt-field class="receiveInfo" label="联系方式" clear placeholder="请输入联系方式" v-model="receiveInfo"></mt-field>
      <div @click="selectArea()">
        <mt-field class="receiveInfo" disabled label="选择地区" placeholder="请选择地区">
          <mt-cell class="is_link" is-link></mt-cell>
        </mt-field>
      </div>
      <mt-field class="receiveInfo" label="详细地址" clear placeholder="请输入详细地址" v-model="receiveInfo"></mt-field>
    </div>
    <!-- <mt-popup
            v-model="popupVisible"
            position="bottom">
            <mt-picker :slots="slots" showToolbar @change="onValuesChange"></mt-picker>
    </mt-popup>-->
    <mt-popup v-model="popupVisible" position="bottom" class="prop-tk">
      <div class="pop-btn">
        <p class="cancle" @click="cancle">取消</p>
        <p class="insure" @click="sureMap">确定</p>
      </div>
      <mt-picker ref="pickCom" :slots="slots" @change="onValuesChange" value-key="areaName"></mt-picker>
    </mt-popup>
    <div class="del_address">
      <mt-checklist class="save_address" v-model="value" :options="['保存到地址薄']"></mt-checklist>
      <!-- <mt-button class="order_button" type="primary" @click="save()">保存</mt-button> -->
      <div class="padTopAdd5">
        <mybutton :btnData="btnData" @click="save"/>
      </div>
    </div>
  </div>
</template>

<script>
import mybutton from "@/components/MyButton";
export default {
  components: {
    mybutton
  },

  data() {
    return {
      btnData: [
        {
          text: "保存",
          disabled: false,
          isSure: true
        }
      ],
      receiveInfo: "",
      value: [],
      popupVisible: false,
      slots: [
        {
          flex: 1,
          defaultIndex: 0,
          values: [],
          className: "slot1",
          textAlign: "center"
        },
        {
          pider: true,
          content: "-"
          // className: 'slot2'
        },
        {
          flex: 1,
          values: [],
          className: "slot3",
          textAlign: "center"
        },
        {
          pider: true,
          content: "-"
          // className: 'slot4'
        },
        {
          flex: 1,
          values: [],
          className: "slot5",
          textAlign: "center"
        }
      ]
    };
  },
  methods: {
    save() {
      console.log(this.value[0]);
    },
    selectArea() {
      this.popupVisible = true;
    },
    // 城市滑动变化触发picker组件的change事件（id变化才发对应请求,否则会多次发请求）
    onValuesChange(picker, values) {
      //判断如果省的id变化了，就去请求市和区，否则只请求区
      if (this.cityDataReady) {
        //当省变化的时候，请求市和区
        if (this.mrpId != values[0].id) {
          //请求市
          this.getPrevenceData(values[0].id).then(res => {
            picker.setSlotValues(2, res);
            this.mrpId = values[0].id;
            this.mrcid = values[2].id;
          });
        }
        //当市变化的时候，请求区
        if (this.mrcid != values[2].id) {
          //请求区,当仅仅是区变化的时候，不需要发任何请求
          this.getPrevenceData(values[2].id).then(res => {
            picker.setSlotValues(4, res);
            this.mrpId = values[0].id;
            this.mrcid = values[2].id;
          });
        }
      }
    },
    // 点击确定缓存当前数据
    sureMap() {
      this.popupVisible = false;
      // 获取变换后的城市数据
      var valueArr = this.$refs.pickCom.getValues();
      this.oldSlots = valueArr.concat();
      this.oldCityList = this.$refs.pickCom.getSlotValues(2);
      this.oldQuList = this.$refs.pickCom.getSlotValues(4);
    },
    // 点击取消时把缓存的数据赋值给picker组件
    cancle() {
      _this.popupVisible = false; // 把缓存的数据赋值给对应的slot
      _this.$refs.pickCom.setSlotValues(2, _this.oldCityList);
      _this.$refs.pickCom.setSlotValues(4, _this.oldQuList);
      _this.$refs.pickCom.setValues(this.oldSlots);
    }
  },
  mounted() {
    // 页面加载时获取省市区数据（默认省和市是上个页面带过来的）
    this.$nextTick(() => {
      // 获取省数据
      _this.getPrevenceData(0).then(res => {
        _this.slots[0].values = res;
        // 根据默认省获取要显示的省
        res.forEach((item, index) => {
          // 上个页面传过来的省
          if (item.areaName == _this.mrProvience) {
            _this.mrpId = item.id;
            _this.slots[0].defaultIndex = index;
            // 获取市数据
            var cityList = _this.getPrevenceData(item.id);
            // 根据默认市获取要显示的市
            cityList.then(rescity => {
              // 给数据做缓存取消时用
              _this.oldCityList = rescity;
              _this.slots[2].values = rescity;
              rescity.forEach((item, index) => {
                if (item.areaName == _this.showCity) {
                  // 缓存id如果滑动时id变化才发请求
                  _this.mrcid = item.id;
                  _this.slots[2].defaultIndex = index;
                  // 获取区的数据
                  var quList = _this.getPrevenceData(item.id);
                  quList.then(resqu => {
                    _this.oldQuList = resqu;
                    _this.slots[4].values = resqu;
                    _this.cityDataReady = true;
                    var valueArr = this.$refs.pickCom.getValues();
                    this.oldSlots = valueArr.concat();
                  });
                }
              });
            });
          }
        });
      });
    });
  }
};
</script>

<style scoped>
.manage_wrap {
  position: relative;
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
.userInfo {
  height: 5rem;
  background-color: #ffffff;
  padding: 0 0.36rem;
}
.receiveInfo {
  height: 1.2rem;
}
.userInfo >>> .mint-cell-value {
  border-bottom: 0.01rem solid #eeeeee;
  height: 0.8rem;
  line-height: 0.8rem;
  color: #333333;
  font-size: 15px;
}
.del_address {
  height: 4.8rem;
  position: relative;
  width: 100%;
  bottom: 0;
  left: 0;
}
.del_address .order_button {
  height: 0.9rem;
  width: 6rem;
  border-radius: 0.45rem;
  position: absolute;
  left: 50%;
  top: 55%;
  margin-left: -3rem;
}
.save_address {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
}
.save_address >>> .mint-cell {
  background: #f1f3f6;
}
.save_address >>> .mint-checkbox-core {
  border-radius: 0;
}
.is_link {
  position: relative;
  display: inline-block;
  left: 0.25rem;
}
.receiveInfo >>> .mint-field-core {
  background-color: #ffffff;
}
.prop-tk {
  width: 100%;
  height: 5rem;
  padding: 0 0.36rem;
  border-radius: 0.24rem;
}
.pop-btn {
  line-height: 0.4rem;
  clear: both;
}
.pop-btn .cancle {
  float: left;
  font-size: 0.32rem;
}
.pop-btn .insure {
  float: right;
  font-size: 0.32rem;
}
</style>


