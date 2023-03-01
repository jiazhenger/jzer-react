/**
 * 直接加载文件，无任务处理，通用
 * @param {type=Function}	importComponent 	# 引入组件 () => import()
 */

const Index =  async importComponent => importComponent().then( f => f.default )

export default Index