'use strict';
const {getToken,verifyToken,Timesetup}=require("wx-common")
exports.main = async (event, context) => {
	const {code,token,Userdata}=event;
	const wxid={
		appid:'wx9d7e495d6b07dc6c',
		secret:'4f3208b2ec5e4cf99515b57e88bd68c6'
	}
	
	if(token&&Timesetup(token)){
		console.log({"a":verifyToken(token)});
		const {openid}=verifyToken(token)
		const db=uniCloud.database()
		let res = await db.collection("users").field({
			openid:false
		}).where({
				openid:openid
		}).updateAndReturn({
			  LoginTime:new Date().getTime()
		  })
		console.log(openid);
		return {ok:200,token:token,Userdata:res}
	}
	else{
   const res = await uniCloud.httpclient.request(
			`https://api.weixin.qq.com/sns/jscode2session?appid=${wxid.appid}&secret=${wxid.secret}&js_code=${code}&grant_type=authorization_code`,
			{
				dataType:'json',
			}
    )
	const {session_key,openid}=res.data
	console.log("执行这一步",res);
	   try{
		   const db=uniCloud.database()
         const tokensession=getToken(openid)		   
	      let resdata = await db.collection("users").field({
			  openid:false
		  }).where({
	 		openid:openid
	      }).updateAndReturn({
			  LoginTime:new Date().getTime()
		  })
		  // Dayjs.$y+"-"+Dayjs.$M+1+'-'+Dayjs.$D+"_"+Dayjs.$H+":"+Dayjs.$m
		
		 return {ok:200,token:tokensession,Userdata:resdata}
	   }catch(e){
		   	return {ok:404}
	   }

	}
};
