<template>
<view class="My_write">
	<BoxBox title="我的收藏" :poem='list' :mode="'false'"></BoxBox>
</view>
</template>

<script setup>	
import {ref } from "vue";
import { onLoad} from "@dcloudio/uni-app"
import BoxBox from "@/components/boxbox/boxbox.vue"
const list=ref() 
onLoad((Option)=>{
	 list.value= JSON.parse(Option.data)
})

</script>

<style scoped lang="scss">
  @media (prefers-color-scheme:dark) {
  	.My_write{
		min-height: 100vh;
  		background-color: #282c34;
  	}
  
 
  }
</style>