<template>
 <view class="neighborhoodBox">
 	<view class="neighborhood">
 		 <view class="TOPTAP">
 		 	<span class="text">其他用户</span>
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
 					  <view class="text" style="justify-content: center; display: flex; align-items: center; gap: 5px;">
 						  <text>作品数量</text>
 						  <view class="avatar PoemNumber">{{item.PoemNumber}}</view>
 					  </view>
 					  <view class="Create_time">
 						  <text>上次登录时间 : {{time(item.LoginTime)}}</text>
 						  <text>用户创建时间 : {{"隐藏"}}</text>
 						  
 					  </view>
 		</view>
 		<view v-if="LO&&LONOT" >加载中----</view>
 	 <view v-if="!LONOT" class="">
 	 	非常抱歉我们没有更多用户了,我们需要您的帮助,点击分享
 		        <button class="button" open-type="share">分享 </button>
 	 	 长按复制我们拉您进入讨论群:<text user-select class="font">wx2580456922</text>;您有任何建议都可以联系我们
 	 	<!-- 如果您喜欢这个程序或者希望我们变得更好 可以选择对我们进行任意金额的赞助,感谢您的支持 -->'
 	 </view>
 	</view>
 </view>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';
import {onReachBottom,onShareAppMessage} from "@dcloudio/uni-app"
import dayjs  from "dayjs"
import {useUserstore} from "@/store/user.js"
import { time } from "@/hook/GetPoem.js"
const list=reactive([1,2,3,4,5,6,7,8,9])
const card=ref(null)
let total=ref(0)
const LO=ref(false)
const User=useUserstore()
const userlist=ref([])
const Dayjs=new dayjs()
const LONOT=ref(true)
onReachBottom(()=>{
	GetUser()	
})
onShareAppMessage((res)=>{
	    if (res.from === 'button') {// 来自页面内分享按钮
	      console.log(res.target)
	    }
	    return {
		 imageUrl:'/static/diamond.png',
	      title: '每天闲暇时来读一首诗吧',
	      path: '/pages/index/index'
	    }
	
})	

const  GetUser=async ()=>{
   const db =uniCloud.database() 
    const total1=  await GETALL() 
    total.value=total1
   if (userlist.value.length<total1-1) {
	LO.value=true
	let {result}=   await db.collection('users').where(`_id!='${User.UserData._id}'`).field(
		  {
			  "user_name":true,
			  "create":true,
			  "self_introduction":true,
			  "slogan":true,
			  "avatar":true,
			  "LoginTime":true,
			  "RegisteredTime":true,
			  "PoemNumber":true,

		  }
	).skip(userlist.value.length).limit(7).get()
	console.log(...result.data);
	userlist.value=[...userlist.value,...result.data]      
    LO.value=false
   } else{
	   setTimeout(()=>{
		  LO.value=false
		  LONOT.value=false
			  console.log("没有更多了");
	   },2000)
   
   }   

  
}
const GoNavigateTo=(Url,value)=>{
		console.log("跳转");
		uni.navigateTo({
			url:`/pages/${Url}/index?data=`+JSON.stringify(value), 
			animationType: 'pop-in',
			animationDuration: 10000
		})
	}
async function  GETALL(){
	const db =uniCloud.database()
    return	 await db.collection('users').count().then(res=>{
		 console.log(res);
	return res.result.total
	})
}
onMounted(()=>{
	
	GetUser()

})

</script>

<style lang="scss" scoped>
	.neighborhoodBox{
		min-height: 100vh;
	}
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
	.font{
		font-weight: bold;
		color: $uni-bg-color-one;
		margin-left: 10rpx;
		margin-right: 10rpx;

	}
	.button{
		border: 1px solid black;
		width: 100px;
		height: 100px;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 30px;
		
	}
	.neighborhood{
		padding: 20px;
        display: flex;
		flex-direction: column;
		align-items: center;
		gap:20rpx;

	}
	.card{
		box-shadow:10px 10px 10px indigo;
		flex-wrap: wrap;
		padding: 20rpx;
		width: 80vw;
		display: flex;
		.Create_time{
			margin: 15px;
			position: relative;
			width: 100%;
			display: flex;
			font-size: 14px;
			justify-content: space-between;
		}
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
	.PoemNumber{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 140rpx;
		height: 140rpx;
		font-size: 40px;
		box-shadow:inset 3px 6px 13px black;
}
@media (prefers-color-scheme:dark) {
	.neighborhoodBox{
		background-color: #282c34;
	}
	.card{
		color: #bababa;
		background-color: black;
      .PoemNumber{
		  box-shadow:inset 3px 6px 13px white;
		  
	  }
	}
}



</style>