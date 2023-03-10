import React from 'react'
/* -------------------------------------------------------- Declare -- */
const { $lazy, $, $config } = window
/* -------------------------------------------------------- Async Component -- */
const Tabs = $lazy.load(()=>import('@antd/tabs.jsx'))
/* -------------------------------------------------------- Page Component -- */
const Index = props => {
	const {
		data, 					/** @param {Array}		 	# 数据 */
		idStr=$config.idStr,	/** @param {String}			# 提交字段名 */
	} = props
	
	const tabs = {
		className: `jzer-tabs-menu ${$.css(data.length === 1,'jzer-tabs-menu-one')}`,
		gap:5,
		antd: {
			type: 'editable-card',
			hideAdd: true,
			onEdit: value => {
				if( data.length > 1){
					const index = data.findIndex( v => v[idStr] === value )
					const row = data[index]
					data.splice(index,1)
					props?.onClose?.({ data, index, row, value})
				}
			}
		},
		out:1,
		...props
	}
	return <Tabs {...tabs} />
}
export default Index