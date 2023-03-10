import React from 'react'
/* -------------------------------------------------------- Declare -- */
const { $config, $ } = window
/* -------------------------------------------------------- 设置组件空隙 -- */
const obj = {
	center 	: 'fxmc',
	end 	: 'fxmr'
}
const Index = ({ children, className, align='start', style,  gap = $config.btnSpace }) => {
	return <div className={`${ $.css(className) } ${ obj[align] ?? 'fxm' }`} style={{gap, ...style}}>{ children }</div>
}
export default Index