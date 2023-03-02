import { upload } from '@com/utils/upload'
import $download from '@utils/download'
const { $fn, $, $config, $http } = window
/**
 * 操作按钮
 */
const Index = ({ 
	index, 			/** @param {String}				# 表单行索引 */
	option, 		/** @param {String}				# 按钮配置选项 */
	tableConfig={}, /** @param {String}				# 总配置 */
	history, 		/** @param {String}				# 路由跳转句柄 rouer.push() */
}) => {
	// 按钮 config
	let {
		// option 专有
		label, 			/** @param {String}				# 按钮名称 */
		mode, 			/** @param {String}				# 按钮模式 */
		click, 			/** @param {Event}				# 点击按钮 */
		to, 			/** @param {String}				# 跳转按钮 */
		toNext, 		/** @param {String}				# 下级页面跳转 */
		link, 			/** @param {String}				# 三方链接跳转 */
		// download
		fileType, 		/** @param {String}				# 文件类型 */
		fileName, 		/** @param {String}				# 文件名称 */
		downway='blob',	/** @param {String}				# 下载方式 */
		// mode === comfirm
		msg, 			/** @param {String}				# 自定义提示消息*/
		successText, 	/** @param {String}				# 自定义成功提示消息*/
		// 混用
		api, 			/** @param {String}				# */
		infoApi, 		/** @param {String}				# 回显接口 */
		onSuccess, 		/** @param {Event}				# 提交成功后执行 */
		way, 			/** @param {String}				# 请求方式 */
		param, 			/** @param {Object}				# 提交可选参数 */
		id, 			/** @param {String}				# id 值 */
		r, 				/** @param {String}				# 刷新表格 */
		c, 				/** @param {String}				# 清除表格 */
		rs,				/** @param {Boolean}			# 刷新后滚动是否回到顶部*/
		rc, 			/** @param {String}				# 刷新并清空 keys */
		mul, 			/** @param {Boolan,Number}		# 是否多个 */
		abs, 			/** @param {Boolan,Number}		# 参数是否是绝对参数 */
		must, 			/** @param {Boolan,Number}		# 提交参数是否是绝对参数 */
		// 弹窗
		backData, 		/** @param {Object, Event}		# 有 infoApi 时二次回显参数， 无 infoApi 回显参数 */
		backInfo, 		/** @param {Object, Event}		# 编辑无接口时回显参数 */
		backParam, 		/** @param {Object, Event}		# 回显时接口参数 */
		onBack, 		/** @param { Event}				# 返回后执行 */
		// mode === upload
		change, 		/** @param {Event}				# 改变时执行 */
		// 弹窗配置
		config			/** @param {Object}				# 弹窗配置 */
	} = option ?? {}
	
	const optionConfig = $fn.getResult( config )
	
	param = $fn.getResult(param) || $fn.getResult(optionConfig?.param)
	rc = $fn.getResult(rc)
	r = $fn.getResult(r)
	c = $fn.getResult(c)
	id = $fn.getResult(id)
	// 表格配置
	let { ctrApi, row, clearApi, delApi, modApi, addApi, record } = tableConfig ??{}
	const isTable = record
	ctrApi = ctrApi || optionConfig?.ctrApi
	const idStr = tableConfig?.idStr ?? $config.pullIdName											// 从 table 上拿读取字段 id 名称
	const sidStr = (option?.sidStr || option?.idStr || tableConfig?.idStr) ?? $config.postIdName	// 提交 id 的参数名
	const bidStr = (option?.bidStr || option?.idStr || tableConfig?.idStr) ?? $config.pullIdName	// 回显 id 的参数名
	const uidStr = option?.idStr ?? $config.postIdName												// 无回显模式，提交 id 的参数名
	if( isTable && !id ) {
		id = record[idStr]
	}
	// 清除 api
	clearApi = optionConfig?.clearApi || option?.clearApi || clearApi 	// 依次从按钮上的 config、按钮、table 上获取
	if(clearApi){ clearApi = $fn.isString(clearApi) ? clearApi : tableConfig.api }
	// 拿刷新 ref
	const tableRef = $fn.getResult( tableConfig?.tableRef || option.tableRef )
	const searchRef = $fn.getResult( tableConfig?.searchRef || option.searchRef )
	let keys = []
	let rows = null
	if( row ){
		keys = tableRef?.keys?.()
		rows = $fn.isArray(keys) ? tableRef.rows : ()=> []
	}
	
	if(click){
		isTable ? click({ tableRef, searchRef, index, row:record }) : click({ keys, rows, searchRef, tableRef, label}) 
	} else if(to){ 
		$.push(history, to, param)
	} else if(toNext){
		$.pushNext(history, toNext, param)
	}else if(link){ 
		window.open(link)
	}else if(mode === 'img'){
		if( api ){
			if( !abs ){ param = { [uidStr]: id, ...param } }
			id = param ? null : String(id)
			$http.pull(null, api, { id, param }).then(data=>{
				data = (`data:image/jpg;base64,${data}`).replace(/[\r\n]/g,'')
				window.$imageModalRef().open({ data, preview:false, title: option.title || label })
			})
		}else{
			if( optionConfig ){
				window.$imageModalRef().open(optionConfig)
			}
		}
	}else if(mode === 'download'){
		if( downway === 'url'){
			$http[way ?? 'pull'](null, api, { param, loading:true, loadingText: label + '中' }).then( data =>{
				const url = backData ? backData(data) : data
				window.open( url )
				$fn.msg.success('文件下载成功')
			})
		}else if(downway === 'form'){
			$download.form( $config.api() + api )
		}else{
			$http[way ?? 'download'](null, api, { param, loading:true, loadingText: label + '中' }).then( data =>{
				$download.blob( data, { fileName: $fn.getResult(fileName), fileType } )
				$fn.msg.success('文件下载成功')
			})
		}
	}else if(mode === 'upload'){
		upload({
			api,
			change,
			param,
			way: way ?? 'post',
			mul
		})
	}else if(mode==='submit'){
		way = way ?? 'post'
		$http[way](null, api, { param }).then(()=>{
			$fn.msg.success(successText ? successText: `${label}成功`)
			if(tableRef){
				if(r){ tableRef.refresh() }
				if(c){ tableRef.clearKeys() }
				if(rc && !r && !c){ tableRef.refreshClear() }
			}
			if(clearApi){ $fn.indexDBRemove(clearApi) }
			onSuccess?.({ tableRef })
		})
	}else if( ['confirm','del','delPop','clear'].includes(mode) ){
		const { setParam, setNewParam, isStr } = option
		if( mode.includes('del') ){
			api = option.api || delApi || ctrApi || tableConfig.api
		}
		// 删除参数是否为数组
		mul = mul ?? $config.delMul
		let ids = isTable ? ( mul ? [ id ] : id ) : keys
		
		if( !ids ){
			ids = ( mul ? [ id ] : id )
		}
		
		param = $fn.getResult(param, {param, keys, rows, ids})
		
		// 默认参数
		if(mode === 'clear'){ rc = 1 }
		
		if(['del', 'delPop'].includes( mode )){
			way = way ?? ($config?.delWay ?? 'post')
			label = $config.btnName[mode]
			rc = 1
			rs = 0
		}else if(mode === 'confirm'){
			way = way ?? ($config?.confirmWay ?? 'post')
		}
		const onDel = () => new Promise((resolve, reject) => {
			if( !abs ){ 
				param = { [uidStr]: isStr ? String(ids) : ids, ...param }
				param = setParam ? { ...param, ...setParam(param) } : param 		// 处理参数
				if(setNewParam){ param = setNewParam(param) }						// 重新组合参数
			}
			if($fn.isEmpty(id)) id = param ? null : String(ids)
			$http[way ?? 'post'](null, api, { id, param, loading: mode === 'delPop', onError: reject}).then( data =>{
				resolve()
				$fn.msg.success(successText ? successText: `${label}成功`)
				if(tableRef){
					if(r){ tableRef.refresh(rs) }
					if(c){ tableRef.clearKeys() }
					if(rc && !r && !c){ tableRef.refreshClear(rs) }
				}
				if(clearApi){ $fn.indexDBRemove(clearApi) }
				onSuccess?.(data)
			})
		})
		
		if( mode === 'delPop' ){
			onDel()
		}else{
			$fn.confirm({ msg: msg || `确认${label}此数据？`, onOk: onDel })
		}
	}else if( mode === 'formModal'|| mode === 'mod' || mode === 'list'){
		const modalConfig = { idStr, sidStr, bidStr, id, param, abs, tableRef, mode, label, ...optionConfig }
		
		const formConfig = modalConfig?.form ?? {}
		
		modalConfig.form = { id, way, must, tableRef, clearApi, param, mode, label, 
			api: formConfig.api || ctrApi,				// 获取提交 api
			r: optionConfig.r ?? r,
			c: optionConfig.c ?? c,
			rc: optionConfig.rc ?? rc,
			rs: optionConfig.rs ?? rs,
			...formConfig
		}
		
		if(mode === 'mod'){
			if(tableConfig.addConfig){
				tableConfig.addConfig.mod = true
				tableConfig.addConfig.add = false
			}
			modalConfig.form.r = 1
			modalConfig.form.mod = true
			modalConfig.form.add = false
			modalConfig.backInfo = optionConfig?.backInfo || backInfo										// 编辑特有回显数据
		}
		
		const { form } = optionConfig
		
		modalConfig.modal = optionConfig?.modal																// 弹窗标题
		modalConfig.backData = form?.backData || optionConfig?.backData || backData							// 回显数据
		modalConfig.backParam = optionConfig?.backParam || backParam										// 回显参数
		modalConfig.form.clearApi = clearApi
		modalConfig.form.api =  form?.api || api || modApi || ctrApi || tableConfig.api						// 从弹窗配置拿提交 api
		modalConfig.form.refApi = tableConfig.api															// 表格的 api，用于清缓存
		modalConfig.form.mode = mode
		if( infoApi === false || form?.infoApi === false ){
			modalConfig.form.infoApi = false
		}else if( infoApi === true || form?.infoApi === true ){
			modalConfig.form.infoApi = form?.api || api
		}else{
			modalConfig.form.infoApi = form?.infoApi || infoApi || tableConfig.infoApi || ctrApi || tableConfig.api	// 从按钮配置拿回显 infoApi
		}
		window.$formModalRef().open(modalConfig)
	}else if( mode === 'tableModal'){
		const modalConfig = { idStr, sidStr, bidStr, id, param, r, c, rs, rc, abs, must, way, tableRef, label, clearApi, ...optionConfig }
	
		modalConfig.api =  optionConfig?.api || api						// 从弹窗配置拿提交 api
		modalConfig.infoApi = optionConfig?.infoApi || infoApi			// 从按钮配置拿回显 infoApi
		modalConfig.refApi = tableConfig.api							// 表格的 api，用于清缓存
		modalConfig.backData = optionConfig?.backData || backData		// 回显数据
		modalConfig.backParam = optionConfig?.backParam || backParam	// 回显参数
		modalConfig.keyStr = optionConfig?.keyStr || option?.keyStr		// 回显数据
		
		window.$tableModalRef().open( modalConfig )
	}else if( mode === 'modal'){
		window.$modalRef().open(optionConfig)
	}else if( mode === 'back'){
		$fn.back()
		onBack?.()
	}else if( mode === 'refresh'){
		window?.refreshRouter?.()
	}else if( mode === 'add'){
		if(tableConfig.addConfig){
			tableConfig.addConfig.mod = false
			tableConfig.addConfig.add = true
		}
		
		let modalConfig = { 
			mode,
			backData,
			tableRef,
			...optionConfig, 
			...tableConfig.addConfig
		}
		
		const formConfig = modalConfig.form ?? {}
		modalConfig.form = {
			r: !Boolean(row),
			rc: Boolean(row), 
			rs: optionConfig?.rs ?? rs,
			api: formConfig.api || api || addApi || ctrApi || tableConfig.api,				// 获取提交 api
			refApi: tableConfig.api,
			clearApi,
			infoApi,
			mode,
			label,
			param,
			add:true,
			mod: false,
			...formConfig
		}
		
		window.$formModalRef().open({ ...modalConfig, table:tableConfig, })
	}
	
	if( mode !== 'mod' && mode !== 'add' ){
		if(tableConfig?.addConfig){
			tableConfig.addConfig.mod = false
			tableConfig.addConfig.add = false
		}
	}
}
export default Index