/* ====================================== http 请求  ====================================== */
import axios from 'axios'
//import CryptoJS from '@utils/cryptojs'
import $config from '@/config'
import $fn from './fn'
// import qs from 'qs'
/* ====================================== 参数配置  ====================================== */
const { isOnLyPostGet, env, contentType } = $config
/**
 *  错误提法信息
 *
 * */
const LogInfo = (method, api, param, data, index)=>{
	if(env){
		const colors = ['red', 'green', 'orange']
		console.log(`%c ==================================【 ${method} 】【 ${api} 】==================================`, 'color:' + colors[index])
		console.log(' 参数：', param||{})
		console.log(' 数据：', data)
		console.log(`%c ————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————— end `, 'color:' + colors[index])
	}
}
/**
 *  配置头信息
 *
 * */
let cancel = []
const stop = () => {
	cancel.forEach( v => v() )
	cancel = []
}
const setConfig = ({ type, token, api, upload, download  })=>{
	const content = ['application/json;charset=utf-8','application/x-www-form-urlencoded','multipart/form-data']
	const _contentType = content[$fn.isNotEmpty(type) ? type : contentType]
	// 签名验证
	/*
	let time = new Date().getTime();
    let sign = {
    	rest_timestamp:time.toString(),
		rest_sign:CryptoJS.DES.encrypt(time.toString(), CryptoJS.enc.Utf8.parse('__UWILLBE_'), { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7}).toString()
    }*/
	const headerToken = $fn.getToken()
	const contentTypeConfig = { 'Content-Type' : _contentType }
	const tokenConfig = headerToken ? { 'Authorization': $fn.getToken() } : { }
	const header = token === false ? contentTypeConfig : { ...contentTypeConfig, ...tokenConfig  }
	const CancelToken = axios.CancelToken
	return {
		baseURL: api,
		headers: header,
		timeout: 30000,
		responseType: download ? 'blob' : null,
		//withCredentials : true	// 跨域请求想要带上cookies设置为 true
		cancelToken:  new CancelToken(function executor(c) {
			cancel.push( c )
		})
	}
}
/**
 *  序列化参数 {a:1,b:2} to ?a=1&b=2
 *
 * */
const serializeParam = (body,allowEmpty) => {
	if(!$fn.hasObject(body)) return ''
	let param = body
	let str=''
	for(var i in param){
		if(allowEmpty){
			str += i + '=' + param[i] + '&'
		}else{
			if($fn.isNotEmpty(param[i])){ str += i + '=' + param[i] + '&' }
		}
	}
	if (str.charAt(str.length - 1) === '&'){ 
		str = str.slice(0, str.length - 1)
	}
	if(str){
		str = '?' + str
	}else{
		str = encodeURI(str) 	// encodeURI 不对 [:, /, ;,?] 进行编码
	}
	return str
}

/**
 * 将 body 以函数形式处理
 *
 * */
const manageBody = (body,allowEmpty) => {
	if($fn.isFunction(body)){
		body = body()
	}else if($fn.hasObject(body)){
		for(let i in body){
			let v = body[i]
			if( $fn.isEmpty(v) ){
				if(allowEmpty === true){
					body[i] = ''
				}else if(allowEmpty === null){
					body[i] = null
				}else{
					delete body[i]
				}
			}
		}
	}
	return body
}
/**
 *  动态改变数据
 *
 * */
const setData = (_this, value)=>{
	if(_this){
		if($fn.isFunction(_this)){
			_this(data => {
				for(let i in value){
					data[i] = value[i]
				}
				return {...data}
			})
		}else if(_this?.setState){ // 如果是 react 状态组件
			_this.stateState(value)
		}else{
			for(let i in value){
				_this[i] = value[i]
			}
		}
	}
}
/**
 * http 核心封装
 *
 * */
