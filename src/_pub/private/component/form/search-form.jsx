import React, { useEffect, useState, useImperativeHandle, useRef, useCallback } from 'react'
/* -------------------------------------------------------- antd-- */
import { DownCircleOutlined } from '@ant-design/icons'
/* -------------------------------------------------------- Sync Component -- */
import ItemList from './item/item-list'
/* -------------------------------------------------------- Declare -- */
const { $lazy, $fn, $, $config } = window
/* -------------------------------------------------------- Async Component -- */
const Form = $lazy.hook(()=>import('@antd/form/layout/form'))
const FormItem = $lazy.load(()=>import('@antd/form/layout/item'))
const Controls = $lazy.load(()=>import('#cpt/temp/Controls'))
/* -------------------------------------------------------- 按钮组配置 -- */
const Index = ({
	className, 								/** @param {Boolean}			# 盒子 className */
	style, 									/** @param {Boolean}			# 盒子 style */
	data, 									/** @param {String}				# 列表数据 */
	onInit, 								/** @param {Event}				# 初始化函数 */
	onChange, 								/** @param {Event}				# 表单改变时执行 */
	onChanged, 								/** @param {Event}				# 元素改变时执行 */
	onSubmit, 								/** @param {Event}				# 提交表单时执行 */
	onReset, 								/** @param {Event}				# 重置时执行 */
	loading, 								/** @param {Boolean}			# 加载 */
	disabled, 								/** @param {Boolean}			# 禁用 */
	readOnly, 								/** @param {Boolean}			# 只读 */
	size='search',							/** @param {String}				# 元素大小 */
	dir='x',								/** @param {String}				# 表单排列方向 */
	x=true,									/** @param {String}				# 表单排列方向 */
	colon,									/** @param {Boolean}			# 是否有冒号 */
	resetText='重置',						/** @param {String}				# 取消字段 */
	hideReset,								/** @param {String}				# 是否隐藏取消字段 */
	width=160,								/** @param {Number}				# 全部默认宽度 */
	controls={},							/** @param {Object}				# 操作按钮配置 */
	cache=$config.cache,					/** @param {Boolan}				# 是否缓存 */
	openPos,								/** @param {String}				# 伸缩按钮位置 right、center */
	show=true,								/** @param {Boolan}				# 显示隐藏 */
	/* --------------------------- SearchForm 配置 --------------------------- */
	labelWidth, 							/** @param {String}				# 标签宽度 */
	padding='8px 0', 						/** @param {String}				# 搜索盒子补白 */
	param,									/** @param {Object}				# 搜索默认参数 */
	query,									/** @param {Object}				# 搜索固定参数 */
	// 插入组件
	prefix,									/** @param {Component}			# 前插入组件 */
	suffix,									/** @param {Component}			# 后插入组件 */
	gapX=8, 								/** @param {Component}			# 横向间距 */
	gapY=5									/** @param {Component}			# 纵向间距 */
}, ref) => {
	const formRef = useRef()
	const [ open, setOpen ] = useState(false)
	const [ hide, setHide ] = useState(true)
	// 设置底部按钮
	if( $fn.isObject(controls) ){
		controls.align = controls?.align ?? 'center'
		controls.size = controls?.size ?? 'middle'
	}
	
	const setControls = useCallback( formRef =>{
		const rsCtr = $fn.getResult(controls,{ formRef })
		if( $fn.isObject( rsCtr ) ){
			const { search, reset, before=[], after=[] } = rsCtr
			return ([
				...before,
				{ label:'重置', ghost:1, mode:'reset', click:()=> {
					formRef.reset()
					onReset?.(formRef)
				}, ...reset},
				{ label:'搜索', mode:'search',ghost:1, antd: { htmlType:'submit', disabled, ...search } },
				...after,
			]).map(v => ({ disabled,  ...v }) )
		}else{
			return controls
		}
	},[ disabled, controls, onReset ])
	
	useEffect(()=>setBtnData( setControls( formRef ) ),[ disabled ])  // eslint-disable-line
	
	const domRef = useRef()
	const [ result, setResult ] = useState( $fn.getResult( data ) )
	const [ btnData, setBtnData ] = useState([])
	
	let controlsMt = 0
	let paddingStyle = { padding }
	if( !x ){
		controlsMt = gapY
		controls.align = controls.align !== 'center' ? controls.align : 'start'
	}
	
	// FormItem
	const itemList = { size, colon, width, readOnly, onChanged, gapX, gapY, x, cache,
		data:result, 
		mt:0, 
		isSearch:true,
		disabled: disabled || loading, 
		className: $.css(x,'ex'),
		onInit: ()=>{
			if(openPos){
				const h = domRef.current.children[0].clientHeight
				setHide( h <= 26 )
			}
		}
	}
	const ContentComponent = <ItemList {...itemList}/>
	
	// 更新 data 数据
	const update = data => {
		if($fn.hasArray(data)){
			setResult( [ ...data ])
		}else{
			setResult( d => [ ...d ])
		}
	}
	
	useImperativeHandle( ref, () => ({
		ref: () => ({ 
			...$.ref(formRef), 
			update,
			updateControls: () => setBtnData( setControls( formRef ) )
		})
	}))
	
	return (
		<Form
			ref			= { formRef }
			className	= {`jzer-form jzer-form-${size} ${$.css(x, 'fx')} rel ${$.css(className)} ${$.css(labelWidth)}`}
			style 		= {{ zIndex:2, display: show ? 'flex' : 'none', ...paddingStyle, ...style}}
			dir			= { dir }
			onChange 	= { onChange }
			onNameChange= { value => { }}
			data 		= { result }
			param 		= { param }
			onRef 		= { formRef => {
				// 配置默认参数
				param = $fn.getResult(param)
				query = $fn.getResult(query)
				const queryParam = { ...query, ...param }
				
				formRef.setDefaultValue( result, param )
				
				onInit?.({ formRef, param, query, queryParam })
				
				setBtnData( setControls( formRef ) )
			} }
			onSubmit 	= { formParam => {
				param = $fn.getResult(param)
				query = $fn.getResult(query)
				param = { ...query, ...param, ...formParam }
				onSubmit?.( param )
			}}
		>
			<>
				{ prefix }
				{
					openPos ? <div className='ease ex' style={ {height: open ? domRef.current.children[0].clientHeight : 26, overflow:'hidden'}} ref={domRef}>{ ContentComponent }</div>
							: ContentComponent
				}
				{ suffix }
			</>
			{
				controls !== false && (
					<FormItem label='&nbsp;' colon={false} mt={controlsMt} {...controls?.item}>
						{
							(hide && !openPos) ? <Controls loading={loading} align={controls?.align} size={size} data={btnData} {...controls?.config} /> : (
								<div className='fxm'>
									<Controls loading={loading} align={controls?.align} size={size} data={btnData} {...controls?.config} />
									{
										( openPos === 'right' && x) && <DownCircleOutlined className={`open-handle ease  ${$.css(open,'rotate-up')}`} style={{color:$config.mainColor, marginLeft:5, fontSize:20, cursor:'pointer'}} onClick={()=>setOpen(d=>!d)} />
									}
								</div>
							)
						}
					</FormItem>
				)
			}
			{
				( openPos === 'center' && (x && !hide) ) && (
					<div className='abs_lb w fxmc' style={{bottom: -12}}>
						<DownCircleOutlined className={`open-handle ease  ${$.css(open,'rotate-up')}`} style={{color:$config.mainColor, marginLeft:5, fontSize:20, cursor:'pointer'}} onClick={()=>setOpen(d=>!d)} />
					</div>
				)
			}
		</Form>
	)
}
export default Index