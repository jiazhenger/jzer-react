import React from 'react'
// ===================================================================== 添加内部样式
const Index = ({ value, color }) => (
	<>
		{
			window.$fn.isNotEmpty(value) ? value : <span className='g9' style={{color}}>--</span>
		}
	</>
)
export default Index