import React from 'react'
/* -------------------------------------------------------- antd -- */
import { Transfer } from 'antd'
/* -------------------------------------------------------- Declare -- */
const { $fn, $config } = window
/* -------------------------------------------------------- 回到顶部 -- */
const Index = ({ 
	className,						/** @param {String}				# 盒子 className */
	style, 							/** @param {String}				# 盒子 style */
	size='small', 					/** @param {String}				# 大小 */
	name, 							/** @param {String}				# name */
	label,							/** @param {String}				# 标签名 */
	width='100%',					/** @param {Number,String}		# 宽度 */
	height,							/** @param {Number}				# 高度 */
	title,							/** @param {String}				# 标题 */
	out,							/** @param {Number}				# 在外部设置 value 值 */
	//
	value,							/** @param {Array}				# 值 */
	disabled,						/** @param {Boolan}				# 禁用 */
	// 获取值
	onChange,						/** @param {Event}				# 有 Form 时值改变时执行 */
	onChanged,						/** @param {Event}				# 值改变时执行 */
	// 自定义扩展
	antd = {},						/** @param {Object}				# antd */
	// data
	api,							/** @param {String}				# 获取数据的 api */
	param,							/** @param {Object}				# api 参数 */
	paging,							/** @param {Object}				# 是否分页*/
	data,							/** @param {Array}				# 数据 */
	idStr=$config.idStr,			/** @param {String}				# 提交字段名 */
	nameStr=$config.nameStr,		/** @param {String}				# 显示字段名 */
	cache,							/** @param {Boolan}				# 是否缓存 */
	setName,						/** @param {Funciton}			# 自定义字段名称 */
})=> {
	const [ model, setModel ] = React.useState(value??'')
	const [ ajax, setAjax ] = React.useState(data)

	antd = { 
		className, disabled, 
		dataSource: ajax,
		targetKeys: out ? ($fn.isNotEmpty(value) ? value : null) : model,
		showSearch: true,
		showSelectAll: true,
		style,
		listStyle	: {height, minHeight:200},
		render		: item => item[nameStr],
		rowKey 		: item => item[idStr],
		titles		: title ? ['未' + title, '已' + title] : [],
		filterOption: (input, option) => option[nameStr].indexOf(input) !== -1,
		...antd
	}

	React.useEffect(()=> { if( !out ) { setModel( value ) } }, [ value ]) // eslint-disable-line
	
	React.useEffect(()=> { setAjax(data) }, [ data ])
	
	React.useEffect(() => $fn.ajax({setAjax, api, data:ajax, cache, paging, param, setName}), []) // eslint-disable-line
	
	const _onChange = (value, row) => {
		if(!out){ setModel( value ) }
		
		const result = name ? { model: {[name]: value} } : null
		
		onChange?.( value )
		
		onChanged?.({ value, label, ...result  })
	}
	
	return <Transfer onChange={_onChange} {...antd}/>
}

export default Index