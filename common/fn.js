import DataType from './core/data-type'
import Storage from './core/storage'
import Query from './core/query'
import Rest from './core/rest'
import Inner from './core/inner'
import Router from './core/router'
import FormSeach from './core/form-search'
import FormSubmit from './core/form-submit'
import ProjectFn from '$project/fn'
import Lazy 	from './react/lazy'
const msg 		= Lazy.file(()=>import('@antd/message'))
const confirm 	= Lazy.file(()=>import('@antd/confirm'))
/* ====================================== 全局变量及方法  ====================================== */
const Index = {
	...DataType,
	...Storage,
	...Query,
	...Rest,
	...Inner,
	...Router,
	...FormSeach,
	...FormSubmit,
	...ProjectFn,
	msg: {
		success: (v,d) => msg.then( f => f.success(v,d)),
		warning: (v,d) => msg.then( f => f.warning(v,d)),
		error: (v,d) => msg.then( f => f.error(v,d))
	},
	confirm: v => confirm.then( f => f(v))
}

export default Index