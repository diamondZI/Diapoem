<template>
	<!-- <view> -->
	<!-- 提示窗示例 -->
	<uni-popup ref="alertDialog" type="dialog">
		<uni-popup-dialog :type="type" cancelText="关闭" confirmText="删除" title="提示" content="确定要删除吗?"
			@confirm="dialogConfirm" @close="dialogClose"></uni-popup-dialog>
	</uni-popup>
	<!-- </view> -->
	<!-- <uni-popup ref="message" type="message">
							<uni-popup-message :type="msg.msgType" :message="msg.messageText" :duration="2000"></uni-popup-message>
			</uni-popup> -->
	<view class="CollectBox">

		<view class="header">
			<text>
				{{title}}
			</text>
			<!-- .box_hover -->
			<view style="display: flex; gap: 20px; justify-content: center;">
				<view  v-if="title!=='他的创作'" @click="delect=!delect" :class="{'box':true,'box_hover':	delect}">
					<view class="header"></view>
					<view class="heng"></view>
					<view class="body">
						<view class="body_main">
							||
						</view>
					</view>
				</view>
				<view @click="sort=!sort" :class="{'Icon':true,'Iconsort':sort}">

				</view>
			</view>
		</view>
		<DataLoading v-if="!poem" />
		<!-- <view > -->
			<transition-group  name="list" tag="ul" class="collect"  v-else-if="poem">
				<li :class="{'collect_poem':true,'collect_poem_active':sort}" 
				 :style="{'transform': delect?'scale(.9)':'scale(1)'}"
				 v-for="(item,index) in poem"
					:key="item" @touchend="GoRead(index,poem)">
					{{item.title.substr(0,6)}}
					{{item.title.length>6?"……":""}}
					<view v-if="delect" class="delect" @click.stop="FUNK('info',index)">
						<view>
							<uni-icons class="ICONBOX" type='closeempty' size='25' color=" #dd524d"></uni-icons>
						</view>
					</view>
					<text class="author"> {{item.author}}</text>
				</li>
			</transition-group>

		<!-- </view> -->

	</view>
</template>

<script setup>
	import DataLoading from "@/components/Loding/Data_Loading.vue"
	import {
		ref
	} from "vue"
	const {
		poem,
		title,
		mode,
		fun
	} = defineProps(['poem', 'title', 'mode', 'fun'])
	const sort = ref(false)
	const type = ref()
	const ID = ref()
	const delect = ref(false)
	const alertDialog = ref()
	const FUNK = (type1, index) => {
		type.value = type1
		ID.value = index
		alertDialog.value.open()
	}
	const dialogConfirm =  () => {
		fun(ID.value)
	}
	const GoRead = (id, poem) => {
		if (!delect.value) {
			if (mode === "true") {
				uni.navigateTo({
					url: `/pages/Readpoem/index?data=${JSON.stringify(poem)}&key=${JSON.stringify(id)}&User=${true}`
				})
			} else if (mode === "false") {
				uni.navigateTo({
					url: `/pages/Readpoem/index?data=${JSON.stringify(poem)}&key=${JSON.stringify(id)}&User=${poem[id].isanuthor}`
				})
			} else {
				uni.navigateTo({
					url: `/pages/Write/index?value=${JSON.stringify(id)}&list=${
						JSON.stringify(poem)
					}`
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.Iconsort {
		transform: rotateX(320deg);
		border: 2px solid black;
		border-left: none !important;
		border-right: none !important;

	}

	.box {
		width: 10px;
		height: 20px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		transition: all .6s linear;

		.header {
			width: 7px;
			height: 5px;
			border: 1px solid black;
			border-bottom: 0px;
			transition: all .3s ease-in-out;
		}

		.body {
			width: 12px;
			height: 15px;
			border: 1px solid black;
			border-top: 0px;
		}

		.body_main {
			display: flex;
			font-size: 8px;
			font-weight: bold;
			justify-content: center;
			align-items: center;
		}

		.heng {
			width: 18px;
			height: 1px;
			background: #000;
		}
	}

	.box_hover {
		transform: rotate(270deg);

		.body {
			width: 20px;
			height: 20px;
			border-top: 1px solid black;

			.body_main {
				display: none;
			}
		}

		.heng {
			display: none;
		}

		.header {
			background-color: red;
			width: 7px;
			height: 7px;
			border-radius: 50%;
			transform: translateY(150%);
			border-bottom: 1px solid black;
		}
	}

	.CollectBox {
		padding: 20px;

		.header {
			display: flex;
			align-items: center;
			justify-content: space-between;

			text {
				font-size: 50rpx;
			}

			.Icon {
				width: 40rpx;
				height: 40rpx;
				border: 1px solid black;
				transition: .6s linear all;
			}


		}
		.collect {
			display: flex;
			// transition: .6s all ease-in-out;
			justify-content: space-around;
			flex-wrap: wrap;
			.collect_poem {
				margin: 10px;
				text-align: center;
				gap: 40rpx;
				width: 20vw;
				display: flex;
				border-radius: 10rpx;
				flex-direction: row;
				align-items: center;
				height: 25vw;
				padding: 15px;
				transition: .3s all linear;
				color: $uni-bg-color-grey;
				background-color: $uni-bg-color-one;
				position: relative;
				border: 1px black solid;

				.delect {
					top: -30rpx;
					right: -30rpx;

					position: absolute;
					border-radius: 50%;

				}

				.author {
					text-shadow: 0 0 2px black;
					flex: 1;
					text-orientation: sideways;
					color: rgb(255, 215, 100);
				}
			}

			.collect_poem:hover {
				border-radius: 40rpx;
				box-shadow: 0 0 10rpx 0 black;

			}

			.collect_poem_active {
				width: 100vw;
				height: 10px;
				font-size: 24px;
				border: none;
				color: black;
				background-color: rgb(100, 100, 100, 0);
				border-bottom: 2px solid $uni-bg-color-one;
			}

		}
	}
	      .list-enter-active,
	      .list-leave-active {
	        transition: all 0.5s ease;
	      }
	      .list-enter-from,
	      .list-leave-to {
	        opacity: 0;
	        transform: translateX(30px);
	      }
	
</style>