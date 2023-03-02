import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
/* -------------------------------------------------------- antd -- */
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
/* -------------------------------------------------------- Function -- */
import setComplexFirstRouter from '#frame/radio-menu/utils/setComplexFirstRouter'
import getRouter from '#frame/radio-menu/utils/getRouter'
import { getRootPath, getChildren, hasPath } from '#frame/utils'
/* -------------------------------------------------------- Sync Component -- */
import Menu from '#frame/radio-menu/cpt/menu'
import UserControl from '#frame/cpt/user-control'
/* -------------------------------------------------------- Declare -- */
const { $lazy, $, $fn } = window
/* -------------------------------------------------------- Async Component -- */
const Scroll 	= $lazy.load(()=>import('@tp/scroll'))
const Router 	= $lazy.load(()=>import('#frame/router'))
const MenuTop 	= $lazy.load(()=>import('#frame/cpt/menu-top'))
/* -------------------------------------------------------- Config -- */
const width = 200
const space = 1
/**
 * 有顶部菜单和左侧菜单的后台模板框架
 * @param {Boolean} openAll 		# 是否展开全部，默认不展开
 */
const Index = ({ openAll }) => {
	const [ data, setData ] = useState([])
	const [ menuData, setMenuData ] = useState([])
	const [ show, setShow ] = useState()
	const [ key, setKey ] = useState(0)
	const [ rootPath ] = useState(getRootPath())
	const history = useHistory( )
	useEffect(()=>{
		// if(!$fn.getToken()){ return history.push('/login') }
		$.getMenu().then( data => {
			data = getRouter(getChildren(data, rootPath), rootPath, openAll)
			setData(data, rootPath)
			// 设置默认显示左侧菜单, 以及当前选中项
			setMenuData(() => {
				const path = window.location.hash.replace('#','')
				let d = []
				if( rootPath !== path ){
				 	const arr = data.filter( v => hasPath(path, v.path))
				 	d = $fn.hasArray(arr) ? (arr[0].children ?? []) : []
				}else{
					d = $fn.hasArray(data) ? (data[0].children ?? []) : []
				}
				return d
			})
		} )
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
	
	const onMenuTopChange = data => setMenuData( setComplexFirstRouter( data, openAll ) )
	return (
		<section className='fix_full fv'>
			{/* Header */}
			<header className='h50 bcf fx'>
				<div style={{width, fontSize:26}} className='h fxmc cp tap c0' onClick={()=> history.replace('/index') }>logo</div>
				<span className='cp c0 f18 tap h fxmc' style={{width:50}} onClick={()=>setShow(value => !value)}>
					{ show ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />  }
				</span>
				<MenuTop data={ data } rootPath={rootPath} onClick={ data => onMenuTopChange(data) } />
				<UserControl api='user/logout'/>
			</header>
			<div className='ex fx' style={{marginTop:space}}>
				{/* 菜单 */}
				<div className='h rel bcf' style={{width}} hidden={show}>
					<Scroll id='scroll' scroll='oys'>
						<Menu data={menuData} openAll={openAll} />
					</Scroll>
				</div>
				{/* 路由 */}
				<div className='ex rel' style={{margin:5}}>
					<Router data={menuData} rootPath={rootPath} hasFolder={false} key={key}/>
				</div>
			</div>
		</section>
	)
}

export default Index