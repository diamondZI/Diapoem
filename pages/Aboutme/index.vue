<template>
	<view class="content">
		<image class="logo" :src="userInfo.avatarUrl"></image>
		<view class="text-area">
			<text class="nickname">{{userInfo.nickName}}</text>
		</view>
		<button type="default" open-type="getUserInfo" @getuserinfo="wxLogin">微信登录</button>
	</view>
</template>

<script setup>
import { reactive } from "vue"
	
	  const userInfo=reactive({})
	    const	getCode=()=>{
				return new Promise((resolve, reject) => {
					uni.login({
						provider: "weixin",
						success: (e) => {
							resolve(e)
						},
						fail: (err) => {
							reject(new Error("获取code失败"))
						}
					})
				})
			}
		const getOpenID=(code)=>{
				return uniCloud.callFunction({
					name: "wxLogin",
					data: {
						code
					}
				})
			}
		const  getUserProfile=()=> {
				return new Promise((resolve, reject) => {
					uni.getProvider({
						desc: "获取你的昵称、头像、地区及性别",
						success: (e) => {
							resolve(e)
						},
						fail: (err) => {
							reject(new Error("getUserProfile失败"))
						}
					})
				})
			}
	   const   wxLogin=async ()=> {
				
				getCode().then(e => {
					return getOpenID(e.code)
				}).then(e => {
					console.log(e);
					const {
						openid,
						token,
						tokenExpired
					} = e.result;
					uni.setStorageSync('openid', openid)
					uni.setStorageSync('uni_id_token', token)
					uni.setStorageSync('uni_id_token_expired', tokenExpired)
					uni.showModal({
						title: "温馨提示",
						content: "亲，授权微信登录后才能正常使用小程序功能",
						success: (e) => {
							if (e.confirm) {
								getUserProfile().then(e => {
									console.log(e);
									userInfo=e.userInfo
								})
							}
						}
					})
				}).catch(err => console.log(err))

			}
		
	
</script>

<style scoped>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
		color: #00aa7f;
	}
</style>

