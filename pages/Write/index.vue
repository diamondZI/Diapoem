<template>
    <view class="Write">
    	<textarea @input="callback"  ref="TextTitle" class="title" auto-height="true" :auto-focus="!Auto" type="text"  placeholder="标题">

			
		</textarea>
		<textarea placeholder="内容"  ref="TextConet"  :auto-focus="Auto" auto-height="true" style="font-size: 20px; margin-top: 10px;">
			
		</textarea>
    </view>
	<view class="long">
		  <view class="box" @click="Get()">
		  	   发表 
		  </view><view class="box">
		  	   废弃
		  </view><view class="box">
		  	   <!-- 哦!看来你有一个很好的idea -->
			   放入草稿 
		  </view>
	</view>
</template>
<script setup>
	import {onMounted,ref} from "vue"
	import CryptoJs from "crypto-js"
	import {Base64} from "js-base64"
	const socketOpen=false;
	const TextConet=ref(null)
	const Auto=ref(false)
	const socketMsgQueue=[];
	const TextTittle=ref(null)
   const getWebsocketUrl = () => {
	   
      return new Promise((resovle, reject) => {
          let url = "wss://spark-api.xf-yun.com/v3.1/chat";
          let host = "spark-api.xf-yun.com";
          let apiKeyName = "api_key";
          let date = new Date().toGMTString();
          let algorithm = "hmac-sha256"
          let headers = "host date request-line";
          let signatureOrigin = `host: ${host}\ndate: ${date}\nGET /v1.1/chat HTTP/1.1`;
          let signatureSha = CryptoJs.HmacSHA256(signatureOrigin, requestObj.APISecret);
          let signature = CryptoJs.enc.Base64.stringify(signatureSha);
   
          let authorizationOrigin = `${apiKeyName}="${requestObj.APIKey}", algorithm="${algorithm}", headers="${headers}", signature="${signature}"`;
   
          let authorization = Base64.encode(authorizationOrigin);
          // 将空格编码
          url = `${url}?authorization=${authorization}&date=${encodeURI(date)}&host=${host}`;
          resovle(url)
      })
	  }
    const callback=(e)=>{
      console.log(e.detail.value);
	  // console.log(e.detail);
	  // if (e.detail.value[e.detail.cursor]==='') {
	  	
	  // } else{
	  	
	  // }
	}
	
	
</script>

 

<style scoped lang="scss">
	.Write{
		width: 100vw;
	min-height: 100vh;
	padding: 20px;
      background: url('https://ts1.cn.mm.bing.net/th/id/R-C.4330ad75689dbc4899c1226bc959c131?rik=aF%2by3%2fzeIUhGeg&riu=http%3a%2f%2fwww.kuaipng.com%2fUploads%2fpic%2fw%2f2018%2f10-18%2f49753%2fwater_49753_698_698_.png&ehk=P%2bXL0F4hPE96lopnCl9eAZfltzEeVbbdBW5CAcF0dsA%3d&risl=&pid=ImgRaw&r=0') repeat-y ;	
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
		position: fixed;
       bottom: 0px;
		background-color:rgb(0,0,0,0.2);
		display: flex; 
		font-size: 20px;
		justify-content: space-around;
       align-items: center;
		height: 40px;
		width: 100vw;
	}
</style>