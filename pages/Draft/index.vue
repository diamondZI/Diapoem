<template>
<view class="CollectBox">
	
	<BoxBox  title="我的草稿"  :mode="'Draft'" :poem='Draft.Darft'></BoxBox>
</view>

</template>

<script setup>	
import { ref } from "vue";

import BoxBox from "@/components/boxbox/boxbox.vue"
import {useDarftStore} from "@/store/draft.js"
const Draft=useDarftStore()
console.log(Draft.Darft);

</script>

<style scoped lang="scss">

  @media (prefers-color-scheme:dark) {
  	.CollectBox{
		min-height: 100vh;
  		background-color: #282c34;
  	}
  
 
  }
</style>