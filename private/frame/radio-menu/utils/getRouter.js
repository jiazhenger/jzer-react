/* -------------------------------------------------------- Function -- */
import { hasPath, existMain, existHttp } from '#frame/utils'
/* -------------------------------------------------------- Declare -- */
const { $fn } = window
/**
 * 简单模式下，默认选中第一个
 * @param {Array} data	# 菜单数据
 * @return {Array} 		# 新的菜单数据
 */
const setEasyFirstRouter = data => {
	const deep = data => {
		if( $fn.hasArray( data ) ){
			let { children } = data[0]
			data[0].checked = true
			if( $fn.hasArray(children) ){ return setEasyFirstRouter( children ) }
		}
	}
	deep(data)
	return data
}
/**
 * 将菜单数据中的 path 拼合成有效 path，并默认选中
 * @param {Array} 	data		# 菜单数据
 * @param {String} 	rootPath	# 根路由，如: /main
 * @param {Boolean} openAll 	# 是否展开全部
 * @return {Array} 				# 新的菜单数据
 */
const Index = (data, rootPath, openAll) => {
	let hash = window.location.hash.replace('#','')
	const deep = (data, path, isChild) => {
		if(path.substr(-1) === '/') path = path.substr(0, path.length - 1)
		data.forEach( v => {
			const { url, name, children, child, title } = v
			if( url ){
				if( existHttp(url) ){
					v.path = url
				}else{
					v.path = existMain(url) ? url : rootPath + url
				}
			}else{
				if(v.path){
					if(!existMain(v.path) && !existHttp(v.path)){ v.path = v.path.includes(rootPath) ? v.path : rootPath + v.path }
				}else{
					if( name ){ v.path = path + '/' + name }
				}
			}
			if($fn.isArray(children)) {
				if(openAll){
					v.checked = true
				}else{
					if(hasPath( hash, v.path )){
						v.checked = true
					}
				}
				deep(children, v.path)
			}else{
				if(hash === v.path || hash.includes( v.path )){ v.checked = true }
				
				if( isChild && !v.child ){
					v.cache = v.cache ?? true	// 如果是 child 的子级，默认带缓存
				}
				if( $fn.isArray( child ) ){
					const component = v.component ? { component:v.component } : null
					v.child.unshift({ title, name, path:v.path, ...component, cache:true })
					deep(child, v.path, true)
				}
			}
		})
		return data
	}
	data = deep( data, rootPath )
	
	if(hash === rootPath){
		data = setEasyFirstRouter(data)
	}
	return data
}
export default Index