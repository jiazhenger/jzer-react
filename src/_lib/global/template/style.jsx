import React from 'react'
import Teleport from '@cpt/teleport-17.jsx'
// ===================================================================== 添加内部样式
const _ = ({ children, name }) => (
	<Teleport name={ name || 'ub-style'} el='head' tag='style'>
		{ children }
	</Teleport>
)

export default _