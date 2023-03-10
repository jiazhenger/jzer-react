import React from 'react'
/* -------------------------------------------------------- antd -- */
import { Tabs } from 'antd'
const { TabPane } = Tabs
/* -------------------------------------------------------- Declare -- */
const { $fn, $config, $lazy, $ } = window
/* -------------------------------------------------------- Async Component -- */
const Controls = $lazy.load(()=>import('#cpt/temp/Controls.jsx'))
const Scroll 	= $lazy.load(()=>import('@tp/scroll.jsx'))
/* -------------------------------------------------------- 菜单 -- */
const Index = ({
	className, 				/** @param {String}			# 盒子 className */
	children,				/** @param {Coponent}		# Slot */
	out,					/** @param {Number}			# 在外部设置 value 值 */
	flex=1,					/** @param {Boolean}		# 是否弹性 */
	// data
	data, 					/** @param {Array}		 	# 数据 */
	idStr=$config.idStr,	/** @param {String}			# 提交字段名 */
	nameStr=$config.nameStr,/** @param {String}			# 显示字段名 */
	// 自定义
	gap=0, 					/** @param {Number}			# 间隙 */
	destroy,				/** @param {Boolean}		# 被隐藏时是否销毁 DOM 结构 */
	value=1,				/** @param {String}				# 当前显示项 */
	suffix, 				/** @param {String}			# 前缀 */
	keys=[],				/** @param {Array}			# keys */
	onChange,				/** @param {Event}			# 点击时执行 */
	//
	antd = {},				/** @param {Object}			# antd */
	// controls
	controls, 				/** @param {Number}			# 按钮配置 */
}) => {
	
	const [ key, setKey ] = React.useState( String(value) )
	const [ component, setComponent ] = React.useState( suffix )
	
	React.useEffect(() => {
		if(controls){
			const index = data.findIndex( v => v[idStr] === key)
			let ctrl = $fn.getResult( controls, { value:key, index, row: data[index], keys } )
			setComponent(<Controls
						key		= { key }
						size 	= { ctrl.size ?? 'small' }
						align 	= { ctrl.align }
						data	= { ctrl.data }
						className = 'mr10'
					/>)
		}
	}, [ key, keys ]) // eslint-disable-line
	
	React.useEffect(()=> { if( !out ) { setKey( String(value) ) } }, [ value ]) // eslint-disable-line
	
	antd = {
		className: `jzer-tabs ${$.css(flex,'ex')} ${$.css(className)}`,
		tabBarGutter: gap,
		activeKey: out ? String(value) : key,
		tabBarExtraContent:component,
		tabBarStyle:{padding:0, margin:0},
		destroyInactiveTabPane: destroy,
		onChange: value => {
			if(!out){ setKey(value) }
			if(onChange){
				const index = data.findIndex( v => v[idStr] === String(value))
				const row = data[index]
				const label = row[nameStr]
				onChange?.({ value, index, row, label })
			}
		},
		...antd
	}
	return (
		<Tabs {...antd}>
			{ children }
			{
				$fn.hasArray( data) && data.map( (v,i) => {
					let key = i
					let tab = v
					if($fn.hasObject( v )){
						const value = v[idStr] 
						if( value ){ key = value }
						tab = v[nameStr]
					}
					return (
						<TabPane key={key} tab={tab} {...v}>
							{
								v?.scroll ? (
									<Scroll scroll='oys'>
										{v?.slot}
									</Scroll>
								) : v?.slot
							}
						</TabPane>
					)
				})
			}
		</Tabs>
	)
}
export default Index