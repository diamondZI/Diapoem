<template>
	
	 <view
	  @touchstart="Touch.touchStart"
	  @touchmove="Touchmove"
	  @touchend="TouchmEnd"
	  class="content"  :style="[Theme.theme]" >
	  <Loding v-if="!poem"></Loding>
		 <div v-else  class="contentX" :style="{'transform':`translateX(${size/PageSize*100}vw)`}">
			 <Poem style="width: 100vw;" :poem='poem'></Poem>
			 <Poem  style="width: 100vw; " :poem='UserPoem'></Poem>
		 </div>
     <FunButton :reload='reload' :remove='remove' :collect='collect' :start='stop?start:UserStart' 
	  :stop='stop'
	  :id='stop?poem._id:UserPoem._id'></FunButton>
	</view>
    <!-- <view style="position: fixed; width: 100vw; height: 100vh; background-color: rgb(100,100, 100,0); ">
         <view class="">
         	 <text>下一首</text>
         	 <text>收  藏</text>
         	 <text>分享</text>
         </view>
	</view>  -->  
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
async function getpoem(id){
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
}
async function getUserpoem(id){
	UserPoem.value={}
	UserPoem.value = await todo.getUserR().then(res=>{
					return res.data[0]
			}).catch(err=>{
	})
	if(User.UserData){
		UserStart.value=await (User.UserData.collect.filter((el)=>{
		  	 return el.id===id??UserPoem.value._id
		   }
		 ).length>0)
	}
}

async function  reload(A){
	if(stop){
		getpoem()
	}else{
		getUserpoem()
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

async function  A(Option){
	
	     poem.value = await todo.getone(Option.id).then(res=>{
					return res.data[0]
			}).catch(err=>{
	        	})
	if(User.UserData){
		start.value=await (User.UserData.collect.filter((el)=>{
		  	 return el.id===poem.value._id
		   }
		 ).length>0)
	}
}
async function  B(Option){
	UserPoem.value={}
	UserPoem.value = await todo.getUser(Option.id).then(res=>{
		console.log(res);
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
onLoad((Option)=>{
	console.log(Option);
	if (Option.id&&Option.bol==='true') {
	
	A(Option)
	getUserpoem()
	
	}else if (Option.id&&Option.bol==='false'){
	setTimeout(()=>{
		size.value=-PageSize.value
		stop=false
	},300)
	console.log("A");
       B(Option)
		getpoem()
		
	}else{
		
		getpoem()
		getUserpoem()
	} 
})

onMounted(()=>{
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
