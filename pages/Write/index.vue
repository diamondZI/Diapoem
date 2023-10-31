<template>
    <view class="Write">
    	<textarea class="title" auto-height="true" auto-focus="true" type="text"  placeholder="标题">
		<keyboard-accessory class="container" style="height: 50px;">
		    <cover-view bindtap="tap" style="flex: 1" class="coverView">
				 <view class="box">
				 	AI改写
				 </view>
				 <view class="box">
				 	AI接句
				 </view>
				 <view class="box">
				 	另起
				 </view>
			</cover-view>
		  </keyboard-accessory>	
			
		</textarea>
		<textarea placeholder="内容" style="font-size: 20px; margin-top: 10px;">
			
		</textarea>
    </view>
	<view class="long">
		  <view class="box">
		  	   发表 
		  </view><view class="box">
		  	   废弃
		  </view><view class="box">
		  	   <!-- 哦!看来你有一个很好的idea -->
			   放入草稿 
		  </view>
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
		.coverView{
			display: flex;
           padding: 20px;
		   justify-content: space-around;
			background-color:rgb(0,0,0,0.2);
		}
		
	}
	.long{
		position: fixed;
       bottom: 0px;
		background-color:rgb(0,0,0,0.2);
		display: flex; 
		font-size: 20px;
		justify-content: space-around;
       align-items: center;
		height: 40px;
		width: 100vw;
	}
</style>