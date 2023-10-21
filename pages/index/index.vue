<template>
	<Loding v-if="!poem"></Loding>
	 <view class="content" v-else >
		  <Poem :poem='poem'></Poem>
		  <FunButton></FunButton>
	</view>

</template>

<script setup>
import { onMounted, ref } from "vue";
import { onPullDownRefresh } from "@dcloudio/uni-app"
import Poem from "@/components/Poem/index.vue"
import Loding from "@/components/Loding/index.vue"
import FunButton from "@/components/FunButton/index.vue"
const poem=ref()
const todo = uniCloud.importObject('poem')
async function  C(){
	   poem.value=[]
			poem.value = await todo.get().then(res=>{
				console.log(res);
					return res.data[0]
			}).catch(err=>{
				console.log(err);
			})
			console.log("你好");
	}		
onMounted(()=>{
	C()
})
onPullDownRefresh(()=>{
	C()
})
</script>

<style lang="less" scoped>
	.content{
		padding: 20px;
	}
</style>
