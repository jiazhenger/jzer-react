import * as XLSX from 'xlsx'

// FormData 上传
export const FormDataUploader = (name, files, param) => {  
	let fd = new FormData();
	for(let i=0; i<files.length; i++){
		fd.append(name,files[i]);
	}
	if(fd.get(name) === null){ return }
	if(param){
		for(var i in param){
			if(param.hasOwnProperty(i)){
				fd.append(i,param[i])
			}
		}
	}
	return fd 	// 相当于 { 'name':, ...param }
}
const Index = {
	files: null,
	fileType: [ 'xls', 'xlsx' ],
	includeFileType({ name }){ return this.fileType.includes( name.substr( name.lastIndexOf('.') + 1 ) ) },
	open(callback){
		let $upload = document.querySelector('#jz-upload')
		if(!$upload){
			$upload = document.createElement('input')
			// if( mul ) { $upload.setAttribute('multiple','multiple') }
			$upload.setAttribute('type','file')
		}
		$upload.click()
		$upload.onchange = ({ target:{ files } }) => {
			if(!this.includeFileType(files[0])) return window.$fn.msg.warning('只能上传 excel 文件')
			this.files = files
			const fileReader = new FileReader()
			fileReader.onload = ({ target:{ result } })=>{
				const content = XLSX.read( result, { type: 'binary' })
				let data = []
				for (const sheet in content.Sheets) {
					if (Object.prototype.hasOwnProperty.call(content.Sheets,sheet)) {
					  data = data.concat(XLSX.utils.sheet_to_json(content.Sheets[sheet]) )
					}
				}
				callback?.(data, files)
			}
			fileReader.readAsBinaryString(files[0])
			
		}
	},
	async upload(api, param){
		const fd = FormDataUploader('file', this.files, param)
		return window.$http.upload(null, api,{ param:fd }).then(data => {
			window.$fn.msg.success('文件上传成功')
			return data
		})
	},
	modalUpload(api,opt){
		let { cols = [], modal={}, param } = opt ?? {}
		this.open( data => {
			if(Array.isArray(opt?.cols)){
				cols = opt?.cols
				const name = cols.map( (v,i) => {
					v.dataIndex = i
					return i
				})
				for(let v of data){
					Object.keys(v).forEach( (m,i) =>{
						v[name[i]] = v[m]
					})
				}
			}else{
				for(let i in data[0]) cols.push({ dataIndex:i,  title:i })
			}
			window.$tableModalRef().open({
				modal:{
					title 	:'导入 — 确认',
					width 	: '98%',
					height	: '80%',
					onOk: close => this.upload(api, param).then(close),
					...modal
				},
				table:{ isIndex:1, cols, data }	,
			})
		})
	}
}

export default Index