import React from 'react'
/* -------------------------------------------------------- antd -- */
import { Button } from 'antd'
import { RedoOutlined, DownloadOutlined, UploadOutlined, SearchOutlined, PlusOutlined, EditOutlined, DeleteOutlined, ClearOutlined, SettingOutlined, RollbackOutlined, FileSyncOutlined, UserAddOutlined } from '@ant-design/icons'
/* -------------------------------------------------------- Declare -- */
const { $config, $fn, $ } = window
const noEvent = { className: 'no-event' }
const icons = {
	download : <DownloadOutlined {...noEvent}/>,
	search : <SearchOutlined {...noEvent}/>,
	del : <DeleteOutlined {...noEvent}/>,
	delPop : <DeleteOutlined {...noEvent}/>,
	clear : <ClearOutlined {...noEvent}/>,
	add : <PlusOutlined {...noEvent}/>,
	back : <RollbackOutlined {...noEvent}/>,
	mod : <EditOutlined {...noEvent}/>,
	reset : <FileSyncOutlined {...noEvent}/>,
	upload : <UploadOutlined {...noEvent}/>,
	set : <SettingOutlined {...noEvent}/>,
	user : <UserAddOutlined {...noEvent}/>,
	refresh : <RedoOutlined {...noEvent}/>
}
/* -------------------------------------------------------- 按钮 -- */
const Index = ({
	className, 			/** @param {String}				# 盒子 className */
	style, 				/** @param {Object}				# 盒子 style */
	children, 			/** @param {Compoennt}		 	# Slot */
	label,				/** @param {String}				# 标题 */	
	code,				/** @param {String}				# 监听键盘按键，如：Enter, F5 */
	stop=true,			/** @param {Boolean}			# 是否阻止冒泡 */
	width,				/** @param {String}				# 最小宽度 */
	mode,				/** @param {String}				# 按钮模式 */
	onClick,			/** @param {Event}				# 点击事件 */
	// 图片图标
	imgIcon,			/** @param {Component,String}	# 图片图标*/
	imgIconWidth=15,	/** @param {Component,String}	# 图片图标宽度*/
	imgIconStyle,		/** @param {Component,String}	# 图片图标样式*/
	// 字体图标
	ico,				/** @param {Component,String}	# 字体图标*/
	icoStyle,			/** @param {Component,String}	# 字体图标样式*/
	icoClass,			/** @param {Component,String}	# 字体图标 class*/
	//
	disabled,			/** @param {Boolean}			# 禁用 */
	loading,			/** @param {Boolean, { delay: number }}	# 加载 */
	ghost,				/** @param {Boolean,Nummber}	# 幽灵按钮 */
	block,				/** @param {Boolean}			# 自动父宽 */
	danger,				/** @param {Boolean}			# 危险按钮 */
	shape,				/** @param {String}				# 按钮形状 */
	type='primary',		/** @param {String}				# 按钮类型 */
	size='small',		/** @param {String, Number}		# 按钮尺寸 */
	icon,				/** @param {Component,String}	# 图标按钮 */
	hidden,				/** @param {Boolean}			# 按钮隐藏 */
	
	antd = {},			/** @param {Object}				# antd */
}) => {
	icon = icons[mode] ?? icon
	if( ico ){ icon = <i className={`${ico} ${ $.css(icoClass) }`} style={icoClass}></i> }
	else if( imgIcon ){ icon = <img src={imgIcon} alt='' style={{width:imgIconWidth, ...imgIconStyle}} /> }
	ghost = ['default','link', 'text'].includes(type) ? null : ghost
	antd = { className, type, ghost, disabled, loading, block, danger, shape, icon, ...antd  }
	delete antd.click
	// 设置样式
	const sizeStyle = $fn.isNumber(size) ? {height:size} : $config.antd.btnSize[size]
	const linkStyle = antd.type === 'link' ? { lineHeight: ($fn.isNumber(size) ? size : $config.antd.btnSize[size].height) + 'px' } : null
	let padding = '0 8px'
	if( size === 'mini' ){  padding = '0 4px' }
	const minStyle = width ? { minWidth:width } : null
	style = { padding, lineHeight:'100%', ...sizeStyle, ...minStyle, ...linkStyle, ...style }
	// 按钮监听
	React.useEffect(() => {
		if( code ){
			const onEnter = e => {
				if(e.code === code || ( code==='Enter' && e.code === 'NumpadEnter')){
					onClick?.()
					
					e.preventDefault()
				}
			}
			window.addEventListener('keydown',onEnter)
			return () => {
				if(code){
					window.removeEventListener('keydown',onEnter)
				}
			}
		}
	}, [ code, onClick ])
	
	// 重写 onClick
	const _onClick = e => {
		onClick?.()
		if(stop){
			e.stopPropagation()
		}
	}
	
	return (
		<Button hidden={hidden} onClick={_onClick} style={style} {...antd}>
			{ label }
			{ children }
			{
				code && <span className='ml5'>{code}</span>
			}
		</Button>
	)
}
export default Index