import React, { useState, useImperativeHandle, useEffect, useCallback } from 'react'
/* -------------------------------------------------------- antd -- */
import { Modal } from 'antd'
/* -------------------------------------------------------- Declare -- */
const {  $lazy, $, $fn } = window
/* -------------------------------------------------------- Async Component -- */
const Controls = $lazy.load(()=>import('#cpt/temp/Controls'))
const Loading 	= $lazy.load(()=>import('@antd/loading'))
/* -------------------------------------------------------- 菜单 -- */
const Index = (props, ref) => {
	const [ config, setConfig ] = useState( props )
	let {
		style, 				/** @param {Object}				# 盒子 bodyStyle */
		children, 			/** @param {Compoennt}		 	# Slot */
		slot, 				/** @param {Compoennt}		 	# Slot */
		onClose, 			/** @param {Event}		 		# 关闭后执行 */
		onOk, 				/** @param {Event}		 		# 确认时执行 */
		onCancel, 			/** @param {Event}		 		# 点击取消时执行 */
		scroll=true, 		/** @param {Boolean}		 	# 是否滚动 */
		full=false, 		/** @param {Boolean}		 	# 关闭时销毁 Modal 里的子元素 */
		destroy=true, 		/** @param {Boolean}		 	# 关闭时 */
		loading, 			/** @param {Boolean}		 	# 按钮加载效果 */
		disabled, 			/** @param {Boolean}		 	# 禁用 */
		loadingSize,		/** @param {Boolean}		 	# 加载大小 */
		mode,				/** @param {Number}		 		# 弹框模式 */
		// 标题
		title, 				/** @param {String}		 		# 标题 */
		subTitle, 			/** @param {String}		 		# 副标题 */
		titleAfter, 		/** @param {Component}		 	# 标题是否居中 */
		titleRight, 		/** @param {Component}		 	# 标题是否居中 */
		center=true, 		/** @param {Boolean}		 	# 标题是否居中 */
		//
		controls={},		/** @param {Object, Array, Boolean}	# 操作按钮  */
		//	
		open, 			/** @param {Boolean}		 		# 对话框是否可见 */
		width, 				/** @param {Number, String}			# 弹窗宽度 */
		height, 			/** @param {Number, String}			# 弹窗高度 */
		antd = {},			/** @param {Object}					# antd */
	} = config
	
	const close = useCallback(() => {
		setShow(false)
		onClose?.()
	},[ onClose ])

	useEffect(() => {
		setConfig(props)
	}, [props])

	// 设置底部按钮
	const setControls = useCallback(controls =>{
		const { add, mod } = config
		controls = $fn.getResult(controls,{ close, add, mod })
		if( $fn.isObject( controls ) ){
			let { ok, cancel, before=[], after=[] } = controls
			if( cancel === true || cancel === 0) cancel = { hide: true }
			if( ok === true || ok === 0) ok = { hide: true }
			return [
				...before,
				{ label:'取消', type:'default', click:()=>{
					const _onCancel = controls?.onCancel ?? onCancel
					const bool = _onCancel?.(close)
					if( bool !== false ){
						close()
					}
				}, ...cancel },
				{ label:'确认', click:()=>{
					if( onOk?.(close) === true){
						close()
					}
				}, ...ok },
				...after,
			]
		}else{
			return controls
		}
	},[close, onCancel, onOk, config])
	
	const [ show, setShow ] = useState( open )
	
	const openModal = value => {
		setShow(true)
		if( $fn.hasObject( value ) ){ setConfig( value ) }
	}
	
	const c = controls !== false || controls !== 0 ? 45 : 0
	const t = title ? 40 : 0
	const maxHeight = scroll ? (document.body.clientHeight - c - t ) + 'px' : '100%' 
	
	const btnData = setControls( controls )
	const _controls = controls !== false && controls !== 0 ? (
		<Controls data={btnData} align={controls?.align ?? 'center'} size={controls?.size ?? 'middle'} disabled={disabled} loading={loading} />
	) : null
	
	const _title = $fn.isString( title ) ? (
		<div className={`f13 ${center ? 'fxmc' : 'fxm'}`}>
			<b className='f15'>{title}</b>
			{ subTitle && <span className='c0 n ml5'>( { subTitle } )</span>}
			{titleAfter}
			{titleRight}
		</div>
	) : title
	
	if(full){
		width = '100%'
		height = '100%'
	}
	
	antd = { title:_title, open: show, footer:_controls, width, height, 
		destroyOnClose:destroy,
		maskClosable: false,
		wrapClassName: `jzer-modal-wrap ${$.css(scroll, 'jzer-modal-scroll')} ${ $.css(full,'jzer-modal-full') } ${$.css(mode, 'jzer-modal-mode-' + mode)} ${$.css(loading,'jzer-modal-scroll-hidden')}`,
		bodyStyle: { padding:10, maxHeight, ...style },
		...antd
	}
	
	useImperativeHandle( ref, () => ({
		open:openModal,
		close
	}))
	
	return (
		<Modal onCancel={close} {...antd}>
			{ children }
			{ $.cpt( slot ) }
			<Loading loading={loading} size={loadingSize} style={{position: scroll ? 'fixed' : 'absoulte'}} />
		</Modal>
	)
}

export default Index