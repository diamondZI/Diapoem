<template>
	<view class="My_write">
		<view class="os">
			<uni-easyinput prefix-icon="search" placeholder="请输入" :input-border="true" v-model="value"></uni-easyinput>
		</view>
		<view v-if="!Poem" >
			<DataLoading></DataLoading>
		</view>
		<view class="lists" v-else>
			<view class="collect">
			 <view 
			   @touchstart="TouchLongtime.TouchStart()"
			   :class="{'collect_poem':true,'collect_poem_active':sort}" v-for="(item,index) in Poem" :key="index"
			 @touchend="GoRead(index)"
			 >
				   {{item.title}}
				 <text class="author" > {{item.author}}</text>
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
	import {
		computed,
		onMounted,
		reactive,
		ref
	} from "vue";
	import {
		onLoad
	} from "@dcloudio/uni-app"
	import DataLoading from "@/components/Loding/Data_Loading.vue"
	import {
		useUserstore
	} from "@/store/user.js"
	const sort = ref(false)
	const User = useUserstore()
	const value = ref(null)
	const Poem = ref()
	let longTime=0
	const time = (datetime) => {
		const date = new Date(datetime);
		let Y = date.getFullYear() + '-';
		let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
		let D = date.getDate() + ' ';
		return Y + M + D
	}
	onMounted(()=>{
		Getpoem()
	})
	const Getpoem = async () => {
		const db = uniCloud.database()
		const res = await db.collection("user_poem").where({
			user_id: User.UserData._id
		}).get()
		console.log(res.result.data);
		Poem.value = res.result.data
	}
	const GoWrite = () => {
		uni.navigateTo({
			url: '/pages/Write/index'
		})
	}
	const GoRead = (item) => {
		uni.navigateTo({
			url: `/pages/Readpoem/index?data=${JSON.stringify(Poem.value)}&key=${JSON.stringify(item)}&User=${true}`
		})
	}
	
	const TouchLongtime=()=>{
		//长按后ui抖动可删除
		// 1. 
		let a=0
		 function TouchStart(){
	           console.log("长按1111111");
	           		
		}
		function TouchLeave(){
			console.log("离开");
		}
   }
</script>

<style scoped lang="scss">
	@keyframes border {
		0% {
			border: 1px solid $uni-text-color-one;
			border-top: red;
		}

		25% {
			border: 1px solid $uni-text-color-one;
			border-right: red;
		}

		50% {
			border: 1px solid $uni-text-color-one;
			border-bottom: red;
		}

		75% {
			border: 1px solid $uni-text-color-one;
			border-left: red;
		}

		100% {
			border: 1px solid red;
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

	.My_write {
		transition: 1.3s linear all;
		padding: 20px;
		height: 100vh;
		background-color: rgb(255, 250, 240);
		display: flex;

		flex-direction: column;
		gap: 10px;

		.os {
			border-radius: 30px;
			position: relative;
			transition: .3s linear all;
		}

		.lists {
			display: flex;
			flex-wrap: wrap;
			gap: 10px;
			justify-content: space-between;

			.listbox {
				position: relative;
				width: 40vw;
				height: 45vw;
				display: flex;
				background-color: $uni-bg-color-one;

				.title {
					flex: 1 0;
					padding: 10rpx;
					background-color: #2578b5;
					display: flex;
					flex-direction: column;
					justify-content: space-between;

					.text {
						color: white;
					}
				}

				.author {

					color: white;
					display: flex;
					align-items: center;
					flex-direction: column;
					justify-content: space-around;
				}

				.ICONBOX {
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

				.ICONBOXavitve {
					animation: border 1s linear;
					border-color: red;
				}
			}
		}



		.Box {

			position: fixed;
			bottom: 100px;
			border-radius: 50%;
			box-shadow: 0 0 5px 0 black;
			right: 10px;
			transition: 1s linear all;
		}

		.Box:hover {
			box-shadow: inset 0 0 5px 0 black;
		}

	}
</style>