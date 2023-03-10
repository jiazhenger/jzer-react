/* ======================================  路由跳转  ====================================== */
const Index = {
	// 记录跳转
	recordSkip(flag){
		window.$fn.session('m-skip',encodeURIComponent(window.location.hash))
	},
	getSkipRecord(){
		const url = window.$fn.session('m-skip')
		let to = decodeURIComponent(url).replace('#','')
		if(to === '/login'){ to = '/' }
		setTimeout(() => window.$fn.sessionRemove('m-skip'), 200)
		return window.$fn.session('m-skip') ? to : null
	},
	// 刷新跳转
	go(path){
		const route = path || '/login'
		const { port, protocol, hostname, pathname  } = window.location
		const ports = port === 80 ? '' : ':' + port
		window.location.replace(protocol + '//' + hostname + ports + pathname + '#' + route)
		// window.location.replace(protocol + '//' + hostname + ports + route)
		// window.history.replaceState(protocol + '//' + hostname + ports + route)
	},
	// 返回
	back(){ window.history.back() }
}

export default Index