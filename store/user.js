// stores/counter.js
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import {wxLogin,wxRegistered}  from "@/utility/login.js"
export const  useUserstore=defineStore('User',()=>{
	const UserData=ref({
	user_name: '未知名',
	collect: [
	    // {
	    //     id: '653096f699c6248d808d9c53',
	    //     title: '红花草',
	    //     author: '阿裴',
	    //     date: '2022-12-22'
	    // }
	],
	integral: 1,
	create: [],
	theme: {
	    dark: true,
	    color: 0,
	    size: '16px'
	},
	PoemNumber: 1,
	avatar:'' ,
	region: '中国',
	self_introduction: '自东向西',
	slogan: '你好,世界!',
	 })
	 const token=ref(null)
	const GetUser=async ()=>{
		token.value=false
		if(token.value){
		 let res = await wxLogin(token.value)
		 console.log(res);
		}else{
		let res=await wxRegistered(UserData.value)
		   console.log(res);
		}
	}
	// const 
	const Gettoken=async ()=>{
		let res= await uni.getStorage({
			key:'token'
		})
		console.log(res);
		return res
	}
	return {GetUser}
})