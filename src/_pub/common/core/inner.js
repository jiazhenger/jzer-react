/* ======================================  内部特有方法  ====================================== */
const Index = {
	// ======================================================================== dom
	loading(bool,msg){
		let loading = document.querySelector('#jzer-loading');
		if(loading){
			if(bool){
				loading.querySelector('.jzer-loading-msg').innerHTML = msg || '数据加载中'
				loading.style.display = 'block'
			}else{
				loading.style.display = 'none'
			}
		}
	},
	async toast(msg, callback, delay){
		delay = delay || 1500
		const toast = document.querySelector('#jzer-toast')
		if(toast){
			toast.style.display = 'block'
			const $msg = toast.querySelector('.jzer-toast-msg')
			
			$msg.innerHTML = msg
			
			if( typeof callback === 'function' ){
				const { width, align } = callback() ?? {}
				if( width ){ $msg.style.width = width + 'px' }
				if( align ){ $msg.style.textAlign = align }
			}
			
			if(delay !== 0){
				clearTimeout(window.toastClear)
				window.toastClear = setTimeout(()=>{ toast.style.display = 'none' }, delay)
			}
		}
	},
	// ========================================================================  绑定值
	val(v){return this.isNotEmpty(v) ? v : '--'},
	nan(v){return !isNaN(v) ? v : '--'},
	// ========================================================================  惰性加载文件
	async lazy(file){ return file().then( f => f.default ) },
	// 对象可为直接对象，或函数返回值
	getResult(name,param){ return typeof name === 'function' ? name(param) : name },
	// 获取编辑时的参数
	getEditParam(id, idStr, param){ return id ? { [idStr]:id, ...param } : param	}
}

export default Index