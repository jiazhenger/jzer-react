/* ======================================  其它方法  ====================================== */
const Index = {
	// 设置浏览器 title
	setTitle(text){ window.document.title = text },
	// 深拷贝
	copy(data){ return this.hasObject(data) ? JSON.parse(JSON.stringify(data)) : data },
	//
	deepCopy(obj){
		const deep = function(obj){
			let clone = Array.isArray(obj) ? [] : {}
			if (obj && typeof obj === 'object') {
				for (let i in obj) {
					if (obj.hasOwnProperty(i)) {
						if (obj[i] && typeof obj[i] === 'object') {
							clone[i] = deep(obj[i])
						} else {
							clone[i] = obj[i]
						}
					}
				}
			}
			return clone
		}
		return deep(obj)
	},
	// 惰性加载文件
	async lazy(file){ return file().then( f => f.default ) },
	// 返回值
	getValue(v){ return this.isFunction(v) ? v(v) : v },
	// 发布订阅
	proxy:{
		// 监听/订阅刷新
		on(back, name='back'){
			window.proxy[name] = back?.()
		},
		// 发布
		publish: name => window.proxy[name](),
		// 移除
		remove: (name='back') =>{
			if(window.proxy){
				window.proxy[name] = null
			}
		}
	},
	// 全局监听开关变量
	onHideShow(className, show, callback){
		document.addEventListener('mousedown', e=>{
			if(this.isString(e.target.className) && e.target.className.includes(className)){
				show = !show
			}else{
				show = false
			}
			callback?.(show)
		})
	},
	// 判断不为 false 或 0
	isNoFalse: value => value !== false || value !== 0,
	// 将字符串转为数据
	strToNum(value){ return this.isString(value) ? (isNaN(value*1) ? value : value * 1) : value}
}

export default Index