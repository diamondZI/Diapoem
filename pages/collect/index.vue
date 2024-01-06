<template>
<view class="My_write">
	<BoxBox title="我的收藏" :poem='list' :mode="'false'" :fun='fun'></BoxBox>
</view>
</template>

<script setup>	
import {ref } from "vue";
import { onLoad} from "@dcloudio/uni-app"
import BoxBox from "@/components/boxbox/boxbox.vue"
import { useUserstore } from "@/store/user.js"
const list=ref() 
const  fun=(id)=>{
const User=useUserstore()
console.log(id);
list.value=User.UserData.collect
      User.removeCollect(id)
}
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