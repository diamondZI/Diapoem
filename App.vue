<script setup>
	import {useCounterStore} from "@/store/theme.js"
	const a=useCounterStore()
	console.log(a.$state.count);
</script>

<style lang="scss">
/* 在线链接服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
@font-face {
    font-family: "得意黑 斜体";
    src: url('https://mp-e233ef62-9c0e-4622-a1aa-7115f4048c07.cdn.bspapp.com/SMILEYSANS-OBLIQUE-2.TTF');
    font-weight: normal;
    font-style: normal;
}
:root{
	--backround-color:'rgb(255,250,240)'
}
@keyframes after {
  	 0%{
		      width: 0%;
	 }
	 100%{
		      width: 100%;
	 }
  }
  
	page{
		margin: 0;		
		padding: 0 ;
		box-sizing:content-box;
		font-family: "得意黑 斜体";
		 background-color: $uni-bg-color;
	}
	/*每个页面公共css */
</style>
