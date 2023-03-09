import React from 'react'
/* -------------------------------------------------------- antd -- */
import { Form } from 'antd'
import $time from '@utils/time'
/* -------------------------------------------------------- Declare -- */
const { $fn, $ } = window
/* -------------------------------------------------------- Form -- */
const Index = ({
	children, 		/** @param {Compoennt}			# Slot */
	className, 		/** @param {String}				# 样式 className */
	style,			/** @param {String}				# 样式 style */
	data, 			/** @param {Array}				# 数据 */
	param, 			/** @param {Object}				# 参数 */
	hideErrorText, 	/** @param {Object}				# 是否隐藏提示文字 */
	//
	name, 			/** @param {String}				# 表单名称 */
	dir, 			/** @param {String}				# 表单排版 */
	labelAlign,		/** @param {String}				# 标签对齐 */
	onSubmit, 		/** @param {Event}				# 提交时执行 */
	onChange, 		/** @param {Event}				# 值改变时执行 */
	onNameChange, 	/** @param {Event}				# 字段更新时执行 */
	antd			/** @param {Object}				#  */
 }, ref)=>{
	const [ form ] = Form.useForm()
	antd = { className: `${$.css(className)} ${$.css(hideErrorText, 'hideErrorText')}`, name, form, style, labelAlign,
		layout: dir === 'x'?'horizontal':'vertical', 
	...antd }
	
	// 回显默认值: 格式 { value: 100 }
	const setDefaultValue = React.useCallback(function(rows, param) {
		let stack = param ?? { }
		rows = arguments.length === 0 ? data : $fn.getResult( rows )
		if( $fn.hasArray( rows ) ){
			rows.forEach(v=>{ 
				if( $fn.hasObject(v) && ($fn.isNotEmpty(v.value) || $fn.isNotEmpty(v.defaultValue))){ 
					stack[v.name] = v.type.includes('date-range') && v.defaultValue ? $time.duration[v.defaultValue]() : v.value
				}
			})
		}
		if($fn.hasObject(stack)){ form.setFieldsValue( stack ) }
		return stack
	}, [ data, form ])
	
	React.useImperativeHandle( ref, () => ({
		// 提交表单
		submit 	: () => form.submit(),
		// 回显表单
		setValue(){
			if(arguments.length === 1){
				const value = arguments[0]
				if($fn.hasObject( value )){
					form.setFieldsValue(value)
				}else{
					let stack = {}
					if( $fn.hasArray( data ) ){
						data.forEach(({ name, value })=>{
							stack[name] = ''
						})
					}
					form.setFieldsValue(stack)
				}
			}else if(arguments.length === 2){
				form.setFieldsValue({ [arguments[0]]: arguments[1] })
			}else{
				form.setFieldsValue({ })
			}
		},
		// 回显指定数据，其它字段为空
		setEmptyValue(value){
			let stack = {}
			if( $fn.hasArray( data ) ){
				data.forEach(({ name })=>{
					if(value[name]){
						stack[name] = value[name]
					}else{
						stack[name] = ''
					}
				})
			}
			form.setFieldsValue(stack)
		},
		// 重置表单
		reset 	: names => {
			form.resetFields(names)
			setDefaultValue(data, param)
		},
		// 获取 name 字段的值
		getValue : name => $fn.isString(name) ? form.getFieldValue(name) : form.getFieldsValue(),
		getName : name => $fn.isString(name) ? { [name]: form.getFieldValue(name) } : form.getFieldsValue(),
		setDefaultValue,
		validate: () => form.validateFields()
	}))
	
	return (
		<Form
			/* 提交表单且数据验证失败后执行 */
			onFinishFailed = {({ errorFields }) => {
				if($fn.hasArray(errorFields)){
					$fn.msg.warning(errorFields[0]?.errors?.[0])
					form.scrollToField(name)
				}
			}}
			/* 提交表单且数据验证成功后执行 */
			onFinish = { param => form.validateFields().then(values=>onSubmit?.(param)) }
			/* 提交表单且数据验证成功后执行 */
			onValuesChange = { (changedValues, allValues) => onChange?.({ value:changedValues, values:allValues }) }
			/* 字段更新时触发 */
			onFieldsChange = { (changedFields, allFields) => onNameChange?.({ name:changedFields, names:allFields}) }
			{ ...antd }
		>
			{ children }
		</Form>
	)
}
export default Index