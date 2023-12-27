const jwt = require("jsonwebtoken"); //webjsontoken
//生成token
const appSecret='4f3208b2ec5e4cf99515b57e88bd68c6'
function getToken(openid) {
	// sign(加密数据，加密辅助，过期时间(单位/s))
	return jwt.sign({
		openid:openid
	}, appSecret, {
		expiresIn: 60 * 60 * 24 * 30
	});
}
//解密token
function verifyToken(token) {
	return jwt.verify(token, appSecret, (err, decode) => {
		return decode
	})
}
function Timesetup(token){
	const currentTimestamp = Math.floor(Date.now() / 1000);
	const decode=verifyToken(token)
	console.log({"A":decode,"B":currentTimestamp});
	if(decode&&decode.exp){
		if (currentTimestamp > decode.exp) {
				console.log("不存在");
			return false
		  } else {
		    console.log("存在");
			return true
		}
	}else{
		console.log("不存在");
		return false
	}
	
}

module.exports = {
	getToken,
	verifyToken,
	Timesetup
}

