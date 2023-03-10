import React from 'react'
/* -------------------------------------------------------- antd -- */
import { Result, Button } from 'antd'
/* -------------------------------------------------------- Declare -- */
const { $fn, $lazy } = window
/* -------------------------------------------------------- Async Component -- */
const Page = $lazy.load(()=>import('#tp/content/page-content.jsx'))
/* -------------------------------------------------------- Page Component -- */
const Index = ({ isComponent }) => (
	<Page className='bcf' scrollXY>
		<div className='fxmc wh' style={{minHeight:546}}>
			<Result
				status		= '404'
				title 		= '404'
				subTitle	= {<span className='f14'>哦呵, { isComponent ? '组件' : '页面' }未找到</span>}
				extra 		= {<Button onClick={()=>$fn.back()} size='large' type='primary' style={{width:'120px'}}>返回</Button>}
			/>
		</div>
	</Page>
)
export default Index