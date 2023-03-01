import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { CacheSwitch, CacheRoute } from 'react-cache-router'
/* -------------------------------------------------------- Function -- */
import { getRedirect, getRootUrl, existHttp } from './utils'

/* -------------------------------------------------------- Sync Component -- */
import Lazy from '@com/react/lazy/lazy-router'
/* -------------------------------------------------------- Declare -- */
const { $fn } = window
/**
 * 模块子路由配置
 * @param {Array} data		# 菜单数据
 * @param {String} rootPath	# 根目录，如： /main
 * @param {String} redirect	# 重定向的路径
 * @data { path:'css/style', component:'', children:{ path:'css/style/font', component:'' } }
 * @return {Component} 路由组件
 */
const DeepRouter = ({ data, rootPath, mainPath='/main', hasFolder, redirect }) => {
	// 重定向
	if( !redirect ){
		redirect = getRedirect(data)
	}
	if( !$fn.hasArray(data) ){ return null }
	
	const deep = ({ data, url, isChild}) => {
		const SwitchComponent = isChild ? CacheSwitch : Switch
		return $fn.hasArray(data) && (
			<SwitchComponent>
				{
					data.map(({ children, path, child, component, cache, exact },i)=>{
						if(url){
							url = url && url.indexOf('/') !== -1 ? url : '/' + url
							path = `${url}/${path}`
						}
						let props = { key: path, path }
						if($fn.hasArray(children)){
							props = {
								...props,
								render : ({ match }) => deep({ data:children, url:url ? match.url : null })
							}
						}else{
							if($fn.hasArray(child)){
								props = {
									key:path,
									path,
									render : ({ match }) => deep({ data:child, url:url ? match.url : null, isChild:true, exact })
								}
							}else{
								if( existHttp(path) ){
									props = null
								}else{
									if( $fn.isNotEmpty(component) ){
										component = component.replace(/^\//g, '')
									}else{
										component = path
										if( hasFolder === false && rootPath.includes(mainPath) ){
											const rootUrl = getRootUrl(component)
											component = component.replace(new RegExp(`^${rootUrl}/`,'g'), '')
										}else{
											component = component ? component.replace(/^\//g, '') : null
										}
									}
									// props = component ? { ...props, component: Lazy( component ), exact: exact ?? true  } : null
									props = component ? { ...props, component: Lazy( component ) } : null
								}
							}
						}
						return props ?  (cache ? <CacheRoute key={path} {...props}/> : <Route key={path} {...props} />) : null
					})
				}
				{/* 重定向 */}
				{ (redirect && !isChild) && <Route path={rootPath} children={<Redirect to={redirect} />} /> }
				{/* 404 */}
				<Route component={ Lazy('404') } />
			</SwitchComponent>
		)
	}
	
	return deep({ data })
}

const Index = data =>  DeepRouter(data)

export default Index