// stores/counter.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const  useDarftStore=defineStore('DRAFT',()=>{
	const Darft=ref(JSON.parse(uni.getStorageSync('Darft')).key??[])
	const PUSHDARFT= (data)=>{
		Darft.value.push(data)
		uni.setStorageSync('Darft',JSON.stringify({
			"key":Darft.value
		}))
		
	}	
	return {PUSHDARFT,Darft}
})