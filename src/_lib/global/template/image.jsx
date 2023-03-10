import React from 'react'
/* -------------------------------------------------------- Image -- */
import DefImage from './svg/def-img.jsx'
/* -------------------------------------------------------- Declare -- */
const { $ } = window
/* -------------------------------------------------------- 自定义图片组件 -- */ 
const Index = ({
	className,						/** @param {String}			# 盒子 className */
	style, 							/** @param {String}			# 盒子 style */
	src, 							/** @param {String}			# src */
	width = '100%', 				/** @param {String, Number}	# 宽 */
	height, 						/** @param {String, Number}	# 高 */
	size,							/** @param {String, Number}	# 高宽 */
	alt, 							/** @param {String, Number}	# alt */
	round,							/** @param {String, Boolan}	# 圆角 */
	onClick							/** @param {Event}  }		# 点击事件 */
}) => {
	const imgSizeStyle = size ? { width:size, height:size } : { width, height }
	const imgStyle = { maxWidith:'100%', ...imgSizeStyle, ...style}
	
	let img = <img draggable={false} onClick={onClick} className={`${$.css(className)} ${$.css(round,'r100px')}`} style={imgStyle} src={src} alt={alt}/>
	
	return src ? img : <div className='fxmc'><DefImage size={size} /></div>
}

export default Index