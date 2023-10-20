<template>
	<Loding v-if="!User"></Loding>
	<view class="userIorf" v-else>
		{{User}}
        {{User.user_name}}
		<span @click='go()'>收藏 {{User.collect.length}}</span>
		<span>创作 {{User.create.length}}</span>
	</view>
</template>

<script setup>	
	import A from "@/components/FunButton/index.vue"
	import Loding from "@/components/Loding/index.vue"
import { onMounted,ref } from "vue";
    const User=ref()
	const todo = uniCloud.importObject('User')
	const a= async ()=>{
	  User.value =await	todo.GetUser().then(res=>{
		  return res.data[0]
	  })

	}
	
	const go=()=>{
		console.log("跳转");
		uni.navigateTo({
			'url':'/pages/collect/index'
					})
	}
	onMounted(()=>{
		a()
	})
    
	
</script>

<style scoped lang="less">
	.A{
		position: absolute;
		width: 100px;
		border-radius: 50%;
		height: 100px;
		border: 1px black solid;
		background-size: 100% 100%;
        background-image: url('../../static/logo.svg');
	}
</style>