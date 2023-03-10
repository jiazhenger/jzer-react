import React from 'react'
/* -------------------------------------------------------- Declare -- */
const { $fn, $lazy } = window
/* -------------------------------------------------------- Async Component -- */
const Input = $lazy.load(()=>import('@antd/form/input'))
/* -------------------------------------------------------- 回到顶部 -- */
const Index = ({
	style, 							/** @param {String}				# 盒子 style */
	name, 							/** @param {String}				# name */
	label,							/** @param {String}				# 标签名 */
	p=['开始','结束'],				/** @param {Array, String}		# 提示语 */
	hint='',						/** @param {String}				# 提示语 */
	width,							/** @param {String}				# 宽度 */
	out,							/** @param {Number}				# 在外部设置 value 值 */
	//
	value=[],						/** @param {Array}				# 值 */
	disabled,						/** @param {Boolan}				# 禁用 */
	allowClear=true,				/** @param {Boolan}				# 显示清除按钮 */
	// 获取值
	onChange,						/** @param {Event}				# 有 Form 时值改变时执行 */
	onChanged,						/** @param {Event}				# 值改变时执行 */
	form, 							/** @param {Object}				# 存储值 */
	// 自定义扩展
	antd = {},						/** @param {Object}				# antd */
})=> {
	const [ model, setModel ] = React.useState(value)
	
	p = $fn.isString(p) ? p.split(',') : p
	
	const props = {
		disabled,
		allowClear,
		width: '100%'
	}
	
	React.useEffect(()=> $fn.hasArray(value) && setModel( value ), [ value ])
	
	const _onChange = React.useCallback(value => {
		onChange?.( value )
		if( onChanged || form ){
			const result = $fn.getFormFormat({label, name, value, form, formType:'text' })
			onChanged?.(result)
		}
	},[ ])  // eslint-disable-line
	
	const onBeginChange = React.useCallback( value =>{
		setModel( d => {
			d[0] = value
			_onChange(d)
			return d
		})
	},[ _onChange ])
	
	const onFinishChange = React.useCallback( value =>{
		setModel( d => {
			d[1] = value
			_onChange(d)
			return d
		})
	},[ _onChange ])
	
	return (
		 <div style={{width, gap:5, ...style}} className='fxm'>
			<Input 
				value		= { model?.[0] } 
				p			= { hint + p[0] } 
				antd  		= { antd }
				onChange	= { onBeginChange }
				{...props}
			/>
			<span className='g9'>~</span>
			<Input 
				value		= { model?.[1] } 
				p			= { hint + p[1] }
				onChange	= { onFinishChange }
				antd 		= {antd }
				{...props}
			/>
		</div>
	)
}

export default Index