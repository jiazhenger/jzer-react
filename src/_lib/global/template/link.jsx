import React from 'react'
// ===================================================================== 添加内部样式
const Index = ({ href, title, className }) => <a 
	href 		= { href } 
	target 		= '_black' 
	className	= {`c0 tu ${window.$.css(className)}`}
>{title}</a>

export default Index