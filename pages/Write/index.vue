<template>
    <view class="Write">
    	<textarea class="title" auto-height="true" auto-focus="true" type="text"  placeholder="标题"/>
    </view>
	<view class="long">
		1212
	</view>
</template>
<script setup>
</script>

<style scoped lang="scss">
	.Write{
		width: 100vw;
	min-height: 100vh;
	padding: 20px;
      background: url('https://ts1.cn.mm.bing.net/th/id/R-C.4330ad75689dbc4899c1226bc959c131?rik=aF%2by3%2fzeIUhGeg&riu=http%3a%2f%2fwww.kuaipng.com%2fUploads%2fpic%2fw%2f2018%2f10-18%2f49753%2fwater_49753_698_698_.png&ehk=P%2bXL0F4hPE96lopnCl9eAZfltzEeVbbdBW5CAcF0dsA%3d&risl=&pid=ImgRaw&r=0') repeat-y ;	
		.title{
           padding-bottom: 10px;
			border-bottom: 1px solid black;
			height: auto;
			font-size: 40px;
			color: $uni-bg-color-one;
		}
	}
	.long{
		position: fixed;
       bottom: 0px;
		background-color:rgb(0,0,0,0.2);
		filter:blur(30px);
		height: 40px;
		width: 100vw;
	}
</style>