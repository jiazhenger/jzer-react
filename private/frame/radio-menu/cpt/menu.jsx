import React from 'react'
import { useHistory } from 'react-router-dom'
/* -------------------------------------------------------- Function -- */
import { existHttp } from '#frame/utils'
/* -------------------------------------------------------- Declare -- */
const { $fn } = window
/**
 * 递归菜单
 * @param {Array} 		data 		# 菜单数据
 * @param {String} 		className	# 菜单 className
 * @param {Event} 		onOpen 		# 点击父级菜单时触发
 * @param {Event} 		onChange 	# 子级菜单切换时触发
 * @param {Event} 		onClick 	# 点击子级菜单时触发
 * @return {Component} 
 */
const Menu = ({ data, index=0, paddingLeft=20, className, onOpen, onChange, onClick }) => {
	const paddingStyle = index > 0 ? {paddingLeft: paddingLeft * index} : null
	return (
		<menu className={className}>
			{
				$fn.hasArray(data) ? data.map(({ title, children, path, checked },i) => {
					if($fn.hasArray(children)){
						return (
							<label key={i}>
								<input type='checkbox' className='abs_lt vh' value={path} defaultChecked={checked} />
								<h3 className='fxmj rel b tap' style={paddingStyle} onClick={onOpen}>
									<span className='ex'>{title}</span>
									<i className='menu-arrow ease'></i>
								</h3>
								<Menu data={children} index={index+1} key={i} onChange={onChange} className='parent' path={path}/>
							</label>
						)
					}else{
						return (
							<label className='child' key={i} id={checked?'active':''} onClick={ onClick }>
								<input type='radio' className='abs_lt vh' name='child' value={ path } onChange={onChange} defaultChecked={checked}/>
								<span className='db ease' style={paddingStyle}>{title}</span>
							</label>
						)
					}
				}) : <div className='ptb30 tc g9 f12'>无菜单数据</div>
			}
		</menu>
	)
}
/**
 * 菜单组件
 * @param {Array} 		data 		# 菜单数据
 * @param {Boolean} 	easy 		# 是否是简单菜单
 * @param {Boolean} 	openAll 	# 是否展开全部菜单
 * @return {Component} 菜单组件
 */
const Index = ({ data = [] }) => {
	const history = useHistory( )
	
	const onChange = e =>{
		const { value } = e.target
		if( existHttp( value ) ){
			window.open( value )
		}else{
			history.push(value)
		}
	}
	
	return <Menu className='jzer-menu' key={data?.[0]?.path} data={data} onChange={onChange}/>
}

export default Index