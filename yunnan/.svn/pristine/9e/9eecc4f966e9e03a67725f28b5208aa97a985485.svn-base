<style lang="less" scoped>
.abroadThreeWrap{
    .content{
        p {
            font-size: 0.28rem;
            padding: 0rem 0.4rem 0.2rem;
            box-sizing: border-box;
            color: #999;
            text-align: left;
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
.abroadThreeWrap .hui-field {
  height: 1rem;
  line-height: 1rem;
  padding: 0rem 0.2rem;
  box-sizing: border-box;
  border: none;
}
.abroadThreeWrap .hui-field_main {
  height: 100%;
  border-bottom: 1px solid #e1e2e6;
}
.abroadThreeWrap .hui-field_title {
  width: 2.3rem;
  height: 100%;
}
</style>

<template>
    <div class="abroadThreeWrap">
        <towtop :name="titlename"/>
        <div class="content">
            <p>核对提交</p>
            <Field type="text" readonly v-for="item in infoData" :key="item.title" :label="item.title" :value="item.value"></Field>
        </div>
        <div class="btnWrap">
            <span @click="goto">确认无误，提交申请</span>
        </div>
    </div>
</template>

<script>
import towtop from '@/components/HederTwo'
export default {
    data(){
        return{
            titlename:'出国境证件业务预受理',
            infoData:[
                {title:'办理事项',value:''},
                {title:'办理人',value:''},
                {title:'预约单位',value:''},
                {title:'预约时间',value:''},
            ]
        }
    },
    components:{
        towtop
    },
    mounted() {
        let name = sessionStorage.getItem("CATcertName");
        let location = JSON.parse(sessionStorage.getItem("GATcertPoint")).branch_name;
        let time = sessionStorage.GATcertDate + " " + sessionStorage.GATcertTime;
        this.infoData = [
            {title:'办理事项',value:'出入境办理'},
            {title:'办理人',value: name},
            {title:'预约单位',value:location},
            {title:'预约时间',value:time}
        ];
    },
    methods:{
        goto(transferData){
            let _self = this;
            //  表单提交
            this.$ajaxRequest("post", "/gsp/mng80088", transferData)
            .then(res => {
                // console.log(JSON.parse(res.result));
                let cent = JSON.parse(res.result);
                _self.clearSessionStorage();
                sessionStorage.setItem("successState",1)
                _self.$router.push({
                    name:'entryExitSuccess',
                    params:{final_Code:cent.data},
                })
            })
            .catch(error => {
                console.log(error);
                _self.$toast("表单提交失败！");
            });
        },
        clearSessionStorage(){
            sessionStorage.removeItem("GATDate");
            function clear(str){
                sessionStorage.removeItem(str);
            }
            clear("GATDate");
            clear("GATEEPinpuList");
            clear("GATTime");
            clear("GATapplyType");
            clear("GATentryExitUrl");
            clear("GATform_id");
            clear("GATgangAoApply");
            clear("GATname");
            clear("GATnormalApply");
            clear("GATpoint");
            clear("GATtaiApply");
            clear("GATyyswxw");
        },
    }
}
</script>
