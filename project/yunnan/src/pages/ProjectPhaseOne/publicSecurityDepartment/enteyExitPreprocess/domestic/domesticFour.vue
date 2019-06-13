<style scoped>
.domesticFourWrap p {
  font-size: 0.28rem;
  padding: 0rem 0.4rem 0.2rem;
  box-sizing: border-box;
  color: #999;
  text-align: left;
}
.domesticFourWrap .btnWrap {
  margin-top: 1rem;
  padding: 0 0.8rem;
  font-size: 0.33rem;
}
.domesticFourWrap .btnWrap span {
  display: block;
  width: 100%;
  height: 0.9rem;
  border-radius: 40px;
  line-height: 0.9rem;
  text-align: center;
  background: #2d7ffc;
  color: white;
}
.domesticFourWrap .hui-field {
  padding: 0.2rem 0.3rem;
  box-sizing: border-box;
}
.domesticFourWrap .example-select_arrowRight {
  display: block;
  margin-left: 0.1rem;
  width: 0.16rem;
  height: 0.26rem;
  background: url(../../../../../assets/images/arrow.png) 0px center no-repeat;
  background-size: 100%;
}
</style>
<style>
.domesticFourWrap .hui-field_title{
  width:120px;
}
</style>


<template>
    <div class="domesticFourWrap">
        <towtop :name="titlename"/>
        <div class="content">
            <p>普通护照申请信息</p>
            <Field readonly label="护照申请类型" domesticFour type="text" placeholder="请选择护照申请类型" :value="selectType" @click.native="open('typePicker')">
                    <span slot="append" class="example-select_arrowRight"></span>
            </Field>
            <Selectpopup
                ref="typePicker"
                position="bottom" 
                :dataslots="typePicker"
                class="example-select_item"
                @confirms="selectedType"
            ></Selectpopup>
            <Field v-if="!isNew" type="text" label="原护照号码" :value="idNum" placeholder="请输入原护照号码" v-model="idNum">
            </Field>
        </div>
        <!-- <div class="btnWrap">
            <span @click="goto">下一步</span>
        </div> -->
        <div class="padTopAdd5">
          <mybutton :btnData="btnData" @click="goto" />
        </div>
    </div>
</template>

<script>
import towtop from "@/components/HederTwo";
import mybutton from "@/components/MyButton";
export default {
  data() {
    return {
      btnData:[
				{
				text:'下一步',
				disabled: false,
				isSure: true,
				}
			],
      titlename: "出入境证件预受理",
      typePicker: [
        {
          flex: 1,
          values: [{ text: "首次申请", value: "11" }, { text: "补发", value: "W4" }, { text: "换发", value: "W3" }],
          className: "slot1",
          showText: "text",
          defaultIndex: 0
        }
      ],
      selectType: "",
      typeValue:'',
      isNew:true,
      idNum:'',
      entryExitUrl:[],
    };
  },
  components: {
    mybutton,
    towtop
  },
  mounted () {
      this.entryExitUrl = sessionStorage.getItem('GATentryExitUrl').split(',');
      if(sessionStorage.getItem("GATnormalApply")){
            let normalApply = JSON.parse(sessionStorage.getItem("GATnormalApply"))
            console.log(normalApply);
            this.typePicker[0].values.forEach(element => {
              if(element.value == normalApply.normalType){
                this.selectType = element.text;
                }
                if(normalApply.normalType != this.typePicker[0].values[0].value){
                  this.isNew = false;
                }else{
                  this.isNew = true;
                }
            });
            this.typeValue = normalApply.normalType
            this.idNum = normalApply.normaloldId;
        }
  },
  methods: {
    open(picker) {
      this.$refs[picker].open();
      document.activeElement.blur();
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
    },
    selectedType(selectedVal) {
      if(selectedVal[0].value != this.typePicker[0].values[0].value){
        this.isNew = false;
      }else{
        this.isNew = true;
        this.idNum = '';
      }
      if (typeof selectedVal[0] === "object") {
        this.selectType = selectedVal[0].text;
        this.typeValue = selectedVal[0].value;
      } else {
        this.selectType =  electedVal;
      }
    },
    goto(){
      if(!this.selectType) {
        this.$toast("请选择护照申请类型")
        return 
      }
      // debugger
      if(this.typeValue != this.typePicker[0].values[0].value){
        if(!(this.idNum.match(/^1[45][0-9]{7}$|(^[P|p|S|s]\d{7}$)|(^[S|s|G|g|E|e]\d{8}$)|(^[Gg|Tt|Ss|Ll|Qq|Dd|Aa|Ff]\d{8}$)|(^[H|h|M|m]\d{8,10}$)/))){
          this.$toast("请输入正确格式的护照号码")
          return
        }
      }
      let tempOb = {
        normalType:this.typeValue,
        normaloldId:this.idNum
      };
      sessionStorage.setItem('GATnormalApply',JSON.stringify(tempOb));
      // console.log(this.entryExitUrl)
      for (let index = 0; index < this.entryExitUrl.length; index++) {
        if(this.entryExitUrl[index] == this.$route.name){
          if(index==this.entryExitUrl.length-1){
            this.$router.push({
              name: 'domesticFive',
            });
          }else{
            this.$router.push({
              name: this.entryExitUrl[index+1],
            });
            return
          }
        }
      }


    }
  }
};
</script>
