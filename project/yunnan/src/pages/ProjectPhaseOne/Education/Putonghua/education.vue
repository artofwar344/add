<template>
    <div>
        <towtop :name="titlename"/>
        <div class="education">
            <putonghua  :placeholdername="placeholdername" :placeholdernumber="placeholdernumber" v-on:datetext="datetext"/>
        </div>
    </div>
</template>
<script>
import towtop from '../../../../components/HederTwo'
import putonghua from './Putonghua'
export default {
    components:{
        towtop,
        putonghua
    },
    data(){
        return {
            titlename:"普通话水平测试成绩等级查询",
            placeholdername:"",
            placeholdernumber:""
        }
    },
    created(){
          if(window.sessionStorage.getItem('cardid')!='null'){
          this.$router.push('pthqueryresult?titlename='+this.titlename+'&cardid='+window.sessionStorage.getItem('cardid')+'&nametext='+window.sessionStorage.getItem('username'),);
      }  
    },
    mounted(){
    //   if(window.sessionStorage.getItem('cardid')!='null'){
    //       this.$router.push('queryresult?cardid='+window.sessionStorage.getItem('cardid'));
    //   }  
    },
    methods:{
        datetext(nametext,cardid,numbercode){
            this.$router.push('pthqueryresult?titlename='+this.titlename+'&nametext='+nametext+'&cardid='+cardid+'&numbercode='+numbercode)
        }
    }
    
}
</script>
<style lang='less' scoped>
@import "../../../../assets/css/Affairs.less";

</style>