const HttpRequest = (url, param, action, defined) => {
	let UD = defined || {}
	if(!$fn.isString(url) || !$fn.isNotEmpty(url)) { Promise.reject(); return $fn.toast('接口未传递正确') }
	
	let empty = action === 'get' ? false : true
	if(UD.empty !== undefined){ empty = UD.empty }
	// if( UD.type === 1) { body = qs?.stringify?.(body) }
	
	const headerConfig = setConfig({
		api		: url.indexOf('http') !== -1 ? url : $config.api(),
		...UD
	})
	
	UD?.onStart?.()		// 一开始就调用
	url = $fn.isNotEmpty(UD.id) ? url + '/' + UD.id : url 
	const m = {
		'get' 		: () => axios.get( url + serializeParam(param, empty), headerConfig),
		'delete' 	: () => axios.delete(url + serializeParam(param, empty), headerConfig),
		'post' 		: () => axios.post(url, manageBody(param, empty), headerConfig),
		'put' 		: () => axios.put(url, manageBody(param, empty), headerConfig),
		'patch' 	: () => axios.patch(url, manageBody(param, empty), headerConfig),
	}
	const promise = m[action]()
	// 加载效果
	return new Promise((resolve, reject) => {
		promise.then(res => {
			const resData = res.data
			const { code, data, msg } = resData
			if(code === 200){
				resolve(data)
				LogInfo(action, url, param, data, 1)
			} else if(code === $config.noLoginCode || code === $config.loginExpireCode){	// 未登录
				$fn.toast( code === $config.noLoginCode  ? '请先登录' : '登录信息已过期，请重新登录!')
				$fn.localRemove('user')
				$fn.recordSkip()
				LogInfo(action, url, param, data, 2)
				setTimeout(() => $fn.go('/login'), 200 )	// 跳转不同登录页
				$fn?.login?.()
				if(UD.pass){ resolve(null)}					// 失败时，是否继续异步
				//
				window?.$modalRef?.()?.close?.()
				window?.$formModalRef?.()?.close?.()
				window?.$tableModalRef?.()?.close?.()
				window?.$imageModalRef?.()?.close?.()
			}else{ // 数据请求成功但不符合规则
				if(UD.download){
					$fn.loading(false)
					resolve(resData)
					LogInfo(action, url, param, data, 1)
					return
				}
				reject(data)
				if(UD.onMsg){
					UD?.onMsg?.(data)		// 自定义提示
					UD?.onError?.(data)
				}else{
					$fn.toast(msg, UD.onError, 30000)			// 默认开启出错提示
				}
				
				UD?.onFail?.(resData)			// 数据处理不满足条件时调用
				
				LogInfo(action, url, param, data, 2)
				if(UD.pass){ resolve(null)}		// 失败时，是否继续异步
			}
			UD?.onEnd?.(resData)  		// 只要调用接口就调用
			UD?.onSuccess?.(resData) 	// 只要调用接口成功就调用
		}, err => { 					// 接口错误处理
			if(axios.isCancel(err)){
				return LogInfo(action, url + ' 接口请求被取消', param, '无', 0)
			}
			if(!UD.noError){ $fn.toast('服务器或网络出错')}
			UD?.onNet?.()				// 服务器出错或无网络调用
			UD?.onError?.()				// 只要出错就调用
			UD?.onEnd?.()  				// 只要调用接口就调用
			LogInfo(action, url, param, '无', 0)
			if(UD.pass){ resolve(null)}	// 失败时，是否继续异步
		})
	})
}
/**
 * post 提交
 *
 * */
