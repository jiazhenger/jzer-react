/* ====================================== 获取参数  ====================================== */
const Index = {
	// 获取 url 参数
	query(id){
		const hash = window.location.search || window.location.hash
		let stack = {}
		if(hash.indexOf('?') !== -1){
			let search = hash.split('?')
			search = search[1].split('&')
			search.forEach(function(v,i){
				const s = v.split('=')
				if(s[1]!=='undefined' && s[1]!=='null' && s[1]!==''){
					stack[s[0]] = s[1]
				}
			})
		}
		if(id){ 
			if(typeof id === 'function'){
				if(Object.keys(stack).length > 0) id(stack)
			}else{
				return stack[id] 
			}
		}
		return stack
	},
	// 获取地址栏与本地缓存的 token
	getToken(obj){
		// const token = this.query('token');
		const { token } = this.getUser();
		return token
	},
	// 将无效数据转为 ''
	getEmptyParam(param){
		for(let i in param){
			const value = param[i]
			param[i] = this.isNotEmpty(value) ? value : null
		}
		return param
	},
	// 获取有效参数
	getValidParam(param){
		let stack = { }
		for(let i in param){
			const value = param[i]
			if(this.isNotEmpty(value)){
				stack[i] = value
			}
		}
		return stack
	}
}

export default Index