// stores/counter.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const  useThemeterStor=defineStore('Theme',()=>{
	const theme=ref({
		  "--backroundcolor":'rgb(255,250,240)',
		  "--size":'24px',
		  "--letter_spacing":'10px',
		  "--line_height":"26px",
	})
	    const   onChangeBackroundcolor=(value)=>{
	
		   theme.value['--backroundcolor']=value
	   }
	   const   onChangesize=(value)=>{
		   console.log(value);
		   theme.value['--size']=value+'px'
	   }
	   const   onChangeletter=(value)=>{
		   console.log(value);
		   theme.value['--letter_spacing']=value+'px'
	   }
	   const   onChangeheight=(value)=>{
		   console.log(value);
		   theme.value['--line_height']=value+'px'
	   }
	return {theme,onChangeBackroundcolor,onChangesize,onChangeheight,onChangeletter}
})