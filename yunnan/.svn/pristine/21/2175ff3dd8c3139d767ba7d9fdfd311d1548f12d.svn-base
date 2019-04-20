<template>
	<div class="box">
		<input v-model='code' @click="change()" type="button" id="code" />
	</div>
</template>
<script>
	export default {
		props: ["codeCheck"],
		data() {
			return {
				code: '',
			};
		},
		mounted() {
			this.change()
		},
		methods: {
			checkCode() {
				console.log(this.codeCheck,this.code)
				this.codeCheck = this.codeCheck.toUpperCase(); //取得输入的验证码并转化为大写   
				if(this.codeCheck.length == 0) { //若输入的验证码长度为0
					this.$toast("请输入验证码！"); //则弹出请输入验证码
					return false;
				} else if(this.codeCheck != this.code.toUpperCase()) { //若输入的验证码与产生的验证码不一致时
					this.$toast("验证码输入错误！请重新输入"); //则弹出验证码输入错误
					this.change(); //刷新验证码
					this.$emit('getCode', '')
					return false;
					
					//input.value = ""; //清空文本框
				
				} else { //输入正确时
					return true;
					this.$toast("验证码输入正确"); //弹出输入正确
				}
			},
			change() {
				// 验证码组成库
				var arrays = new Array(
					'1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
					'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
					'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
					'u', 'v', 'w', 'x', 'y', 'z',
					'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
					'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
					'U', 'V', 'W', 'X', 'Y', 'Z'
				);
				// 重新初始化验证码
				let codes = '';
				// 随机从数组中获取四个元素组成验证码
				for(var i = 0; i < 4; i++) {
					// 随机获取一个数组的下标
					var r = parseInt(Math.random() * arrays.length);
					codes += arrays[r];
				}
				// 验证码添加到input里
				this.code = codes;
				console.log(this.code, "this.code")
				//this.$emit('getCode', this.code)
			}

		}

	}
</script>
<style  scoped>
	#code {
		width: 80px;
		height: 40px;
		font-size: 20px;
		font-family: Arial;
		font-style: italic;
		font-weight: bold;
		border: 0;
		letter-spacing: 2px;
		color: blue;
	}
</style>