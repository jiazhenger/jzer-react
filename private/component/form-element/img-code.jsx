import React from 'react'
/* -------------------------------------------------------- Declare -- */
const { $lazy, $http } = window
/* -------------------------------------------------------- Async Component -- */
const Input = $lazy.load(()=>import('@antd/form/input'))
/* -------------------------------------------------------- 回到顶部 -- */
const Index = ({ 
	className,						/** @param {String}				# 盒子 className */
	style, 							/** @param {String}				# 盒子 style */
	name, 							/** @param {String}				# name */
	label,							/** @param {String}				# 标签名 */
	size='small', 					/** @param {String}				# 大小 */
	p,								/** @param {String}				#  */
	//
	value,							/** @param {Number}				# 值 */
	disabled,						/** @param {Boolan}				# 禁用 */
	// 获取值
	onChange,						/** @param {Event}				# 有 Form 时值改变时执行 */
	onChanged,						/** @param {Event}				# 值改变时执行 */
	onClick,						/** @param {Event}				# 点击图片时执行 */
	// 自定义扩展
	input = {},						/** @param {Object}				# antd */
	// 
	api,							/** @param {String}				# 请求 api */
	src,							/** @param {String}				# 图片 */
	idStr='id',						/** @param {String}				#  */
	imgStr='img',					/** @param {String}				#  */
	param, 							/** @param {Object}				# 提交额外参数 */
})=> {
	const [ codeSrc, setCodeSrc ] = React.useState( src )
	
	input = { 
		className, disabled, p, label, name, size,
		value,
		out:1,
		...input
	}

	React.useEffect(()=> setCodeSrc( src ), [ src ])

	const onCode = React.useCallback(() => {
		if(api){
			$http.post(null, api, { token:false, loadingText:'数据加载中' }).then( data => {
				const img = data[imgStr]
				const src = img.includes('base64') ? img : (`data:image/jpg;base64,${img}`).replace(/[\r\n]/g,'')
				setCodeSrc( src )
				if(data[idStr] && param){
					param[idStr] = data[idStr]
				}
			})
		}else{
			onClick?.()
		}
	},[ api, imgStr, idStr, onClick, param ])
	
	React.useEffect(()=> onCode(), [ onCode ])
	
	const _onChange = value => {
		let result = name ? { model: {[name]: value} } : null
		onChange?.( value )
		onChanged?.({ value, label, ...result  })
	}
	
	return (
		<div className='fx'>
			<Input onChange={_onChange} {...input} />
			<div className='ml5' style={{height:34}}>
				{ codeSrc && <img src={codeSrc} className='cp nowrap h' onClick={onCode} alt='图片验证码'/> }
			</div>
		</div>
	)
}

export default Index