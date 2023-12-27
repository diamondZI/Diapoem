<template>
	<Loding v-if="!U.UserData"></Loding>
	<view class="userIorf" v-else>
        <view class="User">
			<view class="avatar">
				<image @click="avatarView(U.UserData.avatar)" :src="U.UserData.avatar" mode="aspectFill"></image>
			</view>
            <view class="name">
               <text>{{U.UserData.user_name}}</text>            	
               <text>{{U.UserData.region}}</text>            	
               <text>{{U.UserData.slogan}}</text>            	
            </view>
			<view  style="position: absolute;  right: 20rpx;" @click="GoNavigateTo('PersonalEdit')">
				<uni-icons  type="person-filled" size="30"></uni-icons>
			</view>
        </view>
		<view class="UserButton">
			<view @click='GoNavigateTo("collect",U.UserData.collect)' class="A">
				<span style="z-index: 1;">收藏 </span>
			</view>
			<view @click='GoNavigateTo("Personal",U.UserData)'>
				<span style="z-index: 1;">个人介绍 </span>
			</view>
			<view id="a" @click='GoNavigateTo("My_write",U.UserData.collect)'>
				创作 </view>
			<view id="a" @click='GoNavigateTo("theme",U.UserData.collect)'>主题 </view>
		</view>
		<view class="UserButton" >
			<view style="background-color: black; color: white;">待开发 </view>
			<view @click='GoNavigateTo("neighborhood",)'>四方同好 </view>
			<view id="a" @click='GoNavigateTo("Draft",)'>我的草稿 </view>
			<view id="a"  @click='GoNavigateTo("Aboutme",)'>赞助我们 </view>
		</view>
	</view>
	</template>

<script setup>	
	import A from "@/components/FunButton/index.vue"
	import Loding from "@/components/Loding/index.vue"
	import {useUserstore} from "@/store/user.js"
	import {useDarftStore} from "@/store/draft.js"
	import { onMounted,ref } from "vue";
    const U=useUserstore()
    const Darft=useDarftStore()
	const todo = uniCloud.importObject('User')
	const GoNavigateTo=(Url,value)=>{
		console.log("跳转");
		uni.navigateTo({
			url:`/pages/${Url}/index?data=`+JSON.stringify(value), 
			animationType: 'pop-in',
			animationDuration: 10000
		})
	}

    const  avatarView=(url)=>{
    	uni.previewImage({
    		urls:[url]
    	})
    }
	
</script>

<style scoped lang="scss">


  .userIorf{
	  padding: 20rpx;
	  display: flex;
	  gap: 60rpx;
	  flex-direction: column;
	  .User{
		  display: flex;
		  gap: 40rpx;
		.avatar{
			border: black 1px solid;
			width: 160rpx;
			height: 160rpx;
			border-radius: 50%;
			image{
				width: 100%;
				height: 100%;
				border-radius: 50%;
			}
		}
		.name{
			display: flex;
			row-gap: 3px;
            flex-direction: column;
		   text{
			   text-align: center;
			   border-radius: 5px;
			   padding: 5rpx;
              	border: black 1px solid;
			}
		}
	  }
	  .UserButton{
		  
		 display: grid;
        grid-template-columns: 1fr 1fr;
		align-self: center;
		 gap: 20rpx;
		  view{
			  position: relative;
			  box-sizing: content-box;
			  width: 300rpx;
			  border-radius: 10rpx;
			  border: 1px black solid;
			  display: flex;
			 justify-content: center;
			 align-items: center;
			 font-size: 38rpx;
			  height: 200rpx;
		  }
		  view:hover:after{
			  
			  width: 100%;
				animation: after .1s linear;
			  }
		  
			 
		 view:after{
			 
			 border-radius: 10rpx;
            content:"";		
			 width: 0%;
			
			 position: absolute;
			 background-color:$uni-bg-color-mask;	
			 // transition: .1s all linear;
			 height: 100%;
		 }
	  }
  }
  
</style>