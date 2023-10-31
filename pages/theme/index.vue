<template>
	<view>
    <view class="ReadBox" >
    	<Poem  style="width: 100vw;" :poem='content'></Poem>
	
    </view>

   <view class="BCOLOR">
          <view class="colorbox" v-for="(item,index) in bgroundColor" 
		   @click="changeColor(item)"
		   :style="{background:item}" :key="index">
          </view>   	
   </view>
   <view class="A">
	   字体大小 {{duration}}
 	<slider @change="(e)=>changeSize(e)" style="width: 90vw;" activeColor="rgb(27,59,100)" :value="duration" min="13" max="46" />
 	<slider
	 class="letter"
	 @change="(e)=>changeletter(e)" style="width: 90vw;" activeColor="rgb(27,59,100)" :value="duration2" min="0" max="15" />
 	<slider @change="(e)=>changeheight(e)" style="width: 90vw;" activeColor="rgb(27,59,100)" :value="duration3" min="32" max="48" />
  </view>
	</view>
</template>

<script setup>
	import Poem from "@/components/Poem/index.vue";
	import { useThemeterStor } from "@/store/theme.js"
import { computed, ref,onMounted } from "vue";
    const Theme=useThemeterStor()	
	const duration=ref(20)
	const duration2=ref(0)
	const duration3=ref(0)
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
    const bgroundColor=['rgb(27,59,100)','rgb(255,250,240)','rgb(226,203,173)','rgb(199, 237, 204)','rgb(220, 226, 241)']
	function changeColor(color){
		Theme.onChangeBackroundcolor(color)
           BG.value=color
	}
	const changeSize=(e)=>{
		Theme.onChangesize(e.detail.value)
	}
	const changeletter=(e)=>{
		Theme.onChangeletter(e.detail.value)
	}
	const changeheight=(e)=>{
		Theme.onChangeheight(e.detail.value)
	}
</script>

<style lang="scss">

 .ReadBox{
	 width: 100vw;
	 height: 100vw;
	 display: flex;
	 justify-content: center;
	 background-color: var(--backroundcolor);
	 overflow-y: auto;
 }
 .A{
	
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
