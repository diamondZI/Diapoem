// stores/counter.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const  useThemeterStor=defineStore('Theme',()=>{
	const theme=ref({
		  "--backroundcolor":'rgb(255,250,240)',
		  "--size":'24px',
		  "--letter_spacing":'0px',
		  "--line_height":"32px",
	})
	    const   onChangeBackroundcolor=(value)=>{
		   theme.value['--backroundcolor']=value
	   }
	   const   onChangesize=(value)=>{
		   theme.value['--size']=value+'px'
	   }
	   const   onChangeletter=(value)=>{
		   theme.value['--letter_spacing']=value+'px'
	   }
	   const   onChangeheight=(value)=>{
		   theme.value['--line_height']=value+'px'
	   }
	   const onChangtheme=(id)=>{
		    uni.setStorage({
		    	data:theme.value,
				key:"Theme"
		    })
	   }
	   const  GetTheme= ()=>{
		   const a=uni.getStorageSync('Theme')
		     if (a) {
		     	  theme.value=a
		     } 
	   }
	return {theme,onChangeBackroundcolor,onChangesize,onChangeheight,onChangeletter,onChangtheme,GetTheme}
})