/**
 * 复制内容
 */
const Index = value => {
	let el = document.querySelector('#copy')
	if(!el){
		el = document.createElement('textarea')
		el.id = 'copy'
		el.style = 'position:absolute;left:0;bottom:-10000;z-index:-1'
		document.body.appendChild(el)
	}
	el.value = value
	el.select()
	document.execCommand('copy')
	// window.$fn.toast('复制成功')
	window.$fn.msg.success('复制成功')
}
export default Index