const wxLogin=(token)=>{
		uni.login({
			provider:'weixin',
				success: (res)=>{
		        uniCloud.callFunction({
		        	name:'wxLogin',
						data:{
							code:res.code,
							token:token,
						     },
						success:(res)=>{
							const {token,data}=res
							uni.setStorage({
								key:"token",
								data:res.token
							})
							return  data
						}
		        })
				}, 
				fail:(err)=>{
					console.log(err);
				}
		})
	} 
const wxRegistered=async (UserData)=>{
	
      await uni.login({
	 		provider:'weixin',
	 		success: (res)=>{
	 	     let a=    uniCloud.callFunction({
	 	       	name:"wxRegistered",
	 	       		data:{
						code:res.code,
	 	       			UserData:UserData,
	 	       		},
	 	       		success: (res1) => {
						return res1
	 	       		},
					
	 	          })
				  console.log(a);
	 		}
	 	})
} 
	 

export {
	wxLogin,
	wxRegistered,
}