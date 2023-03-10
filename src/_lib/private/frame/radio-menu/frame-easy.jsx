import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
/* -------------------------------------------------------- antd -- */
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
/* -------------------------------------------------------- Function -- */
import { getRootPath, getChildren } from '#frame/utils'
import getRouter from '#frame/radio-menu/utils/getRouter'
/* -------------------------------------------------------- Sync Component -- */
import Menu from '#frame/radio-menu/cpt/menu.jsx'
import UserControl from '#frame/cpt/user-control.jsx'
/* -------------------------------------------------------- Declare -- */
const { $lazy, $ } = window
/* -------------------------------------------------------- Async Component -- */
const Scroll 	= $lazy.load(()=>import('@tp/scroll.jsx'))
const Router 	= $lazy.load(()=>import('#frame/router.jsx'))
/* -------------------------------------------------------- Config -- */
const width = 200
const space = 1
/**
 * 只有左侧菜单的后台模板框架
 * @param {Boolean} openAll 		# 是否展开全部，默认不展开
 */
const Index = ({ openAll }) => {
	const [ data, setData ] = useState([])
	const [ show, setShow ] = useState()
	const [ key, setKey ] = useState(0)
	const [ rootPath ] = useState(getRootPath())
	const history = useHistory( )
	
	useEffect(()=>{
		// if(!$fn.getToken()){ return history.push('/login') }
		$.getMenu().then( data => setData( getRouter(getChildren(data, rootPath), rootPath, openAll) ) )
	},[ history, rootPath, openAll ])
	
	useEffect(()=>{
		setTimeout(()=>{
			const $active = document.querySelector('#active')
			if($active){
				document.querySelector('#scroll').scrollTop = $active.offsetTop
			}
		},300)
		window.refreshRouter = () => setKey(key => key + 1)
	}, [])
	
	return (
		<section className='fix_full fv'>
			{/* Header */}
			<header className='h50 bcf fx'>
				<div style={{width, fontSize:26}} className='h fxmc cp tap c0' onClick={()=> history.replace('/index') }>logo</div>
				<span className='cp c0 f18 tap h fxmc' style={{width:50}} onClick={()=>setShow(value => !value)}>
					{ show ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />  }
				</span>
				<UserControl api='user/logout'/>
			</header>
			<div className='ex fx' style={{marginTop:space}}>
				{/* 菜单 */}
				<div className='h rel bcf' style={{width}} hidden={show}>
					<Scroll id='scroll' scroll='oys'>
						<Menu data={data}/>
					</Scroll>
				</div>
				{/* 路由 */}
				<div className='ex rel' style={{margin:5}}>
					<Router data={data} rootPath={rootPath} hasFolder={false} key={key}/>
				</div>
			</div>
		</section>
	)
}

export default Index