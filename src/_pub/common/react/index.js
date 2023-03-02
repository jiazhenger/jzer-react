/* -------------------------------------------------------- 动态菜单配置页 -- */
import router from './router'
import RouterDynamic from '@/router-dynamic'
/**
 * React 特有方法
 * @param importComponent 	# 引入组件 () => import()
 * @param path 				# 路径
 */
const Index = {
	/**
	 * 添加 className 中的某一项
	 * @param {String} name 	# className
	 * @param {Boolean} flag   	# 判断条件
	 */
	css( ){
		const { length } = arguments
		if( length === 1 ){
			const name = arguments[0]
			return typeof name === 'string' ? name : ''
		}else if( length === 2){
			return arguments[0] ? (arguments[1] ?? '') : ''
		}else{
			return ''
		}
	},
	/**
	 * 返回不同形式组件
	 * @param {Function, Component}	cpt	# 组件	
	 */
	cpt(component){
		if(typeof component === 'function'){
			return component()
		}else{
			return component
		}
	},
	/**
	 * 获取 ref 上的方法
	 * @param {Function, Component}	cpt	# 组件	
	 */
	ref: ref => ref?.current?.myRef?.current,
	...router,
	...RouterDynamic
}

export default Index