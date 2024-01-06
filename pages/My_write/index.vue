<template>    
	<view class="My_write">
		<BOXBOX :title="title" :poem='Poem' :mode="'true'" :fun='fun'></BOXBOX>
		<view class="CollectBox">
			<view class="Box" @click="GoWrite()">
				<uni-icons class="ICONBOX" type='plusempty' size='40'></uni-icons>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {onMounted,ref} from "vue";
	import {onLoad} from "@dcloudio/uni-app"
	import DataLoading from "@/components/Loding/Data_Loading.vue"
	import BOXBOX from "@/components/boxbox/boxbox.vue"
	import {
		useUserstore
	} from "@/store/user.js"
	import { Getpoem } from "@/hook/GetPoem.js"
    const User=useUserstore()
	const title=ref()
	const Poem = ref()
	const Noption=ref()
	onLoad((option)=>{
		Noption.value=option
            !option.id?Getpoem(Poem,User.UserData._id):Getpoem(Poem,option.id)
           title.value=!option.id?"我的创作":"他的创作"
	})
	const GoWrite = () => {
		uni.navigateTo({
			url: '/pages/Write/index'
		})
	}
	const fun=async (id)=>{
		console.log(Poem.value);
		const db=uniCloud.database()
		await db.collection("user_poem").doc(Poem.value[id]._id).remove()
		Getpoem(Poem,User.UserData._id)
	}
	
</script>

<style scoped lang="scss">
		.Box {

			position: fixed;
			bottom: 100px;
			border-radius: 50%;
			box-shadow: 0 0 5px 0 black;
			right: 10px;
			transition: 1s linear all;
		}

		.Box:hover {
			box-shadow: inset 0 0 5px 0 black;
		}

  @media (prefers-color-scheme:dark) {
  	.My_write{
		min-height: 100vh;
  		background-color: #282c34;
  	}
  
 
  }
	
</style>