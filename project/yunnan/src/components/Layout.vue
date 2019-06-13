<template>
    <div style="">
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
       <!--<mt-tabbar v-model="selected" >
            <mt-tab-item id="QueryEmail" v-bind:class="{andj:currenta}">
                <div slot="icon" class='selectIcon1'></div>
                查快递
            </mt-tab-item>
            <mt-tab-item id="ExpressDelivery" v-bind:class="{andj:currentb}">
               <div slot="icon" class='selectIcon2'></div> 
                    寄快递
            </mt-tab-item>
            <mt-tab-item id="MyExpress" v-bind:class="{andj:currentc}">
               <div slot="icon" class='selectIcon3'></div> 
                    我的快递
            </mt-tab-item>
        </mt-tabbar>-->
        <div class='stabbar'>
        	<router-link to='QueryEmail' class='stab-item'>
        		 <div  class='selectIcon1'></div>
        		 查快递
        	</router-link>
        	<router-link to='ExpressDelivery'  class='stab-item'>
        		 <div class='selectIcon2'></div> 
        		 寄快递
        	</router-link>
        	<router-link to='MyExpress'  class='stab-item'>
        		 <div class='selectIcon3'></div> 
        		 我的快递
        	</router-link>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            selected:'',
            currenta:true,
            currentb:"",
            currentc:"",
            ckd:require('../assets/images/search.png'),
            jkd:require('../assets/images/deliveryb.png'),
            wdkd:require('../assets/images/myexpressb.png'),
        }
    },
    methods:{
    },
    watch: {
            selected: function (val) {
                // 这里就可以通过 val 的值变更来确定
                if(val == 1){
                    this.$router.push({path:"/QueryEmail"});
//                  this.currenta = true;
//                  this.currentb = false;
//                  this.currentc = false;
//                  this.ckd = require('../assets/images/search.png')
//                  this.jkd = require('../assets/images/deliveryb.png')
//                  this.wdkd = require('../assets/images/myexpressb.png')
                    
                }
                 if(val == 2){
                    this.$router.push({path:"/delivery"});
//                  this.currentb = true;
//                  this.currenta = false;
//                  this.currentc = false;
//                  this.ckd = require('../assets/images/searchb.png')
//                  this.jkd = require('../assets/images/delivery.png')
//                  this.wdkd = require('../assets/images/myexpressb.png')
                }
                 if(val == 3){
                    this.$router.push({path:"/MyExpress"});
                    this.currentc = true;
                    this.currentb = false;
                    this.currenta = false;
//                   this.ckd = require('../assets/images/searchb.png')
//                  this.jkd = require('../assets/images/deliveryb.png')
//                  this.wdkd = require('../assets/images/myexpress.png')
                }
            }
        }
}
</script>

<style scoped>
.mint-tabbar{
    position: fixed;
    bottom: 0;
}
.andj{
    color: #26A2FF !important;
    
}
.stabbar{
	position: fixed;
	bottom: 0;
	left: 0;
	display: flex;
	height: 1rem;
	width: 100%;
	background: #fff;
}
.stabbar .stab-item{
	flex-grow:1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #666;
	
}
.stabbar .router-link-active{
	color:#26a2ff;
	background: #eee;
}
.stabbar .stab-item div{
	height: .5rem;
	width: .5rem;
	margin-bottom: .1rem;
}
.selectIcon1{
	background: url('../assets/images/searchb.png');
	background-size: 100% 100%;
}
.selectIcon2{
	background: url('../assets/images/deliveryb.png');
	background-size: 100% 100%;
}
.selectIcon3{
	background: url('../assets/images/myexpressb.png');
	background-size: 100% 100%;
}

.router-link-active .selectIcon1{
	background: url('../assets/images/search.png');
	background-size: 100% 100%;
}
.router-link-active .selectIcon2{
	background: url('../assets/images/delivery.png');
	background-size: 100% 100%;
}
.router-link-active .selectIcon3{
	background: url('../assets/images/myexpress.png');
	background-size: 100% 100%;
}
</style>
<style type="text/css">

</style>

