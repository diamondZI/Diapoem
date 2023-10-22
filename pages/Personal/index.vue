<template>
	<view >
		<view class="img">
        <image :src="User.avt" mode=""></image>
		 <text class="name" >{{User.User_name}}</text>
		 <text  class="solng">你好世界!</text>
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
			  	<text>过山</text>
			  	<text>2022-12-22</text>
			  </view>
			</view>
		</view>
			<view style="padding: 40px;">
				&COPY; 一个及其闲散的流浪诗人,向往创作一些让人解闷的同时知晓我境遇的诗
			</view>
			
		
	</view>
</template>

<script setup>
import { ref } from "vue"
 const User=ref({
	 User_name:"西川",
	 avt:'../../static/diamond.jpeg',
	 
 })
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
