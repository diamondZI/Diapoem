<template>
	<view class="AAA">
		<uni-popup ref="message" type="message">
						<uni-popup-message :type="msg.msgType" :message="msg.messageText" :duration="2000"></uni-popup-message>
		</uni-popup>
    <view class="ReadBox"  >
    	<Poem  style="width: 100vw;" :poem='content'></Poem>
    </view>

   <view class="BCOLOR">
          <view class="colorbox" v-for="(item,index) in bgroundColor" 
		   @click="changeColor(item)"
		   :style="{background:item}" :key="index">
          </view>   	
   </view>
   <view class="A">
	  <view class="A_text">
	 <text>13</text>	  
	 <text>字体大小	</text>	  
	 <text>46</text>	  
	  </view>
 	<slider @change="(e)=>changeSize(e)" style="width: 90vw;" activeColor="rgb(27,59,100)" :value="duration" min="13" max="46" />
 	<view class="A_text">
 	<text>0</text>	
	  <text>字体间距	</text>
 	<text>15</text>	  
 	 </view>
	<slider
	 class="letter"
	 @change="(e)=>changeletter(e)" style="width: 90vw;" activeColor="rgb(27,59,100)" :value="duration2" min="0" max="15" />
	<view class="A_text">
	<text>32</text>	 
	  <text>行间距	</text>
	<text>48</text>	  
	 </view>
 	<slider @change="(e)=>changeheight(e)" style="width: 90vw;" activeColor="rgb(27,59,100)" :value="duration3" min="32" max="48" />
  </view>
  <button @click="onChangtheme()" class="back" style="width: 50vw; border: 1px solid black;">保存样式</button>
  
	</view>

</template>

<script setup>
	import Poem from "@/components/Poem/index.vue";
	import { useThemeterStor } from "@/store/theme.js"
    import { computed, ref,onMounted,reactive } from "vue";
    const Theme=useThemeterStor()	
	const duration=ref(24)
	const msgType=ref('')
	const msg=reactive({
		msgType:'',
		messageText:''
	})
	const message=ref()
	const duration2=ref(10)
	const duration3=ref(32)
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
    const bgroundColor=['rgb(27,59,100)','rgb(255,250,240)','#282c34','rgb(199, 237, 204)','rgb(220, 226, 241)']
	function messageToggle(type,TEXT) {
		msg.msgType=type
		msg.messageText = TEXT
		message.value.open()
	}
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
	const onChangtheme=(e)=>{
             try{
             	Theme.onChangtheme()
           messageToggle('success',"保存成功")           	
             }catch(e){
             }
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
	 -webkit-overflow-scrolling: touch;
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
	 border: 1px solid white;
	 border-radius: 50%;
 	 width: 10vw;
 	 height: 10vw;
 }
 }
 .A_text{
     font-size: 24px;
	 padding-left: 20px;
	 padding-right: 20px;
	 display: flex;
	 justify-content: space-between;
 }
 @media (prefers-color-scheme:dark) {
 	.AAA{
 		min-height: 100vh;
 		background-color: #282c34;
 	}
 	.popupCoupon{
 		background-color: #282c34;
 	}
  .back{
	  // background-color: white;
  }
 	}
</style>
