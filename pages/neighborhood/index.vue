<template>
  <view class="neighborhood">
	
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
  </view>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';
const list=reactive([1,2,3,4,5,6,7,8,9])
const card=ref(null)
import {useUserstore} from "@/store/user.js"
const User=useUserstore()
const userlist=ref([])

const  GetUser=async ()=>{
   const db =uniCloud.database()
  let {result}=  await db.collection('users').where(`_id!='${User.UserData._id}'`).field(
	  {
		  "user_name":true,
		  "create":true,
		  "self_introduction":true,
		  "slogan":true,
		  "avatar":true
	  }
  ).limit(10).get() 
  // console.log(result);
  userlist.value=result.data
  console.log(userlist.value);
  
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