const Index = (arr,key) => {
	let result = []
	let obj = {}
	arr.forEach(function(v){
		if(!obj[v[key]]){
			result.push(v)
			obj[v[key]] = true
		}
	})
	return result
}
export default Index