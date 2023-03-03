import React, { useImperativeHandle, useState, useEffect, useRef, useCallback } from 'react'
/* -------------------------------------------------------- antd -- */
import { Table } from 'antd'
import { VList } from 'virtuallist-antd'
/* -------------------------------------------------------- Sync Function -- */
import Utils from './utils/tool'
/* -------------------------------------------------------- Declare -- */
const { $fn, $config, $http, $lazy, $ } = window
/* -------------------------------------------------------- Async Component -- */
const Pagination = $lazy.load(()=>import('@antd/pagination'))
const Empty = $lazy.load(()=>import('@antd/empty'))
const Loading = $lazy.load(()=>import('@antd/loading'))
const Controls = $lazy.load(()=>import('#cpt/temp/Controls'))
// const ResizeableTitle = $lazy.load(()=>import('./resizeable/cpt/ResizeableTitle'))
/* -------------------------------------------------------- 设置组件之间的间 -- */
const Index = ({
	className, 					/** @param {String}				# 盒子 className */
	style, 						/** @param {String}				# 盒子 style */
	// Table
	data=[], 					/** @param {Array}				# 表格数据 */
	cols=[], 					/** @param {Array}				# 表格列数据 */
	components, 				/** @param {Array}				# 自自定义组件 */
	// Pagination
	pag, 						/** @param {Object, Boolean}	# 分页配置，如果为 false 无分页 */
	prefix, 					/** @param {Component}			# 前缀 */
	suffix, 					/** @param {Component}			# 后缀 */
	// Empty
	simple,						/** @param {Boolean}			# 简单图标 */
	// Loding
	loadingSize,				/** @param {Boolean}			# 简单图标 */
	// 自定义
	size='middle',				/** @param {String}				# 表格大小 */
	width='100%',				/** @param {String, Boolean}	# 表格宽度 */
	idStr=$config.pullIdName, 	/** @param {String}				# 表格操作字段名 */
	loading, 					/** @param {Array}				# 加载效果 */
	height, 					/** @param {String,Number}		# 表格高度 */
	init=true, 					/** @param {Boolean}			# 是否初始化加载 */
	isNoMb, 					/** @param {Boolean}			# 是否距离底部有间距 */
	isIndex, 					/** @param {Boolean}			# 是否用索引值替代 key */
	pb='pb10', 					/** @param {String}				# 底部补白 */
	row, 						/** @param {Object}				# 多选与单选 */
	keys=[],					/** @param {Array}				# 外部 keys */
	onKeysChange, 				/** @param {Event}				# 外部 keys 改变时 */
	onRow, 						/** @param {Event}				# 多选与单选 */
	resize, 					/** @param {Boolean}			# 是否允许拖动表格宽度 */
	max=50, 					/** @param {Boolean}			# 超过多少条数据虚拟滚动 */
	rightSlot, 					/** @param {Boolean}			# 左侧控件 */
	// http
	api,						/** @param {String}				# 列表 api */
	ctrApi,						/** @param {String}				# 增删改查四合一 api */
	addApi,						/** @param {String}				# 增 api */
	modApi,						/** @param {String}				# 改 api */
	infoApi,					/** @param {String}				# 查 api */
	delApi,						/** @param {String}				# 删 api */
	clearApi,					/** @param {String, Boolean}	# 要清除的缓存 api */
	paging=true,				/** @param {Boolean}			# 请求接口是否分页 */
	onLoading, 					/** @param {Event}				# 加载时执行 */
	onSuccess, 					/** @param {Event}				# 请求成功后执行 */
	setName, 					/** @param {Function}			# 自定义数据显示字段 */
	// 操作按钮
	controls, 					/** @param {Array}				# 操作按钮组 */
	//
	search={}, 					/** @param {Object}				# 搜索配置 */
	// 作为 Form 的元素
	isRows, 					/** @param {Boolean}			# 暴露参数是否是 rows 数据 */
	isSubmitForm, 				/** @param {Boolean}			# 是否是在提交表单中 */
	// antd
	antd, 						/** @param {Object}				# antd */
	emptyText 					/** @param {Object}				# 自定义空数据时提示 */
}, ref) => {
	data = $fn.getArray( data )
	idStr = isIndex ? 'index' : idStr
	if($fn.hasArray(data) && isIndex)  data  = data.map((v,i) => ({ ...v, index: i }))
	
	const [ ajax, setAjax ] = useState({ data, loading })
	const isAuto = height === 'auto'
	const isPaging = paging !== 0 && paging !== false
	const tableDomRef = useRef()
	/* --------------------------- 滚动顶部 --------------------------- */
	const scrollTop = value => {
		const { current } = tableDomRef
		if(current){
			if($fn.isNumber(value)){
				current.querySelector('.ant-table-body').scrollTop = value
			}else{
				return current.querySelector('.ant-table-body').scrollTop
			}
		}
	}
	const scrollRest = value => {
		if( !isAuto ){ scrollTop(value ?? 0) }
	}
	/* --------------------------- ajax --------------------------- */
	const fetch = option => {
		let { param, query, scroll, resetEmpty, resetSearch } = option ?? {}
		param = $fn.getResult(param)
		param = $fn.getSubmitParam(search.data, param)
		query = $fn.getResult(query)
		if(api){
			onLoading?.( true )
			$http.paging(setAjax, api, { param, query, paging,
				onEnd: v => onLoading?.( false ),
				setName: setName ? setName : (isIndex ? (v,i) => ({ index: i }) : null),
				setParam: search?.setParam,
				resetEmpty,
				resetSearch
			}).then(({ data, rows })=>{
				if(row?.keys){
					setKeys(row.keys)
				}
				if(scroll === 1) {
					scrollRest( window.innerHeight )
				}else if(scroll === 0){

				}else{
					scrollRest()
				}
				onSuccess?.(rows ? rows : data, { param, query })
			})
		}
	}
	// 排序
	const onSort = (pagination, filters, sorter) => {
		let type = null
		if(sorter.order === 'ascend'){			// 升序
			type = 'asc'
		}else if(sorter.order === 'descend'){ 	// 降序
			type = 'desc'
		}else{
			type = 0							// 不排序
		}
		const param = type ? {sort:sorter.field, sort_type: type} : null
		if(param){
			setAjax.model = {...setAjax.model, ...param}
		}else{
			delete setAjax.model.sort
			delete setAjax.model.sort_type
		}
		fetch({scroll:true})
	}
	/* --------------------------- 默认请求列表 --------------------------- */
	const onInitFetch = () => {
		const defaultParam = Utils.getParam($fn.getResult(search.data))
		const param = $fn.getResult(search?.param)
		const query = $fn.getResult(search?.query)
		fetch({ param:{ ...defaultParam, ...param }, query, scroll:true })
	}
	useEffect(()=>{
		if( init ){
			onInitFetch()
		}
	},[ ]) // eslint-disable-line
	/* --------------------------- 处理 cols --------------------------- */
	const getCols = cols =>{
		cols = $fn.getResult( cols )
		if( !Array.isArray( cols) ){
			return console.log('cols 必须是一个数组')
		}
		cols = cols.filter( v => $fn.hasObject(v) )
		const _controls = $fn.getResult(controls)
		if($fn.hasObject(_controls)){
			let controlSize = _controls.size ?? 'small'
			if(size === 'small'){ controlSize = 'mini' }
			const { data, align='center', right=1 } = _controls
			const fixed = right ? 'right' : 'left'
			const ctrl = { title: '操作', width:120, align, fixed, render:(record, row, index)=>{
				return (
					<Controls
						size 	= { controlSize }
						align 	= { align } 
						data	= { data?.(record, index) }
						table 	= { { ctrApi, clearApi, delApi, infoApi, modApi, addApi, record, api, idStr, tableRef } }
						isTable 
					/>
				)
			}, ..._controls }
			return right ?  [ ...cols, ctrl ] : [ ctrl, ...cols]
		}else{
			return cols ?? []
		}
	}
	
	const [ col, setCol ] = useState([ ])
	
	useEffect( ()=> setCol( getCols(cols) ), [ cols ] ) // eslint-disable-line
	
	/* --------------------------- 单选与多选 --------------------------- */
	const [ selectedRowKeys, setSelectedRowKeys ] = useState(row?.keys ?? [])
	//
	const checkbox = [ 'checkbox', 'radio' ]
	
	const rowSelection = $fn.isObject(row) && $fn.hasArray(ajax.data) ? {
		columnWidth: 50,
		type: row?.type ? checkbox[row?.type] : checkbox[0],
		selectedRowKeys,
		// 选框改变时执行
		onChange(keys, rows){
			setKeys(keys, rows)
		},
		onSelect(record, selected, selectedRows){
			
		},
		// 全选
		onSelectAll(selected, rows, changeRows){
			
		},
		// 判断行属性
		getCheckboxProps: record => {
			const { disabledKeys } = row ?? {}
			if( $fn.isFunction(disabledKeys) ){
				const disabled = disabledKeys?.(record)
				record.disabled = disabled
				return { disabled }
			}else{
				if( $fn.hasArray(disabledKeys) ){
					const disabled = disabledKeys.includes( record[idStr] )
					record.disabled = disabled
					return { disabled }
				}else{
					return {}
				}
			}
		},
		...row?.antd
	} : null
	// 自定义点击行
	const _onRow = record => ({
		onClick: () => {
			if( $fn.isObject( row ) ){
				if( record.disabled ){ return }
				let { type, keys=[] } = row
				const key = record[idStr]
				
				if(selectedRowKeys.includes(key)){
					const index = keys.findIndex(v => v === key)
					keys.splice(index, 1)
					row?.onRowFalse?.(record, tableRef)
				}else{

					const v = record[idStr]
					if(type === 1){
						keys = [ v ]
					}else{
						keys.push( v )
					}
					row?.onRowTure?.(record, tableRef)
				}
				setKeys(keys)
				row?.onRow?.({ row: record, keys:getKeys(), rows:()=>getRows(keys), tableRef })
				onRow?.( { row: record, keys, rows:getRows, tableRef } )
			}else{
				onRow?.( record )
			}
		}
	})
	// 清除 keys
	const clearKeys = useCallback(() => {
		if(row && $fn.hasArray( selectedRowKeys )) setKeys([])
	}, [selectedRowKeys] ) // eslint-disable-line
	// 设置 keys
	const setKeys = useCallback( (keys, rows) => {
		if( !$fn.hasArray(ajax.data) ) return
		const k = row?.type ? ( $fn.hasArray(keys) ? keys : [ keys ] ) : keys
		row.keys = k
		setSelectedRowKeys( [...k] )
		onKeysChange?.( [...k] )
		row?.change?.({ keys:row.type ?  keys?.[0] ?? null : keys, rows: $fn.hasArray(rows) ? ( ()=> row.type ? rows?.[0] : rows ) : ()=>getRows(keys), tableRef })
 	}, [ ajax.data ]) // eslint-disable-line
	const getKeys = useCallback(() => {
		if( $fn.isObject(row) ){
			const { type } = row
			return type ? ($fn.hasArray(selectedRowKeys) ? selectedRowKeys[0] : null) : ( selectedRowKeys ?? [] )
		}else{
			return row?.type ? null : []
		}
	},[ selectedRowKeys, row ])
	//设置 rows
	const setRows = rows => setKeys( rows.map( v => v[idStr ]) )
	// 获取 rows
	const getRows = useCallback(function(){
		const keys = (arguments.length === 0 ? selectedRowKeys : arguments[0]) ?? []
		const d = ajax.data.filter( v => keys?.includes?.( v[idStr]) )
		return row?.type ? ( d[0] ?? null ) : d
	},[ row, ajax.data, selectedRowKeys ]) // eslint-disable-line
	/* --------------------------- Expose --------------------------- */
	const tableRef = {
		refresh : scroll => fetch({ scroll: scroll??true }),
		search: option => {
			const {param, query, scroll=true} = option ?? {}
			fetch( { param: isPaging ? { ...param, page: 1} : param, query, scroll })
			clearKeys()
		},
		reset: () => {
			setAjax.model = isPaging ? { page:1, size:ajax.pager?.size ?? $config.paging.pageSize } : {}
			onInitFetch()
		},
		resetEmpty: () => {
			fetch( { resetEmpty:true })
			clearKeys()
		},
		resetSearch: () => {
			fetch( { resetSearch:true })
			clearKeys()
		},
		refreshClear: scroll => {
			fetch({ scroll: scroll??true })
			clearKeys()
		},
		getParam: () => ajax?.pager?.param, 		// 获取所有参数
		// 设置选中
		clearKeys,
		keys(){ return arguments.length === 1  ? setKeys( arguments[0] ) : getKeys() },
		rows(){ return arguments.length === 1  ? setRows( arguments[0] ) : getRows() },
		data(){
			if(arguments.length === 1){
				let d = arguments[0]
				d = Array.isArray(d) ? d : []
				setAjax(() => ({ data: d.length === 0 ? [] : [...d] }))
			}else{
				return ajax.data
			}
		},
		del(index){
			ajax.data.splice(index,1)
			this.data(ajax.data)
		},
		// 强制更新
		update(){ setAjax(() => ({ data: $fn.deepCopy(ajax.data) })) }
	}
	useImperativeHandle( ref, () => tableRef )
	/* --------------------------- 虚拟滚动 --------------------------- */
	const [ component, setComponent ] = useState()
	const wrapRef = React.useRef()
	// 拖动表格宽
	/*
	const handleResize = index => (e, { size }) => {
		setCol(col => {
			const nextColumns = [...col];
			nextColumns[index] = { ...nextColumns[index], width: size.width }
			return nextColumns
		})
	}
	*/
	useEffect(()=>{
		const _component = ajax?.data?.length > max ? { ...VList({height: height ?? wrapRef.current.offsetHeight }), ...components } : {...components}
		/*
		if( resize ){
			_component.header = { cell: ResizeableTitle }
			setCol(col => col.map((col, index) => ({
				...col,
				onHeaderCell: column => {
					const { width, resize } = column
					return resize !== false && resize !== 0  ? {
						width,
						onResize: handleResize(index)
						// style: { cursor: 'move' },
					} : null
				}
			})))
		}
		*/
	   setComponent( _component )
	},[ ajax.data ]) // eslint-disable-line
	const TableComponent = (
		<Table
			style				= {{zIndex: ajax.loading ? 1 : 0}}
			rowKey				= { r =>  isIndex ?  r['index'] : r[idStr] }
			columns				= { col }
			dataSource			= { $fn.getArray( ajax.data ) }
			scroll				= {{ y: !$fn.hasArray(ajax.data) || isAuto ? null : true, x: width }}
			sticky				= { true }
			pagination			= { false }
			bordered 			= { true }
			rowSelection		= { rowSelection }
			onChange 			= { onSort }
			onRow				= { _onRow }
			components 			= { component }
			expandRowByClick	= { true }
			{...antd}
		/>
	)
	const loadingComponent = <Loading loading={ajax.loading} size={loadingSize} style={{zIndex:2}}/>
	
	const emptyComponent = <Empty loading={ajax.loading} data={ajax.data} simple={simple} style={{zIndex:1}} msg={ emptyText ? emptyText : (init === false ? '请按条件搜索数据' : '暂无数据') } />
	return (
		<div ref={wrapRef} className={`ex rel ${$.css(ajax?.data?.length === 0, 'oh')} ${$.css(!isAuto, 'fv')} ${$.css(pag===false, pb)} jzer-form-small ${$.css(className)}`} style={{height,...style}}>
			<div ref={tableDomRef} 
				className={`
					jzer-table ex rel
					jzer-table-${size}
					jzer-table-${ simple ? 'simple' : 'no-simple' }
					${ $.css( ((pag===false && !isAuto) || ajax?.data?.length === 0) && !rightSlot,'bbor1') } 
					${ !$fn.hasArray(ajax.data) && !isNoMb ? 'mb10':'' } 
					${ $.css(!isAuto,'jzer-table-scroll') }
					${ $.css(rightSlot, 'fx') }
				`}
				style={{minHeight:simple ? 120 : 180}}
			>
				{
					rightSlot ? (
						<>
							<div className={`rel ex rbor1 bbor1 fv ${ $.css(((pag===false && !isAuto) || ajax?.data?.length === 0), 'bbor1')}`}>{TableComponent}{loadingComponent}{emptyComponent}</div>
							<div className={`rel fv ml10 ${$.css(rightSlot.className)}`} style={{width:rightSlot.width, ...rightSlot?.style}}>
								{ rightSlot.slot }
							</div>
						</>
					)  : TableComponent
				}
				
			</div>
			{
				!rightSlot && (
					<>
						{ loadingComponent }
						{ emptyComponent }
					</>
				)
			}
			
			{
				( $fn.hasArray(ajax.data) && pag !== false && pag !== 0  ) && (
					<div className={`fxm ptb10 ${$.css(!isAuto && !rightSlot,'tbor1')}`}>
						{ $fn.getResult( prefix, ajax.pager) }
						{
							$fn.isNoFalse(pag?.showTotal) && <div className='g9 f12 nowrap'>共 { ajax?.pager?.total ? ajax?.pager?.total : ajax.data.length} 条数据</div>
						}
						{ $fn.getResult( suffix, ajax.pager) }
						{
							isPaging && (
								<Pagination
									pager		= { ajax.pager } 
									pag			= { pag } 
									className	= { $.css(!prefix,'ex') }
									onChange	= { (current, pageSize) =>{
										fetch({ param:{ page:current, size:pageSize }, scroll:true })
										clearKeys()
									} }
								/>
							)
						}
					</div>
				)
			}
		</div>
	)
}

export default Index