const post = (_this,api,option)=>{
	const opt = {
		param			: { },
		loading 		: true,	
		loadingName		: 'postLoading',
		method			: 'post',
		type			: contentType, 	// Content-Type 类型
		...option
	}
	
	if( !api ) { Promise.reject(); return $fn.toast('接口未传递正确') }
	
	setData(_this,{ [opt.loadingName]:true, loading:true })
	
	if(opt.loading){
		const loadingText = opt.loadingText || '数据提交中'
		$fn.loading(true, loadingText + '...')
	}
	
	const run = ()=>{ opt.onSuccess && opt.onSuccess() }
	
	return new Promise((resolve, reject)=>{
		const param = $fn.isFunction(opt.param) ? opt.param() : opt.param
		HttpRequest(api, opt.type === 2 ? param : { ..._this?.model, ...param  }, opt.method, {
			onStart	: ()=> opt?.onStart?.(),
			onEnd	: ()=>{
				setData(_this,{ [opt.loadingName]:false, loading:false })
				opt.loading && $fn.loading(false)
				opt?.onEnd?.()
			},
			onMsg	: opt.onMsg && ( data => opt?.onMsg?.(data)),
			noError	: opt.noError,
			onError	: opt.onError,
			onFail	: opt.onFail,
			token	: opt.token,
			type	: opt.type,
			id 		: opt.id,
			empty 	: opt.empty				// 是否允许空参数
		}).then(data=>{
			resolve(data)
			// 提示后执行
			if(opt.successText){
				if(opt.runFirst){
					$fn.toast(opt.successText);
					run()
				}else{
					$fn.toast(opt.successText,run)
				}
			}else{ // 直接执行
				run()
			}
		},data=>{
			reject(data)
		})
	})
}
const del = (_this,api,option) => post(_this, api, { method: isOnLyPostGet ? 'post' : 'delete', loadingText:'数据删除中', ...option })
const put = (_this,api,option) => post(_this, api, { method: isOnLyPostGet ? 'post' : 'put', loadingText:'数据修改中', ...option })
const patch = (_this,api,option) => post(_this, api, { method: isOnLyPostGet ? 'post' : 'patch', loadingText:'数据修改中', ...option })
const upload = (_this,api,option) => post(_this, api, { method: option.way??'post', loadingText:'数据上传中', type:2, ...option })
const download = (_this,api,option) => pull(_this, api, { loadingText:'数据下载中', loading:true, download:true, ...option })
/**
 * get 获取数据
 *
 * */
const pull = (_this,api,option)=>{
	const opt = {
		param		: {  },		// 参数
		dataName	: 'data',
		loading		: false,					// 如果有加载效果
		loadingName : 'pullLoading',
		...option
	}
	if( !api ) { Promise.reject(); return $fn.toast('接口未传递正确') }
	if(_this){
		if(opt.first && !_this.first){
			setData(_this,{ [opt.loadingName]:true, loading:true, first: true })
		}else{
			setData(_this,{ [opt.loadingName]:true, loading:true })
		}
		opt?.onLoading?.(true)
		_this?.onLoading?.(_this.loading)
	}
	
	if(opt.loading){
		const loadingText = opt.loadingText || '数据加载中'
		$fn.loading(true,loadingText + '...') 
	}
	
	return new Promise((resolve,reject)=>{
		let param = $fn.isFunction(opt.param) ? opt.param() : opt.param
		if(opt.setParam){
			param = { ...param, ...opt.setParam( param ) }
		}
		HttpRequest(api, param , 'get', {
			id 			: opt.id,
			onStart		: ()=> opt?.onStart?.(),
			onEnd		: ()=>{
				setData(_this,{ [opt.loadingName]:false, loading:false })
				opt.loading && $fn.loading(false)
				opt.onEnd?.()
				_this?.onLoading?.(_this.loading)
				opt?.onLoading?.(false)
			},
			onMsg	: opt.onMsg && ( data => opt?.onMsg?.(data) ),
			noError	: opt.noError,
			onError	: ()=>{ opt?.onError?.(); opt.loading && $fn.loading(false) },
			token	: opt.token,
			download: opt.download,
			pass	: opt.pass,				// 登录失败时，是否继续异步
			empty 	: opt.empty				// 是否允许空参数
		}).then(data =>{
			let result = data?.rows ? data.rows : data
			if($fn.isFunction(opt.onSuccess)){ result = opt.onSuccess(result) }
			if(!opt.paging){
				if(opt.setName){ 
					if( $fn.hasArray(result) ){
						result = result.map( (v,i) => ({ ...v, ...opt.setName(v, i) }) )
					}else{
						result = { ...result, ...opt.setName(result) }
					}
				} 		// 自定义数据字段
				setData(_this,{ [opt.dataName]: result })
				resolve(result)
			}else{
				resolve(data)
			}
		})
	})
}
/**
 * 分页获取数据
 *
 * */
