import React from 'react'
/* -------------------------------------------------------- Sync component -- */
import ResizeableTitle from './cpt/ResizeableTitle'
/* -------------------------------------------------------- Declare -- */
const { $lazy, $ } = window
/* -------------------------------------------------------- Async Component -- */
const Table = $lazy.hook(()=>import('@antd/table'))
/* -------------------------------------------------------- 拖动标题宽度 -- */
const Index = (props, ref) => {
	const { components, cols, resize } = props
	const [ col, setCol ] = React.useState(cols)
	const [ component, setComponent ] = React.useState()
	const tableRef = React.useRef()
	
	const handleResize = index => (e, { size }) => {
		setCol( col => {
			const nextColumns = [...col];
			nextColumns[index] = { ...nextColumns[index], width: size.width }
			return nextColumns
		})
	}
	
	React.useEffect(()=>{
		if(resize !== false && resize !== 0){
			setComponent({ header : { cell: ResizeableTitle }, ...components  })
			setCol( col => col.map((col, index) => ({
				...col,
				onHeaderCell: column => {
					const { width, resize } = column
					return resize !== false || resize !== 0  ? {
						width,
						onResize: handleResize(index)
						// style: { cursor: 'move' },
					} : null
				}
			})))
		}
	},[]) // eslint-disable-line
	
	React.useImperativeHandle( ref, () => ({
		ref: () => $.ref(tableRef)
	}))
	
	return (
		<Table 
			ref 		={ tableRef } 
			components	={ component }
			{ ...props }
			cols		= { col }
		/>
	)
}
export default Index