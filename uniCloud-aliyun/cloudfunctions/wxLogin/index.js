'use strict';
const {getToken,verifyToken,Timesetup}=require("wx-common")
exports.main = async (event, context) => {
	const {code,token,Userdata}=event;
	const wxid={
		appid:'wx9d7e495d6b07dc6c',
		secret:'4f3208b2ec5e4cf99515b57e88bd68c6'
	}
	if(token&&Timesetup(token)){
		const {openid}=verifyToken(token)
		const db=uniCloud.database()
		let res = await db.collection("users").field({
			openid:false
		}).where({
				openid:openid
		}).get()
		console.log(openid);
		return {ok:200,token:token,Userdata:res}
	}
	else{
   const res = await uniCloud.httpclient.request(
			`https://api.weixin.qq.com/sns/jscode2session?appid=${wxid.appid}&secret=${wxid.secret}&js_   code=${code}&grant_type=authorization_code`,
			{
				dataType:'json',
			}
    )
	const {session_key,openid}=res.data
	   try{
         const tokensession=getToken(openid)		   
	      let res = await db.collection("users").field({
			  openid:false
		  }).where({
	 		openid:openid
	      }).get()
		 return {ok:200,token:tokensession,Userdata:res}
	   }catch(e){
		   	return {ok:404}
	   }

	}
};
