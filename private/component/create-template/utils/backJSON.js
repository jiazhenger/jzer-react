/* -------------------------------------------------------- 回显 JSON -- */
const { $fn } = window

const getDataType = value => {
	if($fn.isNumber(value)){
		return 'number'
	}else if($fn.isBoolean(value)){
		return 'bool'
	}else{
		return 'string'
	}
}
// 数据转换: [{ x:1, y:1, z:1 }] => [{ key:'x', value:1 }, { key:'y', value:1 }, { key:'z', value:1 }]
const toData_1 = (jsonData, addData) => {
	let rs = []
	jsonData.forEach( item => {
		const copyTempData = $fn.deepCopy(addData)
		for(let i in item){
			const jsonValue = item[i]
			copyTempData.forEach( v => {
				if( i === v.key ){
					if($fn.isObject(jsonValue) && $fn.hasArray(v.children) && (v.isObject || v.isArray)){
						v.add = true
						v.show = true
						deep(jsonValue, v.children)
					}else if( $fn.isArray(jsonValue) && v.isLabelValueData && v.isArray ){
						v.add = true
						v.show = true
						v.dataType = getDataType(jsonValue?.[0]?.value)
						v.children = toData_3(jsonValue, v.addData)
					}else{
						v.value = jsonValue
					}
				}
			} )
		}
		rs.push(copyTempData)
	})
	return rs
}
// 数据转换：{x:1, y:1} => [ { key:'label', value:1 }, { key:'value', value:1 } ]
const toData_2 = (jsonData, addData) => {
	let rs = []
	for(let i in jsonData){
		const copyTempData = $fn.deepCopy(addData)
		copyTempData[0].value = i
		copyTempData[1].value = jsonData[i]
		console.log(jsonData[i])
		copyTempData[1].dataType = getDataType(jsonData[i])
		rs.push(copyTempData)
	}
	return rs
}
// 数据转换：[{label:'是', value:1}] => [ { key:'label', value:1 }, { key:'value', value:1 } ]
const toData_3 = (jsonData, addData) => {
	let rs = []
	jsonData.forEach( v =>{
		const copyTempData = $fn.deepCopy(addData)
		copyTempData[0].value = v.label
		copyTempData[1].value = v.value
		rs.push(copyTempData)
	})
	return rs
}
const deep = (jsonData, tempData) => {
	if($fn.hasObject(jsonData)){
		for(let i in jsonData){
			const jsonValue = jsonData[i]
			tempData.forEach( v => {
				if( i === v.key ){
					if($fn.isObject(jsonValue) && $fn.hasArray(v.children) && v.isObject){
						v.add = true
						v.show = true
						deep(jsonValue, v.children)
					}else if( $fn.hasArray(jsonValue) && $fn.hasArray(v.addData) && v.isArray ){
						v.add = true
						v.show = true
						v.children = toData_1(jsonValue, v.addData)
					}else if($fn.isObject(jsonValue) && v.isObjectData && $fn.hasArray(v.addData)){
						v.add = true
						v.show = true
						v.children = toData_2(jsonValue, v.addData)
					}else{
						v.value = jsonValue
					}
				}
			})
		}
	}else if($fn.hasArray(jsonData)){
		jsonData.forEach(v=>deep(v, tempData))
	}
}
const Index = (jsonData, tempData) => {
	if(!$fn.hasArray(tempData) || !$fn.hasObject(jsonData)) return tempData
	deep(jsonData, tempData)
	return tempData
}

export default Index