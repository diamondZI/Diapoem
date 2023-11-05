<template>
		<Opspringers  v-if="Show" :Showclose='Showclose' :AddPoem='AddPoem'>
			<Poem :poem='poem' style="width: 100%;  border-radius: 40rpx; tion: relative; height: 100%;"></Poem>
		</Opspringers>
		<uni-popup ref="message" type="message">
						<uni-popup-message :type="msg.msgType" :message="msg.messageText" :duration="2000"></uni-popup-message>
		</uni-popup>
    <view class="Write"  >
    	<textarea @keyboardheightchange="callback" v-model="TextTitle"  class="title" auto-height="true" :auto-focus="!Auto" type="text"  placeholder="标题">
		</textarea>
		<textarea placeholder="内容"   v-model="TextConet"    auto-focus="true" auto-height="true" style="font-size: 20px; margin-top: 10px;">
		</textarea>
    </view>
	<view class="long"  :style="{'bottom':H}">
		  <view class="box" @click="Showopen()">
		  	   发表 
		  </view><view class="box two" @click="Clear()">
		  	   废弃
		  </view><view class="box" @click="DarftP()">
		  	   <!-- 哦!看来你有一个很好的idea -->
			   放入草稿 
		  </view>
	</view>
</template>
<script setup>
	import {onMounted,ref,defineAsyncComponent, computed, reactive} from "vue"
     import Opspringers from '@/components/Opspringers/index.vue'
     import Poem from '@/components/Poem/index.vue'
	import CryptoJs from "crypto-js"
	import {Base64} from "js-base64"
	import {useDarftStore} from "@/store/draft.js"
	const H=ref('0px')
	const TextTitle=ref('')
	const TextConet=ref('')
	const paragraphs=computed(()=>{
		return TextConet.value.split('\n')
	})
	const Poemtodo=uniCloud.importObject('poem')
	const poem=computed(()=>{
		return {
			title:TextTitle.value,
			author:'西川',
			paragraphs:paragraphs.value
		}
	})
	const Darft=useDarftStore()
	const Show=ref(false)
	const socketOpen=false;
	const Auto=ref(false)
	const msgType=ref('')
	
	const msg=reactive({
		msgType:'',
		messageText:''
	})
	const message=ref(null)
    const callback=(e)=>{
		const {height}= e.detail
		console.log(height);
        H.value=height+'px'
	}
	const Clear=()=>{
	 Show.value=false
	 TextConet.value=''
	 TextTitle.value=''
	 messageToggle("success","成功把他丢进了垃圾桶")
	}
	function messageToggle(type,TEXT) {
		msg.msgType=type
		msg.messageText = TEXT
		message.value.open()
		
	}
	const Showopen=()=>{
       Show.value=true
	}
	const Showclose=()=>{
       Show.value=false
	}
	const AddPoem=async ()=>{
	   let res=await Poemtodo.Set(poem.value)
	   console.log(res);   
	 messageToggle(res.ok===200?"success":'error',res.msg)
	}
	const DarftP=()=>{
		Darft.PUSHDARFT(poem.value)
		 messageToggle("success","成功放入了草稿")
	}
</script>
<style scoped lang="scss">
	.Write{
		width: 100vw;
	   min-height: 100vh;
	padding: 20px;
      background: url('https://ts1.cn.mm.bing.net/th/id/R-C.4330ad75689dbc4899c1226bc959c131?rik=aF%2by3%2fzeIUhGeg&riu=http%3a%2f%2fwww.kuaipng.com%2fUploads%2fpic%2fw%2f2018%2f10-18%2f49753%2fwater_49753_698_698_.png&ehk=P%2bXL0F4hPE96lopnCl9eAZfltzEeVbbdBW5CAcF0dsA%3d&risl=&pid=ImgRaw&r=0') repeat-y ;	
	  transition: 1.3s linear;
		.title{
           padding-bottom: 10px;
			border-bottom: 1px solid black;
			height: auto;
			font-size: 40px;
			color: $uni-bg-color-one;
		}
		.coverView{
			display: flex;
           padding: 20px;
		   justify-content: space-around;
			background-color:rgb(0,0,0,0.2);
		}
	}
	.long{
		z-index: 1999;
		position: fixed;
       bottom: 0px;
		background-color:rgb(0,0,0,0.2);
		display: flex; 
		font-size: 20px;
		justify-content: space-around;
       align-items: center;
		height: 40px;
		width: 100vw;
		.box:hover {
			 transform: translateY(-10rpx);
		}
	}

	
	
</style>