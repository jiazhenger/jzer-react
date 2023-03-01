import React from 'react'
/* -------------------------------------------------------- drag -- */
mport { DndProvider, useDrag, useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import update from 'immutability-helper'
/* -------------------------------------------------------- Component -- */
const type = 'DragableUploadList'
const DragableUploadListItem = ({ originNode, moveRow, file, fileList }) => {
	const ref = React.useRef();
	const index = fileList.indexOf(file);
	const [{ isOver, dropClassName }, drop] = useDrop({
		accept: type,
		collect: monitor => {
			const { index: dragIndex } = monitor.getItem() || {}
			if (dragIndex === index) { return {} }
			return {
				isOver: monitor.isOver(),
				dropClassName: dragIndex < index ? ' drop-over-downward' : ' drop-over-upward',
			}
		},
		drop: item => { moveRow(item.index, index) }
	})
	const [, drag] = useDrag({
		type,
		item: { index },
		collect: monitor => ({
			isDragging: monitor.isDragging()
		})
	})
	drop(drag(ref))
	return (
		<div
			ref={ref}
			className={`ant-upload-draggable-list-item ${isOver ? dropClassName : ''}`}
			style={{ cursor: 'move' }}
		>{originNode}</div>
	)
}
/* -------------------------------------------------------- 回到顶部 -- */
const Index = ({ children })=> {
	
	return <DndProvider backend={HTML5Backend}>{children}</DndProvider>
}

export default Index