// const dispatch = obj => {
// 	const ev = document.createEvent('MouseEvents')
// 	ev.initMouseEvent(
// 		'click', 
// 		true, 
// 		false, 
// 		window, 
// 		0, 
// 		0, 
// 		0, 
// 		0, 
// 		0, 
// 		false, 
// 		false, 
// 		false, 
// 		false, 
// 		0, 
// 		null
// 	)
// 	obj.dispatchEvent(ev)
// }

const types = {
	xlsx: 'vnd.openxmlformats-officedocument.spreadsheetml.sheet',
	xls: 'vnd.ms-excel',
	pdf: 'pdf',
	word: 'vnd.openxmlformats-officedocument.wordprocessingml.document',
	txt : 'text'
}
const Index = {
	// blobDispath(data, option) {
	// 	const {fileType = 'xlsx', fileName = 'download'} = option ?? {}
		
	// 	const urlObject = window.URL || window.webkitURL || window
		
	// 	const blob = new Blob([ data ],  { type: `application/${types[ fileType ]}; charset=utf-8`})
		
	// 	const link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a')
		
	// 	link.href = urlObject.createObjectURL(blob)
		
	// 	link.download = fileName
		
	// 	link.style.display = 'none'
		
	// 	dispatch(link)
	// },
	blob(data, option){
		const {fileType = 'xlsx', fileName = 'download'} = option ?? {}
		
		const urlObject = window.URL || window.webkitURL || window
		
		const blob = new Blob([ data ],  { type: `application/${types[ fileType ]}; charset=utf-8`})
		
		const link = document.createElement('a')
		
		link.href = urlObject.createObjectURL(blob)
		
		link.download = fileName
		
		link.style.display = 'none'
		
		document.body.appendChild( link )
		
		link.click()
		
		document.body.removeChild( link )
	},
	// url 后台下载
	form(url){
		const form = document.createElement('form')
		form.method = 'post'
		form.action = window.$config.api() + url
		form.target = '_blank';
		// token 验证
		const tokenInput = document.createElement('input')
		tokenInput.type = 'hidden'
		tokenInput.name ='token'
		tokenInput.value = window.$fn.getToken()
		//
		form.appendChild(tokenInput)
		document.body.appendChild(form)
		form.submit()
		document.body.removeChild(form)
	}
}

export default Index