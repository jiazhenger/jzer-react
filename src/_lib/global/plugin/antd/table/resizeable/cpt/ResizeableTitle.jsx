import React from 'react'
/* -------------------------------------------------------- Sync Component -- */
import { Resizable } from 'react-resizable'
/* -------------------------------------------------------- 拖动标题宽度 -- */
const Index = ({ onResize, width, ...restProps }) => {
	if (!width) { return <th {...restProps} /> }
	return (
		<Resizable width={width}  height={0} onResize={onResize} draggableOpts={{enableUserSelectHack: false}}
			handle={<span className='react-resizable-handle' onClick={e =>  e.stopPropagation()} />}
		>
			<th {...restProps} />
		</Resizable>
	)
}
export default Index