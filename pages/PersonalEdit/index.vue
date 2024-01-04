<template>
	<view>
		<view class="Edit">
          <text>头像</text>
		  <button class="wrapper"  @click="onChooseAvatar">
		    <image class="avatar" mode="aspectFill" :src="User.UserData.avatar"></image>
		  </button> 
		</view>	
		<view @click="open(User.UserData.user_name,'user_name',7)"  class="Edit">
          <text>笔名</text>
	     <text >
           {{User.UserData.user_name}}
		 </text> 
		</view>	
		<view @click="open(User.UserData.slogan,'slogan',12)"  class="Edit">
          <text>个签</text>
        <text style="width: 70%; text-align: end;">
        			  {{User.UserData.slogan}}
        </text>   
		</view>	
		<view @click="open(User.UserData.self_introduction,'self_introduction',20)"  class="Edit">
          <text>座右铭</text>
          <text style="width: 70%; text-align: end;">
                {{User.UserData.self_introduction}}
            </text> 	
		</view>
	</view>
	
	
	
	<uni-popup ref="popupCoupon" type="bottom">
			<view title="基础卡片" sub-title="副标题" extra="额外信息" class="popupCoupon">
			   <view class="input">
			   	 <input  type="text" :maxlength="KeyNumber"   v-model="Value"/>
			     <!-- {{限定字数减去已有字数}} -->
				  <view class="text">
				  	{{keyWord}}
				  </view> 
			   </view>
				<view class="ButtonBox">
					<button @click="close(true)">确认</button>
					<button @click="close(false)">关闭</button>
				</view>
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
	// const a=
const onChooseAvatar=(e)=>{
	uni.chooseImage({
		count:1,
		sizeType: ['compressed'],
		 sourceType: ['album', 'camera'],
		success: (res) => {
			User.SetAvatarUrl(res.tempFilePaths[0])
		}
	})
}
const open=(value,key,num)=>{
	popupCoupon.value.open()
	Value.value=value
	Key.value=key
	KeyNumber.value=num
}
const close=(A)=>{
if (A) {
	console.log("改名");
	User.SetText(Key.value,Value.value)	
} 
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
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		 background-color:white;
		.input{
			width: 100vw;
			display: flex;
			align-items: center;
			position: relative;
			margin: 10px;
			justify-content: space-around;
			input{
				flex: 1;
				max-width: 80vw;
			    border: 1px solid black;
				padding: 10px;
				background-color: white;
				// margin: 10px;
				font-family: "得意黑";
				font-size:17px;
				background-color: $uni-bg-color;
			}
			.text{
				padding: 4px;
				font-size: 24px;
			}
		}
		.img{
			width: 100px;
			height: 100px;
			background-image: src('../sta');
		}
		.ButtonBox{
			width: 80vw;
			margin: 10px;
			display: flex;
		}
		
	}
	
</style>