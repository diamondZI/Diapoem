<template>
	<view class="Loding">
     <image class="image" src="../../static/loading.gif" mode=""></image>
		 {{title}} 
	</view>
</template>

<script setup>
import { ref } from "vue";
 const title=ref("后社会主义的田野")
 
</script>

<style lang="less" scoped>
.Loding{
	height: 100vh;
	display: flex;
   justify-content: center;
align-items: center;
   flex-direction: column;
.image{
	margin: 10px;
	 width: 100px;
	 height: 100px;
	 border-radius: 50%;
 }   
}
 
</style>