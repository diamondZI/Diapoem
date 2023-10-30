'use strict';
const {getToken,verifyToken,Timesetup}=require("wx-common")
exports.main = async (event, context) => {
	const {code,UserData}=event;
	const wxid={
		appid:'wx9d7e495d6b07dc6c',
		secret:'4f3208b2ec5e4cf99515b57e88bd68c6'
	}
   const res = await uniCloud.httpclient.request(
			`https://api.weixin.qq.com/sns/jscode2session?appid=${wxid.appid}&secret=${wxid.secret}&js_code=${code}&grant_type=authorization_code`,
			{
				dataType:'json',
			} 
    )
	   const {session_key,openid}=res.data
	   const tokensession=getToken(openid)
	   const db=uniCloud.database()
	   let data = await db.collection("users").where({
	   			 		openid:openid
	   }).get()
	   try{
		 if (data.data.length) {
		 	return {ok:200,token:tokensession,Userdata:data,msg:"返回数据"}
		 }
		  else{
		 	 await db.collection("users").add({...UserData,"openid":openid})
			let User = await db.collection("users").where({
						 		openid:openid
			}).get()
			console.log("击");
		 	return {ok:200,token:tokensession,Userdata:User,msg:"注册成功"}
		 }
	     }  catch(e){
		   	return {ok:400,msg:"请完善数据"}
	     }
};
