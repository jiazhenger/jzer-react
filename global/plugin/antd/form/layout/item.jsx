import React from 'react'
/* -------------------------------------------------------- antd -- */
import { Form } from 'antd'
/* -------------------------------------------------------- FormItem -- */
const Index = ({
	children, 		/** @param {Compoennt}			# Slot */
	className, 		/** @param {String}				# 样式 className */
	//
	style,			/** @param {Object}				# 样式 style */
	mt,				/** @param {String}				# 上边距 */
	ml,				/** @param {String}				# 左边距 */
	mr,				/** @param {String}				# 右边距 */
	mb=0,			/** @param {String}				# 下边距 */
	full,			/** @param {Boolean}			# 宽度 100% */
	half,			/** @param {Boolean}			# 宽度 50% */
	width,			/** @param {String}				# 具体宽度 */
	//
	name, 			/** @param {String}				# 表单提交字段 */
	label,			/** @param {String}				# 标签名 */
	colon,			/** @param {Boolean}			# 是否有冒号 */
	noStyle,		/** @param {Boolean}			# 无样式 */
	rules,			/** @param {Array, Object}		# 校验规则 */
	antd			/** @param {Object}				#  */
}) => {
	if(!width){
		if( full ) { width = '100%' }
		else if( half ) { width = '50%' }
	}
	style = { width, marginBottom:mb || 0, marginTop: mt, marginLeft:ml, marginRight:mr, ...style }
	antd = { className, name, label, colon, noStyle, rules, style, ...antd }
	return <Form.Item {...antd}>{ children }</Form.Item>
}

export default Index