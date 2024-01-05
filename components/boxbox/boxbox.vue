<template>
<view class="CollectBox">
	
	<view class="header">
			<text >
				{{title}}
			</text>
			<view @click="sort=!sort" :class="{'Icon':true,'Iconsort':sort}" ></view>
	</view>
      <DataLoading  v-if="!poem"/>
		<view class="collect"  v-else>
	     <view  :class="{'collect_poem':true,'collect_poem_active':sort}" v-for="(item,index) in poem" :key="index"
		 @touchend="GoRead(index,poem)"
		 >
			   {{item.title.substr(0,6)}} 
			   {{item.title.length>6?"……":""}}
			 <text class="author" > {{item.author}}</text>
		</view>
		</view>
     
</view>
</template>

<script setup>
import DataLoading from "@/components/Loding/Data_Loading.vue"
import {ref} from "vue"
const {poem,title,mode}=defineProps(['poem','title','mode'])
const sort=ref(false)
console.log(poem);
const GoRead=(id,poem)=>{
	
	if (mode==="true") {
			uni.navigateTo({
				url: `/pages/Readpoem/index?data=${JSON.stringify(poem)}&key=${JSON.stringify(id)}&User=${true}`
			})
	} else if(mode==="false"){
		uni.navigateTo({
			url:`/pages/Readpoem/index?data=${JSON.stringify(poem)}&key=${JSON.stringify(id)}&User=${poem[id].isanuthor}`
		})
	} else {
		uni.navigateTo({
			url:`/pages/Write/index?value=${JSON.stringify(id)}&list=${
					JSON.stringify(poem)
				}`
		})
	}
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
				 text-shadow: 0 0 2px black;
			   flex: 1;
                text-orientation:sideways;
			   color:rgb(255,215,100);
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