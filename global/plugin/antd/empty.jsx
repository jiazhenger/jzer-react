import React from 'react'
/* -------------------------------------------------------- antd -- */
import { Empty } from 'antd'
/* -------------------------------------------------------- 空 -- */
const Index = ({ data, text, image, loading, className, simple, style, loadingText='数据加载中', msg='暂无数据' }) => {
	image = simple ? Empty.PRESENTED_IMAGE_SIMPLE : Empty.PRESENTED_IMAGE_DEFAULT
	return (Array.isArray(data) && data.length === 0) ? (
		<div className={`fxmc abs_full pt30 jzer-empty ${className||''}`} style={style}>
			<Empty image={image} description={loading? loadingText + '...' : msg} style={{margin:0, color:'#999', fontSize:'12px'}} />
		</div>
	) : null
}
export default Index