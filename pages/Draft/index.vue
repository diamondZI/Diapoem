<template>
<view class="CollectBox">
	<view class="header">
			<text>您的草稿</text>
			<view @click="sort=!sort" :class="{'Icon':true,'Iconsort':sort}" ></view>
	</view>
		<view class="collect" >
	     <view  :class="{'collect_poem':true,'collect_poem_active':sort}" v-for="(item,index) in Draft.Darft" @click="GoWrite(item.title,item.paragraphs)" :key="index"
		 >
			   {{item.title}}
			 <text class="author" > {{item.author}}</text>
		</view>
		</view>
</view>
</template>

<script setup>	
import { onMounted,reactive,ref } from "vue";
import { onLoad} from "@dcloudio/uni-app"
import {useDarftStore} from "@/store/draft.js"
const Draft= useDarftStore()
 const sort=ref(false)
const GoWrite=(value,list)=>{
	 uni.navigateTo({
	 	url:`/pages/Write/index?value=${JSON.stringify(value)}&list=${
			JSON.stringify(list)
		}`
	 })
 }
</script>

<style scoped lang="scss">

	.Iconsort{
		transform: rotateX(320deg);
		border: 2px solid black;
		border-left: none !important;
		border-right: none !important;
		
	}
	.CollectBox{
		padding: 20px;
		.header{
			display: flex;
			align-items: center;
		    justify-content: space-between;
			text{
				font-size: 50rpx;
			}
			.Icon{
				width: 40rpx;
				height: 40rpx;
				border: 1px solid black;
				transition: .6s linear all;
			}
			
		
		}
		
		.collect{
			display: flex;
			justify-content: space-around;
		    flex-wrap: wrap;
		      .collect_poem{
				  margin: 10px;
				  text-align: center;
				  gap: 40rpx;
				  width: 20vw;
				  display: flex;
				  border-radius: 10rpx;
		         flex-direction:row;
		        align-items: center;
				  height: 25vw;
				  padding: 15px;
				  transition: .3s all linear;
			     color: $uni-bg-color-grey;
			      background-color: $uni-bg-color-one;
				  position: relative;
				  border: 1px  black solid;
				 
		     .author{
			   background-color: white;
			  
			   flex: 1;
                text-orientation:sideways;
			   color: $uni-text-color-one;
		        }
			  }
		
			  .collect_poem:hover{
				  border-radius: 40rpx;
				box-shadow: 0 0 10rpx 0 black;
				 
			  		}
			  
			  .collect_poem_active{
				  width: 100vw;
				  height: 10px;
                 font-size: 24px;
				  border: none;
				  color: black;
				  background-color: rgb(100, 100, 100,0);
				  border-bottom: 2px solid $uni-bg-color-one;
			  }
			  
		}
	}

</style>