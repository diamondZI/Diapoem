<template>
	<uni-easyinput prefix-icon="search" placeholder="请输入" :input-border="false"></uni-easyinput>
	
	<text>您的收藏</text>
	<view class="collect" >
       <view class="collect_poem" v-for="(item,index) in list" :key="index">
		   {{item.title}}
		   {{item.title}}
	   </view>
	</view>
</template>

<script setup>	
import { onMounted,reactive,ref } from "vue";
import { onLoad} from "@dcloudio/uni-app"
 
 const list=reactive([{
	 title:"你好"
 },{
	 title:"你好"
 },	{
	 title:"你好"
 }])
 const getCollect=async (A)=>{
	 const D=uniCloud.importObject('User') 
        console.log(  await D.GetUser_collect(A)
);
 }
 
 onLoad((Option)=>{
    getCollect(JSON.parse(Option.data))
 })
</script>

<style scoped lang="less">
	text{
		font-size: 50rpx;
		margin: 10vw;
	}
	.collect{
		padding: 20px;
		display: flex;
		justify-content: space-around;
        flex-wrap: wrap;
          .collect_poem{
			  width: 20vw;
			  display: flex;
             flex-direction:row;
            justify-content: center;
            align-items: center;
			  height: 25vw;
			  background-color:antiquewhite
		  }
 	}
</style>