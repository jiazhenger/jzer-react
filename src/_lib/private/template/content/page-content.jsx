import React from 'react'
/* -------------------------------------------------------- Function -- */
import isColor from '@utils/isColor'
/* -------------------------------------------------------- Declare -- */
const { $, $fn, $config, $lazy } = window
/* -------------------------------------------------------- Async Component -- */
const Title = $lazy.load(()=>import('#tp/title/title.jsx'))
const Content = $lazy.load(()=>import('@tp/content.jsx'))
const Controls = $lazy.load(()=>import('#cpt/temp/Controls.jsx'))
const Loading 	= $lazy.load(()=>import('@antd/loading.jsx'))
/**
 * 公共页面组件
 * @return {Component} 菜单组件
 */
const Index = ({ 
	className,							/** @param {String}				# 盒子 className */
	style, 								/** @param {String}				# 盒子 style */
	children, 							/** @param {Component}			# 默认 Slot */
	scroll = false, 					/** @param {Boolean}			# 是否滚动 */
	header, 							/** @param {Component}			# 头部 */
	footer, 							/** @param {Component}			# 页脚 */
	bgcolor = 'bcf', 					/** @param {String, Boolean}	# 背景颜色 */
	footerControls = [],				/** @param {Array}				# 底部操作按钮 */
	round = 'r3px', 					/** @param {String, Number}		# 圆角 */
	pageLoading,						/** @param {Boolean}			# 是否页面加载 */
	table,								/** @param {Object}				# tableConfig */
	// Content
	contentClass,						/** @param {String}				# 内容 className */
	paddingClass,						/** @param {String}			# 内容 padding */
	contentStyle,						/** @param {Object}				# 内容 style */
	minWidth=$config.pageMinWidth, 		/** @param {int}				# 盒子 className */
	minHeight=$config.pageMinHeight,	/** @param {int}				# 盒子 className */
	content,							/** @param {Object}				# Content 组件配置 */
	// 标题
	title, 								/** @param {String}				# 标题 */
	subTitle, 							/** @param {String}				# 副标题 */
	titleSlot, 							/** @param {Component}			# 标题 Slot */
	controls = [],						/** @param {Array}				# 头部操作按钮 */
	loading, 							/** @param {Boolean}			# 加载 */
	disabled, 							/** @param {Boolean}			# 禁用 */
	back, 								/** @param {Boolean}			# 是否显示返回按钮 */
	refresh, 							/** @param {Boolean}			# 是否显示刷新按钮 */
	keys, 								/** @param {Array}				# 表格的 keys */
}) => {
	
	if( isColor(bgcolor) ){
		style = { backgroundColor: bgcolor, ...style }
		bgcolor = ''
	}
	
	const props = {
		id: 'pageContent',
		className: `abs_full ${$.css(bgcolor)} ${ $.css(bgcolor, round) } fv ${ $.css(className)}`,
		style: {zIndex:0, ...style}
	}
	title = $fn.isObject(title) ? title : (  title ? { title, controls, subTitle } : null )
	
	return (
		<div {...props}>
			{ 
				$fn.hasObject(title) ? <Title keys={keys} loading={loading} disabled={disabled} back={back} refresh={refresh} {...title} style={{borderRadius:'3px 3px 0 0', ...title?.style}} table={table}>{titleSlot}</Title>
						: $fn.hasArray( controls ) && <Controls keys={keys} loading={loading} disabled={disabled} back={back} refresh={refresh} className='bbor1' align='start' style={{padding:'5px 10px'}} size='small' table={table} data={controls}/>
			}
			{ header }
			{
				scroll ? (
					<div className='ex rel'>
						<Content 
							bgcolor 		= { false }
							contentClass 	= { contentClass }
							paddingClass 	= { paddingClass }
							contentStyle 	= { contentStyle }
							minWidth 		= { minWidth }
							minHeight 		= { minHeight }
							{ ...content }
						>
							{ children }
						</Content>
					</div>
				) : (
					<div className={`fv ex rel ${$.css(paddingClass)} ${$.css(contentClass)}`} style={{minWidth, ...contentStyle}}>
						{ children }
					</div>
				)
			}
			{
				$fn.hasArray( footerControls ) && (
					<footer className='fxmc p10 tbor1'>
						<Controls size='middle' loading={loading} disabled={disabled} data={footerControls} table={table}/>
					</footer>
				)
			}
			{ footer }
			{
				pageLoading && <Loading loading={loading} />
			}
		</div>
	)
}

export default Index