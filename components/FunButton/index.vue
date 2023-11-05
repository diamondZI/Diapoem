<template>
	<view :class="{'Box':true,'Boxopen':open}">
		<view class="FUNBUTTON" ref="FunButton" @click="aclick()">
		</view>
		<view  @click="Reload()" :class="{'ICONBOX':true,'ICONBOX_Active':open}">
			<uni-icons  type="reload" size="30"></uni-icons>
		</view>
		<view   @click="Collect()" :class="{'ICONBOX':true,'ICONBOX_Active':open}">

			<uni-icons  type="star" size="30" v-if="!props.start"></uni-icons>
			<uni-icons  type="star-filled" size="30" v-else></uni-icons>
		</view>
		
		<button  open-type="share" style="background-color: rgb(0, 0, 0,.0);"  :class="{'ICONBOX':true,'ICONBOX_Active':open}">
				<uni-icons   type="redo" size="30"></uni-icons>
		</button>
	</view>
</template>

<script setup>
import { onMounted,reactive,ref ,provide} from "vue";
import { onShareAppMessage} from "@dcloudio/uni-app"
const open=ref(false)
const aclick=()=>{
    open.value=!open.value
}
const props=defineProps(['reload','collect','start','remove'])
const Reload=()=>{
	props.reload()
}
const Collect=()=>{
	if(!props.start){
		props.collect()
	}else{
      props.remove()
	}
}

onShareAppMessage((res)=>{
	    if (res.from === 'button') {// 来自页面内分享按钮
	      console.log(res.target)
	    }
	    return {
	      title: '在这里分享你的诗',
	      path: '/pages/index/index?id=123'
	    }
	
})

</script>

<style scoped lang="less">
	.Box{
		position: fixed;
		bottom: 100px;
		overflow: hidden;
		right: 10px;
		width: 40px;
		height: 40px;
		border-radius: 20px;
		display: flex;
		box-shadow: 0 0 5px 0 black;
		transition: .2s all linear;
		flex-direction: column;
       row-gap: 30px;
	}
	.Boxopen{
		width: 40px;
		height: 260px;
		border-radius: 20px;
	}
	.ICONBOX{
	    margin-top: 10px;
		display: none;
		width: 40px;
		height: 40px;
		border-radius: 20px;
		position: relative;
		transition: .6s all linear;
		box-shadow: 0 0 2px 0 black;
	}
	.ICONBOX:hover{
		box-shadow:inset 0 0 5px 0 black;
	}
	.ICONBOX_Active{
		justify-content: center;
        align-items: center;
		display: flex;
	}
	.FUNBUTTON{
		bottom: 0px;
		width: 40px;
		height: 40px;
		border-radius: 20px;
		position: absolute;
		transition: .2s all linear;
		box-shadow: 0 0 5px 0 black;
	}
    .FUNBUTTON:hover{
		background-color: rgb(100, 100,100);
		Box-shadow: 0 0 3px 0 black;
	}
    
</style>