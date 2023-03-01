import React from 'react'
/* -------------------------------------------------------- antd -- */
import { DatePicker } from 'antd'
import moment from 'moment'
import Utils from './utils'
/* -------------------------------------------------------- Declare -- */
const { $fn } = window
/* -------------------------------------------------------- 回到顶部 -- */
const Index = ({
	style, 							/** @param {String}				# 盒子 style */
	name, 							/** @param {String}				# name */
	label,							/** @param {String}				# 标签名 */
	s='-',							/** @param {String}				# 分割符 */
	format=0,						/** @param {String}				# 格式 */
	p,								/** @param {String}				# 提示语 */
	hint='请选择',					/** @param {String}				# 提示语 */
	width,							/** @param {String}				# 宽度 */
	type,							/** @param {String}				# 时间类型 */
	after,							/** @param {Boolan, String}		# 之后可选 */
	before,							/** @param {Boolan, String}		# 之前可选 */
	today,							/** @param {Boolan}				# 是否包含当天 */
	out,							/** @param {Number}				# 在外部设置 value 值 */
	//
	value,							/** @param {Number}				# 值 */
	disabled,						/** @param {Boolan}				# 禁用 */
	allowClear=true,				/** @param {Boolan}				# 显示清除按钮 */
	// 获取值
	onChange,						/** @param {Event}				# 有 Form 时值改变时执行 */
	onChanged,						/** @param {Event}				# 值改变时执行 */
	form, 							/** @param {Object}				# 存储值 */
	// 自定义扩展
	antd = {},						/** @param {Object}				# antd */
	//
	start, 						/** @param {String}				# 是否固定开始时间 */
	end='23:59:59', 							/** @param {String}				# 是否结束开始时间 */
})=> {
	const [ model, setModel ] = React.useState()
	
	const isRange = type === 'date-range' 
	
	p = p ? p : hint + label
	
	const formatType = [
		`YYYY${s}MM${s}DD`,
		`YYYY${s}MM${s}DD HH:mm:ss`,
		`YYYY${s}MM${s}DD HH:mm`,
	]
	
	let _format = format
	
	if(antd.picker === 'year'){ 
		_format = 'YYYY'
	}else {
		if($fn.isNumber(format)){ _format = formatType[format] }
	}
	// 是否显示时分秒选择面板
	const isShowTime = formatType[format].indexOf('HH') !== -1
	// 时分秒的默认值
	let showTime = null
	if( isRange ){
		if( isShowTime ){
			if( start === 0){ start = '00:00:00' }
			if( end === 0){ end = '00:00:00' }
			const timeStart = start ? moment(start, 'HH:mm:ss') : null
			const timeEnd = end ? moment(end, 'HH:mm:ss') : null
			showTime = { defaultValue: [ timeStart, timeEnd ]  }
		}
	}else{
		if(isShowTime){
			if( start === 0){ start = '00:00:00' }
			showTime = start ? { defaultValue: moment(start, 'HH:mm:ss') } : true
		}
	}
	
	React.useEffect(()=> {
		setModel( () => {
			if( isRange && $fn.hasArray( value ) ){
				const start = value?.[0] ? moment(value[0], _format) : null
				const end = value?.[1] ? moment(value[1], _format) : null
				return [start, end]
			}else{
				return value ? moment(value, _format) : null
			}
		} )
	}, [ value ]) // eslint-disable-line
	
	const _onChange = (momentDate, value) => {
		
		if(!out){ setModel( momentDate ) }
		
		onChange?.( value )
		
		if( onChanged || form ){
			const result = $fn.getFormFormat({label, name, value, form, formType:'text' })
			onChanged?.(result)
		}
	}
	
	antd = {
		disabled, allowClear, p,
		value : model,
		style: { width, ...style },
		//
		showTime,
		format: _format,
		disabledDate: current => Utils.disabledDate({ current, after, before, today, moment }),	// 禁用年月日
		disabledTime: isShowTime ? ()=>Utils.disabledTime({ after, before }) : null,			// 禁用时分秒
		onChange:_onChange,
		// date-range
		allowEmpty: isRange ? [true, true] : null,
		...antd
	}
	return isRange ? <DatePicker.RangePicker {...antd} /> : <DatePicker  {...antd} />
}

export default Index