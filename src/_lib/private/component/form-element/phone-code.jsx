import React from 'react'
/* -------------------------------------------------------- Declare -- */
const { $lazy, $fn, $http } = window
/* -------------------------------------------------------- Async Component -- */
const Input = $lazy.load(()=>import('@antd/form/input.jsx'))
const Button = $lazy.load(()=>import('@antd/button.jsx'))
/* -------------------------------------------------------- 回到顶部 -- */
const Index = ({ 
	className,						/** @param {String}				# 盒子 className */
	style, 							/** @param {String}				# 盒子 style */
	name, 							/** @param {String}				# name */
	label,							/** @param {String}				# 标签名 */
	size='small', 					/** @param {String}				# 大小 */
	p,								/** @param {String}				#  */
	formRef, 						/** @param {Object}				# formRef */
	phoneStr='phone', 				/** @param {Object}				# 手机号字段名 */
	duration=60, 				/** @param {String}				# 默认时长 */
	//
	value,							/** @param {Number}				# 值 */
	disabled,						/** @param {Boolan}				# 禁用 */
	// 获取值
	onChange,						/** @param {Event}				# 有 Form 时值改变时执行 */
	onChanged,						/** @param {Event}				# 值改变时执行 */
	// 自定义扩展
	input = {},						/** @param {Object}				# input */
	btn = {},						/** @param {Object}				# btn */
	// 
	api,							/** @param {String}				# 请求 api */
	param,							/** @param {Object}				# 请求 参数 */
})=> {
	const [ btnDisabled, setBtnDisabled ] = React.useState(  )
	const [ time, setTime ] = React.useState( duration )
	const [ txt, setTxt ] = React.useState( '发送验证码' )
	
	input = { 
		disabled, p, label, name, size,
		out:1,
		value,
		...input
	}
	
	const _onChange = value => {
		
		let result = name ? { model: {[name]: value} } : null
		
		onChange?.( value )
		onChanged?.({ value, label, ...result  })
	}
	
	const onSendCode = () => {
		if(btnDisabled){ return }
		
		const tel = formRef().getValue(phoneStr)
		
		if(tel === '' || tel === undefined || tel === null){ return $fn.msg.warning('电话不能为空') }
		
		if( !/^(13[0-9]|14[01456879]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[0-3,5-9])\d{8}$/.test(tel) ){ return $fn.msg.warning('手机号码不合法') }
		
		if( api ){
			setBtnDisabled(true)
		}else{
			return $fn.msg.error('请传递验证接口')
		}
		
		$http.post(null,api,{
			param 	: { [phoneStr]:tel, ...param }, 
			token	: false, 
			onAny 	: ()=> { formRef().setValue({ [name]:'' }) },
			onError	: () => { setBtnDisabled(false) }
		}).then(data=>{
			const cleartime = setInterval(()=>{
				setTxt('后重新获取')
				setTime( time => {
					time --
					if(time <= 0){
						clearInterval(cleartime);
						time = duration
						setTxt('重新获取验证码')
						setBtnDisabled(false)
					}
					return time
				})
			},1000)
		})
	}
	
	return (
		<div className='fx'>
			<Input onChange={_onChange} {...input} />
			<Button className='ml10' onClick={onSendCode}  disabled={btnDisabled || disabled}  size={size} ghost {...btn}>
				{
					(btnDisabled && !disabled) ? (
						<>
							<b className='f14' style={{color:'red'}}>{time}<i style={{marginLeft:2}}>s</i></b>
							<span style={{marginLeft:2}}>后重新获取验证码</span>
						</>
					) : txt
				}
			</Button>
		</div>
	)
}

export default Index