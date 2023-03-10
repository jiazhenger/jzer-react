import React from 'react'
/* -------------------------------------------------------- Declare -- */
const { $fn, $lazy } = window
/* -------------------------------------------------------- Async Component -- */
const DatePicker = $lazy.load(()=>import('@antd/form/date-picker/index.jsx'))
/* -------------------------------------------------------- 回到顶部 -- */
const Index = ({
	style, 							/** @param {String}				# 盒子 style */
	name, 							/** @param {String}				# name */
	label,							/** @param {String}				# 标签名 */
	s='-',							/** @param {String}				# 分割符 */
	format=0,						/** @param {String}				# 格式 */
	p=['开始时间','结束时间'],		/** @param {String}				# 提示语 */
	hint='',						/** @param {String}				# 提示语 */
	width,							/** @param {String}				# 宽度 */
	after,							/** @param {Boolan, String}		# 之后可选 */
	before,							/** @param {Boolan, String}		# 之前可选 */
	today,							/** @param {Boolan}				# 是否包含当天 */
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
	//
	start, 							/** @param {String}				# 是否固定开始时间 */
	end, 				/** @param {String}				# 是否结束开始时间 */
})=> {
	const [ model, setModel ] = React.useState(value)
	const [ startBefore, setStartBefore ] = React.useState()
	const [ endAfter, setEndAfter ] = React.useState()
	
	const props = {
		disabled,
		allowClear,
		today,
		s,
		format,
		width: '100%'
	}
	
	React.useEffect(()=> $fn.hasArray(value) && setModel( value ), [ value ])
	
	const _onChange = React.useCallback(value => {
		onChange?.( value )
		if( onChanged || form ){
			const result = $fn.getFormFormat({label, name, value, form, formType:'text' })
			onChanged?.(result)
		}
	},[  ])  // eslint-disable-line
	
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
	
	const onStartOpenChange = React.useCallback(bool=>{
		if(bool){
			setStartBefore( model?.[1] )
		}
	},[ model ])
	
	const onEndOpenChange = React.useCallback(bool=>{
		if(bool){
			setEndAfter( model?.[0] )
		}
	},[ model ])
	
	return (
		 <div style={{width, gap:5, ...style}} className='fxm'>
			<DatePicker 
				value		= { model?.[0] } 
				p			= { hint + p[0] } 
				before		= { startBefore }
				start 		= { start }
				onChange	= { onBeginChange }
				antd 		= {{ onOpenChange:onStartOpenChange, ...antd }}
				{...props}
			/>
			<span className='g9'>~</span>
			<DatePicker 
				value		= { model?.[1] } 
				p			= { hint + p[1] }
				after 		= { endAfter }
				start 		= { end }
				onChange	= { onFinishChange }
				antd 		= {{ onOpenChange:onEndOpenChange, ...antd }}
				{...props}
			/>
		</div>
	)
}

export default Index