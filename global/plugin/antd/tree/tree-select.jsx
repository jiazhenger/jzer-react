import React from 'react'
/* -------------------------------------------------------- antd -- */
import { TreeSelect } from 'antd'
/* -------------------------------------------------------- Declare -- */
const { $fn, $config } = window
/* -------------------------------------------------------- 回到顶部 -- */
const Index = ({ 
	className,						/** @param {String}				# 盒子 className */
	style, 							/** @param {String}				# 盒子 style */
	size='small', 					/** @param {String}				# 大小 */
	name, 							/** @param {String}				# name */
	p,								/** @param {String}				# 提示语 */
	hint='请选择',					/** @param {String}				# 提示语 */
	label='',						/** @param {String}				# 标签名 */
	width,							/** @param {String}				# 宽度 */
	//
	value,							/** @param {String}				# 值 */
	disabled,						/** @param {Boolan}				# 禁用 */
	readOnly,						/** @param {Boolan}				# 只读 */
	allowClear=true,				/** @param {Boolan}				# 显示清除按钮 */
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
})=> {
	let [ model, setModel ] = React.useState(value??'')
	let [ ajax, setAjax ] = React.useState( data )
	
	p = p ? p : hint + label
	
	// className = `jzer-select-${size} ${$.css(className)}`

	antd = { 
		className, disabled, readOnly, allowClear, 
		value: model,
		placeholder: p, 
		showSearch:true,
		// treeDefaultExpandAll:true,					//默认展开所有树节
		treeNodeFilterProp: 'title',					// 输入项过滤对应的 treeNode 属性
		treeNodeLabelProp: nameStr,						// 要显示的字段名
		fieldNames: { value: idStr, title:nameStr },	// 自定义字段
		treeData : ajax,
		virtual: ajax?.length > 20,
		style: { minWidth:width, ...style},
		...antd
	}
	
	React.useEffect(()=> setModel( value ), [ value ])
	
	React.useEffect(() => $fn.ajax({setAjax, data:ajax, api, cache, paging, param}), []) // eslint-disable-line
	
	const _onChange = (value, label) => {
		
		setModel( value )
		
		let result = name ? { model: {[name]: value} } : null
		
		onChange?.( value )
		onChanged?.({ value, label, ...result  })
	}
	
	return  <TreeSelect onChange={_onChange} {...antd}/>
}

export default Index