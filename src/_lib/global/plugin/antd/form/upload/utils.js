const Index = {
	getBase64: file => {
		return new Promise((resolve, reject) => {
			const reader = new FileReader()
			reader.readAsDataURL(file)
			reader.onload = () => resolve(reader.result)
			reader.onerror = error => reject(error)
		})
	},
	getType:  f => ({
		img: { bool: f === 'image/jpeg' || f === 'image/png' || f === 'image/jpg' , msg: '图片文件' },
		pdf: { bool: f === 'application/pdf', msg:'PDF 文件'},
		word: { bool: f === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', msg:'word 文件'},
		excel: { bool: f === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || f ==='application/vnd.ms-excel', msg:'Excel 文件'}
	}),
	getFileList: (value, file) => {
		if(Array.isArray( value )){
			return value.map( (v,i) => ({ uid: v,	name: file?.name ?? v, status: 'done', url: v }))
		}else if( value ){
			return [{ uid: value , status: 'done', url:value, name: file?.name ?? value }]
		}else{
			return []
		}
	},
}
export default Index