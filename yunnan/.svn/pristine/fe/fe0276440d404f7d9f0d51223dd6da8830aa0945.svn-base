<template>
	<div class="bureau_sports_search">
		<towtop :name="title" />
		<div class="input_box">
      		<label>场馆名称</label>
      		<input type="text"  v-model="name"/>
    	</div>
		<div class="input_box"  @click="open('pickerselect01')">
			 <Icon type="arrow-right" size="16" color="#999999"></Icon>
      		<label>区域</label>
      		<input type="text" :value='district'/>
    	</div>
		<Huiselect
    	ref="pickerselect01"
    	position="bottom"
    	:dataslots="slots"
    	class="example-select_item"
    	@confirms="onValuesChange"
 		></Huiselect>	
		<!-- <button class="commonBtn" @click='btnClick'>查询</button> -->
    <div class="padTopAdd5">
      <mybutton :btnData="btnData" @click="btnClick"/>
    </div>
	
		<Popupprompt
				v-model="popupVisible6"
				:title="content2.title"
				:text="content2.text"
				:confirm-btn = {}
				:cancel-btn = {}
				:btn-list= "content2.btnList"
				@click="clickbtn2"
				>
				<div slot="othercontent">
					<div class="hintImg"></div>
				</div>
			</Popupprompt>

		<Popupprompt
				v-model="popupVisible1"
				:text="content1.text"
				:confirm-btn = {}
				:cancel-btn = {}
				:btn-list= "content1.btnList"
				@click="clickbtn1"
				>
				<div slot="othercontent">
					
				</div>
			</Popupprompt>	
	</div>
</template>
<script>
import towtop from "../../../components/HederTwo";
import Button from "./../common/button.vue";
import { cenurl } from "../../../components/toptow.js";
import mybutton from "../../../components/MyButton";

export default {
  data() {
    return {
      btnData: [
        {
          text: "查询",
          disabled: false,
          isSure: true
        }
      ],
      title: "云南省公共体育馆",
      district: "",
      name: "",
      slots: [
        {
          flex: 1,
          values: [
            "请选择",
            "昆明",
            "曲靖",
            "玉溪",
            "保山",
            "昭通",
            "丽江",
            "普洱",
            "临沧",
            "德宏",
            "怒江",
            "迪庆",
            "大理",
            "楚雄",
            "红河",
            "文山",
            "西双版纳"
          ],

          className: "slot1",
          textAlign: "center"
        },
        {
          divider: true,
          content: "-",
          className: "slot2"
        }
      ],
      popupVisible6: false,
      content2: {
        text: "抱歉，未查询到任何信息",
        btnList: [
          {
            id: "btn1",
            text: "确认",
            primary: true
          }
        ]
      },
      popupVisible1: false,
      content1: {
        title: "提示",
        text: "请先选择地区",
        btnList: [
          {
            id: "btn1",
            text: "确认",
            primary: true
          }
        ]
      }
    };
  },
  components: {
    mybutton,
    towtop,
    Button
  },
  methods: {
    //选择市区
    onValuesChange(values) {
      this.district = values[0];
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
    },

    btnClick() {
      let setdata = {
        tenant: "530000000000",
        txn_itt_chnl_id: "00",
        txn_itt_chnl_type: "11",
        pageSize: "10",
        current: "2",
        province: "云南省",
        city: this.district,
        area: ""
      };
      this.$ajaxRequest("post", "/gsp/mng60014", setdata)
        .then(res => {
          var result = res.List;
          console.log(result);
          if (result == null || result.length == 0) {
            //未查询到相关信息
            this.popupVisible6 = true;
            return;
          } else {
            // debugger
            this.$router.push({
              name: "sportsResult",
              params: { datalist: JSON.stringify(result) }
            });
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    open(picker) {
      this.$refs[picker].open();
      document.activeElement.blur();
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
    },
    clickbtn2(id) {
      this.popupVisible6 = false;
    },
    clickbtn1(id) {
      this.popupVisible1 = false;
    }
  }
};
</script>

<style  scoped>
.bureau_sports_search {
  height: 5rem;
  width: 100%;
}
.mint-cell-title {
  text-align: left !important;
}

.example-select_btn-wrapper {
  margin-top: 15px;
}

.example-select_arrowRight {
  display: block;
  width: 30px;
  height: 30px;
  background-size: 16px 16px;
}

.hui-field_core {
  text-align: right;
}

.hui-field_main {
  font-size: 0.28rem;
}

.hui-field_star {
  display: none;
}

.hui-btn.is-block {
  width: 5.9rem;
  height: 0.9rem;
  margin: 1rem auto;
  background-color: #2d7ffc;
  font-size: 0.32rem;
  color: #fff;
}
.hui-popupPrompt {
  width: 5.86rem;
}
.hui-popupPrompt_text {
  text-align: center;
  color: #a3a3a3;
  margin-top: 2.02rem;
}
.hintImg {
  background-image: url("../../../assets/images/ico_hint@3x.png");
  background-size: 1.12rem 1.12rem;
  width: 1.12rem;
  height: 1.12rem;
  position: absolute;
  top: 0;
  left: 50%;
  margin: 0.56rem 0 0 -0.56rem;
}
</style>