<template>
  <div class="settleForm">
    <towtop :name="titlename"/>
	<div class="header noMarginTop">上传材料</div>
	 <div class="photo_out_box">
       <div class="photo_box">
         <div class="headline">
           <div class="blueline"></div>夫妻双方结婚证
         </div>
          <Upload  ref="upload" action=''>
              <div class="addPhtoto"></div>
          </Upload>
       </div>
        <div class="photo_box">
         <div class="headline">
           <div class="blueline"></div>男方户口簿
         </div>
         <Upload  ref="upload" action=''>
              <div class="addPhtoto"></div>
          </Upload>
       </div>
       <div class="photo_box">
         <div class="headline">
           <div class="blueline"></div>女方户口簿
         </div>
         <Upload  ref="upload" action=''>
              <div class="addPhtoto"></div>
          </Upload>
       </div>
       <div class="photo_box">
         <div class="headline">
           <div class="blueline"></div>男方身份证（正反两面）
         </div>
         <Upload  ref="upload" action=''>
              <div class="addPhtoto"></div>
          </Upload>
       </div>
       <div class="photo_box">
         <div class="headline">
           <div class="blueline"></div>女方身份证（正反两面）
         </div>
         <Upload  ref="upload" action=''>
              <div class="addPhtoto"></div>
          </Upload>
       </div>
        <div class="photo_box">
         <div class="headline">
           <div class="blueline"></div>其他材料（如壹孩户口簿个人页、壹孩出生证、生育登记服务证（壹孩）等材料）
         </div>
         <Upload  ref="upload" action=''>
              <div class="addPhtoto"></div>
          </Upload>
       </div>
     </div>
	<!-- <button class="commonBtn" @click="submit">下一步</button> -->
    	<mybutton :btnData="btnData" @click="submit" />
    <Popupprompt 
			v-model="popupVisible6" 
			:confirm-btn={} 
			:cancel-btn={} 
			:btn-list="content2.btnList" 
			@click="clickbtn2">
			<div slot="othercontent">
				<div class="popTitle special">承诺书</div>
				<div class="popText special">以上婚育情况，夫妻双方如有虚假或隐瞒，造成违法生育的，愿意按照《云南省人口与计划生育条例》相关规定接受处罚，并由夫妻双方共同承担相应的法律责任。</div>
          </div>
		</Popupprompt>  
    <Popupprompt 
			v-model="popupVisible7" 
			:confirm-btn={} 
			:cancel-btn={} 
			:btn-list="content3.btnList" 
			@click="clickbtn3">
			<div slot="othercontent">
				<div class="popTitle blueFont">恭喜您！</div>
				<div class="popText middleFont">您的申请已提交成功！<br>具体办理进度可在我的办理进度中查询。</div>
          </div>
		</Popupprompt> 

  
    
		
  </div>
</template>

<script>
import towtop from "../../../../components/HederTwo";
import { cenurl } from "../../../../components/toptow.js";
import mybutton from "../../../../components/MyButton";
export default {
  data: function() {
    return {
      btnData:[
					{
						text:'下一步',
						disabled: false,
						isSure: true,
					}
				],
      titlename: "贰孩生育服务登记",
      popupVisible6: false,
			content2: {
			  btnList: [{
			    id: "btn1",
			    text: "确认",
			    primary: true
			    }]
      },
      popupVisible7: false,
			content3: {
			  btnList: [{
			    id: "btn1",
			    text: "确认",
			    primary: true
			    }]
			}
    }
  },
  components: {
			mybutton,
    towtop
  },
  methods: {
    submit() {
      this.popupVisible6 = true;
    },
    clickbtn2(){
      this.popupVisible7 = true;
    },
    clickbtn3(){
      this.$router.push('result');
    }
  }
};

</script>



<style scoped lang="less">
@import "../../../../assets/css/Engagement.less";
    .photo_out_box{
        background: #fff;
        padding: 0 0.36rem;
        text-align:left;

        .photo_box{
            border-bottom: 0.02rem solid #F1F3F6;
            background: #fff;
            padding: 0.4rem 0;

            .headline{
                font-size: 0.3rem;
                color: #333333;
                font-weight: bold;
                margin-bottom: 0.52rem;
            }

            .addPhtoto{
                display:inline-block;
                background-image: url("../../../../assets/images/addPhoto@2x.png");
                @media (-webkit-min-device-pixel-ratio:3),(min-device-pixel-ratio:3){
                    background-image: url("../../../../assets/images/addPhoto@3x.png")
                }
                width:1.6rem;
                height:1.6rem;
                background-size: 1.6rem;
            }
            .photos{
                box-sizing: border-box;
                margin-right: 0.4rem;
                display:inline-block;
                width:1.6rem;
                height: 1.6rem;
                background: #F5F5F5;
                border: 0.02rem solid #ECECEC;
                border-radius: 0.04rem;
            }
        }
    }

    .popTitle.special{
      margin: 0.4rem 0 !important;
    }
    .popText.special{
      text-align:left !important;
      margin-bottom: 0 !important;
      padding: 0 0.35rem;
      line-height: 0.48rem;

    }
    .blueFont{
      color: #2D7FFC !important;
      margin: 0.4rem 0 !important;
    }

    .middleFont{
      text-align: center !important;
      line-height: 0.48rem;
      margin-bottom: 0 !important;
    }
</style>