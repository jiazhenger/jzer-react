import React from 'react'
/* -------------------------------------------------------- Function -- */
import isColor from '@utils/isColor'
/* -------------------------------------------------------- Declare -- */
const { $ } = window
/* -------------------------------------------------------- 滚动盒子 -- */
const Index = ({ 
	className,						/** @param {String}				# 盒子 className */
	style, 							/** @param {String}				# 盒子 style */
	children, 						/** @param {Component}			# 默认 Slot */
	bgcolor, 						/** @param {String}				# 背景颜色 */
	scroll='oxys', 					/** @param {String}				# 滚动样式 */
	scrollbar='scrollbar',			/** @param {String}				# 滚动条样式 */
	id, 							/** @param {String}				# 滚动盒子 id */
}) => {
	
	if( isColor(bgcolor) ){
		style = { backgroundColor: bgcolor }
		bgcolor = ''
	}
	return (
		<section 
			id			= { id } 
			className	= {`abs_full ${ $.css(bgcolor) } ${ $.css(scroll) } ${ $.css(!scroll, 'fv')} ${ $.css(scroll, scrollbar) } ${ $.css(className) }`} 
			style		= { style }
		>
			{ children }
		</section>
	)
}

export default Index