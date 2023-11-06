
<script  >
	import { useUserstore } from "@/store/user.js"
	import {onLoad} from "@dcloudio/uni-app"
	
	export default {
		methods:{
		 
		   p(){
			const A=useUserstore()
		  	 A.GetUser()
		        if(!uni.getStorageSync('Darft')){
		  		  uni.setStorageSync('Darft',JSON.stringify({
		  		  	"key":[]
		  		  }))
		  	    }
		  }	
		},
		onLaunch: function() {
			try{
				this.p()
			}catch(e){
			 console.log("失败");
			}
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
 


</script>

<style lang="scss">

@font-face {
    font-family: "得意黑 斜体";
    src: url('https://mp-e233ef62-9c0e-4622-a1aa-7115f4048c07.cdn.bspapp.com/SMILEYSANS-OBLIQUE-2.TTF');
    font-weight: normal;
    font-style: normal;
}

@keyframes after {
  	 0%{
		      width: 0%;
	 }
	 100%{
		      width: 100%;
	 }
  }
  
	page{
		margin: 0;		
		padding: 0 ;
		box-sizing:content-box;
		font-family: "得意黑 斜体";
		 
	}
	/*每个页面公共css */
</style>
