import React from 'react'
import { useHistory } from 'react-router-dom'
/* -------------------------------------------------------- Sync Function -- */
import Logout from '@com/login/logout'
import ClearCache from '@com/login/clearCache'
/**
 * 用户操作控制组件
 * @return {Component} 
 */
const Index = ({ api='logout' }) => {
	const history = useHistory( )
	
	const onLogout = ()=> Logout({ api, history })
	
	const onClear = () => ClearCache()
	
	return (
		<div className='ex pr20 f12 fxmr'>
			<span className='cp g6 hover tap db plr10' onClick={onLogout}>退出登录</span>
			<span className='cp g6 hover tap db plr10' onClick={onClear}>清除缓存</span>
		</div>
	)
}
export default Index