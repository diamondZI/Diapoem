<template>
	<view class="My_write">
		<view class="os">
			<uni-easyinput  prefix-icon="search" placeholder="请输入" :input-border="true" v-model="value" ></uni-easyinput>
		</view>
		<view class="lists">
		   <view  v-for="(item,index) in User.UserData.create" :key="index" 
		  v-show="item.title.includes(value)|value===null"
		    @click="GoRead(item)"
		   >
		   <view class="listbox">
		   	<view class="title">
		   	<text style="font-size: 24px;">	{{item.title}}
		 
		   	</text>
		   	 <text class="text" >{{time(item.data)}}</text>
		   	</view>	  
		   	<view class="author">
		   		<view class="ICONBOX">
		   			 <uni-icons type="arrow-up" size="33" color="rgb(138,151,155)"></uni-icons>
		   		</view>
		   				<view style="writing-mode: vertical-lr;">
		   					{{item.author}}

		   				</view>
		   			
		   	</view>
		   </view>
		   
		   </view>
		</view>
		<view class="CollectBox">
			<view class="header">
				
			</view>
		     <view class="Box" @click="GoWrite()">
		     		<uni-icons class="ICONBOX" type='plusempty' size='40'></uni-icons>
		     </view>
		</view>
		
	</view>
</template>

<script setup>	
import { computed, onMounted,reactive,ref } from "vue";
import { onLoad} from "@dcloudio/uni-app"
import { useUserstore } from "@/store/user.js"
const sort=ref(false)
const User=useUserstore()
const value=ref(null)
const time=(datetime)=>{
		const date = new Date(datetime);  
		let Y = date.getFullYear() + '-';
	 	let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
		let D = date.getDate() + ' ';
	     return Y+M+D
	}
 const GoWrite=()=>{
	 uni.navigateTo({
	 	url:'/pages/Write/index'
	 })
 }
 const GoRead=(item)=>{
	 uni.navigateTo({
	 	url:`/pages/Readpoem/index?poem=${JSON.stringify(item)}`
	}
	)
 }

</script>

<style scoped lang="scss">
	@keyframes border {
		0%{
			border: 1px solid $uni-text-color-one;
			border-top: red ;
		}
		25%{
			border: 1px solid $uni-text-color-one;
			border-right: red;
		}
		50%{
			border: 1px solid $uni-text-color-one;
			border-bottom: red;
		}
		75%{
			border: 1px solid $uni-text-color-one;
			border-left: red;
		}
		100%{
			border: 1px solid  red;
		}
	}
	.My_write{
		transition: 1.3s linear all;
		padding: 20px;
		height: 100vh;
		background-color: rgb(255,250,240);
		display: flex;
	
		flex-direction: column;
		gap: 10px;
		.os{
			border-radius: 30px;
			position: relative;
			transition: .3s linear all;
		}
		.lists{
			display: flex;
			flex-wrap: wrap;
			gap: 10px;
			justify-content: space-between;
         .listbox{
			 position: relative;
			 width: 40vw;
			 height: 45vw;
			 display: flex;
			 background-color: $uni-bg-color-one;
			
			 .title{
				 flex:  1 0;
                 padding: 10rpx;
				 background-color:#2578b5;
				 display: flex;
				 flex-direction: column;
				 justify-content: space-between;
				 .text{
					 color: white;
				 }
			 }
			 .author{
				 
				 color: white;
				 display: flex;
				 align-items: center;
				 flex-direction: column;
				 justify-content: space-around;
			 }
			 .ICONBOX{
		   padding: 10rpx;
		   display: flex;
		   justify-content: center;
		   align-items: center;
		   width: 30rpx;
		   height: 30rpx;
		   border: 1px solid $uni-text-color-one;
		   border-radius: 50%;
		   position: relative;
			 }
			 .ICONBOXavitve{
				animation: border 	1s linear ;
			     border-color: red;	      
			 }
		 }
		}
		
		
	
		.Box{
			
			position:fixed;
		    bottom: 100px;
			border-radius: 50%;
			box-shadow: 0 0 5px 0 black;
			right: 10px;	
			transition: 1s linear  all;
		}
		.Box:hover{
			box-shadow:inset 0 0 5px 0 black;
		}
		
	}

</style>