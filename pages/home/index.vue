<template>
	<Loding v-if="!User"></Loding>
	<view class="userIorf" v-else>
		
        <view class="User">
			<view class="avatar">
			</view>
            <view class="name">
               <text>{{User.user_name}}</text>            	
               <text>{{User.region}}</text>            	
               <text>{{User.slogan}}</text>            	
            </view>
			<view  style="position: absolute;  right: 20rpx;">
				<uni-icons  type="info-filled" size="30"></uni-icons>
			</view>
        </view>
		<view class="UserButton">
			<view @click='GoNavigateTo("collect",User.collect)' class="A">
				<span style="z-index: 1;">收藏 {{User.collect.length}}</span>
			</view>
			<view @click='GoNavigateTo("Personal",User.collect)'>
				<span style="z-index: 1;">个人介绍 {{User.collect.length}}</span>
			</view>
			<view id="a" @click='GoNavigateTo("My_write",User.collect)'>创作 {{User.create.length}}</view>
			<view id="a" @click='GoNavigateTo("theme",User.collect)'>主题 {{User.create.length}}</view>
		</view>
		<view class="UserButton" >
			<view >AI创作 {{User.collect.length}}</view>
			<view>附近的诗人 {{User.collect.length}}</view>
			<view id="a">废弃草稿 {{User.create.length}}</view>
			<view id="a"  @click='GoNavigateTo("Aboutme",)'>赞助我们 {{User.create.length}}</view>
		</view>
	</view>
	</template>

<script setup>	
	import A from "@/components/FunButton/index.vue"
	import Loding from "@/components/Loding/index.vue"
import { onMounted,ref } from "vue";
    const User=ref()
	const todo = uniCloud.importObject('User')
	const a= async ()=>{
	  User.value =await	todo.GetUser().then(res=>{
		  console.log(res);
		  return res.data[0]
	  })
	}
	
	const GoNavigateTo=(Url,value)=>{
		console.log("跳转");
		uni.navigateTo({
			'url':`/pages/${Url}/index?data=` +JSON.stringify(value), 
		})
	}
	onMounted(()=>{
		a()
	})
    
	
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