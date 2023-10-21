<template>
	<!-- <uni-easyinput  prefix-icon="search" placeholder="请输入" :input-border="false"></uni-easyinput> -->
<view class="CollectBox">
	<view class="header">
			<text>您的收藏</text>
			<view @click="sort=!sort" :class="{'Icon':true,'Iconsort':sort}" ></view>
	</view>
		<view class="collect" >
	     <view :class="{'collect_poem':true,'collect_poem_active':sort}" v-for="(item,index) in list" :key="index">
			   {{item.title}}
			 <text class="author" > {{item.author}}</text>
			 
		   </view>    <view :class="{'collect_poem':true,'collect_poem_active':sort}" v-for="(item,index) in list" :key="index">
			   {{item.title}}
			 <text class="author" > {{item.author}}</text>
			 
		   </view>   
		</view>
</view>
</template>

<script setup>	
import { onMounted,reactive,ref } from "vue";
import { onLoad} from "@dcloudio/uni-app"
 const sort=ref(false)
 const list=ref()
 const getCollect=async (A)=>{
	 const D=uniCloud.importObject('User') 
        console.log(  await D.GetUser_collect(A)
);
 }
 
 onLoad((Option)=>{
	 list.value= JSON.parse(Option.data).map(el=>{
		 return {
			 title:el.title,
			 author:el.author
		 }
	 })

 })
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
				  transition: 1s all linear;
			color: $uni-bg-color-grey;
						  			background-color: $uni-bg-color-one;
				  position: relative;
				  border: 1px  black solid;
		     .author{
			   
			   color: $uni-text-color-one;
		        }
			  }
		
			  .collect_poem:active{
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