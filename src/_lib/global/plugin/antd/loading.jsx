import React from 'react'
/* -------------------------------------------------------- antd -- */
import { Spin } from 'antd'
/* -------------------------------------------------------- 加载效果 -- */
const Index = ({ loading, size, tip, style })=>  loading ? (
	<div className='abs_full fxmc' style={{background:'rgba(255,255,255,.5)', zIndex:10, ...style}}>
		<Spin size={size || 'large'} tip={tip} />
	</div>
) : null
export default Index