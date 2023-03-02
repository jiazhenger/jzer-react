const dispatch = obj => {
	const ev = document.createEvent('MouseEvents')
	ev.initMouseEvent(
		'click', 
		true, 
		false, 
		window, 
		0, 
		0, 
		0, 
		0, 
		0, 
		false, 
		false, 
		false, 
		false, 
		0, 
		null
	)
	obj.dispatchEvent(ev)
}

const Index = (name, data) => {
	const urlObject = window.URL || window.webkitURL || window
	
	const downloadData = new Blob([ data ])
	
	const link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a')
	link.href = urlObject.createObjectURL(downloadData)
	link.download = name
	dispatch(link)
}

export default Index