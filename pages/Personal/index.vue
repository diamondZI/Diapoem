<template>
	<view >
		<view class="img">
        <image :src="Users.UserData.avatar" mode="aspectFit"></image>
		 <text class="name" >{{Users.UserData.user_name}}</text>
		 <text  class="solng">{{Users.UserData.slogan}}</text>
		</view>
		<view class="fans">
			<view class="">
				粉丝,关注
			</view>
			<view class="">
				粉丝,关注
			</view>
		</view>
		<view class="MadeBox">
			<view class="header">
				 <text>作品展示</text>
				 <text>更多></text>
			</view>
			<view class="Made">
			  
			  <view class="Box">
			  	<text>过山</text>
			  	<text>2022-12-22</text>
			  </view>  <view class="Box">
			  	<text>过山</text>
			  	<text>2022-12-22</text>
			  </view>  <view class="Box">
			  	<text>过山</text>
			  	<text>2022-12-22</text>
			  </view>
			   <view class="Box NOBox">
			  
			  </view>
			</view>
		</view>
			<view style="padding: 40px;">
				&COPY; {{Users.UserData.self_introduction}}
			</view>
	</view>
</template>

<script setup>
import { ref } from "vue"
import {useUserstore} from "@/store/user.js"
const Users=useUserstore()
 // const User=ref(Users.UserData)
</script>

<style lang="scss" scoped>
 .img{
	 width: 100vw;
	 height: 100vw;
	 display: flex;
     justify-content: center; 
	 background-color: $uni-bg-color-one;
	 align-items: center;
	
	 position: relative;
	 image{
		 width: 50vw;
		 height: 50vw;
		 border-radius: 50%;
		 border: 2px $uni-text-color-one solid;
	 }
	 text{
	  position: absolute;
	  bottom: 50rpx;
       // left: 50rpx;
	   font-size: 48rpx;
	color: $uni-text-color-one;
	 }
	 .name{
		 left: 50rpx;
	 }
	 .solng{
		 right: 50rpx;
	 }
 
 }
 .fans{
	 padding: 20px;
	 background-color: $uni-bg-color-mask;
	 display: flex;
      justify-content: space-between;
 }
 .MadeBox{
	  padding: 20px;
	  .header{
		  display: flex;
          justify-content: space-between;
        margin-bottom: 10px;
		font-size: 24px;
	  }
	 .Made{
	 	
	 	 display: flex;
	 	 flex-wrap: wrap;
	 	 gap: 20rpx;
	 	 justify-content:space-between;
	    .Box{
			border-radius: 40rpx;
	 		width: 40vw;
			display: flex;
            justify-content: center;
			align-items: center;
			color: white;
            text-shadow:  0 -2px 10px $uni-text-color-one;
			flex-direction: column;
	 		height: 42vw;
	 		background-color: $uni-bg-color-one;
	 	}
	 	.NOBox{
	        border: 1px black solid;
	 		background-color: rgb(0, 0, 0,0);
	 	}
	 }
 }
 
</style>
