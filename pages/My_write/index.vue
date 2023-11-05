<template>
	<view class="My_write">
		<view class="os">
			
			<uni-easyinput  prefix-icon="search" placeholder="请输入" :input-border="true" v-model="value" ></uni-easyinput>
		</view>
		<view class="lists">
		   <view  v-for="(item,index) in lists" :key="index" class="listbox" 
		  v-show="item.title.includes(value)|value===null"
		   >
			   {{item.title}}
		   <view class="ICONBOX">
		   	 <uni-icons type="arrow-up" size="33" color="$uni-text-color-one"></uni-icons>
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
 const sort=ref(false)
 const list=ref()
 const value=ref(null)
 const lists=ref([{
	 title:"你好",
	 autour:"作何"
 },{
	 title:"山上",
	 autour:"作何"
 },{
	 title:"你好",
	 autour:"作何"
 }])
 const show=computed(()=>{
	 return 
 })
 const getCollect=async (A)=>{
	 const D=uniCloud.importObject('User') 
        console.log(  await D.GetUser_collect(A)
);
 }
 const GoWrite=()=>{
	 uni.navigateTo({
	 	url:'/pages/Write/index'
	 })
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
	
	.My_write{
		transition: 1.3s linear all;
		padding: 20px;
		height: 100vh;
		background-color: rgb(255,250,240);
		display: flex;
		
		justify-content: end;
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
			 background-color: $uni-bg-color-one;
			 .ICONBOX{
		   padding: 20rpx;
		   display: flex;
		   justify-content: center;
		   align-items: center;
		   width: 30rpx;
		   height: 30rpx;
		   border: 1px solid $uni-text-color-one;
		   border-radius: 50%;
		   position: relative;
			 }
		 }
		}
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