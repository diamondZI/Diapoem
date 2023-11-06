<template>
	<view >
		<view class="img">
        <image :src="User.avatar" mode="aspectFit"></image>
		 <text class="name" >{{User.user_name}}</text>
		 <text  class="solng">{{User.slogan}}</text>
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
			  
			  <view @click="GoRead(item)" class="Box" v-for="item in User.create">
			  	<text>{{item.title}}</text>
			  	<text>{{time(item.data)}}</text>
			  </view> 
			   <view  class="Box NOBox" v-for="item in 4-User.create.length">
			<text @click="GoWrite">要继续创作吗</text>
			  </view>
			</view>
		</view>
			<view style="padding: 40px;">
				&COPY; {{User.self_introduction}}
			</view>
	</view>
</template>

<script setup>
import { ref } from "vue"
import {onLoad} from "@dcloudio/uni-app"
 const User=ref()
const time=(datetime)=>{
		const date = new Date(datetime);  
		let Y = date.getFullYear() + '-';
	 	let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
		let D = date.getDate() + ' ';
	  return Y+M+D
}
 const GoRead=(item)=>{
	 uni.navigateTo({
	 	url:`/pages/Readpoem/index?poem=${JSON.stringify(item)}`
	}
	)
 }
const GoWrite=()=>{
	 uni.navigateTo({
	 	url:'/pages/Write/index'
	 })
 }
 onLoad((options)=>{
	 User.value=JSON.parse(options.data)
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
			color: white;
            text-shadow:  0 -2px 10px $uni-text-color-one;
			flex-direction: column;
	 		height: 42vw;
	 		background-color: $uni-bg-color-one;
	 	}
	 	.NOBox{
			color: black;
			box-shadow: inset 0 0  10px black;
	        border: 1px black solid;
			transition: .3s linear ;
	 		background-color: rgb(0, 0, 0,0);
	 	}
		.NOBox:active{
			box-shadow: inset 0 0  50px black;
		}
	 }
 }
 
</style>
