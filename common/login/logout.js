// 退出登录
const Index = ({ api, history, msg='确认退出登录？', onSuccess}) =>{
	const { $fn, $http } = window
	$fn.confirm({
		msg,
		onOk: () => new Promise((resolve, reject) => {
			$http.post(null, api, { loadingText:'退出登录中', onError: reject }).then( data =>{
				resolve()
				$fn.msg.success('退出登录成功')
				$fn.localRemove('user')
				history.replace('/login')
				onSuccess?.(data)
			})
		})
	})
}

export default Index