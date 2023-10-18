<template>
	<view >
		
		<!-- 1 -->
		 <Loding></Loding>
	<!-- </view> -->
	 <!-- <view class="content"  v-else> -->
		 <!-- 111 -->
	</view>
</template>

<script setup  >
import { onMounted, ref } from "vue";
import Loding from "@/components/Loding/index.vue"
	 const loding =ref(true)
onMounted(()=>{
	setTimeout(()=>{
		loding.value=false
	},3000)
})
</script>

<style lang="scss" scoped>
	
</style>
