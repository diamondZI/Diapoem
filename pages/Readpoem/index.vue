<template>

	 <view :class="{'content':poem, 'REMOVE':!poem}"   :style="[Theme.theme]" >
	<poem :poem='poem' v-if="poem" ></poem>
	<view v-else>
		<uni-card title="内容已被删除" thumbnail="" extra="作者删除" note="Tips">
            <button type="default" @click="remove()">确认</button>
 		</uni-card>
	</view>
	</view>

</template>
<script setup>
import { onMounted, ref,computed,watch } from "vue";
import { onPullDownRefresh ,onLoad} from "@dcloudio/uni-app"
import Poem from "@/components/Poem/index.vue"
import Loding from "@/components/Loding/index.vue"
import { useThemeterStor } from "@/store/theme.js"
import { useUserstore } from "@/store/user.js"
const Theme=useThemeterStor()
const User  =useUserstore()
const GetPoemtodo=uniCloud.importObject('poem')
const poem=ref()
const list=ref([])
const key=ref(0)
async function  GetPoem(keyid){
	poem.value={}
    try{
    	 await  GetPoemtodo.getone(list.value[keyid].id).then(res=>{
    					poem.value=res.data[0]
				}).catch(err=>{
					console.log(err);
    	})	
    }catch(e){
        console.log("起飞");
    }
}
async function remove(){
    const {msg}=await User.removeCollect(key)
	console.log(msg);
    uni.showModal({
    	content:msg
    })
}
onLoad((Options)=>{
	if(Options.poem){
		poem.value=JSON.parse(Options.poem)
		console.log(poem);
	}else{
		list.value=JSON.parse(Options.data)
		key.value=JSON.parse(Options.key)   
		GetPoem(key.value) 
	}
   
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
	.REMOVE{
		background-color: var(--backroundcolor);
	   width: 100vw;
	   height: 100vh;
	   padding: 0;
	   display: flex;
	   justify-content: center;
	   align-items: center;
	   .RBox{
		    
	   }
	   
	}
	
</style>
