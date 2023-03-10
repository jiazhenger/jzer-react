/* -------------------------------------------------------- Declare -- */
const { $fn } = window
/**
 * 获取目录第一个可跳转的路径
 * @param {Array} data	# 菜单数据
 * @return {String}
 */
export const getRedirect = data => {
	if( $fn.hasArray( data ) ){
		let { children, path } = data[0]
		if( $fn.hasArray(children) ){ return getRedirect( children ) }
		return path
	}
}
/**
 * 获取根路径 /main
 * @return {String}
 */
export const getRootPath = () => {
	let hash = window.location.hash
	hash = hash.replace('/','')
	hash = hash.replace(/\?[\S]*/g,'')
	hash = hash.split('/')
	hash = hash[0].replace('#','/')
	return hash === '/' ? '/main' : hash
}
/**
 * 判断当前路径是否存在检测路径
 * @param {String} current	# 当前路由
 * @param {String} path  	# 对比路由
 * @return {Boolean} 		# 存在返回 true, 反之 false
 */
export const hasPath = (current, path) => (new RegExp(`^${path}/.*`) ).test( current + '/' )
/**
 * 判断是否存在 http
 * @param {String} value	# 判断内容
 * @return {Boolean} 		# 存在返回 true, 反之 false
 */
export const existHttp = value => /(http|https):\/\/\S*/.test( value )
/**
 * 判断字符串是否以 /main 头
 * @param {String} value	# 判断内容
 * @return {Boolean} 		# 存在返回 true, 反之 false
 */
export const existMain = value => /\/main\.*/.test( value )
/**
 * 获取子级菜单
 * @param {Array} 	data		# 菜单数据
 * @param {String} 	rootPath	# 根路由，如: /main
 * @return {Array} 				# 新的菜单数据
 */
export const getChildren = ( data, rootPath ) => {
	// 如果 /main 不存在时，为多目录结构
	if(!existMain(rootPath)){
		data = data.filter( v => '/' + v.name === rootPath )
		if( $fn.hasArray(data) ){
			data = data[0].children ?? []
		}
	}
	return data
}
/**
 * 路由的第个节点
 * @param {String} 	url		# 路由，如: /main/style/color
 * @return {String} 		# /main
 */
export const getRootUrl = url => url.substring(0, url.substr(1).indexOf('/') + 1)