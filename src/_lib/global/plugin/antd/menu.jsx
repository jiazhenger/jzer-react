import React from 'react'
/* -------------------------------------------------------- antd -- */
import { Menu } from 'antd'
/* -------------------------------------------------------- Declare -- */
const { $fn } = window
/* -------------------------------------------------------- 菜单 -- */
const Index = ({
	data, 		/** @param {Array}		 	# 数据 */
	onSelect,	/** @param {Event}		 	# 选择时执行 */
	onClick		/** @param {Event}		 	# 点击时执行 */
}) => {
	return $fn.hasArray( data ) ? (
		<Menu onSelect={onSelect} >
			{
				data.map((v,i)=> <Menu.Item key={i} onClick={onClick?.bind(null, v)}>{v.label}</Menu.Item> )
			}
		</Menu>
	) : null
}
export default Index