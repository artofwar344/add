<template>
  <div>
    <towtop :name="titlename"/>
    <div class="bigImg resultImg"></div>
    <p class="resultMsg">您的申请已办结</p>
    <p class="resultMsg normalSize">请持全部申请资料原件到当地派出所窗口打印结果</p>
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
