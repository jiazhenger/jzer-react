import React from 'react'
/* -------------------------------------------------------- antd -- */
import { Input, InputNumber } from 'antd'
/* -------------------------------------------------------- Declare -- */
const { $config, $fn, $lazy } = window
/* -------------------------------------------------------- Async Component -- */
const Image = $lazy.load(()=>import('@tp/image'))
/* -------------------------------------------------------- 回到顶部 -- */
const Index = ({ 
	className,						/** @param {String}				# 盒子 className */
	style, 							/** @param {String}				# 盒子 style */
	size='small', 					/** @param {String}				# 大小 */
	icon,							/** @param {String,Component}	# 图标 */
	imgIcon,						/** @param {String,Component}	# 图片图标 */
	imgIconSIze=15, 					/** @param {Number}			# 图片图标大小 */
	p,								/** @param {String}				# 提示语 */
	hint='请输入',					/** @param {String}				# 提示语 */
	type,							/** @param {String}				# 输入框内型 */
	width,							/** @param {String}				# 宽度 */
	out,							/** @param {Number}				# 在外部设置 value 值 */
	//
	label='',						/** @param {String}				# 标签名 */
	name, 							/** @param {String}				# name */
	value,							/** @param {String}				# 值 */
	disabled,						/** @param {Boolan}				# 禁用 */
	readOnly,						/** @param {Boolan}				# 只读 */
	allowClear=true,				/** @param {Boolan}				# 显示清除按钮 */
	maxLength,						/** @param {Number}				# 展示字数提示 */
	prefix,							/** @param {String,Component}	# 前缀 */
	suffix,							/** @param {String,Component}	# 后缀 */
	// Textarea
	rows = 4, 						/** @param {Number}				# 展示字数提示 */
	// 获取值
	onChange,						/** @param {Event}				# 有 Form 时值改变时执行 */
	onChanged,						/** @param {Event}				# 值改变时执行 */
	form, 							/** @param {Object}				# 存储值 */
	// 自定义扩展
	antd = {},						/** @param {Object}				# antd */
	domRef,							/** @param {Object}				# ref */
})=> {
	const [ model, setModel ] = React.useState(value)
	
	if(imgIcon){
		prefix = <Image src={imgIcon} width={imgIconSIze}/>
	}else if(icon){
		prefix = <i className={icon}></i>
	}
	
	if( maxLength ){
		maxLength = { maxLength, showCount:true}
	}
	p = p ? p : hint + label
	allowClear = type === 'number' ? {} : {allowClear}
	antd = { className, disabled, readOnly, prefix, suffix, 
		placeholder: p, 
		value: out ? value : model,
		spellCheck:false,
		...allowClear, ...maxLength, ...antd
	}
	
	const sizeStyle = $fn.isNumber(size) ? {height:size} : $config.antd.btnSize[size]
	let elStyle = {padding:'0 8px', ...sizeStyle}
	if( type === 'textarea' ){
		elStyle = {}
	}else if( type === 'number' ){
		elStyle = {...sizeStyle}
	}
	
	style = { width,...elStyle, ...style }
	
	React.useEffect(()=> { if( !out ) { setModel( value ) } }, [ value ]) // eslint-disable-line
	
	const _onChange = e => {
		let value = $fn.isObject(e)? e.target.value : e
		
		if(!out){ setModel( value ) }
		
		onChange?.( value )
		
		if( onChanged || form ){
			const result = $fn.getFormFormat({label, name, value, form, formType:'text' })
			onChanged?.(result)
		}
	}
	
	let InputComponent = <Input ref={domRef} onChange={_onChange} style={style} {...antd}/>
	
	if( type === 'password' ){
		InputComponent = <Input.Password ref={domRef} onChange={_onChange} style={style} {...antd}/>
	}else if( type === 'textarea'){
		InputComponent = <Input.TextArea ref={domRef} rows={rows} onChange={_onChange} style={style} autoComplete='new-password' {...antd} />
	}else if( type === 'number'){
		InputComponent = <InputNumber ref={domRef} onChange={_onChange} style={{...style, width:'100%'}} {...antd}/>
	}
	
	return  InputComponent
}

export default Index