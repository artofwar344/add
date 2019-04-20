
<template>
	<div style="padding-top:5000px;">
	<Fixedbottom :btn-data="btnData" :has-icon-btn="true">
  <template slot="iconBtnSlot" slot-scope="iconBtnSlot">
    <Btn :font-icon="iconBtnSlot.iconbtn.icon" @click="handleClickIconBtn(iconBtnSlot.iconbtn)">
         
    </Btn>
  </template>
  <template slot="btnSlot" slot-scope="btnSlot">
     <Btn 
     v-if="btnSlot.btn.name==='addcart'"
     type="custom" 
     bg-color="#ffa414" 
     color="#fff" 
     @click="handleClickBtn(btnSlot.btn)"
     >加入购物车</Btn>
     <Btn 
     v-else
     type="custom" 
     bg-color="#ff4d4d" 
     color="#fff" 
     @click="handleClickBtn(btnSlot.btn)">立即购买</Btn>
  </template>
</Fixedbottom> 

<Fixedbottom :btn-data="btnDataNormal" class="example-fixedBottom_normal">
  <template slot="btnSlot" slot-scope="btnSlot">
     <Btn 
     block
     @click="handleClickBtn(btnSlot.btn)"
     >按钮</Btn>
  </template>
</Fixedbottom>
</div>
</template>

<script>
	export default {
  data(){
    return {
     btnDataNormal:[
        {
          name: 'commit',
          text: '提交',
          icon: '',
          type: 'btn',
        },
     ],
     btnData:[
       {
         name: 'tel',
         text: '联系电话',
         icon: 'hotline',  // 对应的字体图标
         type: 'iconBtn',  // 图标+文字的按钮
       },
       {
         name: 'im',
         text: '联系客服',
         icon: 'dialogue',
         type: 'iconBtn',
       },
       {
         name: 'store',
         text: '店铺',
         icon: 'store',
         type: 'iconBtn',
       },
       {
         name: 'favorite',
         text: '收藏',  // 收藏/已收藏
         icon: 'attention',       // 选中/未选中
         type: 'iconBtn',
       },
       {
         name: 'addcart',
         text: '加入购物车',
         icon: '',
         type: 'btn',  // 文字按钮
       },
       {
         name: 'buy',
         text: '立即购买',
         icon: '',
         type: 'btn',
       },
     ],
     
     iconBtnSlot:{
       iconbtn:{}
     },
     btnSlot:{
       btn:{}
     } 
    }
  },
  methods:{
    handleClickIconBtn(val){
      console.log(val);
    },
    handleClickBtn(val){
      console.log(val);
    },
  }
}
</script>

<style scoped>
	.example-fixedBottom_normal .hui-fixedBottom-box{bottom:49px;}
</style>