'use strict';
// 云对象教程: https://uniapp.dcloud.net.cn/uniCloud/cloud-obj
// jsdoc语法提示教程：https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/129
module.exports = {
	_before: function () { // 通用预处理器

	},
	get() {
		const db=uniCloud.database()
		let res =db.collection('poem').aggregate().sample({
			size:1
		}).end()
		
	return res
	}
}
