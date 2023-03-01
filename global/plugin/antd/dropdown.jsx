import React from 'react'
/* -------------------------------------------------------- antd -- */
import { Dropdown, Button, Menu } from 'antd'
import { CaretDownOutlined } from '@ant-design/icons'
/* -------------------------------------------------------- Declare -- */
const { $config, $fn, $ } = window
/* -------------------------------------------------------- 下拉按钮 -- */
const Index = ({
	children, 		/** @param {Compoennt}			# Slot */
	data, 			/** @param {Array}				# 数据 */
	label,			/** @param {String}				# 标题 */
	width,			/** @param {String}				# 最小宽度 */
	// button
	disabled,		/** @param {Boolean}			# 禁用 */
	loading,		/** @param {Boolean}			# 加载 */
	ghost,			/** @param {Boolean,Nummber}	# 幽灵按钮 */
	type='primary',	/** @param {String}				# 按钮类型 */
	size='small',	/** @param {String, Number}		# 按钮尺寸 */
	// 图片图标
	imgIconWidth=15,	/** @param {Component,String}	# 图片图标宽度*/
	imgIconStyle,		/** @param {Component,String}	# 图片图标样式*/
	
	style, 			/** @param {Object}				# 按钮 style */
	button,			/** @param {Object}				# Button 组件 */
	//
	onSelect,		/** @param {Event}				# 选中菜单时执行 */
	onClick,		/** @param {Event}				# 点击菜单时执行 */
	event='click',
	antd			/** @param {Object}				#  */
}) => {
	const [ visible, setVisible ] = React.useState()
	antd = { arrow:true, placement:'bottom', trigger:[event], ...antd }
	// button
	const sizeStyle = $fn.isNumber(size) ? {height:size} : $config.antd.btnSize[size]
	const btnStyle = { minWidth:width, padding:'0 8px', lineHeight:'100%', ...sizeStyle, ...style }
	button = { type, ghost, disabled, loading, size, ...button  }
	
	const _onClick = v => {
		const bool = v?.click?.(v)
		if( bool !== true || bool !== 1){
			setVisible(false)
		}
	}
	
	const menu = (
		<Menu onSelect={onSelect} >
			{
				$fn.hasArray(data) && data.map((v,i)=> {
					let icon = v.icon
					if(v.ico){ icon = <i className={`mr5 ${$.css(v.ico)}`}></i> }
					else if(v.imgIcon){ icon = <img src={v.imgIcon} alt='' style={{marginRight:5, width:v.imgIconWidth ?? imgIconWidth, ...imgIconStyle, ...v?.imgIconStyle}} /> }
					return (
						<Menu.Item key={i} onClick={_onClick?.bind(null, v)}>
							<div className='fxm'>
								{ icon } {v.label}
							</div>
						</Menu.Item>
					)
				} )
			}
		</Menu>
	)
	return (
		<Dropdown open={visible} onOpenChange={ v => setVisible(v) } menu={menu} {...antd}>
			{
				children ? children : (
					<Button {...button} style={{...btnStyle, ...button.style}} className='fxm'>
						{ label } <span className={`ease rel ${visible?'rotate-up':''}`} style={{left:2}}><CaretDownOutlined/></span>
					</Button>
				)
			}
		</Dropdown>
	)
}
export default Index