import React from 'react'
import { useHistory } from 'react-router-dom'
/* -------------------------------------------------------- antd -- */
import { HomeOutlined } from '@ant-design/icons'
/* -------------------------------------------------------- Function -- */
import { hasPath, getRedirect } from '#frame/utils'
/* -------------------------------------------------------- Declare -- */
const { $fn } = window
/**
 * 顶部菜单
 * @param {Array} 	data		# 菜单数据
 * @param {String}	rootPath	# 根目录，如： /main
 * @param {Event} 	onClick		# 点击菜单选项时触发
 * @return {Component} 菜单组件
 */
const Index = ({ data, onClick, rootPath }) => {
	const history = useHistory( )
	
	const [ current, setCurrent ] = React.useState('')
	
	React.useEffect(()=>{
		const path = window.location.hash.replace('#','')
		if( rootPath !== path ){
			setCurrent( path )
		}else{
			setCurrent( getRedirect(data)  )
		}
	},[ data, rootPath ])
	
	const onMenuClick = ({ path, children = [] })=>{
		setCurrent( path )
		if( $fn.hasArray(children) ){
			history.push( getRedirect(children) )
		}else{
			$fn.msg.warning('子级不存在')
		}
		onClick?.( children )
	}
	
	return (
		<nav className='ex h lh fx tc nav-top-list'>
			{
				$fn.hasArray(data) && data.map((v,i)=>(
					<li key={i} className={`fxmc h rel cp tap ${ hasPath(current,v.path) ? 'active' : '' }`} style={{ width: 80 }} onClick={onMenuClick.bind(null, v)}>
						<div>
							<div className='h24'><HomeOutlined /></div>
							<div className='f12'>{v.title}</div>
						</div>
						<div hidden={!hasPath(current,v.path)} className='abs_lb w fxc' style={{height:2}}>
							<i className='bcm db h' style={{width:'80%'}}></i>
						</div>
					</li>
				))
			}
		</nav>
	)
}
export default Index