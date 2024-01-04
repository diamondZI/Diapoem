<template>
	<view class="POEM" id="POEM" :style="[theme.theme]">
         <view>
			 <text selectable class="h1" @click="clie()">{{poem.title}}</text>
			 <text selectable='true' style="letter-spacing: normal;"> ___{{poem.author}}</text>
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
import {useThemeterStor} from "@/store/theme.js"

const theme=useThemeterStor()
const {poem}=defineProps(['poem'])
</script>

<style lang="less" >

.POEM{
	overflow: auto;
	padding: 20rpx;
	background-color: var(--backroundcolor);
	display: flex;
	min-height: 100%;
	flex-direction: column;
	// justify-content: center;
	font-size: var(--size);
	.h1{
		font-size: calc(var(--size)*1.5) !important;
		font-style: unset;
	}
	.paragraphs{
		letter-spacing: var(--letter_spacing);
		line-height: var(--line_height);
		// line-height: var(--);
		display: flex;
		gap: 12rpx;
		flex-direction: column;
	}
}
@media (prefers-color-scheme:dark) {
		.POEM{
			background-color: #282c34;
			color:whitesmoke;
		}
	}


</style>