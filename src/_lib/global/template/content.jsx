import React from 'react'
/* -------------------------------------------------------- Declare -- */
const { $config, $lazy, $ } = window
/* -------------------------------------------------------- Async Component -- */
const Scrolll = $lazy.load(()=>import('@tp/scroll.jsx'))
/* -------------------------------------------------------- 滚动盒子 -- */
const Index = ({
	children, 							/** @param {Component}			# 默认 Slot */
	contentClass,						/** @param {String}				# 内容 className */
	paddingClass,						/** @param {String}				# 内容 padding */
	contentStyle,						/** @param {Object}				# 内容 style */
	minWidth=$config.pageMinWidth, 		/** @param {int}				# 最小宽度 */
	minHeight=$config.pageMinHeight,	/** @param {int}				# 最小高度 */
	header, 							/** @param {Component}			# 头部 */
	footer, 							/** @param {Component}			# 页脚 */
	// Scroll
	className,							/** @param {String}				# 盒子 className */
	style, 								/** @param {String}				# 盒子 style */
	bgcolor='bcf', 						/** @param {String}				# 背景颜色 */
	scroll='oxys', 						/** @param {String}				# 滚动样式 */
	scrollbar='scrollbar',				/** @param {String}				# 滚动条样式 */
	id='pageScroll', 					/** @param {String}				# 滚动盒子 id */
}) => {
	return (
		<Scrolll
			className 	= { className }
			style 		= { style }
			id			= { id }
			bgcolor		= { bgcolor } 
			scroll		= { scroll } 
			scrollbar 	= { scrollbar }
		>
			{ header }
			<div className={`${ $.css(contentClass) } ${$.css(paddingClass)}`} style={{minWidth, minHeight, ...contentStyle}}>
				{ children }
			</div>
			{ footer }
		</Scrolll>
	)
}

export default Index