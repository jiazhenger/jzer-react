import React, { useState, useEffect, useImperativeHandle, useRef } from 'react'
/* -------------------------------------------------------- Sync Function -- */
import SubmitUtils from '#cpt/utils/submit'
/* -------------------------------------------------------- Sync Component -- */
import ItemListComponent from './item/item-list.jsx'
/* -------------------------------------------------------- Declare -- */
const { $lazy, $, $fn, $http, $config } = window
/* -------------------------------------------------------- Async Component -- */
const Form = $lazy.hook(()=>import('@antd/form/layout/form.jsx'))
const FormItem = $lazy.load(()=>import('@antd/form/layout/item.jsx'))
//
const Scrolll = $lazy.load(()=>import('@tp/scroll.jsx'))
const Controls = $lazy.load(()=>import('#cpt/temp/Controls.jsx'))
const Loading = $lazy.load(()=>import('@antd/loading.jsx'))
/* -------------------------------------------------------- 按钮组配置 -- */
const Index = (props, ref) => {
	let {
		className, 				/** @param {String}				# 盒子 className */
		style, 					/** @param {Object}				# 盒子 style */
		data, 					/** @param {String}				# 列表数据 */
		onInit, 				/** @param {Event}				# 初始化函数 */
		onChange, 				/** @param {Event}				# 表单改变时执行 */
		onChanged, 				/** @param {Event}				# 元素改变时执行 */
		onSubmit, 				/** @param {Event}				# 提交表单时执行 */
		loading, 				/** @param {Boolean}			# 加载 */
		disabled, 				/** @param {Boolean}			# 禁用 */
		readOnly, 				/** @param {Boolean}			# 只读 */
		size='submit',			/** @param {String}				# 元素大小 */
		dir='x',				/** @param {String}				# 表单排列方向 */
		x,						/** @param {String}				# 表单排列方向 */
		colon=true,				/** @param {Boolean}			# 是否有冒号 */
		loadingSize,			/** @param {Boolean}		 	# 加载大小 */
		width,					/** @param {Number}				# 全部默认宽度 */
		controls={},			/** @param {Object}				# 操作按钮配置 */
		form, 					/** @param {Object}				# 存储值 */
		submit, 				/** @param {Object}				# 额外值 */
		hideErrorText, 			/** @param {Boolean}			# 是否隐藏提示文字 */
		nowrap, 				/** @param {Boolean}			# 是否换行排列 */
		/* --------------------------- SubmitForm 配置 --------------------------- */
		labelWidth='s4', 		/** @param {String}				# 标签宽度 */
		mb=20, 					/** @param {Number}				# 间距 */
		loadingMode=0, 			/** @param {Boolean}			# 加载模式 */
		paddingClass='p10', 	/** @param {String}				# 除按钮之外的表单内容补白 */
		padding=8, 				/** @param {String}				# 整个盒子补白 */
		// submit
		scroll=true, 			/** @param {Boolean}			# 是否滚动 */
		scrollConfig,			/** @param {Object}				# 滚动配置 */
		// 插入组件
		prefix,					/** @param {Component}			# 前插入组件 */
		suffix,					/** @param {Component}			# 后插入组件 */
		//
		isSubmitForm=true, 		/** @param {Boolean}			# 是否仅为 SubmitForm */
		hasMaskLoading, 		/** @param {Boolean}			# 是否有遮罩加载效果 */
		// http
		// http={},				/** @param {Object}				# 数据请求配置 */
		api,					/** @param {String}				# api */
		param,					/** @param {Object}				# 默认提交参数 */
		cache=$config.cache,	/** @param {Boolan}				# 是否缓存 */
		mod,					/** @param {Boolan}				# 是否编辑 */
		add,					/** @param {Boolan}				# 是否新增 */
		listData,				/** @param {Object}				# 回显数据 */
		mode,					/** @param {Object}				# 模式 */
		way,					/** @param {Object}				# 提交方式 */
	} = props
	const [ list, setList ] = useState( listData )
	const submitRef = useRef()
	// 设置底部按钮
	if( $fn.isObject(controls) ){
		controls.align = controls?.align ?? 'center'
		controls.size = controls?.size ?? 'middle'
	}
	
	const setControls = formRef =>{
		controls = $fn.getResult(controls,{ formRef })
		if( $fn.isObject( controls ) && !controls.data ){
			const { ok, back, reset, before=[], after=[], antd } = controls
			return [
				...before,
				$fn.isObject( back ) ? {label:'返回', type:'default', mode:'back', click:()=>{
					const bool = controls?.onBack?.(formRef)
					if( bool !== false ){
						$fn.back()
					}
				}, ...back } : null,
				$fn.isObject( reset ) ? {label:'重置', ghost:true, mode:'reset', click:()=> {
					formRef.reset()
					controls?.onReset?.(formRef)
				}, ...reset} : null,
				ok !== false && ok !== 0 ? {label:'提交', antd: { htmlType:'submit', ...antd }, ...ok  } : null,
				...after,
			]
		}else{
			return controls.data
		}
	}
	//
	const [ ajax, setAjax ] = useState({ loading })
	const [ result, setResult ] = useState( $fn.getResult( data, { mod, add } ) )
	const [ btnData, setBtnData ] = useState([])
	// 加载效果
	useEffect(()=>{
		if( loading !== undefined && !api){
			setAjax(() => ({ loading }))
		}
	},[ loading, api ])
	// 监听 data 变化
	useEffect( ()=> setResult( $fn.getResult( data, { mod, add } ) ) ,[ data, mod, add ] )
	useEffect( ()=> setList(listData) ,[ listData ] )
	// 表单提交回显赋值
	const setBackInfo = formRef => {
		let { onBackData, backData, infoApi, api, id, idStr=$config.postIdName, backParam, abs, onAdd, onEnd, mode } = props
		backParam = $fn.getResult(backParam)	// 回显参数
		
		infoApi = infoApi || api
		
		if( mode === 'add'){ return onAdd?.() }
		
		if( id || mode === 'mod' || mode === 'info' ){
			id = $fn.getResult(id)
			if( !abs ){ backParam = id ? { [idStr]: id, ...backParam } : backParam }
			id = backParam ? null : id
			
			if(props.infoApi !== false || props.infoApi !== 0){
				$http.pull(setAjax, infoApi, { id, param:backParam }).then(data=>{
					const p = {data, formRef}
					if( mode === 'list' ){
						setList(data)
					}else{
						if( onBackData ){
							onBackData?.( p )
						}else{
							backData = $fn.getResult(backData, p)
							formRef?.setValue?.({...data,...backData})
						}
					}
					onEnd?.( p )
				})
			}else{
				const sendParam = { config:props, formRef }
				// 本地数据回显
				backData ? formRef?.setValue?.( $fn.getResult(backData, sendParam) ) : onBackData?.(sendParam)
				onEnd?.(sendParam)
			}
		}
	}
	// 更新 data 数据
	const update = data => {
		if($fn.hasArray(data)){
			setResult( [ ...data ])
		}else{
			setResult( d => [ ...d ])
		}
	}
	
	const expose = { 
		...$.ref(submitRef), 
		update
	}
	//
	useImperativeHandle( ref, () => ({
		ref: () => expose,
		SubmitUtils
	}))
	
	let controlsMt = scroll ? 0 : 10
	let paddingStyle = null
	if( x ){
		scroll = false
		labelWidth = null
		if($fn.isObject(controls)){ controls.size = size }
		controlsMt = 0
		paddingStyle = { padding }
	}
	
	// FormItem
	const itemList = { size, colon,  width, mb, readOnly, onChanged, x, cache, form, submit, nowrap, ctrlMode:mode,
		data:result,
		listData: list,
		paddingClass: x ? '' : $.css(!scroll, paddingClass),
		className: $.css(x,'ex'),
		disabled: disabled || (loadingMode === 0 ? ajax.loading : false), 
		formRef: () => $.ref(submitRef),
		expose
	}
	const ContentComponent = <ItemListComponent {...itemList}/>
	
	return (
		<Form
			ref 			= { submitRef }
			className		= {`rel jzer-form jzer-form-${size} ${$.css(scroll, 'fv ex')} ${$.css(x, 'fx')} ${ labelWidth } ${$.css(className)}`}
			style 			= {{ ...paddingStyle, ...style}}
			dir				= { dir }
			onChange 		= { onChange }
			onNameChange	= { value => { }}
			data 			= { result }
			param 			= { param }
			hideErrorText 	= { hideErrorText }
			onRef 		= { formRef => {
				// 配置默认参数
				param = $fn.getResult(param)
				
				formRef.setDefaultValue( result, param )
				
				if( isSubmitForm ){ setBackInfo( formRef ) }
				
				onInit?.({ formRef, param, data })
				
				setBtnData( setControls( formRef ) )
			} }
			onSubmit 		= { param => {
				const formRef = $.ref(submitRef)
				const back = submit?.back
				if(back){
					submit = { ...back, ...submit }
					if( $fn.hasObject(back) ){ delete submit.back }
				}
				param = { ...submit, ...param }
				if( isSubmitForm ){
					SubmitUtils({ onSubmit, param, submitConfig:props, ajax:setAjax, formRef, form, way })
				}else{
					onSubmit?.({ param, formRef, form  })
				}
			}}
		>
			{
				scroll ? (
					<div className={`ex rel`}>
						<Scrolll className={$.css(paddingClass)} {...scrollConfig}>
							{ prefix }
							{ ContentComponent }
							{ suffix }
						</Scrolll>
					</div>
				) : (
					<>
						{ prefix }
						{ ContentComponent }
						{ suffix }
					</>
				)
			}
			{
				(controls !== false && controls !== 0 ) && (
					<FormItem className={`${$.css(scroll,'tbor1')}`} label='&nbsp;' colon={false} mt={controlsMt} {...controls?.item}>
						<Controls loading={loadingMode === 0 ? ajax.loading : false} className={$.css(!x && scroll,controls?.paddingClass ?? 'p10')} align={controls?.align} size={controls?.size} data={btnData} {...controls?.config} />
					</FormItem>
				)
			}
			{
				(loadingMode === 1 || hasMaskLoading) && <Loading loading={ajax.loading} loadingSize={loadingSize} />
			}
		</Form>
	)
}
export default Index