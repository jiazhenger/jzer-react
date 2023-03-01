import React from 'react'
/* -------------------------------------------------------- antd -- */
import { Radio } from 'antd'
/* -------------------------------------------------------- Declare -- */
const { $fn, $config } = window
const boolData = [
	{ label:'是', value: 1 },
	{ label:'否', value: 0 }
]
/* -------------------------------------------------------- 回到顶部 -- */
const Index = ({ 
	className,						/** @param {String}				# 盒子 className */
	style, 							/** @param {String}				# 盒子 style */
	name, 							/** @param {String}				# name */
	label,							/** @param {String}				# 标签名 */
	mode,							/** @param {String}				# 模式 */
	out,							/** @param {Number}				# 在外部设置 value 值 */
	bool,							/** @param {Boolan}				# 布尔值 */
	mul,							/** @param {Boolan}				# 布尔值 */
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
	data=boolData,					/** @param {Array}				# 数据 */
	idStr=$config.idStr,			/** @param {String}				# 提交字段名 */
	nameStr=$config.nameStr,		/** @param {String}				# 显示字段名 */
	cache,							/** @param {Boolan}				# 是否缓存 */
	setName,						/** @param {Funciton}			# 自定义字段名称 */
})=> {
	if( $fn.isBoolean( value ) ){ value = value ? 1 : 0 }
	
	const [ model, setModel ] = React.useState(value ??'' )
	const [ ajax, setAjax ] = React.useState(data)
	antd = { 
		className, disabled, 
		value: out ? ($fn.isNotEmpty(value) ? value : null) : model,
		buttonStyle : 'solid',
		...antd
	}

	React.useEffect(()=> { if( !out ) { setModel( bool ?  Boolean(value) : value ) } }, [ value ]) // eslint-disable-line
	
	React.useEffect(()=> { setAjax(data) }, [ data ])
	
	React.useEffect(() => $fn.ajax({setAjax, data:ajax, api, cache, paging, param, setName}), []) // eslint-disable-line
	
	const _onChange = e => {
		
		let value = e.target.value
		
		if( bool ){ value = Boolean(value) }
		
		if(!out){ setModel( value ) }
		
		onChange?.( value )
		
		if( onChanged || form ){
			const result = $fn.getFormFormat({label, name, value, idStr, nameStr, data:ajax.data, form, formType:'checkbox-group' })
			onChanged?.(result)
		}
	}
	
	return $fn.hasArray(ajax) ? (
		<Radio.Group onChange={_onChange}  {...antd}>
			{
				ajax.map((v, i) => (
					<React.Fragment key={i}>
						{
							mode === 'button' ? <Radio.Button buttonStyle='solid' value={ v[idStr] }>{ v[nameStr] }</Radio.Button> : <Radio value={ v[idStr] }>{ v[nameStr] }</Radio>
						}
					</React.Fragment>
				))
			}
		</Radio.Group>
	)  : <div className='g9 f12'>无数据</div>
}

export default Index