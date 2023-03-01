import React, { useState, useImperativeHandle, useRef } from 'react'
/* -------------------------------------------------------- antd -- */
import { Image } from 'antd'
/* -------------------------------------------------------- Declare -- */
const { $fn, $lazy, $ } = window
/* -------------------------------------------------------- Async Component -- */
const Modal = $lazy.hook(()=>import('@antd/modal'))
const Img = $lazy.load(()=>import('@antd/image'))
/* --------------------------------------------------------  预览图片配置 -- */
const Index = ( props, ref ) => {
	const [ config, setConfig] = useState(props)
	
	const {
		modal, 						/** @param {Object}				# 弹窗其它配置 */
		image, 						/** @param {Object}				# 图片其它配置 */
		// 弹窗
		title = '图片预览', 			/** @param {String}				# 标题 */
		width = '50%', 				/** @param {Number, String}		# 弹窗宽度 */
		srcStr = 'imgUrl',			/** @param {String}				# 图片地址 */
		// 图片
		src,						/** @param {Object}				# 图片地址 */
		data = []					/** @param {Array}				# 多个图片 */
	} = config
	
	const modalRef = useRef()
	
	const open = value => {
		const config = value ?? props
		$.ref(modalRef).open()
		if( value ){
			setConfig(config)
		}
	}
	
	// Expose
	useImperativeHandle( ref, () => ({
		open
	}))
	
	return (
		<Modal 
			ref			= { modalRef } 
			title		= { title }
			width		= { width }
			controls	= { false }
			{ ...modal }
		>
			{
				$fn.hasArray(data) ? (
					<Image.PreviewGroup>
						{
							data.map((v,i)=><Img key={i} bordered={false} auto src={v[srcStr]} {...image}/>)
						}
					</Image.PreviewGroup>
				) : <Img src={src} {...image}/>
			}
		</Modal>
	)
}
export default Index