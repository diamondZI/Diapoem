<template>
	<view class="VI">
		<Loding v-if="!User"></Loding>
		<view v-else>
			<view class="img">
		    <view class="avatar">
		    	<image :src="User.avatar" mode="aspectFill" @click="avatarView(User.avatar)"></image>
		    </view>
			 <text class="name" >{{User.user_name}}</text>
			 <text  class="solng">{{User.slogan}}</text>
			</view>
			<view class="fans">
				
			</view>
			<view class="MadeBox" >
				<view class="header">
					 <text>作品展示</text>
					 <text @click="GoCreate(User._id)">更多></text>
				</view>
				<view v-if="!createBox" >
					<DataLoading></DataLoading>
				</view>
				<view class="Made" v-else>
				  <view    hover-stay-time="200" hover-start-time="600" class="Box" v-for="(item,index) in createBox" :key="index"
				   @click="GoRead(index)"
				  >
				  	<text>{{item.title}}</text>
				  	<text>{{time(item.CreateTime)}}</text>
				  </view> 
				   <view    class="Box NOBox" v-for="(item,index) in 4-createBox.length" :key="index">
				<text> 还未创作</text>
				  </view>
				</view>
			</view>
				<text user-select  style="padding: 40px;">
					&COPY; {{User.self_introduction}}
				</text>
		</view>
	</view>
</template>

<script setup>
import { onMounted, ref } from "vue"
import {onLoad} from "@dcloudio/uni-app"
import Loding from "@/components/Loding/index.vue"
import DataLoading from "@/components/Loding/Data_Loading.vue"

import {  Getpoem  } from "@/hook/GetPoem.js"
const User=ref()
const createBox=ref()
const time=(datetime)=>{
		const date = new Date(datetime);  
		let Y = date.getFullYear() + '-';
	 	let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
		let D = date.getDate() + ' ';
	    return Y+M+D
}
const  avatarView=(url)=>{
	uni.previewImage({
		urls:[url]
	})
}
 const GoRead=(item)=>{
uni.navigateTo({
			url: `/pages/Readpoem/index?data=${JSON.stringify(createBox.value)}&key=${JSON.stringify(item)}&User=${true}`
		})
 }

const GoCreate=(id)=>{
	uni.navigateTo({
		url:`/pages/My_write/index?id=${id}`
	})
}
onMounted(()=>{
	 Getpoem(createBox,User.value._id)
})
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
	 .avatar{
	 	border: black 1px $uni-text-color-one	;
	 	width: 360rpx;
	 	height: 360rpx;
	 	border-radius: 50%;
	 	image{
	 		width: 100%;
	 		height: 100%;
	 		border-radius: 50%;
	 	}
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
		.NOBox:hover{
			box-shadow: inset 0 0  50px black;
		}
	 }
 }
 @media (prefers-color-scheme:dark) {
 	.VI{
 		background-color: #282c34;
 	}
 
 	}
 
</style>
