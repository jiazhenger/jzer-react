/* ====================================== 本地存储  ====================================== */
const Index = ( Storage ) => {
	const isObject = d => {
		const str = {}.toString.call(d)
		return str === '[object Object]' || str === '[object Array]'
	} 
	return {
		// 存储值
		set(key,value){
			if(isObject(value)){
				value = JSON.stringify(value)
			}
			Storage.setItem(key,value);
		},
		// 获取值
		get(key){
			const value = Storage.getItem(key)
			if(value === null || value === undefined || value === ''){
				return false
			}else{
				try{
					return JSON.parse(value)
				}catch(e){
					return value
				}
			}
		},
		// 移出值
		remove(key){
			if(typeof key === 'string'){
				if(key.indexOf(',') > -1){
					const keys = key.split(',')
					keys.forEach( v => {
						Storage.removeItem(v)
					})
				}else{
					Storage.removeItem(key)
				}
			}
		},
		// 删除全部
		clear(){
			Storage.clear()
		}
	}
}
export default Index