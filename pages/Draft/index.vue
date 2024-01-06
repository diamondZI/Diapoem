<template>
<view class="CollectBox">
	
	<BoxBox  title="我的草稿"  :mode="'Draft'" :poem='Draft.Darft' :fun='fun'></BoxBox>
</view>

</template>

<script setup>	
import { ref } from "vue";

import BoxBox from "@/components/boxbox/boxbox.vue"
import {useDarftStore} from "@/store/draft.js"
const Draft=useDarftStore()
const fun= (id)=>{
	console.log(id,"删除");
	Draft.DeleteDarft(id)
}

</script>

<style scoped lang="scss">

  @media (prefers-color-scheme:dark) {
  	.CollectBox{
		min-height: 100vh;
  		background-color: #282c34;
  	}
  
 
  }
</style>