/* ====================================== 异步加载组件的加载效果  ====================================== */
import React, { Suspense } from 'react'
import { Spin } from 'antd'
/* --------------------------- Component --------------------------- */
const Index = ({ children, size='small' }) => (
	<Suspense 
		fallback = {<Spin size={size} />} 
	>
		{ children }
	</Suspense>
)
export default Index