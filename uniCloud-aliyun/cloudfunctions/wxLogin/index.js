'use strict';
const {getToken,verifyToken,Timesetup}=require("wx-common")
exports.main = async (event, context) => {
	const {code,token,Userdata}=event;
	const wxid={
		appid:'wx9d7e495d6b07dc6c',
		secret:'4f3208b2ec5e4cf99515b57e88bd68c6'
	}
		const {session_key,openid}=res.data
   const res= await uniCloud.httpclient.request(
			`https://api.weixin.qq.com/sns/jscode2session?appid=${wxid.appid}&secret=${wxid.secret}&js_code=${code}&grant_type=authorization_code`,
			{
				dataType:'json',
			}
           
    )
	if(token&&Timesetup(token)){
		const db=uniCloud.database()
		let res = await db.collection("users").where({
				openid:openid
		}).get()
		return {token,res}
	}else{
	
		let tokensession=getToken(openid)
		let res = await db.collection("users").where({
				token:tokensession
		}).get()
		
		if (res) {
			
		} else{
			
		}
	   try{
	   	db.collection("users").add({...Userdata,"token":token}).then()
		return {tokensession,msg:"注册成功"}
	   }catch(e){
		   	return {msg:"请完善数据"}

	   }

	}
};
