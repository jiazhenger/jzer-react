import React from 'react'
/* -------------------------------------------------------- antd -- */
import { Checkbox } from 'antd'
/* -------------------------------------------------------- Declare -- */
const { $fn, $config } = window
/* -------------------------------------------------------- 回到顶部 -- */
const Index = ({ 
	className,						/** @param {String}				# 盒子 className */
	style, 							/** @param {String}				# 盒子 style */
	name, 							/** @param {String}				# name */
	label,							/** @param {String}				# 标签名 */
	out,							/** @param {Number}				# 在外部设置 value 值 */
	//
	value,							/** @param {String}				# 值 */
	valueType,						/** @param {String}				# 返回值类型 */
	disabled,						/** @param {Boolan}				# 禁用 */
	// 获取值
	onChange,						/** @param {Event}				# 有 Form 时值改变时执行 */
	onChanged,						/** @param {Event}				# 值改变时执行 */
	form, 							/** @param {Object}				# 存储值 */
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
		value: out ? ($fn.isNotEmpty(value) ? value : null) : model,
		...antd
	}

	React.useEffect(()=> { if( !out ) { setModel( value ) } }, [ value ]) // eslint-disable-line
	
	React.useEffect(()=> { setAjax(data) }, [ data ])
	
	React.useEffect(() => $fn.ajax({setAjax, data:ajax, api, cache, paging, param, setName}), []) // eslint-disable-line
	
	const _onChange = value => {
		
		if(!out){ setModel( value ) }
		
		onChange?.( value )
		
		if( onChanged || form ){
			const result = $fn.getFormFormat({label, name, value, idStr, nameStr, data:ajax, form, formType:'checkbox-group' })
			onChanged?.(result)
		}
	}
	
	return $fn.hasArray( ajax ) ? (
		<Checkbox.Group onChange={_onChange} {...antd}>
			{
				ajax.map((v,i) => <Checkbox key={i} value={v[idStr]}>{v[nameStr]}</Checkbox>)
			}
		</Checkbox.Group>
	) : <div className='g9 f12'>无数据</div>
}

export default Index