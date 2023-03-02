import React from 'react'
/* -------------------------------------------------------- Function -- */
import isColor from '@utils/isColor'
/* -------------------------------------------------------- Declare -- */
const { $, $lazy } = window
/* -------------------------------------------------------- Async Component -- */
const Controls = $lazy.load(()=>import('#cpt/temp/Controls'))
/* -------------------------------------------------------- 标题 Component -- */
const Index = ({
	children, 			/** @param {Compoennt}		 	# Slot */
	prefix,				/** @param {Compoennt}		 	# Slot */
	className, 			/** @param {String}				# 盒子 className */
	style, 				/** @param {String}				# 盒子 style */
	titleMode, 			/** @param {Number}				# 标题模式 1、2、3*/
	bgcolor='bcf', 		/** @param {String}				# 背景颜色，可以是 className, 也可以是具体的颜色值 */
	title, 				/** @param {String}				# 标题 */
	subTitle, 			/** @param {String}				# 副标题 */
	grayTitle, 			/** @param {String}				# 副标题 */
	loading, 			/** @param {Boolean}			# 加载中 */
	back, 				/** @param {Boolean}			# 是否显示返回按钮 */
	refresh, 			/** @param {Boolean}			# 是否显示刷新按钮 */
	disabled, 			/** @param {Boolean}			# 禁用 */
	table,				/** @param {Object}				# tableConfig */
	controls = {}, 		/** @param {Object}				# 按钮配置 */
	keys, 				/** @param {Array}				# 表格的 keys */
}) => {
	let titleClass = 'bbor1 plr10 f14'
	
	if( isColor(bgcolor) ){
		style = { backgroundColor: bgcolor, ...style }
		bgcolor = ''
	}
	
	if(titleMode === 1){
		titleClass = 'r3px plr10 f14'
	}else if(titleMode === 2){
		titleClass = 'bbor1 mlr10 f13'
	}else if(titleMode === 3){
		titleClass = 'bbor1 plr10 f13'
	}
	return (
		<header style={{padding:'5px 10px', minHeight:36, ...style}} className={`fxm ${$.css(className) } ${$.css(bgcolor)} ${ titleClass }`}>
			{
				title && (
					<h2 className={`fxm nowrap b nosel ${ (titleMode===2||titleMode===3) ? 'g6':'g3' }`}>
						{
							(titleMode === 2 || titleMode === 3) ? <i className='r10px mr5 rel' style={{width:6,height:6,backgroundColor:'#999'}}></i>
											: <i className='bcm r10px mr5 rel' style={{width:4,height:12}}></i>
						}
						{title}
					</h2>
				)
			}
			{
				(subTitle || grayTitle) && <span className={`f13 ml5 ${ grayTitle ? 'g9' : 'c0' }`}>( {subTitle || grayTitle} )</span>
			}
			{ prefix }
			{ children }
			<Controls className='ex' align='end' loading={loading} disabled={disabled} back={back} refresh={refresh} data={controls}  table={table} keys={keys} {...controls}/>
		</header>
	)
}

export default Index