import $time from '@utils/time'
const { $fn } = window
const Index = {
	// 将 search data 中的 value，组合搜索参数 { name: value }
	getParam( data ){
		let param = {}
		if($fn.hasArray(data)){
			data.forEach(v=> {
				if( $fn.isNotEmpty(v.value) ){
					param[v.name] = v.value
				}else if($fn.isNotEmpty(v.defaultValue) && v.type === 'date-range'){
					param[v.name] = $time.duration[v.defaultValue]()
				}
			})
		}
		return param
	}
}
export default Index