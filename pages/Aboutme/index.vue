<template>
	<view class="Aboutme">
		<view class="content">
		  <text >那位愁容满面、皮肤枯槁的绅士</text>
		  <text>一心只想干一番英雄事业，</text>
		  <text>永远准备在第二天外出冒险，</text>
		  <text>但人们猜测他从未离开过书房。</text>
		  <text>详细记载他的奋斗经过</text>
		  <text>和他悲喜剧似的荒唐行为的历史</text>
		  <text>不是塞万提斯，而是他的想象，</text>
		  <text>无非是一部梦想的历史。</text>
		  <text>我的命运也是如此。</text>
		  <text>我曾读过那位绅士的故事，</text>
		  <text>在旧时的那间书房里，</text>
		  <text>我知道我埋葬了某些不朽的东西。</text>
		  <text>一个孩子慢慢翻阅的那些书页，</text>
		  <text>梦想着他所不知道的模糊的事物。</text>
		</view>
		<view class="thank">
				如果您喜欢这个程序或者希望我们变得更好 可以选择对我们进行任意金额的赞助,感谢您的支持
			<image  src="../../static/shou.jpg" mode="aspectFill"
			 style="width: 210px; height: 300px;"></image>
			  长按复制我们拉您进入讨论群:<text user-select class="font" style="font-weight: bold; font-size: 28px;" >wx2580456922</text>您有任何建议都可以联系我们
		</view>
	</view>
	
</template>
<script setup>
	
	
</script>
<style lang="scss" scoped>
	.Aboutme{
		padding: 10px;
		.thank{
			margin: 10px;
			border: 1px solid black;
			display: flex;
			text-align: center;
			align-items: center;
			flex-direction: column;
			justify-content: center;
		}
	}
	.content{
		width: 100vw;
		height: 100vh;
		align-items: center;
		display: flex;
		justify-content: space-around;
		font-size: 17px;
		flex-direction: column;
	}
	@media (prefers-color-scheme:dark) {
		.Aboutme{
			color: #bababa;
			min-height: 100vh;
			background-color: #282c34;
		}
	
	 
	}
</style>

