/* ======================================  表单数据行操作  ====================================== */
const getTreeLabel = (data, idStr, nameStr) => {
	const { $fn } = window
	let stack = []
	const deep = data =>{
		data.forEach( v => {
			if( $fn.hasArray(v.children) ){
				deep( v.children )
			}else{
				stack.push({ [nameStr]:v[nameStr], [idStr]:v[idStr] })
			}
		})
	}
	deep(data)
	return stack
}
const Index = {
	// 获取 form 数据的字段数据
	getRow(config, name){
		let data = []
		
		if( this.isArray( config )){
			data = config
		}else if(this.isObject( config )){
			data = config?.form ? config?.form?.data : config.data
		}
		
		const arr = this.hasArray( data ) ? data.filter( v => this.hasObject(v) && v.name === name) : []
		if(this.hasArray(arr)){
			return arr[0]
		}else{
			console.log( name + '不存在' );
			return {}
		}
	},
	getRows(config, name, target, value){
		let data = []
		
		if( this.isArray( config )){
			data = config
		}else if(this.isObject( config )){
			data = config?.form ? config?.form?.data : config.data
		}
		
		if(this.hasArray(name)){
			data.forEach((v,i)=>{
				if( this.hasObject(v) && name.includes(v.name)){
					data[i][target] = value
				}
			})
		}else{
			this.getRow(config, name)[target] = value
		}
	},
	hideRows(config, name, value){ this.getRows(config, name, 'hide', value) },
	disabledRows(config, name, value){ this.getRows(config, name, 'disabled', value) },
	getCurrentRow( data, value, idStr=window.$config.idStr ){
		const arr = data.filter( v=> this.hasObject(v) && v[idStr] === value )
		return arr.length > 0 ? arr[0] : {}
	},
	// 获取不同格式的表单数据
	getFormFormat({ label, name, value, idStr, nameStr, data, uploadData, form, submit, sname, formType}){
		let backValue = {}
		let labelValue = { }
		let text = null
		let url = null
		let d = {}
		let row
		let rowName = null
		
		if(this.hasArray(data) && ['select','radio'].includes(formType) ){
			row = this.getCurrentRow(data, value, idStr, nameStr)
			rowName = row[nameStr]
			if( sname && submit ){
				submit[sname] = rowName
			}
		}
	
		if(form){
			
			if(['select','radio'].includes(formType)){ text = row[nameStr] }
			
			if(['tags','checkbox-group'].includes(formType)){
				if(this.hasArray(data)){
					text = data.map(v=>v[nameStr])
				}
			}
			
			if(['tree-select'].includes(formType)){
				if(this.hasArray(data)){
					const d = getTreeLabel(data,  idStr, nameStr )
					text = []
					if(this.hasArray(value)){
						value.forEach( v => {
							d.forEach(m=>{
								if( v === m[idStr] ){
									text.push( m[nameStr] )
								}
							})
						})
					}else{
						d.forEach(m=>{
							if( value === m[idStr] ){
								text = m[nameStr]
							}
						})
					}
				}
			}
			
			if(['text'].includes(formType)){ 
				text = value
			}
			
			if(['upload'].includes(formType)){
				text = uploadData.fileName
				url = uploadData.url
				d = { data: uploadData }
			}
			if( label ){
				label = label.includes('请') ? label.replace('请','') : label
			}
			
			backValue = url ? { label, text, url } : { label, text }
			labelValue = { label:text, value }
			
			if(this.isObject(form)){
				form[name] = backValue
			}
			return { value, row, name, labelValue, backValue, model: name ? {[name]: value} : {}, ...d }
		}else{
			return { value, row, name, rowName, uploadData, model: name ? {[name]: value} : {} }
		}
	},
	// 表单元素加载数据
	async ajax({setAjax, setLoading, data, api, cache, my, param, setName, paging }){
		const { $http } = window
		let id
		let way = 'pull'
		if( this.isString( param ) || this.isNumber( param ) ){
			id = param
		}else{
			if( paging ){
				param = { page:1, size: 10000, ...param }
				way = 'paging'
			}
		}
		if(api){
			if( cache ){
				let d = await this.indexDB(api)
				if(this.hasArray(d)){
					if(setName){ d = d.map((v,i) => setName(v,i) ) }
					setAjax( d )
					return d
				}
			}
			const loading = setLoading ? { onLoading: v=> setLoading(v) } : null
			let d = await $http[way](null ,api, { id, param, ...loading })
			
			d = ( way === 'paging' ? d?.data : d ) ?? []
			
			if( cache ){ this.indexDB(api, d) }
			
			if(setName){ d = d.map((v,i) => setName(v,i) ) }
			
			if(setAjax){ setAjax( d ) }
			
			return d
		}else{
			return data
		}
	},
}

export default Index