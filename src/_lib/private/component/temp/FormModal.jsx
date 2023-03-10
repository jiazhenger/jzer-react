import React, { useState, useImperativeHandle, useRef, useCallback } from 'react'
/* -------------------------------------------------------- Declare -- */
const { $lazy, $fn, $config, $http, $} = window
/* -------------------------------------------------------- Async Component -- */
const Modal = $lazy.hook(()=>import('@antd/modal.jsx'))
const SubmitForm = $lazy.hook(()=>import('#cpt/form/submit-form.jsx'))
/* -------------------------------------------------------- 按钮组配置 -- */
const Index = ( props, ref ) => {
	const [ ajax, setAjax ] = useState({ })
	const [ list, setList ] = useState({ })
	const [ modalConfig, setModalConfig ] = useState( props )
	const submitRef = useRef()
	const tableRef = useRef()
	const formModalRef = useRef()
	const { onSubmit, form, modal } = modalConfig
	const saveConfig = useRef()
	//
	const update = () =>  $.ref(submitRef)?.ref?.()?.update?.()
	// 表单提交回显赋值
	const setBackInfo = useCallback(async config =>{
		let { 
			form = {},
			modal = { },
			tableRef,
			// 添加与编辑
			mode, 						/** @param {String}				# 按钮模式 */
			onAdd, 						/** @param {Event}				# 添加时执行 */
			onMod, 						/** @param {Event}				# 编辑时执行 */
			id, 						/** @param {String}				# id 值 */
			bidStr=$config.pullIdName, 	/** @param {String}			# 回显 id */
			sidStr=$config.postIdName, 	/** @param {String}			# 提交 id 的参数名 */
			// 回显
			backInfo, 					/** @param {Object,Function}	# 回显本地数据 */
			onBackData,					/** @param {Function}			# 自定义回显 */
			backData, 					/** @param {Object,Function}	# 自定义回显 */
			// 流程函数
			onEnd, 						/** @param {Event}				# 结束 */
			//
			param,						/** @param {Object}				# 提交参数 */
			backParam,					/** @param {Object}				# 回显参数 */
			abs, 						/** @param {Boolean}			# 回显参数是否是绝对参数 */
			//
			start,
		} = config
		
		const modalRef = $.ref(formModalRef)
		
		const formRef = $.ref(submitRef)?.ref?.()
		if( !formRef ) {
			return setTimeout(()=> setBackInfo( config ) ,100)
		}
		
		const sendParam = { modal, form, formRef, modalRef, tableRef, start, update, add: mode === 'add', mod: mode === 'mod' }
		
		id = $fn.getResult(id)					// 必选参数 id
		param =  $fn.getResult(param)			// 提交参数
		backParam = $fn.getResult(backParam)	// 回显参数
		
		if(mode === 'add'){
			await onAdd?.(sendParam)
			setAjax.ids = null
			onEnd?.(sendParam)
		}else if( mode === 'mod'){
			await onMod?.(sendParam)
			setAjax.ids = { [sidStr]: id }
			// 接口回显
			if( backInfo ){ 
				backInfo = $fn.getResult(backInfo, sendParam)
				return formRef?.setValue?.( backInfo )
			}
		}else{
			setAjax.ids = null
		}
		
		const { infoApi } = form
		if( infoApi ){
			if( !abs ){ backParam = { [bidStr]: id, ...backParam } } 
			
			id = backParam ? null : id
			await $http.pull(setAjax, infoApi, { id, param:backParam }).then(data=>{
				const p = {...sendParam, id, param, backParam, data }
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
				
				onEnd?.(p)
			})
		}else{
			// 本地数据回显
			backData ? formRef?.setValue?.( $fn.getResult(backData, sendParam) ) : onBackData?.(sendParam)
			onEnd?.(sendParam)
		}
	},[])
	// 打开
	const open = useCallback(async value => {
		let config = value ?? props
		let { 
			modal = { },
			mode, 						/** @param {String}				# 按钮模式 */
			label, 						/** @param {String}				# 按钮名称 */
			onStart, 					/** @param {Function}			# 表单配置 */
		} = config
		
		const modalRef = $.ref(formModalRef)
		
		tableRef.current = config.tableRef		// 单设 tableRef，否则会引起内存泄漏 
		
		let { title, addTitle, modTitle } = modal
		if( mode === 'add' || mode === 'mod' ){
			label = label ?? $config?.btnName?.[mode]
		
			if( title && title !== $config?.btnName?.mod && title !== $config?.btnName?.add ){
				if( title.includes(' - ') ){ 
					title = title.replace(/\s{1}-.*/g,'')
				}
				title = title + ' - ' + label
			}else{
				title = label
			}
		}else{
			title = title ?? label
		}
		
		if( mode === 'add' ){
			config.modal.title = addTitle ? addTitle :  title
			modal.add = true
			modal.mod = false
		}else if( mode === 'mod'){
			config.modal.title = modTitle ? modTitle : title
			modal.add = false
			modal.mod = true
		}else{
			config.modal.title = title
			modal.add = false
			modal.mod = false
		}
		
		if( value ){ 
			setModalConfig(value)
			saveConfig.current = value
		}
		
		const start = await onStart?.() 				// 在操作之前运行
		
		if( start ) { config.start = start }
		
		setBackInfo(config)
		
		modalRef.open()
		
	}, [props,setBackInfo])
	// 关闭
	const close = useCallback(()=> $.ref(formModalRef).close(), [])
	// 点击确定按钮时执行
	const _onOk = useCallback(()=>{
		const formRef = $.ref(submitRef).ref()
		const modalRef = $.ref(formModalRef)
		const param = { param: formRef.getValue(), formRef, modalRef, close: modalRef.close, tableRef:tableRef.current }
		
		const { onOk, modal } = modalConfig
		
		const { tips } = modal ?? {}
		
		if( onOk ){
			return tips ? $fn.confirm({ msg: tips, onOk: ()=> onOk( param ) }) : onOk( param )
		}else{
			tips ? $fn.confirm({ msg: tips, onOk: ()=> formRef.submit() }) : formRef.submit()
			return false
		}
	},[modalConfig])
	// 表单提交时执行
	const _onSubmit = useCallback(({ param, formRef }) =>{
		const SubmitUtils = SubmitForm.ref.SubmitUtils
		const modalRef = $.ref(formModalRef)
		const { title } = modal
		SubmitUtils({ onSubmit, ajax:setAjax, param, submitConfig:saveConfig.current.form, formRef, title, tableRef:tableRef.current, modalRef })
	},[setAjax, modal, onSubmit])
	
	// Expose
	useImperativeHandle( ref, () => ({
		open,
		close,
		formRef: () => $.ref(submitRef)
	}))
	return (
		<Modal ref={formModalRef} formRef={()=>$.ref(submitRef).ref()} onOk={_onOk} loading={ajax.loading} {...modal}>
			<SubmitForm
				ref 		= { submitRef }
				scroll 		= { false } 
				paddingClass= { 0 } 
				controls	= { false } 
				isSubmitForm= { false }
				listData 	= { list }
				{ ...form }
				onSubmit 	= { _onSubmit }
			/>
		</Modal>
	)
}
export default Index