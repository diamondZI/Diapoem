<template>
	<view>
    <view class="ReadBox" :style="{'--background':BG}">
    	<Poem  :poem='content'></Poem>
    </view>
     <view class="A">
     	
     </view>
   <view class="BCOLOR">
          <view class="colorbox" v-for="(item,index) in bgroundColor" 
		   @click="changeColor(item)"
		   :style="{background:item}" :key="index">
          </view>   	
   </view>
	</view>
</template>

<script setup>
	import Poem from "@/components/Poem/index.vue"
import { ref } from "vue";
	const content={
		title:"大海",
		author:"博尔赫斯",		
        paragraphs:[
			"在梦幻（抑或恐惧）编织",
			"神话和宇宙起源之前",
			"在时间被铸成一个个日子之前",
			"海，那永远的大海就早已存在",
			"谁是大海？谁是那凶猛而古老",
			"的生命？它啃噬着大地的支柱",
			"它是一个，是许许多多个海洋",
			"是深渊，是光耀，是缘，是风",
			"谁看它都像是头一回见到一样",
			"永远如此。大自然之奇妙",
			"令人惊艳赞叹，那美丽的",
			"黄昏、月光、熊熊的篝火",
			"谁是大海？我又是谁？我将在",
			"弥留人世的最后日子得到答案"
		]
	}
    const BG=ref('rgb(255,250,240)')
	const BG1='rgb(255,250,240)'
    const bgroundColor=['rgb(27,59,100)','rgb(255,250,240)','rgb(226,203,173)','rgb(199, 237, 204)','rgb(220, 226, 241)']
	function changeColor(color){
		console.log(color);
           BG.value=color
	}
</script>

<style lang="scss">
 .ReadBox{
	 width: 100vw;
	 height: 100vw;
	 display: flex;
	 justify-content: center;
	 // background-color: rgb(241,209,201);
	 background-color: var(--background);


	 overflow-y: auto;
 }
 .A{
	 width: 100px;
	 height: 100px;
	 background-color: var(BG1);
 }
 .BCOLOR{
	 padding: 20px;
	 display: flex;
    justify-content: space-between;
     gap:20rpx;
	 flex-wrap: wrap;
 .colorbox{
	 border-radius: 50%;
 	 width: 10vw;
 	 height: 10vw;
 }
 }
</style>
