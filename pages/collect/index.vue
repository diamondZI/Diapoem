<template>
<view class="">
	<BoxBox title="我的收藏" :poem='list' :mode="false"></BoxBox>
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

</style>