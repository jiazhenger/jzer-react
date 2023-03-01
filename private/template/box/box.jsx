import React from 'react'
/* -------------------------------------------------------- Function -- */
import isColor from '@utils/isColor'
/* -------------------------------------------------------- Declare -- */
const { $, $fn, $lazy } = window
/* -------------------------------------------------------- Async Component -- */
const Title 	= $lazy.load(()=>import('#tp/title/title'))
const Loading 	= $lazy.load(()=>import('@antd/loading'))
const Empty 	= $lazy.load(()=>import('@antd/empty'))
/**
 * 公共页面组件
 * @return {Component} 菜单组件
 */
const Index = ({ 
	className,							/** @param {String}				# 盒子 className */
	style, 								/** @param {String}				# 盒子 style */
	scroll = false, 					/** @param {Boolean}			# 是否滚动 */
	header, 							/** @param {Component}			# 头部 */
	footer, 							/** @param {Component}			# 页脚 */
	children, 							/** @param {Component}			# 默认 Slot */
	width, 								/** @param {}					# 宽度 */
	height,								/** @param {int}				# 高度 */
	bgcolor = 'bcf', 					/** @param {String, Boolean}	# 背景颜色 */
	contentClass, 						/** @param {String}				# 内容样式 */
	scrollClass, 						/** @param {String}				# 滚动内容样式 */
	paddingClass, 						/** @param {String}				# 内容补白 */
	auto, 								/** @param {Boolean}			# 自动高度 */
	minHeight=100, 						/** @param {String, Number}		# 最小高度 */
	//
	data, 								/** @param {Array}				# 数据 */
	loading, 							/** @param {Boolean}			# 加载 */
	loadingSize='large', 				/** @param {Boolean}			# 加载大小 */
	disabled, 							/** @param {Boolean}			# 禁用 */
	// 标题
	title, 								/** @param {String}				# 标题 */
	subTitle, 							/** @param {String}				# 副标题 */
	titleSlot, 							/** @param {Component}			# 标题 Slot */
	controls = [],						/** @param {Array}				# 头部操作按钮 */
	titleClassName,						/** @param {String}				# 标题 class */
	//
	table, 								/** @param {Object}				# table 配置 */
}) => {
	
	if( isColor(bgcolor) ){
		style = { backgroundColor: bgcolor }
		bgcolor = ''
	}
	
	style = { width, height, ...style }
	
	title = $fn.isObject(title) ? title : (  title ? { title, controls, subTitle } : null )
	
	return (
		<>
			<section className={`r5px ${$.css(!auto,'fv ex')} ${$.css(bgcolor)} ${$.css(className)}`} style={style}>
				{
					$fn.hasObject(title) && <Title table={table} loading={loading} disabled={disabled} className={titleClassName} {...title}>{titleSlot}</Title>
				}
				
				<div className={`rel ${$.css(!auto,'fv ex')} ${$.css(contentClass)} ${$.css(!scroll,paddingClass)}`} style={{minHeight}}>
					{
						($fn.hasArray( data ) || !data) ? (
							scroll ? (
								<div className={`oxys abs_full scrollbar ${$.css(scrollClass)} ${$.css(paddingClass)}`}>
									{ children }
								</div>
							) : children
						) : null
					}
					<Empty data={data} simple />
					<Loading size={loadingSize} loading={loading} />
				</div>
			</section>
		</>
	)
}

export default Index