const paging = (_this,api,option)=>{
	const opt = {
		param		: { },					// 参数
		loading		: false,				// 如果有加载效果
		loadingName	: 'pagingLoading',
		dataName	: 'data',
		paging		: true,
		...option
	}
	if( !api ) { Promise.reject(); return $fn.toast('接口未传递正确') }
	const {dataName = 'data', pageSizeName='size', pageNumName='page', totalItemsName='total_items', totalPagesName='total_pages', pageSize = 10  } = $config?.paging || {}
	
	const optParam = $fn.getResult(opt.param)
	const optQuery = $fn.getResult(opt.query)
	let model = optParam
	if( opt.resetEmpty ) opt.resetSearch = true
	if(_this){
		const thisModel = $fn.getResult(_this.model)
		const thisQuery = $fn.getResult(_this.query)
		_this.model = opt.resetSearch ? {} : { ...thisModel, ...optParam }
		_this.query = opt.resetSearch ? {} : { ...thisQuery, ...optQuery }
		model = _this?.model
	}
	let param = model

	if(opt.resetEmpty) {
		opt.loading && $fn.loading(false)
		_this?.onLoading?.(_this.loading)
		setData(_this,{
			[opt.dataName]: [],
			[opt.loadingName]:false,
			loading:false
		})
		opt.onEnd?.()
		opt?.onLoading?.(false)
		return Promise.resolve({ data:[] })
	}

	if(opt.paging !== 0 && opt.paging !== false){
		const { page, size } = param ??  {}

		param = {
			page : page || 1, 		// 当前页
			size : size || pageSize,		// 每页显示多少条数据
			..._this?.query,
			...model
		}

		// param[ pageNumName ] = param.page
		// param[ pageSizeName ] = param.size
		// if( pageNumName !== 'page' ){ delete param.page }
		// if( pageSizeName !== 'size' ){ delete param.size }
	}else{
		param = {..._this?.query, ...model}
	}
	
	return new Promise((resolve)=>{
		pull(_this,api,{
			onStart		: ()=>{ opt?.onStart?.() },
			onEnd		: ()=>{ opt?.onEnd?.() },
			onError		: ()=>{
				opt?.onError?.()
				setData(_this,{ [opt.dataName]: [] })
			},
			loading		: opt.loading,
			loadingName : opt.loadingName,
			setParam 	: opt.setParam,
			paging 		: true,
			param,
			id			: opt.id,
		}).then( result =>{
			if(opt.paging !== 0 && opt.paging !== false){
				let data = result?.[ dataName ] || result?.rows
				if(!Array.isArray(data)) data = []
				if(opt.setName){ data = data.map( (v,i) => ({ ...v, ...opt.setName(v, i) }) ) } 		// 自定义数据字段
				const page = +result[ pageNumName ]        // 当前页码
				const size = +result[ pageSizeName ]       // 每页多少条数据
				const pages = +result[ totalPagesName ]    // 总共多少条数据
				const total = +result[ totalItemsName ]    // 总共多少页
				const pager = { page , size,  total, pages, data, result, param }
				setData(_this,{
					pager,
					[opt.dataName]: $fn.hasArray(data) ? [...data] : [],
				})
				resolve({ data, pager, result })
			}else{
				let data = Array.isArray(result) ? result : (result?.[ dataName ] || result?.rows || [])
				if(opt.setName){ data = data.map( (v,i) => ({ ...v, ...opt.setName(v, i) }) ) } 		// 自定义数据字段
				// setData(_this,{ [opt.dataName]: $fn.hasArray(result) ? [...result] : [] })
				setData(_this,{ [opt.dataName]: data })
				resolve({ data:result })
			}
		})
	})
}
/**
 * 暴露方法
 *
 * */
const Index = { post, del, put, upload, download, pull, paging, patch, stop, serializeParam }
export default Index