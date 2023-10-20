<template>
	
	<view class="POEM" id="POEM" >
         <view>
			 <text selectable class="h1" @click="clie()">{{poem.title}}</text>
			 <text selectable='true' > ___{{poem.author}}</text>
		 </view>
		 <view class="paragraphs">
		 	 <text selectable='true' v-for="(el,index) in poem.paragraphs"  :key="el"  id="text">
				  {{el}}
			  </text>
		 </view>
	</view>
</template>

<script setup>
import Loding from "@/components/Loding/index.vue"
import { onLoad,onPullDownRefresh } from "@dcloudio/uni-app"
import {ref, onMounted } from "vue";
	const {poem}=defineProps(['poem'])

console.log("zi1",poem);


</script>

<style lang="less" >

.POEM{
	
	display: flex;
	flex-direction: column;
	justify-content: center;
	// align-items: center;
	padding: 13rpx;
	.h1{
		margin-bottom: 10px;
		font-size: 35px;
		font-style: unset;
	}
	.paragraphs{
		margin-top: 10px;
		display: flex;
		font-size: 20px;
		gap: 12rpx;
		flex-direction: column;
	}
}


</style>