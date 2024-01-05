<template>
	<Loding v-if="!poem"></Loding>
	 <view
	  @touchstart="Touch.touchStart"
	  @touchmove="Touchmove"
	  @touchend="TouchmEnd"
	  class="content" v-else  :style="[Theme.theme]" >
		 <div class="contentX" :style="{'transform':`translateX(${size/PageSize*100}vw)`}">
			 <Poem style="width: 100vw;" :poem='poem'></Poem>
			 <Poem  style="width: 100vw; " :poem='UserPoem'></Poem>
		 </div>
     <FunButton :reload='reload' :remove='remove' :collect='collect' :start='stop?start:UserStart'></FunButton>
	</view>

</template>
<script setup>
//写了大量重复代码	
import { onMounted, ref,computed,watch } from "vue";
import { onPullDownRefresh ,onLoad,onShareAppMessage} from "@dcloudio/uni-app"
import Poem from "@/components/Poem/index.vue"
import Loding from "@/components/Loding/index.vue"
import FunButton from "@/components/FunButton/index.vue"
import { useThemeterStor } from "@/store/theme.js"
import { useUserstore } from "@/store/user.js"
import TouchLong from "@/hook/Touch_Longtime.js"
import { HmacSHA224 } from "crypto-js";
const Theme=useThemeterStor()
const User=useUserstore()
const poem=ref()
const UserPoem=ref()
const todo = uniCloud.importObject('poem')
const start=ref()
const UserStart=ref()
const size=ref(0)
const PageSize=ref()
let stop=true
const Touch=new TouchLong({},{})
async function  reload(A){
	if(stop){
		poem.value={}
		poem.value = await todo.get().then(res=>{
						return res.data[0]
				}).catch(err=>{
		})
		if(User.UserData){
			start.value=await (User.UserData.collect.filter((el)=>{
			  	 return el.id===poem.value._id
			   }
			 ).length>0)
		}
	}else{
		UserPoem.value={}
		UserPoem.value = await todo.getUserR().then(res=>{
						return res.data[0]
				}).catch(err=>{
		})
		if(User.UserData){
			UserStart.value=await (User.UserData.collect.filter((el)=>{
			  	 return el.id===UserPoem.value._id
			   }
			 ).length>0)
		}
		
	}
	if(A){
		UserPoem.value={}
		UserPoem.value = await todo.getUserR().then(res=>{
						return res.data[0]
				}).catch(err=>{
		})
		if(User.UserData){
			UserStart.value=await (User.UserData.collect.filter((el)=>{
			  	 return el.id===UserPoem.value._id
			   }
			 ).length>0)
		}
	}
}
async function collect(){
	if (stop) {
		User.SetCollect({
			id:poem.value._id,
			title:poem.value.title,
			author:poem.value.author,
			isanuthor:false,
			data:new Date().getTime()
		})
		start.value=await User.UserData.collect.filter((el)=>{
		  	 return el.id===poem.value._id
		}).length>0
	} else{
		User.SetCollect({
			id:UserPoem.value._id,
			title:UserPoem.value.title,
			author:UserPoem.value.author,
			isanuthor:true,
			data:new Date().getTime()
		})
		UserStart.value=await User.UserData.collect.filter((el)=>{
		  	 return el.id===UserPoem.value._id
		}
		 ).length>0
	}
	
	
	// stop?setcollect(poem.value,start.value):setcollect(UserPoem,UserStart.value)
}
async function remove(){
	if (stop) {
		User.UserData.collect.map((el,index)=>{
		   if (el.id===poem.value._id) {
		       User.removeCollect(index)
		   }
		});
		start.value=await (User.UserData.collect.filter((el)=>{
		  	 return el.id===poem.value._id
		   }
		 ).length>0)
	} else{
		User.UserData.collect.map((el,index)=>{
		   if (el.id===UserPoem.value._id) {
		       User.removeCollect(index)
		   }
		});
		UserStart.value=await (User.UserData.collect.filter((el)=>{
		  	 return el.id===UserPoem.value._id
		   }
		 ).length>0)
	}
}
onLoad((Option)=>{
	console.log(Option.value);
})
onShareAppMessage((res)=>{
	    if (res.from === 'button') {// 来自页面内分享按钮
	      console.log(res.target)
	    }
	    return {
	      title: '在这里分享你的诗',
	      path: '/pages/index/index'
	    }
	
})	
onMounted(()=>{
		reload(true)
		Theme.GetTheme()
       GETPagesize();
})
async function GETPagesize(){
	const Wsize=await uni.getSystemInfo()
	PageSize.value=Wsize.safeArea.width
}

function Touchmove(e){
	
     const Rfn=(Size)=>{
	   size.value=stop?Size:Size-PageSize.value
    }
	Touch.TouchMove(e,Rfn)
}
function TouchmEnd(e){
	const isSizeA=(Size)=>{
	console.log("111");
			if(Math.abs(size.value/PageSize.value)*100>30){
				size.value=-PageSize.value
				stop=false
				uni.pageScrollTo({
					scrollTop:-10,
				})
				console.log(Math.abs(size.value/PageSize.value)*100);
			}else if(Math.abs(size.value/PageSize.value)*100<30){
				size.value=0
				stop=true
			}	
	}
	const isSizeB=(Size)=>{
		console.log("222");
		if(Math.abs(size.value/PageSize.value)*100<72){
			size.value=0
			stop=true
			uni.pageScrollTo({
				scrollTop:-10,
			})
			console.log(Math.abs(size.value/PageSize.value)*100);
		}else if(Math.abs(size.value/PageSize.value)*100>72){
			size.value=-PageSize.value
			
			
			stop=false
		}
	}
	Touch.TouchEnd(e,stop?isSizeA:isSizeB)
}
</script>

<style lang="scss" scoped>
	.content{
		width: 100vw;
		position: absolute;
		min-height: 100vh;
	    // padding: 20px;
		overflow-x: hidden;
		transform: translateX();
		position: absolute;
		background-color: var(--backroundcolor);
	.contentX{
		width: 300vw;
	    display: flex;	
		transition: .3s linear all;
	}
	}
	
</style>
