<template>
  <div class="policeTravel">
    <towtop :name="titlename"/>
    <div>
      <div class="input_box carbox">
        <label class="carnumber">车辆车牌</label>
        <!-- <select disabled class="carboxselect">
          <option value="00" selected = "selected" >云</option>
        </select> -->
        <span disabled class="carboxselect">云</span>
        <input type="text" placeholder="请输入车牌号" v-model="carnumber"/>
      </div>
      <div class="input_box carbox">
        <Field readonly label="车辆号牌种类" desc="" disableclear type="text" placeholder="请选择车辆号牌种类" :required=false :value="cartype" @click.native="yearOpen('pickerselect02')">
				</Field>
				<Selectpopup ref="pickerselect02" position="bottom"   :dataslots="selectData01" :visible-item-count="5" class="example-select_item" @confirms="select03">
				</Selectpopup>
      </div>
    </div>
    <button class="commonBtn" @click="query()">申请</button>
  </div>

</template>

<script>
  import towtop from '../../../../components/HederTwo'
  import { cenurl } from "../../../../components/toptow.js"
    export default {
      data:function(){
        return {
          titlename: '我的行驶证二维码',
          carnumber: "",
          cartype:"",
          cartypecode:"",
          datatext:[],
          datatextcode:[],
          carytype:'',
          caryname:'',
          selectData01:[{
              flex: 1,
              values: ["迪庆藏族自治州","临沧","德宏傣族景颇族自治州","昭通","丽江","保山","文山壮族苗族自治州","楚雄彝族自治州","滇中新区","西双版纳傣族自治州","怒江傈僳族自治州","玉溪","曲靖","红河哈尼族彝族自治州","普洱","大理白族自治州","昆明"],
              showText: 'text',
              className: 'slot1',
              textAlign: 'center'
            }
          ],
          confirmValSelect:''
        }
      },
      components: {
        towtop
      },
      mounted(){

          var arrow = document.getElementsByClassName("hui-icon_arrow-left")
          arrow[0].style="display:none;"

        let setdata={
            "txnBodyCom":{
              matter_id: window.sessionStorage.getItem("matterid"),
              "parentId":"1022"
            }
          }
        this.$ajaxRequest("post",'/gsp/mng19019', setdata).then((res) => {
          console.log(res)
          for(var i=0,len=res.length;i<len;i++){
              this.datatext.push(res[i].cmnCdNm)
              this.datatextcode.push(res[i].cmnCd)
            }
        }).catch((response) => {});
      },
      methods:{
        query:function(){
          const cardNumberReg = /^[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/gi
          if(this.carnumber==""){
            this.$toast('请输入车牌号');
            return
          }else if(!this.carnumber.match(cardNumberReg)){
             this.$toast('请输入正确车牌号');
             return
          }else if(this.cartype==""){
             this.$toast('请选择车辆号牌种类');
             return
          }else{
            for(var i=0,lens=this.datatext.length;i<lens;i++){
              if(this.cartype==this.datatext[i]){
                this.cartypecode=this.datatextcode[i]
              }
            }
            this.$router.push('/wating?keynumber=2&carnumber='+this.carnumber+'&cartype='+this.cartypecode)
          }
        },
        open(picker) {
				  this.$refs[picker].open();
				  document.activeElement.blur();
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
        },
        typeOpen(picker) {
          this.selectData01[0].values = types;
          this.selectFlag = true;
          this.$refs[picker].open();
          document.activeElement.blur();
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
        },
        yearOpen(picker) {
          this.selectFlag = false;
          this.selectData01[0].values = this.datatext;
          this.$refs[picker].open();
          document.activeElement.blur();
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
        },
        select03(selectedVal) {
          if (this.selectFlag) {
            this.caryname = selectedVal[0].text;
            this.carytype = selectedVal[0].value;
          } else {
            this.cartype = selectedVal[0];
          }
        }
      }
    }
</script>
<style>
  .policeTravel .carbox .hui-field_title {
    width: auto !important;
  }
  .policeTravel .hui-field_title{font-size: .28rem;}
  .policeTravel .hui-field_core{font-size: .28rem;}
</style>
<style lang='less' scoped>
  .policeTravel {

    .input_box{
      input {text-align: right;font-size: .28rem;}
    }
  }

.carbox{
    display: flex;
}
.carnumber{
    display: flex;
    width: 40%;
}
.carcity{
    display: inline-block;
    flex: 1;
    text-align: right;
    color: #c1c1c1;
    margin-right: 0.1rem;
}
.hui-field{
  padding: 0 !important;
  border:none !important;
}
.carboxselect{
  width: 15% !important;
}
</style>

