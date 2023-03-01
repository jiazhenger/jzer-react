/* -------------------------------------------------------- Declare -- */
const { $fn, $http, $config } = window
/**
 * 提交表单
 */
const Index = ({ 
	ajax,				/** @param {Function}			# 渲染函数 */
	param, 				/** @param {Object}				# 表单参数 */	
	submitConfig={}, 	/** @param {Object}				# 数据请求配置 */	
	form, 				/** @param {Object}				# 存储值 */
	formRef, 			/** @param {Object}				# 表单 ref */	
	onSubmit, 			/** @param {Event}				# 自定义提交 */
	// table
	tableRef, 			/** @param {String}				# tableRef */
	// tableModal
	modalTableRef,		/** @param {Object}				# 弹窗表格的 tableRef */
	// modal
	modalRef,			/** @param {Object}				# 弹窗 ref */
	title 				/** @param {String}				# 弹窗标题 */
	// form
}) => {
	// 配置 Config
	let { 
		// http
		api,							/** @param {String}				# api */
		modApi,							/** @param {String}				# 修改 api */
		clearApi, 						/** @param {String}				# 清除缓存 */
		way='post',						/** @param {String}				# 请求方式 */
		modWay=$config?.modWay??'put', /** @param {String}				# 编辑时的请求方式 */
		loading=false, 					/** @param {Boolean}			# 是否默认显示加载效果 */
		loadingText,					/** @param {String}				# 加载提示 */
		back, 							/** @param {Boolean}			# 是否返回 */
		backRefresh, 					/** @param {Boolean}			# 返回并刷新 */
		must, 							/** @param {Boolean}			# 可选参数 + 必选参数 */
		empty, 							/** @param {Object}				# 空参数配置 */
		// param, 						/** @param {String}				# 提交的额外参数 */
		// table
		refApi, 						/** @param {String}				# table api */
		id, 							/** @param {String}				# id 值 */
		idStr=$config.postIdName, 		/** @param {String}				# id 字段 */
		// 弹窗
		mode, 							/** @param {String}				# 编辑与添加类型 */
		add, 							/** @param {String}				# 是否是添加 */
		mod, 							/** @param {String}				# 是否是编辑 */
		successText,					/** @param {String}				# 成功提示 */
		close,							/** @param {Boolean}			# 是否关闭弹窗 */
		r,								/** @param {Boolean}			# 是否刷新 */
		c, 								/** @param {Boolean}			# 是否清除 keys */
		rs,								/** @param {Boolean}			# 刷新后滚动是否回到顶部*/
		rc, 							/** @param {Boolean}			# 是否刷新并清除 keys */
		// 参数处理
		setNewParam, 					/** @param {Event}				# 处理参数，反回新的参数 { ...param, a:1 } */
		setParam, 						/** @param {Event}				# 处理参数，仅返回处理后的参数 { a: 1} */
		onValid, 						/** @param {Event}				# 验证表单 */
		// 自定义
		// onSubmit, 						/** @param {Event}				# 自定义提交 */
		// ajax 请求后执行
		onComplete, 					/** @param {Event}				# 完后执行 */
		onSuccess, 						/** @param {Event}				# 请求成功后执行 */
		onFail, 						/** @param {Event}				# 请求失败执行 */
		onError							/** @param {Event}				# 请求错误执行 */
	} = submitConfig
	// 参数处理
	param = { ...$fn.getResult(submitConfig.param), ...$fn.getResult(param) }
	param = setParam ? { ...param, ...setParam(param) } : param 		// 处理参数
	if(setNewParam){ param = setNewParam(param) }						// 重新组合参数
	if(onValid && onValid(param)){ return }								// 参数验证
	// 规范提交
	onSubmit = onSubmit ?? submitConfig?.onSubmit
	tableRef = $fn.getResult( tableRef )
	if(api && !onSubmit){
		// 编辑时
		if( mode === 'mod' ){
			way = modWay
			empty = empty === undefined ? true : empty
			api = modApi ?? api
			if( !must ){ 
				param = { [idStr]: id, ...param }
			}
			if($fn.hasObject(ajax.ids) && !must){ param = { ...ajax.ids, ...param } }
		}else if( mode === 'add' ){
			empty = false
		}
		rc = $fn.getResult(rc)
		r = $fn.getResult(r)
		c = $fn.getResult(c)
		
		// 清楚缓存
		if(clearApi){ clearApi = $fn.isString(clearApi) ? clearApi : refApi }
		// title
		title = title ? title : (submitConfig.title)
		// $http
		$http[way](ajax, api, {
			param, 
			id: must ? id : null,
			loadingText,
			loading,
			empty,
			onEnd: () => onComplete?.({ formRef, colse:modalRef?.close }),
			onFail: data => onFail?.({ formRef, colse:modalRef?.close, data }),
			onError: () => onError?.({ formRef, colse:modalRef?.close })
		}).then(data=>{
			if(tableRef){
				if(r){ tableRef.refresh(rs) }
				if(c){ tableRef.clearKeys() }
				if(rc && !r && !c){ tableRef.refreshClear(rs) }
			}
			if(modalTableRef){ modalTableRef.clearKeys() }
			let msg = (title ?? '操作') + '成功'
			if( successText ) { msg = successText } 		// 自定义成功提示
			$fn.msg.success( msg )
			const p = { data, param, formRef, tableRef, modalTableRef, colse:modalRef?.close }
			onSuccess?.( p )
			
			// 清除缓存
			if(clearApi){ $fn.indexDBRemove(clearApi) }
			// 成功后是否返回
			if(back){ window.history.back() }
			if(backRefresh){
				window.history.back()
				if( backRefresh === true || backRefresh === 1 ){
					backRefresh = 'refresh'
				}
				setTimeout(()=> window[ backRefresh ]?.(), 100)
			}
			// 成功后是否关闭弹窗
			close = $fn.getResult(close, { mod, add })
			if(close!==false && modalRef){ modalRef?.close() }
		})
	}else{
		// 自定义提交
		const formParam = formRef ? { formParam:formRef?.getValue?.(), formRef } : null
		const close = onSubmit?.({ param, modalRef, ...formParam, tableRef, modalTableRef, close:modalRef?.close,  form })
		// 成功后是否关闭弹窗
		if(close !== false){ modalRef?.close() }
	}
}
export default Index