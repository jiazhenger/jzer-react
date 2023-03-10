import React, { useState, useImperativeHandle, useRef, useCallback } from 'react'
/* -------------------------------------------------------- Sync Function -- */
import SubmitUtils from '#cpt/utils/submit'
/* -------------------------------------------------------- Declare -- */
const { $fn, $http, $config, $lazy, $ } = window
/* -------------------------------------------------------- Async Component -- */
const Modal = $lazy.hook(()=>import('@antd/modal.jsx'))
const SearchTable = $lazy.hook(()=>import('#cpt/temp/SearchTable.jsx'))
/* -------------------------------------------------------- 按钮组配置 -- */
const Index = ( props, ref ) => {
	const [ ajax, setAjax ] = useState({ })
	const [ modalConfig, setModalConfig ] = useState( props )
	const tableModalRef = useRef()
	const searchTableRef = useRef()
	const { modal, search, table } = modalConfig
	
	// 表单提交回显赋值
	const setBackInfo = useCallback(async config =>{
		let {
			tableRef,						/** @param {Object}				# 主表格 */
			// 添加与编辑
			id, 							/** @param {Object}				# id 值 */
			bidStr=$config.pullIdName, 		/** @param {String}				# 回显 id */
			sidStr=$config.postIdName, 		/** @param {String}				# 提交 id 的参数名 */
			//
			keyNameStr, 					/** @param {String}				# 指定回显 keys 的字段 */
			// 回显
			infoApi, 						/** @param {String}				# 回显 api */
			onBackData,						/** @param {Function}			# 自定义回显 */
			backData, 						/** @param {Object, Function}	# 自定义回显 */
			// 流程函数
			onEnd,							/** @param {Object}				# 结束 */
			//
			param,							/** @param {Object}				# 提交参数 */
			backParam,						/** @param {Object}				# 回显参数 */
			abs, 							/** @param {Object}				# 回显参数是否是绝对参数 */
			// 
			start,
			table,
		} = config
		const modalTableRef = $.ref(searchTableRef)?.tableRef?.()
		if( !modalTableRef ) {
			return setTimeout(()=> setBackInfo( config ) ,100)
		}
		
		const modalRef = $.ref(tableModalRef)
		
		id = $fn.getResult(id)					// 必选参数 id
		param =  $fn.getResult(param)			// 提交参数
		backParam = $fn.getResult(backParam)	// 回显参数
		const backKeys = Boolean(table?.row)
		const sendParam = { config, modalRef, tableRef, modalTableRef, start }
		
		setAjax.ids = id ? { [sidStr]: id } : null
		
		// 接口回显
		if( infoApi ){
			if( !abs ){ backParam = { [bidStr]: id, ...backParam } }
			id = backParam ? null : id
			await $http.pull(setAjax, infoApi, { id, param:backParam }).then(data=>{
				const p = {...sendParam, id, param, backParam, data }
				if( onBackData ){
					onBackData?.( p )
				}else{
					if(backData){
						backData = $fn.getResult(backData, p)
						if( backKeys ){
							modalTableRef.keys( backData )
						}
					}else{
						if( backKeys ){
							if($fn.hasArray(data)){
								modalTableRef.keys( data )
							}else if($fn.hasObject(data)){
								modalTableRef.keys( data?.[keyNameStr] ?? [] )
							}
						}
					}
				}
				onEnd?.(p)
			})
		}else{
			// 本地数据回显
			if(backData){
				backData = $fn.getResult(backData, sendParam)
				if( backKeys ){
					modalTableRef.setKeys( backData )
				}
			}else{
				onBackData?.(sendParam)
			}
			onEnd?.(sendParam)
		}
	},[ ])
	
	const open = useCallback(async value => {
		let config = value ?? props
		let { 
			// label, 					/** @param {String}				# 按钮名称 */
			onStart, 					/** @param {Function}			# 表单配置 */
		} = config
		
		const modalRef = $.ref(tableModalRef)
		
		if( value ){  setModalConfig(value)	}
		
		modalRef.open()
		
		const start = await onStart?.() 				// 在操作之前运行
		
		if( start ) { config.start = start }
		
		setBackInfo(config)
	},[ setBackInfo, props ])
	
	const close = ()=> $.ref(tableModalRef).close()
	
	useImperativeHandle( ref, () => ({
		open,
		close,
		tableRef: () => $.ref(searchTableRef).tableRef()
	}))
	
	const _onOk = useCallback(()=>{
		const modalRef = $.ref(tableModalRef)
		const modalTableRef = $.ref(searchTableRef).tableRef()
		const { tableRef, label, keyStr } = modalConfig
		
		let param = { close, tableRef, modalTableRef }
		let submitParam = null
		
		if( table?.row  ){
			const keys = modalTableRef.keys()
			const rows = modalTableRef.rows()
			
			param = { keys, rows, ...param }
			
			submitParam = keyStr ? { [keyStr]: keys} : keys
		}
		
		let { onOk, title = label  } = modal
		
		if( onOk ){
			return onOk( param )
		}else{
			SubmitUtils({ ajax:setAjax, param:submitParam, submitConfig:modalConfig, title, tableRef, modalTableRef, modalRef })
		}
	},[modal, modalConfig, table?.row])
	
	return (
		<Modal ref={tableModalRef} onOk={_onOk} loading={ajax.loading} {...modal}>
			<SearchTable 
				ref 		= { searchTableRef }
				table		= { table }
				search		= { search }
			/>
		</Modal>
	)
}
export default Index