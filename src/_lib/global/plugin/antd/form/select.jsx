import React from 'react'
/* -------------------------------------------------------- antd -- */
import { Select } from 'antd'
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
	label,							/** @param {String}				# 标签名 */
	width,							/** @param {String}				# 宽度 */
	out,							/** @param {Number}				# 在外部设置 value 值 */
	mul,							/** @param {Boolan}				# 是否多选 */
	//
	value,							/** @param {String}				# 值 */
	disabled,						/** @param {Boolan}				# 禁用 */
	readOnly,						/** @param {Boolan}				# 只读 */
	allowClear=true,				/** @param {Boolan}				# 显示清除按钮 */
	// 获取值
	onChange,						/** @param {Event}				# 有 Form 时值改变时执行 */
	onChanged,						/** @param {Event}				# 值改变时执行 */
	form, 							/** @param {Object}				# 存储值 */
	submit, 						/** @param {Object}				# 额外值 */
	sname, 							/** @param {String}				# 提交 label */
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
	const [ loading, setLoading ] = React.useState()
	
	p = p ? p : hint + (label ? label : '')

	antd = { 
		className, disabled, readOnly, allowClear, 
		value		: out ? ($fn.isNotEmpty(value) ? value : null) : model,
		placeholder	: p,
		mode		: mul ? 'multiple' : 'combobox',
		maxTagCount : 20, 
		loading,
		showSearch	: true,
		virtual		: ajax?.length > 20,
		style		: { minWidth:width, ...style},
		filterOption: !antd?.dropdownRender ? (input, option)=>{
			return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
		} : null,
		...antd
	}
	
	if(mul && antd.value === null){ delete antd.value }

	React.useEffect(()=> { if( !out ) { setModel( value ) } }, [ value ]) // eslint-disable-line
	
	React.useEffect(()=> { setAjax(data) }, [ data ])
	
	React.useEffect(() => $fn.ajax({setAjax, setLoading, api, data:ajax, cache, paging, param, setName}), []) // eslint-disable-line
	
	const _onChange = (value, row) => {
		if(!out){ setModel( value ) }
		
		onChange?.( value )
		
		if( onChanged || form || submit ){
			const result = $fn.getFormFormat({label, name, value, idStr, nameStr, data:ajax, form, sname, submit, formType:'select' })
			onChanged?.(result)
		}
	}
	
	return (
		<Select onChange={_onChange} {...antd}>
			{
				$fn.hasArray( ajax ) && ajax.map((v,i) => {
					if($fn.hasObject(v)){
						return <Select.Option key={i} value={v[idStr] ?? v[nameStr] }>{ v[nameStr] ?? v[idStr] }</Select.Option>
					}else{
						return <Select.Option key={i} value={ v }>{ v }</Select.Option>
					}
				})
			}
		</Select>
	)
}

export default Index