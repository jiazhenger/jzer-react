/* ====================================== 上传图片  ====================================== */
const { $fn, $http } = window

const imageType = ['jpg','png','jpeg','gif']
const maxMB = 2
const maxKB = 1024 * 1024 * maxMB

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
	return fd; 	// 相当于 { 'name':, ...param }
}

export const upload = ({ api, change, param, way, mul }) => {
	let $upload = document.querySelector('#jz-upload')
	if(!$upload){
		$upload = document.createElement('input')
		if( mul ) { $upload.setAttribute('multiple','multiple') }
		$upload.setAttribute('type','file')
	}
	$upload.click()
	$upload.onchange = e => {
		const fd = FormDataUploader('file', e.target.files, param)
		$http.upload(null, api,{ param:fd, way }).then(data=>{
			change?.(data)
		})
		$upload.value = ''
	}
}

export const getUpload =  async (e, option) => {
	const opt = {
		name:'file',
		param:{},
		...option
	}
	if(!$fn.hasObject(e) || !e.target){
		return $fn.toast('未选择要上传的图片')
	}
	
	const files = e.target.files
	
	let yes = true
	
	for(var i=0; i<files.length; i++){
		const file = files[i]
		// 判断上传文件格式
		const suffix = file.name.substring(file.name.lastIndexOf('.')+1).toLowerCase()
		if(imageType.indexOf(suffix) === -1){
			$fn.toast( file.name + '的格式必须为png、jpg、jpeg！');
			yes = false
			break;
		}
		// 限制图片上传大小
		if(file.size > maxKB){
			$fn.toast( file.name + '文件尺寸超过最大限制' + maxMB + 'M');
			yes = false
			break;
		}
	}
	
	if(!yes) return;
	
	const fd = FormDataUploader(opt.name,files,opt.param)
	return fd
}
