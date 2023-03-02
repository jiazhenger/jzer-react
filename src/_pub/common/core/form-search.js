/* ======================================  表单提交方法  ====================================== */
const Index = {
	// 处理提交的参数
	getSubmitParam(data, param){
		if( this.hasArray(data) ){
			data.forEach( ({ name, names }) => {
				if( this.hasArray( names ) && names.length === 2 && param?.[name] ){
					param[names[0]] = param[name][0]
					param[names[1]] = param[name][1]
					delete param[name]
				}
			})
		}
		return param
	}
}

export default Index