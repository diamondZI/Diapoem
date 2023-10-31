<template>
	<view>
		<view class="Edit">
          <text>头像</text>
		  <button class="wrapper" open-type="chooseAvatar" @chooseavatar="onChooseAvatar">
		    <image class="avatar" :src="User.UserData.avatar"></image>
		  </button> 
		</view>	
		<view @click="open(User.UserData.user_name,'user_name',5)"  class="Edit">
          <text>笔名</text>
	     <text >
           {{User.UserData.user_name}}
		 </text> 
		</view>	
		<view @click="open(User.UserData.slogan,'slogan',7)"  class="Edit">
          <text>个签</text>
        <text style="width: 70%; text-align: end;">
        			  {{User.UserData.slogan}}
        </text>   
		</view>	
		<view @click="open(User.UserData.self_introduction,'self_introduction',20)"  class="Edit">
          <text>签名</text>
          <text style="width: 70%; text-align: end;">
                {{User.UserData.self_introduction}}
            </text> 	
		</view>
	</view>
	<uni-popup ref="popupCoupon" type="bottom">
			<view title="基础卡片" sub-title="副标题" extra="额外信息" class="popupCoupon">
               <view class="input">
               	 <input type="text" :maxlength="KeyNumber"   v-model="Value"/>
                 <!-- {{限定字数减去已有字数}} -->
				  <view class="text">
				  	{{keyWord}}
				  </view> 
			   </view>
				<button @click="close">关闭</button>
			</view>
	</uni-popup>
</template>

<script setup>
	import {useUserstore} from "@/store/user.js"
import { ref ,onBeforeUnmount, computed, watch} from "vue";
    const Value=ref('空白')
	const Key =ref('')
	const popupCoupon=ref(null)
    const User=useUserstore()
	const KeyNumber=ref(10)
	const keyWord=computed(()=>{
		return   (KeyNumber.value - Value.value.length)
	})
const onChooseAvatar=(e)=>{
	const { avatarUrl } = e.detail
	User.SetAvatarUrl(avatarUrl)
	console.log(User.UserData.avatar);	
}
const open=(value,key,num)=>{
	popupCoupon.value.open()
	Value.value=value
	Key.value=key
	KeyNumber.value=num
}
const close=()=>{
	User.SetText(Key.value,Value.value)
	popupCoupon.value.close()
}
onBeforeUnmount(()=>{
	User.SetUser()
})

</script>

<style lang="scss" scoped>
	.Edit{
		display: flex;
		padding: 20px;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid black;
		.wrapper{
			position: relative;
			width: 50px;
			height: 50px;
			padding: 0;
			margin: 0;
			border-radius: 50%;
			.avatar{
				
					  border-radius: 50%;
					 width: 100%;
					 height: 100%;
			}
		}
	  
	}
	.popupCoupon{
		width: 100vw;
		height: 30vh;
		background-color:rgb(1,1,1,0.4);
		.input{
			position: relative;
			margin: 20px;
			input{
				font-size: 20px;
				background-color: $uni-bg-color;
			}
			.text{
				position: absolute;
			     right: 0;
			}
		}
		
	}
	
</style>