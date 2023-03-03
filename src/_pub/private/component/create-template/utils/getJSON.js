/* -------------------------------------------------------- 获取 JSON -- */
const { $fn } = window
const setDataType = (type,value)=>{
	if(type === 'bool') {
		value = Boolean($fn.isNumber(value*1) ? value*1 : value)
	}else if( type === 'number'){
		if(value === 'true'){
			value = 1
		}else if(value === 'false'){
			value = 0
		}else{
			value = value * 1
		}
	}
	return value
}
const deep = (data, json, dataType) => {
	data.forEach( items => {
		let { key, children, value, add, isObject, isArray, isObjectData } = items
		if(children){
			if( !add ) return
			if($fn.hasArray( children )){
				const isOneArray = $fn.isObject( children?.[0] )
				const isTowArray = $fn.isArray( children?.[0] )
				if(isOneArray){
					json[key] = {}
					deep(children, json[key])
				}else if(isTowArray){
					json[key] = isObject ? {} : []
					
					const doubleDeep = (row, json, dataType) => {
						row.forEach( m => {
							let stack = {}
							m.forEach(p=>{
								if(p.children){
									if(!p.add) return
									stack[p.key] =  p.isObject ? {} : []
									if($fn.isArray( p?.children?.[0] )){
										doubleDeep(p.children, stack[p.key], p.dataType)
									}else{
										deep(p.children, stack[p.key])
									}
								}else{
									if($fn.isNotEmpty( p.value )) {
										if(isObjectData){
											stack[p.key] = p.key === 'value' ? setDataType(p.dataType, p.value) : p.value
										}else if(p.isArrayGroup && p.value.indexOf(',') > 0){
											stack[p.key] = p.value.split(',')
										}else{
											stack[p.key] = p.key === 'value' ? setDataType(dataType, p.value) : p.value
										}
									}
								}
							})
							
							if(isObjectData){
								if($fn.isNotEmpty( stack.value ) && $fn.isNotEmpty( stack.label )) json[stack.label] = setDataType(dataType, stack.value)
							}else{
								if($fn.hasObject(stack)) json.push(stack)
							}
						})
					}
					
					doubleDeep(children, json[key], dataType)
					
					if(isArray && !$fn.hasArray(json[key])) delete json[key]
					if(isObject && !$fn.hasObject(json[key])) delete json[key]							
				}
			}
		}else{
			if($fn.isNotEmpty( value )) json[key] = value
		}
	})
}

const Index = data => {
	const json = {}
	deep(data, json)
	return json
}

export default Index