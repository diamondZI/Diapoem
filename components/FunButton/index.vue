<template>
	<view class="FUNBUTTON">
	    <view class="A">1</view>
	    <view class="B">2</view>
	    <view class="C">3</view>
	</view>
</template>

<script setup>
	// import { } from "vant"

</script>

<style scoped lang="less">
	.FUNBUTTON{
		position: fixed;
		display: inline-block;
	    bottom: 100px;
		right: 10px;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		transition: .3s all linear;
		box-shadow: 0 0 3px 0 black;
	}
	.FUNBUTTON:hover{
		box-shadow: 0 0 1px 0 black;;
		.A{
			transform: translateY(-150%);
			opacity: 1;
		};
		.B{
			transform: translateY(-300%);
			opacity: 1;
		}
		.C{
			transform: translateY(-450%);
			opacity: 1;
		}
	}
	.B{
		
		position: absolute;
				width: 40px;
				height: 40px;
				border-radius: 50%;
				background-color: aqua;
		 opacity: 0;
			transition: .7s all linear;
	}
	.C{
		
		position: absolute;
				width: 40px;
				height: 40px;
				border-radius: 50%;
				background-color: aqua;
		 opacity: 0;
			transition: .7s all linear;
	}
    .A{
		position: absolute;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background-color: aqua;
	    /* display: none; */
	     opacity: 0;
	 	transition: .7s all linear;
	 
	}	
    
</style>