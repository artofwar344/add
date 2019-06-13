<template>
  <div>
    <towtop :name="titlename"/>
    <div class="bigImg submitImg"></div>
    <p class="resultMsg">您的登记信息已提交成功</p>
    <p class="resultMsg">请耐心等待审批结果</p>
     <button class="commonBtn" >返回</button>
  </div>
    
</template>
<script>
import towtop from '../../../components/HederTwo'
export default {
    data(){
        return {
            titlename:'办理结果',
        }
    },
    components:{
        towtop
    }
    
}
</script>
<style lang="less" scoped>
@import "../../../assets/css/Settle.less";
</style>
