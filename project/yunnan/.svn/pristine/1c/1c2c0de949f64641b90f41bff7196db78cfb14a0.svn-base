<style>
.domesticThreeWrap .btnWrap span{
    display: block;
    width: 100%;
    height: .9rem;
    border-radius: 40px;
    line-height: .9rem;
    text-align: center;
    background: #2D7FFC;
    color: white;
}
.domesticThreeWrap .btnWrap{
    margin-top: 1rem;
    padding: 0 .8rem;
    font-size: .33rem;
}
.entryExitCheckBoxWrap p{
    font-size:.28rem;
    padding: 0rem .4rem .2rem;
    box-sizing: border-box;
    color:#999;
    text-align: left;
}
.entryExitCheckBoxWrap .hui-checklist_itemWrapper{
    padding: 0rem;
}
.entryExitCheckBoxWrap .hui-checklist{
    padding: 0rem .2rem;
}
.entryExitCheckBoxWrap .hui-checklist_item{
    margin: 0rem;
    height: 1rem;
    line-height: 1rem;
    border-bottom: 1px solid #999;
}
.entryExitCheckBoxWrap .hui-checklist_item:last-child{
    border: none;
}
.entryExitCheckBoxWrap{
    overflow: auto;
}
.cRed{
    color: #ff4d4d;
}
</style>

<template>
    <div class="domesticThreeWrap">
        <towtop :name="titlename"/>
        <div class="entryExitCheckBoxWrap">
            <p>请选择申请类型（<i class="cRed">三个证件填写内容一样,根据您的需要可以多选</i>）</p>
            <Checklist title="" v-model="checkValue" :options="checkList" ></Checklist>
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
            checkValue:[],
            checkList:[
                {label: '护照', value: 101, disabled: false},
                {label: '内地居民往来港澳通行证', value: 102, disabled: false},
                {label: '内地居民往来台湾通行证', value: 104, disabled: false}]
        }
    },
    components:{
    mybutton,
        towtop,
    },
    mounted() {
        if(sessionStorage.getItem("GATapplyType")){
            let arrtype = JSON.parse(sessionStorage.getItem("GATapplyType"))
            console.log(arrtype);
            arrtype.forEach(element => {
                this.checkValue.push(element.value)
            });
        }
    },
    methods:{
        goto(){
            if(!this.checkValue.length){
                this.$toast({
                    message: '请至少选择一个申请类型',
                    iconType: 'error'
                });
                return
            }
            // 根据属性对数组进行排序
            function compare(property){
                return function(a,b){
                    var value1 = a[property];
                    var value2 = b[property];
                    return value1 - value2;
                }
            }
            // 绑定路由和编码
            let tempArr = [
                {text:'domesticFour',value:101},
                {text:'gangAoFour',value:102},
                {text:'taiFour',value:104},
                ]
            let arrType = [];
            for (let i = 0; i < this.checkValue.length; i++) {
                for(let j = 0; j < tempArr.length; j++){
                    if(this.checkValue[i] == tempArr[j].value){
                        let element = tempArr[j];
                        arrType.push(element);
                    }
                }
            }
            // 根据value进行数字化并排序
            arrType.sort(compare('value'));
            let entryExitUrl = [];
            for(let i = 0;i<arrType.length;i++){
                entryExitUrl.push(arrType[i].text);
            }
            console.log(entryExitUrl)
            sessionStorage.setItem("GATentryExitUrl",entryExitUrl);
            sessionStorage.setItem("GATapplyType",JSON.stringify(arrType));

            this.$router.push({
                name: entryExitUrl[0],
            });
        }
    },
}
</script>
