import React from 'react'
/* -------------------------------------------------------- Declare -- */
const { $lazy } = window
/* -------------------------------------------------------- Async Component -- */
const Input = $lazy.load(()=>import('@antd/form/input'))
const Button = $lazy.load(()=>import('@antd/button'))
/* -------------------------------------------------------- 回到顶部 -- */
const Index = ({ 
	className,						/** @param {String}				# 盒子 className */
	style, 							/** @param {String}				# 盒子 style */
	name, 							/** @param {String}				# name */
	label,							/** @param {String}				# 标签名 */
	size='small', 					/** @param {String}				# 大小 */
	p,								/** @param {String}				#  */
	mode,							/** @param {String}				#  输入框类型*/
	formRef, 						/** @param {Object}				# formRef */
	//
	value,							/** @param {Number}				# 值 */
	disabled,						/** @param {Boolan}				# 禁用 */
	// 获取值
	onChange,						/** @param {Event}				# 有 Form 时值改变时执行 */
	onChanged,						/** @param {Event}				# 值改变时执行 */
	click,							/** @param {Event}				# 点击按钮执行 */
	// 自定义扩展
	input = {},						/** @param {Object}				# input */
	btn = {},						/** @param {Object}				# btn */
	// button
	btnText = '选择',				/** @param {Object}				# 按钮文本 */
})=> {
	
	input = { 
		disabled, p, label, name, size, 
		type:mode,
		out:1,
		value,
		...input
	}
	
	const _onChange = value => {
		let result = name ? { model: {[name]: value} } : null
		onChange?.( value )
		onChanged?.({ value, label, ...result  })
	}
	
	const onClick = React.useCallback(() => {
		click?.({ value, formRef })
	},[ value ]) // eslint-disable-line

	return (
		<div className='fx'>
			<Input onInput={_onChange} {...input} />
			<Button label={btnText} className='ml10' size={size} onClick={ onClick } {...btn} />
		</div>
	)
}

export default Index