/* -------------------------------------------------------- Function -- */
import { hasPath, getRedirect } from '#frame/utils'
/**
 * 复杂模式下，默认选中第一个
 * @param {Array} data	# 菜单数据
 * @param {Boolean} openAll 	# 是否展开全部
 * @return {Array} 		# 新的菜单数据
 */
const Index = (data, openAll) => {
	const hash = getRedirect(data)
	const deep = data => {
		data.forEach( v => {
			v.checked = false
			if(Array.isArray(v.children)) {
				if(openAll){
					v.checked = true
				}else{
					if(hasPath( hash, v.path  )){
						v.checked = true
					}
				}
				deep(v.children, v.path)
			}else{
				if(hash === v.path){
					v.checked = true
				}
			}
		})
		return data
	}
	return deep( data )
}

export default Index