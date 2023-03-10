import React from 'react'
/* -------------------------------------------------------- antd -- */
import { Switch } from 'antd'
/* -------------------------------------------------------- 回到顶部 -- */
const Index = ({ 
	className,						/** @param {String}				# 盒子 className */
	name, 							/** @param {String}				# name */
	label,							/** @param {String}				# 标签名 */
	children,						/** @param {Component}			# slot */
	out,							/** @param {Number}				# 在外部设置 value 值 */
	//
	value,							/** @param {Number}				# 值 */
	disabled,						/** @param {Boolan}				# 禁用 */
	// 获取值
	onChange,						/** @param {Event}				# 有 Form 时值改变时执行 */
	onChanged,						/** @param {Event}				# 值改变时执行 */
	// 自定义扩展
	antd = {},						/** @param {Object}				# antd */
})=> {
	const [ model, setModel ] = React.useState( Boolean(value) )
	
	antd = { 
		className, disabled,
		checked: out ? value : model,
		...antd
	}

	React.useEffect(()=> { if( !out ) { setModel( value ) } }, [ value ]) // eslint-disable-line
	
	const _onChange = value => {
		value = value ? 1 : 0
		
		if(!out){ setModel( value ) }
		
		const result = name ? { model: {[name]: value} } : null
		
		onChange?.( value )
		
		onChanged?.({ value, label, ...result  })
	}
	
	return <Switch onChange={_onChange} {...antd} />
}

export default Index