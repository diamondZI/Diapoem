<template>
	<Loding v-if="!poem"></Loding>
	 <view class="content" v-else  :style="[Theme.theme]" >
		  <Poem :poem='poem'></Poem>
		  <FunButton :reload='reload' :remove='remove' :collect='collect' :start='start'></FunButton>
	</view>

</template>
<script setup>
import { onMounted, ref,computed,watch } from "vue";
import { onPullDownRefresh ,onLoad} from "@dcloudio/uni-app"
import Poem from "@/components/Poem/index.vue"
import Loding from "@/components/Loding/index.vue"
import FunButton from "@/components/FunButton/index.vue"
import { useThemeterStor } from "@/store/theme.js"
import { useUserstore } from "@/store/user.js"
const Theme=useThemeterStor()
const User=useUserstore()
const poem=ref()
const todo = uniCloud.importObject('poem')
const start=ref()
async function  reload(){
	poem.value={}
	poem.value = await todo.get().then(res=>{
					return res.data[0]
			}).catch(err=>{
	})
	
}
async function collect(){
	User.SetCollect({
		id:poem.value._id,
		title:poem.value.title,
		author:poem.value.author,
		data:new Date().getTime()
	})
	start.value=await (User.UserData.collect.filter((el)=>{
	  	 return el.id===poem.value._id
	   }
	 ).length>0)
}
async function remove(){
	User.UserData.collect.map((el,index)=>{
	   if (el.id===poem.value._id) {
	       User.removeCollect(index)
	   }
	});
	start.value=await (User.UserData.collect.filter((el)=>{
	  	 return el.id===poem.value._id
	   }
	 ).length>0)
}
onMounted(()=>{
		reload()
})

</script>

<style lang="scss" scoped>
	
	.content{
		width: 100vw;
		position: absolute;
		min-height: 100vh;
	 padding: 20px;
		background-color: var(--backroundcolor);
	
	}
</style>
