<style lang="less" scoped>
.taiFourWrap{
    .content{
        p{
            font-size: 0.28rem;
            padding: 0rem 0.2rem 0.2rem;
            box-sizing: border-box;
            color: #999;
            text-align: left;
        }
        .inputList{
            p{
                font-size: 0.28rem;
                padding: .2rem 0.2rem 0.2rem;
                box-sizing: border-box;
                color: #999;
                text-align: left;
            }
        }
    }
    .btnWrap{
        margin-top: 1rem;
        padding: 0 .8rem;
        font-size: .33rem;
        span{
            display: block;
            width: 100%;
            height: .9rem;
            border-radius: 40px;
            line-height: .9rem;
            text-align: center;
            background: #2D7FFC;
            color: white;
        }
    }
}
.taiFourWrap .hui-field{
    height: 1rem;
    padding: 0rem .2rem;
    box-sizing: border-box;
    border: none;
}
.taiFourWrap .hui-field_main{
    width: 100%;
    height: 100%;
    border-bottom: 1px solid #999;
}
.taiFourWrap .hui-field_title{
    width: 2.3rem;
    height: 100%;
}
.taiFourWrap .example-select_btn-wrapper{
    margin-top:15px;
  }
.taiFourWrap .example-select_arrowRight{
      display: block;
        margin-left: .1rem;
        width: .16rem;
        height: .26rem;
      background: url(../../../../../assets/images/arrow.png) 0px center no-repeat;
      background-size: 100%;
  }
.taiFourWrap .hui-radios_itemWrapper{
    padding: 0rem;
}
.taiFourWrap .hui-radios{
    height: 1rem;
    line-height: 1rem;
    padding: 0rem .2rem;
}
.taiFourWrap .hui-radios_item{
    border-bottom: 1px solid #999;
}
.taiFourWrap .content .noborder .hui-field_main{
    border-bottom: none;
}
.taiFourWrap .middleone{
  position:relative;
}
.taiFourWrap .middletwo{
  font-size: 0.4rem;
  color: red;
  display: inline-block;
  position: absolute;
  top:35%;
  left:0.05rem;
}
</style>
<style>
.taiFourWrap .hui-field_main{
    height: 100%;
}
.taiFourWrap .hui-field_title{
    width: 120px;
  margin-left: 0.08rem;
}
.taiFourWrap .hui-checklist_item{
    padding:0rem;
}
</style>

<template>
    <div class="taiFourWrap">
        <towtop :name="titlename"/>
        <div class="content">
            <p>台湾通行证申请信息</p>
          <div class="middleone">
            <span class="middletwo">*</span>
            <Field class="noborder" readonly  label="申请类型" type="text" placeholder="请选择您的申请类型" :value="selectApply" @click.native="open('applyPicker')">
                    <span slot="append" class="example-select_arrowRight"></span>
            </Field>
          </div>
            <Selectpopup
                ref="applyPicker"
                position="bottom"
                :dataslots="applyPicker"
                class="example-select_item"
                @confirms="selectedApply"
            ></Selectpopup>
          <div class="middleone">
            <span class="middletwo" v-if="confirmApply.value && confirmApply.value == applyPicker[0].values[1].value">*</span>
            <Field v-if="confirmApply.value && confirmApply.value == applyPicker[0].values[1].value" type="text" class="noborder" label="现持证件号码" :value="nowId" placeholder="请输入您的现持证件号码" :model="nowId">
            </Field>
          </div>

            <div class="inputList" v-if="confirmApply.value && (confirmApply.value == applyPicker[0].values[0].value || confirmApply.value == applyPicker[0].values[1].value)">
                <p>选择前往地点</p>
                <Checklist v-model="taivalue" title="" :options="[{label: '我要前往台湾', value: '0', disabled: false}]"></Checklist>
              <div class="middleone">
                <span class="middletwo">*</span>
                <Field readonly  label="签注种类" type="text" placeholder="请选择您的签注种类" :value="selectTaiType" @click.native="open('taiTypePicker')">
                          <span slot="append" class="example-select_arrowRight"></span>
                  </Field>
              </div>
                <Selectpopup
                    ref="taiTypePicker"
                    position="bottom"
                    :dataslots="taiTypePicker"
                    class="example-select_item"
                    @confirms="selectedTaiType"
                ></Selectpopup>
              <div class="middleone">
                <span class="middletwo">*</span>
                <Field readonly  label="有效次数" type="text" placeholder="请选择申请的有效次数" :value="selectTaiNum" @click.native="open('taiNumPicker')">
                        <span slot="append" class="example-select_arrowRight"></span>
                </Field>
              </div>
                <Selectpopup
                    ref="taiNumPicker"
                    position="bottom"
                    :dataslots="taiNumPicker"
                    class="example-select_item"
                    @confirms="selectedTaiNum"
                ></Selectpopup>
            </div>

        </div>
        <!-- <div block class="btnWrap">
            <span @click="goto">下一步</span>
        </div> -->
        <div class="padTopAdd5">
          <mybutton :btnData="btnData" @click="goto" />
        </div>
    </div>
</template>

