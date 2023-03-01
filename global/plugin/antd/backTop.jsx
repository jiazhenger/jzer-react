import React from 'react'
/* -------------------------------------------------------- antd -- */
import { BackTop } from 'antd'
/* -------------------------------------------------------- 回到顶部 -- */
const Index = ({ className, title, children, size, id='#pageScroll' })=> {
	const [ show, setShow ] = React.useState(false)
	
	React.useEffect(()=>{
		setTimeout(() => setShow(true),500)
	},[])
	
	return show  ?  (
						<BackTop target={ ()=> document.querySelector(id) }>
							<div className='fxmc bcm cf ar r5px' style={{width:'40px',height:'40px', boxShadow:'0 0 5px #999'}}>Top</div>
						</BackTop>
					) : null
}

export default _