import React from 'react'
/* -------------------------------------------------------- antd -- */
import { Pagination } from 'antd'
/* -------------------------------------------------------- Declare -- */
const { $config, $ } = window
/* -------------------------------------------------------- 分页 -- */
const Index = ({
		className, 									/** @param {String}			# 盒子 className */
		style, 										/** @param {String}			# 盒子 style */
		pager, 										/** @param {Object}			# ajax.pager */
		pag={}, 									/** @param {Object}			# 分页配置 */
		align='fxr', 								/** @param {Object}			# ajax.pager */
		onChange									/** @param {Event}			# 分页改变时执行*/
})=> pager && pager?.data?.length > 0  ? (
	<div className={`nowrap ${$.css(align)} ${$.css(className)}`} style={{style}}>
		<Pagination
			size				= 'small'
			current				= { pager.page ?? 1 } 
			total				= { pager.total }
			pageSize			= { pager.size }
			onChange			= { (current, pageSize) => onChange?.(current, pageSize) }
			showQuickJumper		= { true }
			showSizeChanger 	= { true }
			hideOnSinglePage	= { pager.data.length === 0  || pager.total / ($config?.paging?.pageSize || 10) <= 1   }
			pageSizeOptions		= { $config?.paging?.pageSizeOptions }
			{ ...pag }
		/>
	</div>
) : null
export default Index