// stores/counter.js
import {
	defineStore
} from 'pinia'
import {
	reactive,
	ref
} from 'vue'
export const useUserstore = defineStore('User', () => {
const UserData = ref()
const token = ref(null)
const GetUser = async () => {
	token.value = await Gettoken()
	if (token.value) {
		await wxLogin(token.value)
	} else {
		console.log("2");
		await wxRegistered({
			user_name: '未知名',
			collect: [],
			integral: 1,
			create: [],
			theme: {
				dark: true,
				color: 0,
				size: '16px'
			},
			PoemNumber: 1,
			avatar: '',
			region: '中国',
			self_introduction: '自东向西',
			slogan: '你好,世界!',
		})

	}
}
const wxLogin = (token) => {
	uni.login({
		provider: 'weixin',
		success: (res) => {
			uniCloud.callFunction({
				name: 'wxLogin',
				data: {
					code: res.code,
					token: token,
				},
				success: (res) => {
					console.log(res);
					UserData.value = res.result.Userdata.data[0]
				}
			})
		},
		fail: (err) => {
			console.log(err);
		}
	})
}
const wxRegistered = (Data) => {
	console.log('注册');
	uni.login({
		provider: 'weixin',
		success: (res) => {
			uniCloud.callFunction({
				name: "wxRegistered",
				data: {
					code: res.code,
					UserData: Data,
				},
				success: (res) => {
					const {
						ok,
						token,
						msg
					} = res.result
					if (ok === 200) {
						console.log("1",res.result.Userdata.data[0]);
						UserData.value = res.result.Userdata.data[0]
						uni.setStorage({
							data: token,
							key: 'token'
						})
					} else {
						console.log('失败', ok, msg);
					}
				}
			})
		}
	})

}
const Gettoken = async () => {
	try{
		let res = await uni.getStorage({
			key: 'token'
		})
		return res.data
	}catch(e){
         return false
	}
}
return {
	UserData,
	GetUser
}
})