<template>
    <div>   
		<towtop :name="hadertow" />
        <div class="lawListBox">
            <div class="lawListList" v-for="(list,index) in arr"  @click="togo(list.c_zwmc)">
                
                <span class="LLLtitle">{{list.c_zwmc}}</span>
                <div class="LLLcen">
                    <p>组织形式：{{list.c_zzxsn}}</p>
                    <p>统一社会信用代码：{{(list.c_tyshxydm == 'null' )?"":list.c_tyshxydm}}</p>
                    <p>住所地址：{{list.c_xxdz}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import towtop from "../../../../components/HederTwo";
export default {
  data() {
    return {
      hadertow: "律所查询",
      c_zwmc:'',
        arr:[]
      
    };
  },
  components: {
    towtop
  },
  methods: {
    togo(cent){
        console.log(cent)
        let setdata={
            txnCommCom: {
            tRecInPage: "10",
            tPageJump: "2",
            tStsTraceId: "110567890"
          },
          txnBodyCom: {
              matter_id: window.sessionStorage.getItem("matterid"),
            c_zwmc: cent,
            c_tyshxydm: ""
          }
        }
        this.$ajaxRequest("post","/gsp/mng80090", setdata).then(res => {
            this.$router.push({
                name: "lawcent",
                params:  {datalist: JSON.stringify(res.list)}
            });
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  nocen(cen){
      if(cen == null || cen == undefined){
          return '';
      }else{
          return cen
      }
      
  },
  created(){
    //   console.log(this.$route.params)
      this.arr = JSON.parse(this.$route.params.datalist);
      console.log(this.arr)
  }
};
</script>
<style lang="less" scoped>
.lawListBox{
    background: #fff;
    text-align: left;
    .lawListList{
        color: #666;
        font-size: .28rem;
        border-bottom:1px solid #f1f3f6;
        padding:.33rem .4rem;
        .LLLtitle{
            color: #333;
            display: block;
            border-left:.06rem solid #2D7FFC;
            padding-left: .1rem;
            margin-top:.32rem;
            margin-bottom: .22rem;
        }
        .LLLcen{
            line-height: .52rem;

        }
    }
}
</style>
