// 登录成功后执行
export const loginSuccess = async ( {history, to, data} ) => {
	const { $fn, $ } = window
	$fn.local('user', data)
	$fn.msg.success('登录成功')
	const skip = $fn.getSkipRecord()
	await $.getMenu(true)
	history.replace(skip ? skip : to)
}
// 登录
export const login = ({ api, history, setAjax, param, to='/index', onSuccess}) =>{
	const { $http } = window
	$http.post(setAjax, api, { param, token:false, loadingText:'登录中' }).then( async data=>{
		await loginSuccess( { history, to, data } )
		onSuccess?.()
	})
}