// stores/counter.js
import {
	defineStore
} from 'pinia'
import {
	reactive,
	ref
} from 'vue'
import dayjs from "dayjs"
 export const useUserstore = defineStore('User', () => {
const UserData = ref()
const Dayjs=new dayjs()
const token = ref(null)
const GetUser = async () => {
	token.value = await Gettoken()
	if (token.value) {
		await wxLogin(token.value)
	} else {
		await wxRegistered({
			user_name: '未知名',
			collect: [],
			integral: 1,
			theme: {
				dark: true,
				color: 0,
				size: '16px'
			},
			RegisteredTime:new Date().getTime(),
			PoemNumber: 0,
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
					UserData.value = res.result.Userdata.doc
				},
			})
		},
		fail: (err) => {
		
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
						
					}
				}
			})
		}
	})

}
const SetAvatarUrl= async (avatar)=>{
	 const result = await uniCloud.uploadFile({
	        filePath: avatar,
	        cloudPath: 'a.jpg',
			
	        onUploadProgress: function(progressEvent) {
	          var percentCompleted = Math.round(
	            (progressEvent.loaded * 100) / progressEvent.total
	          );
			  console.log(percentCompleted);
	        }
	      });
	   UserData.value.avatar=result.fileID
}
const SetText= (key,value)=>{
	UserData.value[`${key}`]=value
}
const SetUser=async ()=>{
	const {avatar,user_name,slogan,self_introduction} =UserData.value
	 const db=await uniCloud.database()
	await  db.collection('users').doc(UserData.value._id).update({
		avatar,
		user_name,
		slogan,self_introduction
	})
}
const useSetCollect=async ()=>{
	 const {collect}=UserData.value
	const db=await uniCloud.database()
	await  db.collection('users').doc(UserData.value._id).update({
		collect
	})
}
const SetCollect= (id)=>{
   UserData.value.collect.push(id)
   try{
   	   useSetCollect()
   }catch(e){
          console.log(e,"添加失败");
   }
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
const removeCollect=(id)=>{
    UserData.value.collect.splice(id,1)
	try{
		   useSetCollect()
           return {msg:"删除成功"}
	}catch(e){
	       return {msg:"删除失败"}
	     
	}
}
const SetPoemNumber=async (item)=>{
	const {PoemNumber}=UserData.value
    let Num= PoemNumber+1
	const db=await uniCloud.database()
	await  db.collection('users').doc(UserData.value._id).update({
		PoemNumber:Num
	})
}
return {
	UserData,
	GetUser,
	SetAvatarUrl,
	SetUser,
	SetText,
	SetCollect,
	removeCollect,
    SetPoemNumber
	}
})