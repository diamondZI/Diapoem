// stores/counter.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterStore = defineStore('counter', {
  state: () => ({ 
	  theme:{
		  backroundcolor:'rgb(255,250,240)',
		  letter_spacing:'',
		  line_height:"",
		  color:''
	  }
  }),
  getters: {
    
  },
  actions: {
       onChangeBackroundcolor(value){
		   this.theme.backroundcolor=value
	   },
		onChangeletter_spacing(value){
		   this.theme.letter_spacing=value
	   }, 
	   onChangeline_height(value){
		   this.theme.line_height=value
	   },
	   onChangecolor(value){
		   this.theme.color=value
	   },
  },
})
export const  useThemeterStor=defineStore('Theme',()=>{
	const theme=ref({
		  backroundcolor:'rgb(255,250,240)',
		  letter_spacing:'24px'
	})
	const   onChangeBackroundcolor=(value)=>{
		   theme.value.backroundcolor=value
	   }
	return {theme,onChangeBackroundcolor}
})