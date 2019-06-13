<style lang="less" scoped>
.gangAoFourWrap{
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
.gangAoFourWrap .hui-field{
    height: 1rem;
    padding: 0rem .2rem;
    box-sizing: border-box;
    border: none;
}
.gangAoFourWrap .hui-field_main{
    width: 100%;
    height: 100%;
    border-bottom: 1px solid #999;
}
.gangAoFourWrap .hui-field_title{
    width: 2.3rem;
    height: 100%;
}
.gangAoFourWrap .example-select_btn-wrapper{
    margin-top:15px;
  }
.gangAoFourWrap .example-select_arrowRight{
      display: block;
        margin-left: .1rem;
        width: .16rem;
        height: .26rem;
      background: url(../../../../../assets/images/arrow.png) 0px center no-repeat;
      background-size: 100%;
  }
.gangAoFourWrap .hui-radios_itemWrapper{
    padding: 0rem;
}
.gangAoFourWrap .hui-radios{
    height: 1rem;
    line-height: 1rem;
    padding: 0rem .2rem;
}
.gangAoFourWrap .hui-radios_item{
    border-bottom: 1px solid #999;
}
.gangAoFourWrap .content .noborder .hui-field_main{
    border-bottom: none;
}
</style>
<style>
.gangAoFourWrap .hui-field_main{
    height: 100%;
}
.gangAoFourWrap .hui-field_title{
    width: 120px;
}
.gangAoFourWrap .hui-checklist_item{
    padding:0rem;
}
.gangAoFourWrap  .middleone{
  position:relative;
}
.gangAoFourWrap  .middletwo{
  font-size: 0.4rem;
  color: red;
  display: inline-block;
  position: absolute;
  top:35%;
  left:0;
}
</style>

<template>
    <div class="gangAoFourWrap">
        <towtop :name="titlename"/>
        <div class="content">
            <p>港澳通行证申请信息</p>
          <div class="middleone">
            <span class="middletwo">*</span>
            <Field class="noborder"  readonly label="申请类型" type="text" placeholder="请选择您的申请类型" :value="selectApply" @click.native="open('applyPicker')">
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
            <Field v-if="confirmApply.value && confirmApply.value == applyPicker[0].values[1].value" type="text" class="noborder" label="现持证件号码"  placeholder="请输入您的现持证件号码" v-on:currentval="handleNumVal">
            </Field>
          </div>
            <div class="inputList" v-if="confirmApply.value && (confirmApply.value == applyPicker[0].values[0].value || confirmApply.value == applyPicker[0].values[1].value)">
                <p>选择前往地点</p>
                <Checklist v-model="gangvalue" title="" :options="[{label: '我要前往香港', value: '0', disabled: false}]"></Checklist>
              <div class="middleone">
                <span class="middletwo">*</span>
                <Field readonly  label="签注种类" type="text" placeholder="请选择您的签注种类" :value="selectGangType" @click.native="open('gangTypePicker')">
                          <span slot="append" class="example-select_arrowRight"></span>
                  </Field>
              </div>
                <Selectpopup
                    ref="gangTypePicker"
                    position="bottom"
                    :dataslots="gangTypePicker"
                    class="example-select_item"
                    @confirms="selectedGangType"
                ></Selectpopup>
              <div class="middleone">
                <span class="middletwo">*</span>
                <Field readonly  label="有效次数" type="text" placeholder="请选择申请的有效次数" v-model="selectGangNum" :value="selectGangNum" @click.native="open('gangNumPicker')">
                        <span slot="append" class="example-select_arrowRight"></span>
                </Field>
              </div>
                <Selectpopup
                    ref="gangNumPicker"
                    position="bottom"
                    :dataslots="gangNumPicker"
                    class="example-select_item"
                    @confirms="selectedGangNum"
                ></Selectpopup>

                <Checklist v-model="aovalue" title="" :options="[{label: '我要前往澳门', value: '0', disabled: false}]"></Checklist>
              <div class="middleone">
                <span class="middletwo">*</span>
              <Field readonly  label="签注种类" type="text" placeholder="请选择您的签注种类" :value="selectAoType" @click.native="open('aoTypePicker')">
                        <span slot="append" class="example-select_arrowRight"></span>
                </Field>
              </div>
                <Selectpopup
                    ref="aoTypePicker"
                    position="bottom"
                    :dataslots="aoTypePicker"
                    class="example-select_item"
                    @confirms="selectedAoType"
                ></Selectpopup>
              <div class="middleone">
                <span class="middletwo">*</span>
                <Field readonly  label="有效次数" type="text" placeholder="请选择申请的有效次数" v-model="selectAoNum" :value="selectAoNum" @click.native="open('aoNumPicker')">
                        <span slot="append" class="example-select_arrowRight"></span>
                </Field>
              </div>
                <Selectpopup
                    ref="aoNumPicker"
                    position="bottom"
                    :dataslots="aoNumPicker"
                    class="example-select_item"
                    @confirms="selectedAoNum"
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
            gangvalue:[],
            aovalue:[],
            selectApply:[],
            applyPicker: [{
                flex: 1,
                values: [{text:'申请证件及签注',value:'1'},{text:'单独签注',value:'0'},{text:'单独申请证件',value:'2'}],
                className: 'slot1',
                showText:'text',
                defaultIndex:0
            }],
            nowId:'',
            demo:'',
            confirmApply:[],
            selectGangType:[],
            gangTypePicker: [{
                flex: 1,
                values: [{text:'团体旅游',value:'0'},{text:'个人旅游',value:'1'}],
                className: 'slot1',
                showText:'text',
                defaultIndex:0
            }],
            confirmGangType:[],
            selectGangNum:'',
            gangNumPicker: [{
                flex: 1,
                values: [{text:'三个月一次',value:'2'},{text:'三个月两次',value:'2'},{text:'一年一次',value:'1'},{text:'一年两次',value:'2'}],
                className: 'slot1',
                showText:'text',
                defaultIndex:0
            }],
            confirmGangNum:[],
            selectAoType:[],
            aoTypePicker: [{
                flex: 1,
                values: [{text:'团体旅游',value:'0'},{text:'个人旅游',value:'1'}],
                className: 'slot1',
                showText:'text',
                defaultIndex:0
            }],
            confirmAoType:[],
            selectAoNum:'',
            aoNumPicker: [{
                flex: 1,
                //values: [{text:'三个月一次',value:'0'},{text:'三个月两次',value:'1'},{text:'一年一次',value:'1'},{text:'一年两次',value:'1'}],
                values: [{text:'三个月一次',value:'0'},{text:'一年一次',value:'1'}],
                className: 'slot1',
                showText:'text',
                defaultIndex:0
            }],
            confirmAoNum:[],
            entryExitUrl:[],
        }
    },
    components:{
    mybutton,
        towtop
    },
    watch:{
        gangvalue(curVal,oldVal){
// 　　　　　　　console.log(curVal,oldVal);
            if(!curVal.length){
                 this.selectGangType = '';
                this.selectGangNum = '';
                this.confirmGangType = [];
                this.confirmGangNum = [];
            }
　　　　},
        aovalue(curVal,oldVal){
// 　　　　　　　console.log(curVal,oldVal);
            if(!curVal.length){
                 this.selectAoType = '';
                this.selectAoNum = '';
                this.confirmAoType = [];
                this.confirmAoNum = [];
            }
　　　　},
    },
    mounted () {
      this.entryExitUrl = sessionStorage.getItem('GATentryExitUrl').split(',');
      if(sessionStorage.getItem('GATgangAoApply')){
          let message = JSON.parse(sessionStorage.getItem('GATgangAoApply'));
            console.log(message)
            this.nowId = message.nowId;
            this.gangvalue = message.gangvalue;
            this.aovalue = message.aovalue;
            this.selectApply = message.confirmApply.text;
            this.selectGangType = message.confirmGangType.text;
            this.selectGangNum = message.confirmGangNum.text;
            this.selectAoType = message.confirmAoType.text;
            this.selectAoNum = message.confirmAoNum.text;
            // 判断条件需要的赋值
            this.confirmApply = message.confirmApply;
            this.confirmGangType = message.confirmGangType;
            this.confirmGangNum = message.confirmGangNum;
            this.confirmAoType = message.confirmAoType;
            this.confirmAoNum = message.confirmAoNum;
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
        selectedGangType(selectedVal){
            this.confirmGangType = selectedVal[0];
            if(typeof selectedVal[0] === 'object'){
                this.selectGangType = selectedVal[0].text;
            }else{
                this.selectGangType = selectedVal;
            }
            if(!this.gangvalue.length){
                this.gangvalue.push("0")
            }
        },
        handleNumVal(data){
            this.nowId = data;
        },
        selectedGangNum(selectedVal){
            this.confirmGangNum = selectedVal[0];
            console.log(this.confirmGangNum)
            if(typeof selectedVal[0] === 'object'){
                console.log('1')
                this.selectGangNum = selectedVal[0].text;
                //this.selectAoNum=selectedVal[0].text
            }else{
                console.log('2')
                this.selectGangNum = selectedVal;
            }
            if(!this.gangvalue.length){
                this.gangvalue.push("0")
            }
        },
         selectedAoType(selectedVal){
             this.confirmAoType = selectedVal[0];
            if(typeof selectedVal[0] === 'object'){
                this.selectAoType = selectedVal[0].text;
            }else{
                this.selectAoType = selectedVal;
            }
            if(!this.aovalue.length){
                this.aovalue.push("0")
            }
        },
        selectedAoNum(selectedVal){
            this.confirmAoNum = selectedVal[0];
            if(typeof selectedVal[0] === 'object'){
                console.log(this.confirmAoNum)
                this.selectAoNum = selectedVal[0].text;
            }else{
                this.selectAoNum = selectedVal;
            }
            if(!this.aovalue.length){
                this.aovalue.push("0")
            }
        },
        goto(){
            let _self = this;
            if(this.selectApply == "" ||  this.selectApply == undefined){
                 this.$toast("请选择申请类型")
                 return
            }
            if(this.gangvalue.length){
                if(this.selectGangType == "" ||  this.selectGangType == undefined){
                    this.$toast("请选择香港签注种类")
                    return
                }
                if(this.selectGangNum == "" ||  this.selectGangNum == undefined){
                    console.log(this.selectGangNum)
                    this.$toast("请选择有效次数")
                    return
                }
            }
             if(this.aovalue.length){
                if(this.selectAoType == "" ||  this.selectAoType == undefined){
                    this.$toast("请选择澳门签注种类")
                    return
                }
                if(this.selectAoNum == "" ||  this.selectAoNum == undefined){
                    this.$toast("请选择有效次数")
                    return
                }
             }


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

                    if (this.nowId.length !== 9) {
                        this.$toast('请输入正确格式现持证件号码')
                        return
                    }
                    break;
                case this.applyPicker[0].values[2].value:
                    break;
                default:
                    break;
            }
            function judge(){
                if(!_self.gangvalue.length && !_self.aovalue.length){
                    _self.$toast("请选择您至少选择一个前往地点")
                    return false
                }
                if(_self.gangvalue.length){
                    if(!_self.selectGangType){
                        _self.$toast("请选择您的签注种类")
                        return false
                    }
                    if(!_self.selectGangNum){
                        _self.$toast("请选择申请的有效次数")
                        return false
                    }
                }
                if(_self.aovalue.length){
                    if(!_self.selectAoType){
                        _self.$toast("请选择您的签注种类")
                        return false
                    }
                    if(!_self.selectAoNum){
                        _self.$toast("请选择申请的有效次数")
                        return false
                    }
                }
                return true;
            }
            let tempOb = {
                confirmApply:this.confirmApply,
                nowId:this.nowId,
                gangvalue:this.gangvalue,
                confirmGangType:this.confirmGangType,
                confirmGangNum:this.confirmGangNum,
                aovalue:this.aovalue,
                confirmAoType:this.confirmAoType,
                confirmAoNum:this.confirmAoNum,
            };
            console.log("tempOb",tempOb);
            sessionStorage.setItem('GATgangAoApply',JSON.stringify(tempOb));
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
                        return;
                    }
                }
            }
        }
    }
}
</script>
