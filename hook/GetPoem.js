export const Getpoem = async (value,id) => {
		const db = uniCloud.database()
		const res = await db.collection("user_poem").where({
			user_id: id
		}).get()
		value.value = res.result.data
}
export	const time = (datetime) => {
		const date = new Date(datetime);
		let Y = date.getFullYear() + '-';
		let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
		let D = date.getDate() + ' ';
		return Y + M + D
	}