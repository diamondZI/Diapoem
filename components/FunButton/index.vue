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
		<view  @click="theme()"  :class="{'ICONBOX':true,'ICONBOX_Active':open}">
			<uni-icons   type="color-filled" size="30"></uni-icons>
		</view>
	</view>
</template>

<script setup>
import { onMounted,reactive,ref ,provide} from "vue";
const open=ref(false)
const aclick=()=>{
    open.value=!open.value
}
const props=defineProps(['reload','collect','start'])
const Reload=()=>{
	props.reload()
}
const Collect=()=>{
	if(!props.start){
		props.collect()
	}else{
        
	}
}
const theme=()=>{
	uni.navigateTo({
		url:'/pages/theme/index'
	})
}
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
	.ICONBOX:active{
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
    .FUNBUTTON:active{
		background-color: rgb(100, 100,100);
		Box-shadow: 0 0 3px 0 black;
	}
    
</style>