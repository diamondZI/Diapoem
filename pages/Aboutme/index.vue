<template>
	<view class="content">
		<button class="avatar-wrapper" open-type="chooseAvatar" @chooseavatar="onChooseAvatar">
		  <image class="avatar" :src="userInfo.avatarUrl"></image>
		</button> 
		<input type="nickname" class="weui-input" placeholder="请输入昵称"/>
			
	</view>
</template>

<script setup>
import { reactive,ref,onMounted } from "vue"
 
const userInfo=ref(
{
	avatarUrl:"https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0",
        nickName:"21"
}
)

const onChooseAvatar= (e)=>{
	const { avatarUrl } = e.detail
     // console.log(e);
userInfo.value.avatarUrl=avatarUrl
console.log(userInfo.value.avatarUrl);
}

</script>

<style scoped>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
		color: #00aa7f;
	}
</style>

