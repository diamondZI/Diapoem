<template>
  <view class="neighborhood">
	 <view class="TOPTAP">
	 	<span class="text">其他用户</span>
	 	<span class="text" @click="Getday()">随机 </span>
	 	<span class="text">排序</span>
	 </view> 
		 <view class="card" @click='GoNavigateTo("Personal",item)' v-for="(item,index) in userlist" :key="index">
		  		  <view class="avatar">
		  		  	<image  :src="item.avatar" mode="aspectFill"></image>
		  		  </view>
		  	  <view class="text">
		  			  <text>{{item.user_name}}</text>
		  			   <text>{{item.slogan}}</text>
		  			  <text>{{item.self_introduction}}</text>
		  		  </view>	 
		  </view>
         <view v-if="LO">加载中----</view>

  </view>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';
import {onReachBottom} from "@dcloudio/uni-app"
import dayjs  from "dayjs"
const list=reactive([1,2,3,4,5,6,7,8,9])
const card=ref(null)
const LO=ref(false)
import {useUserstore} from "@/store/user.js"
const User=useUserstore()
const userlist=ref([])
const Dayjs=new dayjs()

onReachBottom(()=>{
	GetUser()
	console.log("!");
	
})
const Getday=()=>{
	console.log('你',);
}


const  GetUser=async ()=>{
    LO.value=true	
   const db =uniCloud.database()
  let {result}=   await db.collection('users').where(`_id!='${User.UserData._id}'`).field(
	  {
		  "user_name":true,
		  "create":true,
		  "self_introduction":true,
		  "slogan":true,
		  "avatar":true
	  }
  ).limit(7).skip(userlist.value.length).get()
   
   
  userlist.value=[...userlist.value,...result.data]
   if (result.data.length) {
   	LO.value=false
   } else{
	   
   	// console.log("没有更多了");
   }   
  console.log(result.value);
  
}
const GoNavigateTo=(Url,value)=>{
		console.log("跳转");
		uni.navigateTo({
			url:`/pages/${Url}/index?data=`+JSON.stringify(value), 
			animationType: 'pop-in',
			animationDuration: 10000
		})
	}
onMounted(()=>{
	GetUser()
})

</script>

<style lang="scss" scoped>
	.TOPTAP{

		margin-bottom: 10px;
		display: flex;
		justify-content: space-between;
		width: 100%;
		.text{
			margin: 0;
			border-bottom: 2px rgb(1, 1, 1,0) solid;
		}
		.text:first-child{
			border-bottom: 2px $uni-bg-color-one solid;
			
		}
		.text:hover{
			border-bottom: 2px $uni-bg-color-one solid;
			
		}
	}
	.neighborhood{
		padding: 20px;
        display: flex;
		flex-direction: column;
		align-items: center;
		gap:20rpx;

	}
	.card{
		box-shadow: 0 0  2px  black;
		padding: 20rpx;
		width: 80vw;
		display: flex;
	}
	.text{
		display: flex;
		flex-direction: column;
		margin-left: 30px;
		justify-content: space-around;
	}
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
</style>