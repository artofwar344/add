<template>
    <div class="all">
        <p>还未抽离</p>
        <button @click="common.SubNum(number)">-</button>
        <input type="number" v-model="number">
        <button @click="common.AddNum(number,gopath)">+</button>
    </div>
</template>

<script>
    export default {
        name: "weChatPay",
        data() {
            return {
                number: 0,
            };
        },
        created(){
            console.log(this.$router)
        },
        methods: {
            gopath(val){
                this.toPath(val)
            }
        }
    }
</script>

<style scoped>

</style>
