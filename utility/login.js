const wxLogin=()=>{
		uni.login({
			provider:'weixin',
				success: (res)=>{
					code=res.code
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
								data:token
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
const wxRegistered=()=>{
	const UserData={
    "user_name": "未知名",
    "collect": [
        {
            "id": "653096f699c6248d808d9c53",
            "title": "红花草",
            "author": "阿裴",
            "date": "2022-12-22"
        }
    ],
    "phone": "15735631971",
    "password": "123456",
    "integral": 0,
    "create": [],
    "theme": {
        "dark": true,
        "color": 0,
        "size": "16px"
    },
    "PoemNumber": 1,
    "avatar": "",
    "region": "中国",
    "self-introduction": "自东向西!",
    "slogan": "你好,世界!",
     }
	 uni.login({
	 		provider:'weixin',
	 			success: (res)=>{
	 				code=res.code
	 	       uniCloud.callFunction({
	 	       	name:"wxLogin",
	 	       		data:{
	 	       			UserData:UserData,
	 	       		},
	 	       		success: (res) => {
	 	       			uni.showLoading({
	 	       				title:"注册成功"
	 	       			})
	 	       			return {"msg":"注册成功"}
	 	       		}
	 	          })
	 			}, 
	 			fail:(err)=>{
	 				console.log(err);
	 			}
	 	})
	 } 
	 
}