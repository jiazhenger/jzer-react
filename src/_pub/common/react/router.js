const Index = {
	/**
	 * 将参数格式化可识别参数
	 * @param {Object, Number, String }		param		# 跳转参数，对象时为可选参数，其它为必选参数
	 * @param {Boolean} 					must		# 是否是格式化必选参数
	 * @return {String} 	'?a=1&b=2' or '/0/1'
	 */
	format(param, must){
		if( !param ) return ''
		const { $fn, $http } = window
		if( $fn.isObject(param) ){
			if( must ){
				let url = ''
				for(let i in param){ url += '/' + param[i] }
				return url
			}else{
				return $http.serializeParam(param)
			}
		}else{
			return '/' + param
		}
	},
	/**
	 * 路由跳转
	 * @param {Object}						history		# history
	 * @param {path} 						api			# 路由
	 * @param {Object, Number, String }		param		# 跳转参数，对象时为可选参数，其它为必选参数
	 */
	push(history,path,param, must){ history.push(path + this.format(param, must)) },
	replace(history,path,param, must){ history.replace(path + this.format(param, must)) },
	/**
	 * 从当前路由跳转到子路由
	 * @param {Object}						history		# history
	 * @param {path} 						api			# 路由 '/path' or 'path'
	 * @param {Object, Number, String }		param		# 跳转参数，对象时为可选参数，其它为必选参数
	 */
	pushNext(history,path,param){
		path = path.includes('/') ? path : '/' + path
		path = this.getRoot(path) + path
		this.push( history, path, param )
	},
	getRoot(n){
		let url = window.location.hash
			url = url.replace('#','')
			url = url.replace(/\?.+/g,'')
		return url
	},
	/**
	 * 获取菜单
	 * @param {Boolean}	isLogin		# 否是登录处使用
	 * @param {String} 	api			# 菜单 api
	 * @param {Array}	data		# 本地菜单数据，一般用于无后台数据时调试
	 * @param {Array}	childRouter	# 子路由					
	 */
	async getDymaicMenu({ isLogin, api, data, childRouter }){
		const { $fn } = window
		let menu = $fn.session('menu')
		if( isLogin || !$fn.hasArray(menu)){
			if( $fn.hasArray( data )){ menu = data }
			if( api ){
				const token = $fn.getToken()
				if( token || isLogin){ menu = await window.$http.pull(null, api, { loading:true, pass:true }) }
				if( !token ){ $fn.go('/login') }
			}
			if( $fn.hasArray( menu )){
				this.getChildRouter(menu, childRouter)
				$fn.session('menu', menu)
			}else{
				menu = []
			}
		}
		return menu
	},
	// 将 child 塞到对应菜单节点
	getChildRouter( data, childRouter ){
		const { $fn } = window
		if( $fn.hasArray(data) ){
			data.forEach( v => {
				const { name, children } = v
				if( $fn.hasArray(children) ){
					this.getChildRouter(children, childRouter)
				}else{
					if($fn.hasObject(childRouter)){
						const child = childRouter[ name ]
						if( $fn.hasArray(child) ){
							v.child = child
						}
					}
				}
			} )
		}
	}
}

export default Index