<script>
import towtop from '@/components/HederTwo'
import mybutton from "@/components/MyButton";
export default {
    data(){
        return{
            btnData:[
        {
          text:'下一步',
          disabled: false,
          isSure: true,
        }
      ],
            titlename:'出入境证件预受理',
            taivalue:[],
            selectApply:[],
            applyPicker: [{
                flex: 1,
                values: [{text:'申请证件及签注',value:'1'},{text:'单独签注',value:'0'},{text:'单独申请证件',value:'2'}],
                className: 'slot1',
                showText:'text',
                defaultIndex:0
            }],
            nowId:'',
            confirmApply:[],
            selectTaiType:[],
            taiTypePicker: [{
                flex: 1,
                values: [{text:'团体旅游',value:'0'},{text:'个人旅游',value:'1'}],
                className: 'slot1',
                showText:'text',
                defaultIndex:0
            }],
            confirmTaiType:[],
            selectTaiNum:[],
            taiNumPicker: [{
                flex: 1,
                values: [{text:'三个月一次',value:'2'},{text:'三个月两次',value:'2'},{text:'一年一次',value:'1'},{text:'一年两次',value:'2'}],
                className: 'slot1',
                showText:'text',
                defaultIndex:0
            }],
            confirmTaiNum:[],
            entryExitUrl:[],
        }
    },
    components:{
    mybutton,
        towtop
    },
    watch:{
        taivalue(curVal,oldVal){
// 　　　　　　　console.log(curVal,oldVal);
            if(!curVal.length){
                 this.selectTaiType = '';
                this.selectTaiNum = '';
                this.confirmTaiType = [];
                this.confirmTaiNum = [];
            }
　　　　},
    },
    mounted () {
      this.entryExitUrl = sessionStorage.getItem('GATentryExitUrl').split(',');
      if(sessionStorage.getItem('GATtaiApply')){
          let message = JSON.parse(sessionStorage.getItem('GATtaiApply'));
            console.log(message)
            this.nowId = message.nowId;
            this.taivalue = message.taivalue;
            this.selectApply = message.confirmApply.text;
            this.selectTaiType = message.confirmTaiType.text;
            this.selectTaiNum = message.confirmTaiNum.text;
            // 判断条件需要的赋值
            this.confirmApply = message.confirmApply;
            this.confirmTaiType = message.confirmTaiType;
            this.confirmTaiNum = message.confirmTaiNum;
      }
    },
    methods:{
         open(picker) {
            this.$refs[picker].open();
            document.activeElement.blur();
      $('.hui-popup').on('touchmove',function(event){
        event.preventDefault()
        event.stopPropagation()
      })
        },
        selectedApply(selectedVal){
            this.confirmApply = selectedVal[0];
            if(typeof selectedVal[0] === 'object'){
                this.selectApply = selectedVal[0].text;
            }else{
                this.selectApply = selectedVal;
            }
        },
        selectedTaiType(selectedVal){
            this.confirmTaiType = selectedVal[0];
            if(typeof selectedVal[0] === 'object'){
                this.selectTaiType = selectedVal[0].text;
            }else{
                this.selectTaiType = selectedVal;
            }
            if(!this.taivalue.length){
                this.taivalue.push("0")
            }
        },
        selectedTaiNum(selectedVal){
            this.confirmTaiNum = selectedVal[0];
            if(typeof selectedVal[0] === 'object'){
                this.selectTaiNum = selectedVal[0].text;
            }else{
                this.selectTaiNum = selectedVal;
            }
            if(!this.taivalue.length){
                this.taivalue.push("0")
            }
        },
        handleNowId(val){
            this.nowId = val;
        },
        goto(){
            let _self = this;
            switch (this.confirmApply.value) {
                case this.applyPicker[0].values[0].value:
                    if(!judge()){
                        return
                    };
                    break;
                case this.applyPicker[0].values[1].value:
                    if(!judge()){
                        return
                    };
                    if(!this.nowId){
                        this.$toast("请输入您的现持证件号码")
                        return
                    }
                    break;
                case this.applyPicker[0].values[2].value:
                    break;
                default:
                    break;
            }
            function judge(){
                if(!_self.taivalue.length){
                    _self.$toast("请选择您选择前往地点")
                    return false
                }
                if(_self.taivalue.length){
                    if(!_self.selectTaiType){
                        _self.$toast("请选择您的签注种类")
                        return false
                    }
                    if(!_self.selectTaiNum){
                        _self.$toast("请选择申请的有效次数")
                        return false
                    }
                }
                return true;
            }
            let tempOb = {
                confirmApply:this.confirmApply,
                nowId:this.nowId,
                taivalue:this.taivalue,
                confirmTaiType:this.confirmTaiType,
                confirmTaiNum:this.confirmTaiNum,
            };
            console.log("tempOb",tempOb);
            // sessionStorage.setItem('GATentryExitUrl',this.entryExitUrl);
            sessionStorage.setItem('GATtaiApply',JSON.stringify(tempOb));
            this.$router.push({
                name: 'domesticFive',
                params:{'entryExitUrl':this.entryExitUrl},
            });
        }
    }
}
</script>
