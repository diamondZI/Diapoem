<template>
	<view class="Opspringers"  :style="{'display':Show?'flex':'none'}">		
            <view class="TopPoem">
            	<slot>
					
				</slot>
            </view>
			<view class="Button">
				  <button type="default" @click="sure()">
					   确定
				  </button>
				  <button type="default" @click="close()">
					  取消
				  </button>
			</view>
	</view>
</template>

<script setup>
	import Poem from "@/components/Poem/index.vue"
import { ref } from "vue";
const props=defineProps(['Showclose','AddPoem'])
const Show=ref(true)
const close=()=>{
	props.Showclose()
}	
const sure=()=>{
	props.AddPoem()
}	
</script>

<style lang="scss" scoped>
.Opspringers{
	overflow: hidden;
	box-shadow: 0 0 10px 0 black;
	transition: 1s linear;
	top: 0;
	left: 50%;
	top: 50%;
	transform: translate(-50%,-50%);
	z-index: 10;
	position: fixed;
	border-radius: 40rpx;
	width: 80vw;
	height: 80vh;
	background-color: white;
	display: flex;
	flex-direction: column;
	.TopPoem{
		position: relative;
		max-height: 89%;
		overflow-y: auto;
		background-color: greenyellow;
	       flex: 8;
	}
	.Button{
		padding: 10rpx;
		flex: 1;
		display: flex;
		border-top: 1px solid black;
	}
}

</style>
